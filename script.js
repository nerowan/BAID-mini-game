// 初始资金
let funds = 1000000;

// 当前教练
let currentCoach = null;

// 球队球员列表
let teamPlayers = [
    { name: '和子鸣', position: 'RB', card: '铜卡', contract: 1, value: 50000, overall: 64, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 60, defense: 70, speed: 65, dribbling: 55, passing: 60 } },
    { name: '万昊轩', position: 'ST', card: '钻石卡', contract: 3, value: 500000, overall: 87, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 90, defense: 60, speed: 85, dribbling: 88, passing: 80 } },
    { name: '徐浩宸', position: 'CM', card: '金卡', contract: 2, value: 300000, overall: 80, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 75, speed: 78, dribbling: 82, passing: 85 } },
    { name: '李梓瑞', position: 'LB', card: '银卡', contract: 1, value: 150000, overall: 70, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 65, defense: 72, speed: 70, dribbling: 68, passing: 70 } },
    { name: '沈思桐', position: 'LB', card: '银卡', contract: 1, value: 150000, overall: 70, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 64, defense: 73, speed: 71, dribbling: 67, passing: 71 } },
    { name: '支嘉戈', position: 'CM', card: '银卡', contract: 2, value: 150000, overall: 71, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 68, defense: 75, speed: 69, dribbling: 65, passing: 74 } },
    { name: '张弛', position: 'CM', card: '金卡', contract: 2, value: 300000, overall: 78, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 78, defense: 74, speed: 76, dribbling: 80, passing: 83 } },
    { name: '淇露', position: 'ST', card: '铜卡', contract: 1, value: 50000, overall: 62, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 62, defense: 58, speed: 66, dribbling: 60, passing: 58 } },
    { name: '周衣萱', position: 'CB', card: '铜卡', contract: 1, value: 50000, overall: 60, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 55, defense: 70, speed: 60, dribbling: 57, passing: 59 } },
    { name: '江思宇', position: 'GK', card: '银卡', contract: 2, value: 150000, overall: 72, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 50, defense: 80, speed: 65, dribbling: 55, passing: 60 } },
    { name: '程湘婷', position: 'CB', card: '银卡', contract: 1, value: 150000, overall: 71, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 60, defense: 72, speed: 68, dribbling: 62, passing: 65 } },
];

// 转会市场球员列表
let transferPlayers = [
    { name: '张宸阳', position: 'CB', card: '铜卡', price: 50000, contract: 1, value: 50000, overall: 62, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 58, defense: 68, speed: 62, dribbling: 60, passing: 61 } },
    { name: '梅西', position: 'RW', card: '钻石卡', price: 1000000, contract: 3, value: 1000000, overall: 93, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 95, defense: 65, speed: 90, dribbling: 95, passing: 90 } },
    { name: 'C罗', position: 'LW', card: '钻石卡', price: 900000, contract: 3, value: 900000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 93, defense: 70, speed: 92, dribbling: 88, passing: 85 } },
    { name: '内马尔', position: 'LW', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 92, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 91, defense: 60, speed: 91, dribbling: 94, passing: 87 } },
    { name: '姆巴佩', position: 'ST', card: '钻石卡', price: 1100000, contract: 3, value: 1100000, overall: 94, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 93, defense: 65, speed: 96, dribbling: 92, passing: 88 } },
    { name: '哈兰德', position: 'ST', card: '钻石卡', price: 1050000, contract: 3, value: 1050000, overall: 93, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 94, defense: 70, speed: 93, dribbling: 89, passing: 85 } },
    { name: '德布劳内', position: 'CM', card: '钻石卡', price: 980000, contract: 3, value: 980000, overall: 92, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 90, defense: 75, speed: 85, dribbling: 88, passing: 95 } },
    { name: '孙兴慜', position: 'LW', card: '金卡', price: 600000, contract: 2, value: 600000, overall: 88, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 87, defense: 68, speed: 90, dribbling: 88, passing: 85 } },
    { name: '武磊', position: 'ST', card: '金卡', price: 400000, contract: 2, value: 400000, overall: 83, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 82, defense: 70, speed: 85, dribbling: 80, passing: 78 } },
    { name: '韦世豪', position: 'LW', card: '金卡', price: 350000, contract: 2, value: 350000, overall: 81, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 68, speed: 83, dribbling: 82, passing: 80 } },
    { name: '傅欢', position: 'LB', card: '银卡', price: 200000, contract: 1, value: 200000, overall: 75, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 70, defense: 75, speed: 75, dribbling: 70, passing: 72 } },
    // 新增15名球员
    { name: '埃里克森', position: 'CM', card: '金卡', price: 450000, contract: 2, value: 450000, overall: 85, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 85, defense: 70, speed: 75, dribbling: 80, passing: 90 } },
    { name: '博格巴', position: 'CM', card: '金卡', price: 500000, contract: 2, value: 500000, overall: 86, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 75, speed: 80, dribbling: 85, passing: 88 } },
    { name: '拉莫斯', position: 'CB', card: '金卡', price: 550000, contract: 2, value: 550000, overall: 88, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 75, defense: 90, speed: 75, dribbling: 70, passing: 80 } },
    { name: '范戴克', position: 'CB', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 92, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 70, defense: 95, speed: 80, dribbling: 75, passing: 85 } },
    { name: '阿诺德', position: 'RB', card: '金卡', price: 600000, contract: 2, value: 600000, overall: 89, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 78, defense: 85, speed: 85, dribbling: 80, passing: 90 } },
    { name: '罗伯逊', position: 'LB', card: '金卡', price: 580000, contract: 2, value: 580000, overall: 88, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 75, defense: 85, speed: 88, dribbling: 82, passing: 85 } },
    { name: '阿扎尔', position: 'LW', card: '钻石卡', price: 900000, contract: 3, value: 900000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 90, defense: 60, speed: 90, dribbling: 93, passing: 88 } },
    { name: '莱万多夫斯基', position: 'ST', card: '钻石卡', price: 1000000, contract: 3, value: 1000000, overall: 93, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 95, defense: 70, speed: 85, dribbling: 88, passing: 85 } },
    { name: '莫德里奇', position: 'CM', card: '金卡', price: 650000, contract: 2, value: 650000, overall: 89, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 75, speed: 80, dribbling: 90, passing: 92 } },
    { name: '卡塞米罗', position: 'CDM', card: '金卡', price: 600000, contract: 2, value: 600000, overall: 88, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 75, defense: 90, speed: 75, dribbling: 78, passing: 85 } },
    { name: '库尔图瓦', position: 'GK', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 92, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 50, defense: 95, speed: 70, dribbling: 65, passing: 80 } },
    { name: '诺伊尔', position: 'GK', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 92, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 50, defense: 95, speed: 70, dribbling: 65, passing: 80 } },
    { name: '马内', position: 'LW', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 90, defense: 70, speed: 94, dribbling: 90, passing: 85 } },
    { name: '萨拉赫', position: 'RW', card: '钻石卡', price: 950000, contract: 3, value: 950000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 90, defense: 70, speed: 94, dribbling: 90, passing: 85 } },
    { name: '格列兹曼', position: 'ST', card: '金卡', price: 700000, contract: 2, value: 700000, overall: 89, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 88, defense: 70, speed: 85, dribbling: 88, passing: 85 } },
    { name: '基米希', position: 'CDM', card: '金卡', price: 650000, contract: 2, value: 650000, overall: 89, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 88, speed: 80, dribbling: 85, passing: 90 } },
    { name: '坎特', position: 'CDM', card: '金卡', price: 700000, contract: 2, value: 700000, overall: 90, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 75, defense: 92, speed: 85, dribbling: 80, passing: 85 } },
];

// 新增每周精选卡包的球员
let weeklyFeaturedPlayers = [
    { name: '钟弘毅', position: 'FW', card: '状态火热卡', contract: 3, value: 800000, overall: 90, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 88, defense: 60, speed: 85, dribbling: 90, passing: 80 } },
    { name: '赵子轩', position: 'LW', card: '状态火热卡', contract: 3, value: 800000, overall: 90, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 85, defense: 65, speed: 90, dribbling: 88, passing: 85 } },
];

// 已拥有的教练列表
let ownedCoaches = [];

// 教练市场列表
let coachMarket = [
    { name: '老胡', level: '传奇', price: 2000000, card: '钻石卡', bonus: { shooting: 10, defense: 10, speed: 10, dribbling: 10, passing: 10 } },
    { name: '瓜迪奥拉', level: '传奇', price: 1000000, card: '钻石卡', bonus: { shooting: 5, defense: 5, speed: 5, dribbling: 5, passing: 5 } },
    { name: '克洛普', level: '大师', price: 800000, card: '金卡', bonus: { shooting: 4, defense: 4, speed: 4, dribbling: 4, passing: 4 } },
    { name: '穆里尼奥', level: '大师', price: 800000, card: '金卡', bonus: { shooting: 3, defense: 5, speed: 3, dribbling: 3, passing: 4 } },
    { name: '李铁', level: '普通', price: 100000, card: '铜卡', bonus: { shooting: 1, defense: 1, speed: 1, dribbling: 1, passing: 1 } },
];

// 联赛球队数据（20支球队）
let leagueTeams = [
    { name: '我的球队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '北京队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '上海队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '广州队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '深圳队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '成都队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '重庆队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '杭州队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '武汉队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '南京队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '天津队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '西安队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '沈阳队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '青岛队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '大连队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '郑州队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '长沙队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '合肥队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '南昌队', points: 0, wins: 0, draws: 0, losses: 0 },
    { name: '哈尔滨队', points: 0, wins: 0, draws: 0, losses: 0 },
];

// 活动列表
let activities = [
    { id: 1, description: '每日登录奖励', completed: false, reward: 10000 },
    { id: 2, description: '完成一场比赛', completed: false, reward: 20000 },
    { id: 3, description: '签约一名教练', completed: false, reward: 50000 },
    { id: 4, description: '培养一名青训球员', completed: false, reward: 30000 },
    { id: 5, description: '赢得联赛冠军', completed: false, reward: 100000 },
    { id: 6, description: '拥有1000万资金', completed: false, reward: 50000 },
    { id: 7, description: '签下5名钻石球员', completed: false, reward: 80000 },
    { id: 8, description: '完成10次抽卡', completed: false, reward: 50000 },
    { id: 9, description: '连续五场比赛不败', completed: false, reward: 60000 },
];

// 收件箱消息列表
let inboxMessages = [];

// 成就列表
let achievements = [
    { id: 1, name: '初出茅庐', description: '完成第一场比赛', unlocked: false },
    { id: 2, name: '连战连捷', description: '取得三连胜', unlocked: false },
    { id: 3, name: '百万富翁', description: '拥有100万金币', unlocked: false },
    { id: 4, name: '教练大师', description: '签约一名传奇教练', unlocked: false },
    { id: 5, name: '青训达人', description: '培养一名青训球员进入一线队', unlocked: false },
    { id: 6, name: '满员阵容', description: '在比赛中使用11名球员', unlocked: false },
    { id: 7, name: '豪门俱乐部', description: '球队总实力达到1000', unlocked: false },
    { id: 8, name: '不败战绩', description: '连续十场比赛不败', unlocked: false },
    { id: 9, name: '转会大师', description: '成功签下十名球员', unlocked: false },
    { id: 10, name: '财富之巅', description: '拥有5000万金币', unlocked: false },
    { id: 11, name: '抽卡狂人', description: '完成50次抽卡', unlocked: false },
    { id: 12, name: '钻石收集者', description: '拥有10名钻石球员', unlocked: false },
];

// 保存的阵容
let savedFormations = [];

// 当前首发阵容
let currentStartingLineup = {};

// 当前战术
let tactics = '平衡';

// 青训球员列表
let youthPlayers = [];

// 胜场统计
let consecutiveWins = 0;

// 不败场次统计
let undefeatedMatches = 0;

// 抽卡次数统计
let drawCardCount = 0;

// 比赛次数统计，用于体力恢复
let matchCount = 0;

// 受伤和停赛的球员列表
let injuredPlayers = [];
let suspendedPlayers = [];

// 已拥有的技能卡列表
let ownedSkillCards = [];

// 技能卡库
const skillCardPool = [
    { name: '射门大师', effect: { shooting: 5 }, description: '射门+5', stars: 1 },
    { name: '防守墙', effect: { defense: 5 }, description: '防守+5', stars: 1 },
    { name: '速度之星', effect: { speed: 5 }, description: '速度+5', stars: 1 },
    { name: '盘带高手', effect: { dribbling: 5 }, description: '盘带+5', stars: 1 },
    { name: '传球大师', effect: { passing: 5 }, description: '传球+5', stars: 1 },
    { name: '全能选手', effect: { shooting: 2, defense: 2, speed: 2, dribbling: 2, passing: 2 }, description: '全属性+2', stars: 2 },
    { name: '超级射手', effect: { shooting: 8 }, description: '射门+8', stars: 3 },
    { name: '坚固防线', effect: { defense: 8 }, description: '防守+8', stars: 3 },
    { name: '闪电快脚', effect: { speed: 8 }, description: '速度+8', stars: 3 },
    { name: '绝妙盘带', effect: { dribbling: 8 }, description: '盘带+8', stars: 3 },
    { name: '精准传球', effect: { passing: 8 }, description: '传球+8', stars: 3 },
    { name: '终极全能', effect: { shooting: 5, defense: 5, speed: 5, dribbling: 5, passing: 5 }, description: '全属性+5', stars: 4 },
    { name: '神射手', effect: { shooting: 10 }, description: '射门+10', stars: 5 },
    { name: '无懈可击', effect: { defense: 10 }, description: '防守+10', stars: 5 },
    { name: '极速风暴', effect: { speed: 10 }, description: '速度+10', stars: 5 },
    { name: '魔术师', effect: { dribbling: 10 }, description: '盘带+10', stars: 5 },
    { name: '传球天才', effect: { passing: 10 }, description: '传球+10', stars: 5 },
    // 新增星级技能卡
];

// 新增功能：球队设施状态
let trainingFacilityLevel = 1; // 1-5
let stadiumLevel = 1; // 1-5

// 初始化函数
function init() {
    loadGameData(); // 加载游戏数据
    updateFundsDisplay();
    updateCoachDisplay();
    loadCoachSelection();
    loadTeamPlayers();
    setupEventListeners();
    checkActivityCompletion(1); // 登录奖励
    generateInboxMessage('欢迎来到北中杯足球经理！祝你游戏愉快！');
    updateInboxCount();
    generatePitch(); // 生成球场和位置槽
    checkAchievements(); // 检查成就
    loadInbox(); // 加载收件箱
    loadSkillCards(); // 加载技能卡
    loadTransferMarket(); // 加载转会市场
    loadCoachMarket(); // 加载教练市场
    loadTraining(); // 加载训练界面
    loadYouthAcademy(); // 加载青训界面
    loadActivities(); // 加载活动列表
    loadAchievements(); // 加载成就列表
    loadInbox(); // 加载收件箱
}

// 更新资金显示
function updateFundsDisplay() {
    const fundsElement = document.getElementById('funds');
    if (fundsElement) {
        fundsElement.innerText = `资金：${funds}金币`;
    }
}

// 更新教练显示
function updateCoachDisplay() {
    const coachInfo = document.getElementById('coach-info');
    coachInfo.innerText = currentCoach ? `当前教练：${currentCoach.name} (${currentCoach.level})` : '当前教练：暂无';
}

// 加载教练选择
function loadCoachSelection() {
    const coachSelect = document.getElementById('coach-select');
    if (coachSelect) {
        coachSelect.innerHTML = '';
        ownedCoaches.forEach(coach => {
            const option = document.createElement('option');
            option.value = coach.name;
            option.innerText = `${coach.name} (${coach.level})`;
            coachSelect.appendChild(option);
        });

        // 设置当前教练为选中状态
        if (currentCoach) {
            coachSelect.value = currentCoach.name;
        }

        coachSelect.addEventListener('change', () => {
            const selectedCoach = ownedCoaches.find(coach => coach.name === coachSelect.value);
            if (selectedCoach) {
                currentCoach = selectedCoach;
                updateCoachDisplay();
            }
        });
    }
}

// 加载球队球员列表
function loadTeamPlayers() {
    const playerList = document.getElementById('player-list');
    if (playerList) {
        playerList.innerHTML = '';
        const startingPlayers = Object.values(currentStartingLineup);
        teamPlayers.forEach(player => {
            if (!startingPlayers.includes(player.name) && !player.suspended && !injuredPlayers.includes(player.name)) {
                const li = document.createElement('li');
                li.className = `list-group-item player ${getCardClass(player.card)} d-flex flex-column`;
                li.innerHTML = `
                    <div>${player.name}</div>
                    <div>${player.position} - ${player.card}</div>
                    <div>综合能力：${player.overall}</div>
                    <div>体力：${player.stamina}</div>
                    <div>合同剩余：${player.contract}年</div>
                `;
                li.draggable = true;
                li.dataset.playerName = player.name;
                li.addEventListener('dragstart', dragStart);
                li.addEventListener('click', () => showPlayerCard(player));
                playerList.appendChild(li);
            }
        });
    }
}

// 加载球员信息列表
function loadPlayerInfo() {
    const playerInfoList = document.getElementById('player-info-list');
    if (playerInfoList) {
        playerInfoList.innerHTML = '';
        teamPlayers.forEach(player => {
            const li = document.createElement('li');
            li.className = `list-group-item player ${getCardClass(player.card)} d-flex flex-column`;
            li.innerHTML = `
                <div>${player.name}</div>
                <div>${player.position} - ${player.card}</div>
                <div>综合能力：${player.overall}</div>
                <div>体力：${player.stamina}</div>
                <div>合同剩余：${player.contract}年</div>
            `;
            li.addEventListener('click', () => showPlayerCard(player));
            playerInfoList.appendChild(li);
        });
    }
}

// 根据卡牌品质获取样式类
function getCardClass(card) {
    switch (card) {
        case '铜卡':
            return 'card-bronze';
        case '银卡':
            return 'card-silver';
        case '金卡':
            return 'card-gold';
        case '钻石卡':
            return 'card-diamond';
        case '状态火热卡':
            return 'card-hot';
        default:
            return '';
    }
}

// 显示球员卡数据面板
function showPlayerCard(player) {
    const playerCardModal = new bootstrap.Modal(document.getElementById('player-card-modal'));
    playerCardModal.show();

    document.getElementById('player-card-name').innerText = player.name;
    document.getElementById('player-card-info').innerText = `
        位置：${player.position}
        品质：${player.card}
        综合能力：${player.overall}
        合同剩余：${player.contract}年
        射门：${player.stats.shooting}
        防守：${player.stats.defense}
        速度：${player.stats.speed}
        盘带：${player.stats.dribbling}
        传球：${player.stats.passing}
    `;
    document.getElementById('player-value').innerText = `身价：${player.value}金币`;
    document.getElementById('player-stamina').innerText = `体力：${player.stamina}`;

    // 显示已装备的技能卡
    const equippedSkillsList = document.getElementById('equipped-skills');
    equippedSkillsList.innerHTML = '';
    if (player.skills.length > 0) {
        player.skills.forEach(skill => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                ${skill.name} (${skill.description})
                <span class="stars">${renderStars(skill.stars)}</span>
            `;
            equippedSkillsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = '未装备技能卡';
        equippedSkillsList.appendChild(li);
    }

    // 设置按钮事件
    document.getElementById('renew-contract-btn').onclick = () => renewContract(player, playerCardModal);
    document.getElementById('motivate-player-btn').onclick = () => motivatePlayer(player, playerCardModal);
    document.getElementById('talk-to-player-btn').onclick = () => talkToPlayer(player, playerCardModal);
    document.getElementById('sell-player-btn').onclick = () => sellPlayer(player, playerCardModal);
    document.getElementById('equip-skill-btn').onclick = () => equipSkillToPlayer(player, playerCardModal);
}

// 渲染技能卡星级
function renderStars(stars) {
    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
        starHTML += `<span class="star">${i <= stars ? '★' : '☆'}</span>`;
    }
    return starHTML;
}

// 续约功能
function renewContract(player, modalInstance) {
    const cost = player.card === '钻石卡' ? 300000 : player.card === '金卡' ? 200000 : player.card === '银卡' ? 100000 : player.card === '铜卡' ? 50000 : 50000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        player.contract += 1;
        alert(`${player.name}的合同已续约一年！`);
        loadTeamPlayers();
        loadPlayerInfo();
        modalInstance.hide();
    } else {
        alert('资金不足，无法续约！');
    }
}

// 训话功能
function motivatePlayer(player, modalInstance) {
    alert(`你对${player.name}进行了训话，士气大增！`);
    modalInstance.hide();
}

// 与球员对话功能
function talkToPlayer(player, modalInstance) {
    const playerDialogueModal = new bootstrap.Modal(document.getElementById('player-dialogue-modal'));
    document.getElementById('dialogue-player-name').innerText = player.name;
    const dialogueOptions = document.getElementById('dialogue-options');
    dialogueOptions.innerHTML = '';

    const options = [
        { text: '你最近的表现很不错！', effect: 'positive' },
        { text: '需要加强训练！', effect: 'neutral' },
        { text: '你的态度让我失望。', effect: 'negative' },
    ];

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary btn-sm mb-2 w-100';
        btn.innerText = option.text;
        btn.onclick = () => {
            if (option.effect === 'positive') {
                alert(`${player.name}感到非常开心！`);
            } else if (option.effect === 'neutral') {
                alert(`${player.name}点了点头。`);
            } else if (option.effect === 'negative') {
                alert(`${player.name}显得有些沮丧。`);
            }
            playerDialogueModal.hide();
            modalInstance.hide();
        };
        dialogueOptions.appendChild(btn);
    });

    playerDialogueModal.show();
}

// 出售球员
function sellPlayer(player, modalInstance) {
    if (confirm(`确定要以${player.value}金币的价格出售${player.name}吗？`)) {
        funds += player.value;
        updateFundsDisplay();
        teamPlayers = teamPlayers.filter(p => p !== player);
        // 移除首发阵容中的该球员
        for (let position in currentStartingLineup) {
            if (currentStartingLineup[position] === player.name) {
                delete currentStartingLineup[position];
            }
        }
        loadTeamPlayers();
        loadPlayerInfo();
        generatePitch();
        modalInstance.hide();
    }
}

// 装备技能卡给球员
function equipSkillToPlayer(player, modalInstance) {
    const equipSkillModal = new bootstrap.Modal(document.getElementById('equip-skill-modal'));
    document.getElementById('equip-skill-player-name').innerText = player.name;
    const skillOptions = document.getElementById('skill-options');
    skillOptions.innerHTML = '';

    if (ownedSkillCards.length === 0) {
        const p = document.createElement('p');
        p.innerText = '你没有任何技能卡。';
        skillOptions.appendChild(p);
        return;
    }

    ownedSkillCards.forEach(skill => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary btn-sm mb-2 w-100';
        btn.innerHTML = `
            ${skill.name} (${skill.description})
            <div class="stars">${renderStars(skill.stars)}</div>
        `;
        btn.onclick = () => {
            // 移除旧的技能卡效果
            if (player.skills.length > 0) {
                const oldSkill = player.skills[0];
                removeSkillEffect(player, oldSkill);
                ownedSkillCards.push(oldSkill); // 技能卡返回到背包
            }

            // 装备新的技能卡
            player.skills = [skill];
            applySkillEffect(player, skill);
            ownedSkillCards = ownedSkillCards.filter(s => s !== skill);
            alert(`已为${player.name}装备技能卡：${skill.name}`);
            equipSkillModal.hide();
            modalInstance.hide();
            loadSkillCards();
            loadTeamPlayers();
            loadPlayerInfo();
        };
        skillOptions.appendChild(btn);
    });

    equipSkillModal.show();
}

// 应用技能卡效果
function applySkillEffect(player, skill) {
    for (let stat in skill.effect) {
        player.stats[stat] += skill.effect[stat];
    }
    player.overall = calculateOverall(player.stats);
}

// 移除技能卡效果
function removeSkillEffect(player, skill) {
    for (let stat in skill.effect) {
        player.stats[stat] -= skill.effect[stat];
    }
    player.overall = calculateOverall(player.stats);
}

// 生成球场和位置槽
function generatePitch() {
    const pitch = document.getElementById('pitch');
    if (!pitch) return;
    pitch.innerHTML = '';
    const formation = document.getElementById('formation-select').value;
    const positions = getPositionsByFormation(formation);

    positions.forEach(pos => {
        const slot = document.createElement('div');
        slot.className = 'position-slot';
        slot.style.left = `${pos.x}%`;
        slot.style.top = `${pos.y}%`;
        slot.dataset.position = pos.position;
        slot.addEventListener('dragover', slotDragOver);
        slot.addEventListener('dragleave', dragLeave);
        slot.addEventListener('drop', slotDrop);
        pitch.appendChild(slot);

        // 如果该位置已有球员，显示球员
        if (currentStartingLineup[pos.position]) {
            const playerName = currentStartingLineup[pos.position];
            const player = getPlayerByName(playerName);
            if (player) {
                const playerCard = createPlayerCard(player);
                slot.appendChild(playerCard);
            } else if (playerName === '虚拟球员') {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player-card';
                playerDiv.innerText = '虚拟球员';
                playerDiv.style.width = '100%';
                playerDiv.style.height = '100%';
                playerDiv.style.borderRadius = '50%';
                playerDiv.style.display = 'flex';
                playerDiv.style.alignItems = 'center';
                playerDiv.style.justifyContent = 'center';
                slot.appendChild(playerDiv);
            }
        }
    });
}

// 获取阵型对应的位置
function getPositionsByFormation(formation) {
    let positions = [];
    switch (formation) {
        case '4-4-2':
            positions = [
                { position: 'GK', x: 50, y: 90 },
                { position: 'LB', x: 20, y: 70 },
                { position: 'CB1', x: 40, y: 70 },
                { position: 'CB2', x: 60, y: 70 },
                { position: 'RB', x: 80, y: 70 },
                { position: 'LM', x: 20, y: 50 },
                { position: 'CM1', x: 40, y: 50 },
                { position: 'CM2', x: 60, y: 50 },
                { position: 'RM', x: 80, y: 50 },
                { position: 'ST1', x: 40, y: 30 },
                { position: 'ST2', x: 60, y: 30 },
            ];
            break;
        case '4-3-3':
            positions = [
                { position: 'GK', x: 50, y: 90 },
                { position: 'LB', x: 20, y: 70 },
                { position: 'CB1', x: 40, y: 70 },
                { position: 'CB2', x: 60, y: 70 },
                { position: 'RB', x: 80, y: 70 },
                { position: 'CM1', x: 35, y: 55 },
                { position: 'CM2', x: 50, y: 50 },
                { position: 'CM3', x: 65, y: 55 },
                { position: 'LW', x: 20, y: 30 },
                { position: 'ST', x: 50, y: 30 },
                { position: 'RW', x: 80, y: 30 },
            ];
            break;
        case '3-5-2':
            positions = [
                { position: 'GK', x: 50, y: 90 },
                { position: 'CB1', x: 30, y: 70 },
                { position: 'CB2', x: 50, y: 70 },
                { position: 'CB3', x: 70, y: 70 },
                { position: 'LM', x: 20, y: 55 },
                { position: 'CM1', x: 35, y: 50 },
                { position: 'CM2', x: 50, y: 45 },
                { position: 'CM3', x: 65, y: 50 },
                { position: 'RM', x: 80, y: 55 },
                { position: 'ST1', x: 40, y: 30 },
                { position: 'ST2', x: 60, y: 30 },
            ];
            break;
    }
    return positions;
}

// 自动配置球员功能
document.getElementById('auto-config-btn').addEventListener('click', () => {
    const formation = document.getElementById('formation-select').value;
    const positions = getPositionsByFormation(formation);
    currentStartingLineup = {};

    // 按照位置和综合能力值排序球员
    const sortedPlayers = teamPlayers
        .filter(p => !p.suspended && !injuredPlayers.includes(p.name))
        .sort((a, b) => b.overall - a.overall);

    positions.forEach(pos => {
        // 优先匹配位置相同的球员
        const player = sortedPlayers.find(p => p.position === pos.position && !Object.values(currentStartingLineup).includes(p.name));
        if (player) {
            currentStartingLineup[pos.position] = player.name;
        } else {
            // 如果没有位置匹配的，选择综合能力最高的可用球员
            const fallbackPlayer = sortedPlayers.find(p => !Object.values(currentStartingLineup).includes(p.name));
            if (fallbackPlayer) {
                currentStartingLineup[pos.position] = fallbackPlayer.name;
            } else {
                // 如果没有球员可用，使用虚拟球员填充
                currentStartingLineup[pos.position] = '虚拟球员';
            }
        }
    });

    generatePitch();
    loadTeamPlayers();
});

// 保存阵容
document.getElementById('save-formation-btn').addEventListener('click', () => {
    const formationName = prompt('请输入阵容名称：');
    if (formationName) {
        savedFormations.push({
            name: formationName,
            lineup: { ...currentStartingLineup },
        });
        alert('阵容已保存！');
    }
});

// 比赛界面相关

// 比赛天气
let matchWeather = '';

// 比赛难度
let matchDifficulty = 'normal';

// 对手球队
let opponentTeam = { name: '未知对手', overall: 75 };

// 开始比赛按钮
document.getElementById('start-match-btn').addEventListener('click', startMatch);

// 监听难度选择
document.getElementById('difficulty-select').addEventListener('change', () => {
    matchDifficulty = document.getElementById('difficulty-select').value;
});

// 开始比赛函数
function startMatch() {
    if (Object.keys(currentStartingLineup).length < 11) {
        alert('首发阵容不足11人，无法开始比赛！');
        return;
    }

    // 检查球员体力和停赛情况
    for (let playerName of Object.values(currentStartingLineup)) {
        if (playerName !== '虚拟球员') {
            const player = getPlayerByName(playerName);
            if (player.stamina < 20) {
                alert(`球员${player.name}体力不足，无法参加比赛！`);
                return;
            }
            if (player.suspended) {
                alert(`球员${player.name}被停赛，无法参加比赛！`);
                return;
            }
        }
    }

    // 生成比赛天气
    const weatherOptions = ['晴天', '小雨', '多云', '阴天'];
    matchWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
    document.getElementById('match-weather').innerText = `比赛天气：${matchWeather}`;

    // 选择对手球队
    opponentTeam = leagueTeams[Math.floor(Math.random() * leagueTeams.length)];
    while (opponentTeam.name === '我的球队') {
        opponentTeam = leagueTeams[Math.floor(Math.random() * leagueTeams.length)];
    }
    document.getElementById('match-weather').innerText += ` 对手：${opponentTeam.name}`;

    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    const matchStats = {
        possession: 50,
        shots: 0,
        shotsOnTarget: 0,
        corners: 0,
        fouls: 0,
        yellowCards: 0,
        redCards: 0,
        time: 0,
        score: { team: 0, opponent: 0 },
    };

    // 记录被罚下或受伤的球员
    let unavailablePlayers = [];

    let interval = setInterval(() => {
        // 更新比赛时间
        matchStats.time += Math.floor(Math.random() * 5) + 1;
        if (matchStats.time >= 90) {
            matchStats.time = 90;
        }

        // 生成比赛事件
        const eventText = generateMatchEvent(matchStats, unavailablePlayers);

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = `${matchStats.time}' ${eventText}`;
        eventList.appendChild(li);

        // 滚动到最新事件
        eventList.scrollTop = eventList.scrollHeight;

        // 更新比赛数据
        updateMatchStatsDisplay(matchStats);

        if (matchStats.time >= 90) {
            clearInterval(interval);
            // 比赛结果
            const result = determineMatchResult(matchStats.score);
            updateLeagueTable(result);
            // 活动完成检查
            checkActivityCompletion(2);
            // 成就完成检查
            checkAchievementCompletion(1);
            checkAchievements();
            // 生成随机事件
            generateRandomEvent();
            // 更新球员体力
            updatePlayerStaminaAfterMatch();
            // 处理停赛球员
            handleSuspensions();
            matchCount += 1;
            if (matchCount % 3 === 0) {
                recoverPlayerStamina();
            }
            loadTeamPlayers();
            loadPlayerInfo();
        }
    }, 1000);
}

// 生成比赛事件
function generateMatchEvent(stats, unavailablePlayers) {
    const events = ['射门', '射正', '进球', '犯规', '黄牌', '红牌', '角球', '受伤', '严重犯规'];
    const eventType = events[Math.floor(Math.random() * events.length)];
    let eventText = '';

    // 根据比赛难度调整概率
    let successRate = matchDifficulty === 'easy' ? 0.7 : matchDifficulty === 'normal' ? 0.5 : 0.3;

    // 从首发阵容中随机选择一个球员
    const playerNames = Object.values(currentStartingLineup).filter(name => name !== '虚拟球员' && !unavailablePlayers.includes(name));
    const randomPlayerName = playerNames[Math.floor(Math.random() * playerNames.length)];
    const player = getPlayerByName(randomPlayerName);

    // 如果没有可用球员，返回对手的事件
    if (!player) {
        const opponentEvents = ['对手射门', '对手进球', '对手犯规'];
        const opponentEventType = opponentEvents[Math.floor(Math.random() * opponentEvents.length)];
        switch (opponentEventType) {
            case '对手射门':
                stats.shots += 1;
                eventText = `${opponentTeam.name}尝试射门！`;
                break;
            case '对手进球':
                stats.shots += 1;
                stats.shotsOnTarget += 1;
                stats.score.opponent += 1;
                eventText = `${opponentTeam.name}进球了。`;
                break;
            case '对手犯规':
                stats.fouls += 1;
                eventText = `${opponentTeam.name}犯规了。`;
                break;
        }
        return eventText;
    }

    // 降低门将进球概率和受伤概率
    const isGoalkeeper = player.position === 'GK';

    // 降低红黄牌和受伤的概率
    const injuryProbability = 0.02; // 2% 受伤概率
    const yellowCardProbability = 0.05; // 5% 黄牌概率
    const redCardProbability = 0.01; // 1% 红牌概率

    // 考虑技能卡的影响
    let playerSuccessRate = successRate;
    if (player.skills.length > 0) {
        const skill = player.skills[0];
        if (eventType === '进球' && skill.effect.shooting) {
            playerSuccessRate += skill.effect.shooting * 0.01;
        }
        if (eventType === '防守' && skill.effect.defense) {
            playerSuccessRate += skill.effect.defense * 0.01;
        }
    }

    switch (eventType) {
        case '射门':
            stats.shots += 1;
            eventText = `${player.name}尝试射门！`;
            break;
        case '射正':
            stats.shots += 1;
            stats.shotsOnTarget += 1;
            eventText = `${player.name}的射门射正了！`;
            break;
        case '进球':
            if (Math.random() < (isGoalkeeper ? 0.01 : playerSuccessRate)) {
                stats.shots += 1;
                stats.shotsOnTarget += 1;
                stats.score.team += 1;
                eventText = `${player.name}进球了！`;
            } else {
                stats.shots += 1;
                stats.shotsOnTarget += 1;
                stats.score.opponent += 1;
                eventText = `${opponentTeam.name}进球了。`;
            }
            break;
        case '犯规':
            stats.fouls += 1;
            eventText = `${player.name}犯规了。`;
            break;
        case '黄牌':
            stats.fouls += 1;
            if (Math.random() < yellowCardProbability) { // 降低黄牌概率
                stats.yellowCards += 1;
                player.yellowCards += 1;
                eventText = `${player.name}被出示黄牌。`;
                if (player.yellowCards >= 2) {
                    stats.redCards += 1;
                    unavailablePlayers.push(player.name);
                    eventText += `累计两张黄牌，${player.name}被红牌罚下！`;
                    player.yellowCards = 0;
                    player.suspended = true;
                    suspendedPlayers.push({ name: player.name, matches: 1 });
                }
            } else {
                eventText = `${player.name}试图犯规，但裁判未出示黄牌。`;
            }
            break;
        case '红牌':
            if (Math.random() < redCardProbability) { // 降低红牌概率
                if (!unavailablePlayers.includes(player.name)) {
                    stats.fouls += 1;
                    stats.redCards += 1;
                    eventText = `${player.name}被直接红牌罚下！`;
                    unavailablePlayers.push(player.name);
                    player.suspended = true;
                    suspendedPlayers.push({ name: player.name, matches: 1 });
                }
            } else {
                eventText = `${player.name}试图严重犯规，但裁判未出示红牌。`;
            }
            break;
        case '角球':
            stats.corners += 1;
            eventText = `我方获得角球。`;
            break;
        case '受伤':
            if (Math.random() < injuryProbability && !unavailablePlayers.includes(player.name)) { // 降低受伤概率
                unavailablePlayers.push(player.name);
                injuredPlayers.push(player.name);
                eventText = `${player.name}受伤，被迫离场。`;
            } else {
                eventText = `${player.name}试图受伤，但没有成功。`;
            }
            break;
        case '严重犯规':
            if (!unavailablePlayers.includes(player.name) && Math.random() < 0.05) { // 保持严重犯规低概率
                stats.fouls += 1;
                stats.redCards += 1;
                eventText = `${player.name}严重犯规，被直接红牌罚下！`;
                unavailablePlayers.push(player.name);
                player.suspended = true;
                suspendedPlayers.push({ name: player.name, matches: 1 });
            } else {
                eventText = `${player.name}试图严重犯规，但裁判未出示红牌。`;
            }
            break;
    }

    return eventText;
}

// 更新比赛数据展示
function updateMatchStatsDisplay(stats) {
    const matchTime = document.getElementById('match-time');
    const score = document.getElementById('score');
    const teamStats = document.getElementById('team-stats');

    if (matchTime) {
        matchTime.innerText = `比赛时间：${stats.time}'`;
    }
    if (score) {
        score.innerText = `比分：${stats.score.team} - ${stats.score.opponent}`;
    }
    if (teamStats) {
        teamStats.innerHTML = `
            <p>射门次数：${stats.shots}</p>
            <p>射正次数：${stats.shotsOnTarget}</p>
            <p>角球数：${stats.corners}</p>
            <p>犯规数：${stats.fouls}</p>
            <p>黄牌数：${stats.yellowCards}</p>
            <p>红牌数：${stats.redCards}</p>
        `;
    }
}

// 确定比赛结果
function determineMatchResult(score) {
    if (score.team > score.opponent) {
        consecutiveWins += 1;
        undefeatedMatches += 1;
        if (consecutiveWins >= 3) {
            checkAchievementCompletion(2); // 连胜三场成就
        }
        if (undefeatedMatches >= 10) {
            checkAchievementCompletion(8); // 十场不败成就
        }
        if (undefeatedMatches >= 5) {
            checkActivityCompletion(9); // 活动：连续五场不败
        }
        return 'win';
    } else if (score.team === score.opponent) {
        consecutiveWins = 0;
        undefeatedMatches += 1;
        if (undefeatedMatches >= 10) {
            checkAchievementCompletion(8);
        }
        if (undefeatedMatches >= 5) {
            checkActivityCompletion(9);
        }
        return 'draw';
    } else {
        consecutiveWins = 0;
        undefeatedMatches = 0;
        return 'lose';
    }
}

// 更新联赛积分表
function updateLeagueTable(result) {
    const myTeam = leagueTeams.find(team => team.name === '我的球队');
    if (result === 'win') {
        myTeam.points += 3;
        myTeam.wins += 1;
        alert('比赛胜利！获得3分。');
    } else if (result === 'draw') {
        myTeam.points += 1;
        myTeam.draws += 1;
        alert('比赛平局！获得1分。');
    } else {
        myTeam.losses += 1;
        alert('比赛失利！未获得积分。');
    }
    simulateOtherMatches();
    displayLeagueTable();

    // 处理停赛和受伤的球员
    handleInjuriesAndSuspensions();
}

// 模拟其他球队比赛
function simulateOtherMatches() {
    leagueTeams.forEach(team => {
        if (team.name !== '我的球队') {
            const rand = Math.random();
            if (rand < 0.5) {
                team.points += 3;
                team.wins += 1;
            } else if (rand < 0.8) {
                team.points += 1;
                team.draws += 1;
            } else {
                team.losses += 1;
            }
        }
    });
}

// 显示联赛积分表
function displayLeagueTable() {
    leagueTeams.sort((a, b) => b.points - a.points);
    const tbody = document.querySelector('#league-table-content tbody');
    if (tbody) {
        tbody.innerHTML = '';
        leagueTeams.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${team.name}</td>
                <td>${team.points}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // 检查是否赢得联赛冠军
    if (leagueTeams[0].name === '我的球队' && leagueTeams[0].points >= 30) {
        checkActivityCompletion(5); // 赢得联赛冠军活动
    }
}

// 活动系统
function loadActivities() {
    const activityList = document.getElementById('activity-list');
    if (activityList) {
        activityList.innerHTML = '';
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.className = `list-group-item d-flex justify-content-between align-items-center ${activity.completed ? 'active' : ''}`;
            li.innerText = activity.description;
            const claimBtn = document.createElement('button');
            claimBtn.className = 'btn btn-sm btn-success';
            claimBtn.innerText = activity.completed ? '领取奖励' : '未完成';
            claimBtn.disabled = !activity.completed;
            claimBtn.addEventListener('click', () => claimActivityReward(activity.id));
            li.appendChild(claimBtn);
            activityList.appendChild(li);
        });
    }
}

// 领取活动奖励
function claimActivityReward(activityId) {
    const activity = activities.find(a => a.id === activityId);
    if (activity && activity.completed) {
        funds += activity.reward;
        updateFundsDisplay();
        alert(`你已领取${activity.reward}金币`);
        activity.completed = false; // 重置活动状态
        loadActivities();
    }
}

// 检查活动完成情况
function checkActivityCompletion(activityId) {
    const activity = activities.find(a => a.id === activityId);
    if (activity && !activity.completed) {
        activity.completed = true;
        loadActivities();
    }
}

// 收件箱功能
function loadInbox() {
    const inboxList = document.getElementById('inbox-list');
    if (inboxList) {
        inboxList.innerHTML = '';
        inboxMessages.forEach((message, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerText = message;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-sm btn-danger';
            deleteBtn.innerText = '删除';
            deleteBtn.addEventListener('click', () => deleteInboxMessage(index));
            li.appendChild(deleteBtn);
            inboxList.appendChild(li);
        });
    }
}

// 生成收件箱消息
function generateInboxMessage(message) {
    inboxMessages.push(message);
    updateInboxCount();
}

// 删除收件箱消息
function deleteInboxMessage(index) {
    inboxMessages.splice(index, 1);
    loadInbox();
    updateInboxCount();
}

// 更新收件箱消息数量
function updateInboxCount() {
    const inboxCount = document.getElementById('inbox-count');
    if (inboxCount) {
        inboxCount.innerText = inboxMessages.length > 0 ? `${inboxMessages.length}` : '';
    }
}

// 成就系统
function loadAchievements() {
    const achievementList = document.getElementById('achievement-list');
    if (achievementList) {
        achievementList.innerHTML = '';
        achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.className = `list-group-item ${achievement.unlocked ? 'unlocked' : ''}`;
            li.innerText = `${achievement.name} - ${achievement.description}`;
            achievementList.appendChild(li);
        });
    }
}

// 检查成就完成情况
function checkAchievementCompletion(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        alert(`恭喜你完成成就：${achievement.name}`);
        loadAchievements();
    }
}

// 检查所有成就
function checkAchievements() {
    // 检查资金
    if (funds >= 1000000) {
        checkAchievementCompletion(3);
    }
    if (funds >= 50000000) {
        checkAchievementCompletion(10);
    }

    // 检查球队实力
    let totalTeamRating = teamPlayers.reduce((sum, player) => {
        return sum + player.overall;
    }, 0);

    if (totalTeamRating >= 1000) {
        checkAchievementCompletion(7);
    }

    // 检查首发球员数量
    if (Object.keys(currentStartingLineup).length === 11) {
        checkAchievementCompletion(6);
    }

    // 检查抽卡次数
    if (drawCardCount >= 50) {
        checkAchievementCompletion(11);
    }

    // 检查钻石球员数量
    const diamondPlayers = teamPlayers.filter(player => player.card === '钻石卡' || player.card === '状态火热卡');
    if (diamondPlayers.length >= 10) {
        checkAchievementCompletion(12);
    }
}

// 抽卡概率设置
const cardProbabilities = {
    '铜卡': 50,
    '银卡': 30,
    '金卡': 15,
    '钻石卡': 5,
    '状态火热卡': 0, // 每周精选卡包专属
};

// 抽卡池
const allPlayers = [
    { name: '球员E', position: 'CM', card: '铜卡', contract: 1, value: 50000, overall: 62, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 60, defense: 65, speed: 62, dribbling: 60, passing: 61 } },
    { name: '球员F', position: 'CB', card: '银卡', contract: 1, value: 100000, overall: 70, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 65, defense: 70, speed: 68, dribbling: 65, passing: 67 } },
    { name: '球员G', position: 'ST', card: '金卡', contract: 2, value: 250000, overall: 80, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 85, defense: 70, speed: 80, dribbling: 82, passing: 80 } },
    { name: '球员H', position: 'GK', card: '钻石卡', contract: 3, value: 500000, overall: 88, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 50, defense: 95, speed: 70, dribbling: 65, passing: 80 } },
    // 添加更多球员
    { name: '球员I', position: 'RW', card: '铜卡', contract: 1, value: 50000, overall: 63, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 62, defense: 60, speed: 65, dribbling: 64, passing: 60 } },
    { name: '球员J', position: 'LW', card: '银卡', contract: 1, value: 100000, overall: 72, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 70, defense: 65, speed: 75, dribbling: 74, passing: 70 } },
    { name: '球员K', position: 'CM', card: '金卡', contract: 2, value: 250000, overall: 82, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 75, speed: 78, dribbling: 82, passing: 85 } },
    { name: '球员L', position: 'CB', card: '钻石卡', contract: 3, value: 500000, overall: 90, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 70, defense: 95, speed: 80, dribbling: 75, passing: 85 } },
    { name: '球员M', position: 'RW', card: '钻石卡', contract: 3, value: 500000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 85, defense: 65, speed: 90, dribbling: 88, passing: 85 } },
    { name: '球员N', position: 'LW', card: '钻石卡', contract: 3, value: 500000, overall: 91, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 85, defense: 65, speed: 90, dribbling: 88, passing: 85 } },
    { name: '球员O', position: 'ST', card: '金卡', contract: 2, value: 250000, overall: 85, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 88, defense: 70, speed: 85, dribbling: 88, passing: 85 } },
    { name: '球员P', position: 'CDM', card: '金卡', contract: 2, value: 250000, overall: 85, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 80, defense: 88, speed: 80, dribbling: 85, passing: 90 } },
    { name: '球员Q', position: 'CDM', card: '金卡', contract: 2, value: 250000, overall: 85, stamina: 100, suspended: false, yellowCards: 0, skills: [], stats: { shooting: 75, defense: 92, speed: 85, dribbling: 80, passing: 85 } },
];

// 抽卡功能

// 铜卡包按钮
document.getElementById('bronze-pack-btn').addEventListener('click', () => {
    drawCard('铜卡包');
});

// 银卡包按钮
document.getElementById('silver-pack-btn').addEventListener('click', () => {
    drawCard('银卡包');
});

// 金卡包按钮
document.getElementById('gold-pack-btn').addEventListener('click', () => {
    drawCard('金卡包');
});

// 钻石卡包按钮
document.getElementById('diamond-pack-btn').addEventListener('click', () => {
    drawCard('钻石卡包');
});

// 每周精选卡包按钮
document.getElementById('weekly-pack-btn').addEventListener('click', () => {
    drawWeeklyFeaturedCardPack();
});

// 每周精选卡包功能实现
function drawWeeklyFeaturedCardPack() {
    const cost = 500000; // 每周精选卡包价格较贵
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        const availablePlayers = weeklyFeaturedPlayers;
        if (availablePlayers.length === 0) {
            alert('本周没有可抽取的状态火热卡球员！');
            return;
        }
        const randomPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
        alert(`恭喜你获得了状态火热卡：${randomPlayer.name}`);
        teamPlayers.push(randomPlayer);
        loadTeamPlayers();
        loadPlayerInfo();
        drawCardCount += 1;

        if (drawCardCount >= 10) {
            checkActivityCompletion(8); // 完成10次抽卡活动
        }

        checkAchievements(); // 检查成就
    } else {
        alert('资金不足，无法购买每周精选卡包！');
    }
}

// 抽卡功能实现
function drawCard(packType) {
    let cost;
    let packCardType;
    switch (packType) {
        case '铜卡包':
            cost = 20000;
            packCardType = '铜卡';
            break;
        case '银卡包':
            cost = 50000;
            packCardType = '银卡';
            break;
        case '金卡包':
            cost = 100000;
            packCardType = '金卡';
            break;
        case '钻石卡包':
            cost = 200000;
            packCardType = '钻石卡';
            break;
        default:
            alert('未知的卡包类型！');
            return;
    }

    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        let availablePlayers;

        if (packType === '钻石卡包') {
            // 钻石卡包包括钻石卡和状态火热卡
            availablePlayers = allPlayers.filter(p => p.card === packCardType || p.card === '状态火热卡');
        } else {
            availablePlayers = allPlayers.filter(p => p.card === packCardType);
        }

        if (availablePlayers.length === 0) {
            alert('当前没有可抽取的球员！');
            return;
        }

        const randomPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
        alert(`恭喜你获得了${randomPlayer.card}：${randomPlayer.name}`);
        teamPlayers.push(randomPlayer);
        loadTeamPlayers();
        loadPlayerInfo();
        drawCardCount += 1;

        if (drawCardCount >= 10) {
            checkActivityCompletion(8); // 完成10次抽卡活动
        }

        checkAchievements(); // 检查成就
    } else {
        alert('资金不足，无法购买此卡包！');
    }
}

// 加载转会市场
function loadTransferMarket() {
    const list = document.getElementById('transfer-player-list');
    if (list) {
        list.innerHTML = '';
        transferPlayers.forEach(player => {
            const li = document.createElement('li');
            li.className = `list-group-item transfer-player ${getCardClass(player.card)} d-flex justify-content-between align-items-center`;
            li.innerHTML = `
                <div>
                    <strong>${player.name}</strong><br>
                    ${player.position} - ${player.card}<br>
                    综合能力：${player.overall}<br>
                    估价：${player.value}金币
                </div>
                <button class="btn btn-sm btn-primary">谈判</button>
            `;
            li.querySelector('button').addEventListener('click', () => negotiatePlayer(player));
            list.appendChild(li);
        });
    }
}

// 谈判功能
function negotiatePlayer(player) {
    const negotiationModalElement = document.getElementById('negotiation-modal');
    const negotiationModal = new bootstrap.Modal(negotiationModalElement);
    document.getElementById('negotiation-player-name').innerText = player.name;
    const negotiationContent = document.getElementById('negotiation-content');
    negotiationContent.innerHTML = `
        <p>球员估价：${player.value}金币</p>
        <p>综合能力：${player.overall}</p>
        <input type="number" id="offer-input" class="form-control mb-2" placeholder="请输入您的报价">
        <p id="negotiation-feedback" class="text-danger"></p>
    `;
    document.getElementById('offer-btn').onclick = () => makeOffer(player, negotiationModal);
    document.getElementById('cancel-negotiation-btn').onclick = () => negotiationModal.hide();
    negotiationModal.show();
}

// 进行报价
function makeOffer(player, negotiationModal) {
    const offerInput = document.getElementById('offer-input');
    const offer = parseInt(offerInput.value);
    const feedback = document.getElementById('negotiation-feedback');

    if (isNaN(offer) || offer <= 0) {
        feedback.innerText = '请输入有效的报价金额。';
        return;
    }

    const minAcceptablePrice = player.value * 0.8;
    const maxAcceptablePrice = player.value * 1.2;

    if (offer >= minAcceptablePrice && offer <= maxAcceptablePrice) {
        if (funds >= offer) {
            funds -= offer;
            updateFundsDisplay();
            teamPlayers.push(player);
            transferPlayers = transferPlayers.filter(p => p !== player);
            loadTransferMarket();
            loadTeamPlayers();
            loadPlayerInfo();
            alert(`你成功签下了${player.name}！`);
            checkAchievementCompletion(9); // 转会大师成就
            negotiationModal.hide();
        } else {
            feedback.innerText = '资金不足，无法完成交易。';
        }
    } else if (offer < minAcceptablePrice) {
        feedback.innerText = '报价过低，谈判失败。';
    } else {
        feedback.innerText = '报价过高，对方觉得你很有诚意。';
        if (funds >= offer) {
            funds -= offer;
            updateFundsDisplay();
            teamPlayers.push(player);
            transferPlayers = transferPlayers.filter(p => p !== player);
            loadTransferMarket();
            loadTeamPlayers();
            loadPlayerInfo();
            alert(`你以高价成功签下了${player.name}！`);
            checkAchievementCompletion(9);
            negotiationModal.hide();
        } else {
            feedback.innerText = '资金不足，无法完成交易。';
        }
    }
}

// 加载教练市场
function loadCoachMarket() {
    const list = document.getElementById('coach-list');
    if (list) {
        list.innerHTML = '';
        coachMarket.forEach(coach => {
            const li = document.createElement('li');
            li.className = `list-group-item coach-card ${getCardClass(coach.card)} d-flex justify-content-between align-items-center`;
            li.innerHTML = `
                <div>
                    <strong>${coach.name}</strong><br>
                    等级：${coach.level}<br>
                    价格：${coach.price}金币<br>
                    加成：射门+${coach.bonus.shooting} 防守+${coach.bonus.defense} 速度+${coach.bonus.speed} 盘带+${coach.bonus.dribbling} 传球+${coach.bonus.passing}
                </div>
                <button class="btn btn-sm btn-primary">签约</button>
            `;
            li.querySelector('button').addEventListener('click', () => hireCoach(coach));
            list.appendChild(li);
        });
    }
}

// 签约教练
function hireCoach(coach) {
    if (funds >= coach.price) {
        funds -= coach.price;
        updateFundsDisplay();
        ownedCoaches.push(coach);
        coachMarket = coachMarket.filter(c => c !== coach);
        loadCoachMarket();
        loadCoachSelection();
        currentCoach = coach;
        updateCoachDisplay();
        alert(`你已签约教练：${coach.name}`);
        checkActivityCompletion(3);
        if (coach.level === '传奇') {
            checkAchievementCompletion(4);
        }
    } else {
        alert('资金不足，无法签约教练！');
    }
}

// 加载训练界面
function loadTraining() {
    const list = document.getElementById('training-player-list');
    if (list) {
        list.innerHTML = '';
        teamPlayers.forEach(player => {
            const li = document.createElement('li');
            li.className = `list-group-item player ${getCardClass(player.card)} d-flex justify-content-between align-items-center`;
            li.innerHTML = `
                <div>
                    <strong>${player.name}</strong><br>
                    ${player.position} - ${player.card}<br>
                    综合能力：${player.overall}<br>
                    体力：${player.stamina}
                </div>
                <button class="btn btn-sm btn-primary">训练</button>
            `;
            li.querySelector('button').addEventListener('click', () => trainPlayer(player));
            list.appendChild(li);
        });
    }
}

// 训练球员
function trainPlayer(player) {
    if (player.stamina >= 10) {
        player.stats.shooting += 1;
        player.stats.defense += 1;
        player.stats.speed += 1;
        player.stats.dribbling += 1;
        player.stats.passing += 1;
        player.overall = calculateOverall(player.stats);
        player.value += 10000; // 训练后身价提升
        player.stamina -= 10; // 训练消耗体力
        alert(`${player.name}的属性有所提升！`);
        loadTraining();
        loadPlayerInfo();
    } else {
        alert(`${player.name}的体力不足，无法训练！`);
    }
}

// 计算综合能力
function calculateOverall(stats) {
    return Math.round((stats.shooting + stats.defense + stats.speed + stats.dribbling + stats.passing) / 5);
}

// 更新球员体力（比赛后消耗）
function updatePlayerStaminaAfterMatch() {
    Object.values(currentStartingLineup).forEach(playerName => {
        if (playerName !== '虚拟球员') {
            const player = getPlayerByName(playerName);
            player.stamina -= 15;
            if (player.stamina < 0) {
                player.stamina = 0;
            }
        }
    });
}

// 恢复球员体力
function recoverPlayerStamina() {
    teamPlayers.forEach(player => {
        player.stamina += 20;
        if (player.stamina > 100) {
            player.stamina = 100;
        }
    });
    alert('球员们的体力经过休整有所恢复！');
}

// 处理停赛球员
function handleSuspensions() {
    suspendedPlayers.forEach(playerInfo => {
        playerInfo.matches -= 1;
        if (playerInfo.matches <= 0) {
            const player = getPlayerByName(playerInfo.name);
            if (player) {
                player.suspended = false;
                alert(`球员${player.name}的停赛期已结束，可以重新参加比赛。`);
            }
        }
    });
    suspendedPlayers = suspendedPlayers.filter(p => p.matches > 0);
}

// 处理受伤球员
function handleInjuriesAndSuspensions() {
    // 这里可以添加受伤球员的恢复逻辑
    injuredPlayers = injuredPlayers.map(playerName => {
        // 假设受伤球员需要休息一场比赛后恢复
        setTimeout(() => {
            const player = getPlayerByName(playerName);
            if (player) {
                player.stamina += 20; // 恢复部分体力
                if (player.stamina > 100) player.stamina = 100;
                alert(`球员${player.name}已经从伤病中恢复，重新可以上场比赛。`);
            }
        }, 10000); // 10秒后恢复，实际应根据比赛数量
        return playerName; // 保持列表结构
    });
    injuredPlayers = injuredPlayers.filter(playerName => {
        // 假设受伤后不再需要处理
        return false;
    });
}

// 加载青训界面
function loadYouthAcademy() {
    const list = document.getElementById('youth-player-list');
    if (list) {
        list.innerHTML = '';
        youthPlayers.forEach(player => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                <div>
                    <strong>${player.name}</strong><br>
                    年龄：${player.age}<br>
                    潜力：${player.potential}
                </div>
                <button class="btn btn-sm btn-primary">提升至一线队</button>
            `;
            li.querySelector('button').addEventListener('click', () => promoteYouthPlayer(player));
            list.appendChild(li);
        });
    }
}

// 招募新青训球员
document.getElementById('recruit-youth-btn').addEventListener('click', () => {
    const cost = 100000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        const newPlayer = {
            name: `青训球员${youthPlayers.length + 1}`,
            age: 16,
            potential: Math.floor(Math.random() * 20) + 80,
        };
        youthPlayers.push(newPlayer);
        loadYouthAcademy();
        checkActivityCompletion(4);
    } else {
        alert('资金不足，无法招募青训球员！');
    }
});

// 提升青训球员至一线队
function promoteYouthPlayer(player) {
    const newPlayer = {
        name: player.name,
        position: '未知', // 可以根据需要指定位置
        card: '铜卡',
        contract: 3,
        value: 50000,
        overall: player.potential - 10,
        stamina: 100,
        suspended: false,
        yellowCards: 0,
        skills: [],
        stats: {
            shooting: player.potential - 10,
            defense: player.potential - 10,
            speed: player.potential - 10,
            dribbling: player.potential - 10,
            passing: player.potential - 10,
        },
    };
    teamPlayers.push(newPlayer);
    youthPlayers = youthPlayers.filter(p => p !== player);
    loadYouthAcademy();
    loadTeamPlayers();
    loadPlayerInfo();
    checkAchievementCompletion(5);
}

// 保存游戏数据到本地存储
function saveGameData() {
    const gameData = {
        funds,
        currentCoach,
        teamPlayers,
        transferPlayers,
        ownedCoaches,
        coachMarket,
        leagueTeams,
        activities,
        inboxMessages,
        achievements,
        savedFormations,
        currentStartingLineup,
        tactics,
        youthPlayers,
        consecutiveWins,
        undefeatedMatches,
        drawCardCount,
        matchCount,
        injuredPlayers,
        suspendedPlayers,
        ownedSkillCards,
        trainingFacilityLevel,
        stadiumLevel,
    };
    localStorage.setItem('footballManagerGameData', JSON.stringify(gameData));
    alert('游戏已保存！');
}

// 加载游戏数据
function loadGameData() {
    const gameDataString = localStorage.getItem('footballManagerGameData');
    if (gameDataString) {
        const gameData = JSON.parse(gameDataString);
        funds = gameData.funds;
        currentCoach = gameData.currentCoach;
        teamPlayers = gameData.teamPlayers;
        transferPlayers = gameData.transferPlayers;
        ownedCoaches = gameData.ownedCoaches;
        coachMarket = gameData.coachMarket;
        leagueTeams = gameData.leagueTeams;
        activities = gameData.activities;
        inboxMessages = gameData.inboxMessages;
        achievements = gameData.achievements;
        savedFormations = gameData.savedFormations;
        currentStartingLineup = gameData.currentStartingLineup;
        tactics = gameData.tactics;
        youthPlayers = gameData.youthPlayers;
        consecutiveWins = gameData.consecutiveWins;
        undefeatedMatches = gameData.undefeatedMatches;
        drawCardCount = gameData.drawCardCount;
        matchCount = gameData.matchCount;
        injuredPlayers = gameData.injuredPlayers;
        suspendedPlayers = gameData.suspendedPlayers;
        ownedSkillCards = gameData.ownedSkillCards || [];
        trainingFacilityLevel = gameData.trainingFacilityLevel || 1;
        stadiumLevel = gameData.stadiumLevel || 1;
    }
}

// 清空游戏数据
function clearGameData() {
    if (confirm('确定要清空游戏数据吗？此操作无法撤销。')) {
        localStorage.removeItem('footballManagerGameData');
        location.reload();
    }
}

// 生成随机事件
function generateRandomEvent() {
    const events = [
        {
            message: '球队核心球员罢训，要求加薪。',
            effect: () => {
                funds -= 100000;
                updateFundsDisplay();
                alert('你支付了额外的100000金币来安抚球员。');
            },
        },
        {
            message: '球队训练基地被盗，设备损坏。',
            effect: () => {
                funds -= 50000;
                updateFundsDisplay();
                alert('你花费了50000金币来修复训练基地。');
            },
        },
        {
            message: '一名球员受伤，需要休养。',
            effect: () => {
                const availablePlayers = teamPlayers.filter(p => !injuredPlayers.includes(p.name));
                if (availablePlayers.length === 0) {
                    alert('没有可受伤的球员。');
                    return;
                }
                const injuredPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
                injuredPlayers.push(injuredPlayer.name);
                alert(`球员${injuredPlayer.name}受伤，暂时无法上场比赛。`);
                loadTeamPlayers();
                loadPlayerInfo();
                generatePitch();
            },
        },
        {
            message: '赞助商提供了一笔额外资金支持。',
            effect: () => {
                funds += 200000;
                updateFundsDisplay();
                alert('你收到了赞助商提供的200000金币。');
            },
        },
        {
            message: '球队被罚款，原因是球迷的不当行为。',
            effect: () => {
                funds -= 80000;
                updateFundsDisplay();
                alert('你支付了80000金币的罚款。');
            },
        },
        {
            message: '球队吉祥物意外走红，球队人气大增。',
            effect: () => {
                funds += 150000;
                updateFundsDisplay();
                alert('球队人气上升，获得150000金币的额外收入。');
            },
        },
        {
            message: '训练中出现奇迹小子，引起各方关注。',
            effect: () => {
                const newYouthPlayer = {
                    name: `天才少年${youthPlayers.length + 1}`,
                    age: 15,
                    potential: Math.floor(Math.random() * 10) + 90,
                };
                youthPlayers.push(newYouthPlayer);
                loadYouthAcademy();
                alert('你在训练中发现了一名天才少年！');
            },
        },
        {
            message: '球队历史被挖掘，球迷热情高涨。',
            effect: () => {
                funds += 100000;
                updateFundsDisplay();
                alert('球迷热情高涨，获得100000金币的额外收入。');
            },
        },
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    generateInboxMessage(randomEvent.message);
    randomEvent.effect();
}

// 技能卡功能

// 加载技能卡界面
function loadSkillCards() {
    const list = document.getElementById('skill-card-list');
    if (list) {
        list.innerHTML = '';
        ownedSkillCards.forEach(skill => {
            const li = document.createElement('li');
            li.className = `list-group-item skill-card-item star-${skill.stars} d-flex justify-content-between align-items-center`;
            li.innerHTML = `
                <div>
                    <strong>${skill.name}</strong><br>
                    ${skill.description}
                </div>
                <div class="stars">${renderStars(skill.stars)}</div>
            `;
            list.appendChild(li);
        });
    }
}

// 购买技能卡包
document.getElementById('buy-skill-pack-btn').addEventListener('click', () => {
    const cost = 50000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        const randomSkill = skillCardPool[Math.floor(Math.random() * skillCardPool.length)];
        ownedSkillCards.push(randomSkill);
        alert(`你获得了技能卡：${randomSkill.name}`);
        loadSkillCards();
    } else {
        alert('资金不足，无法购买技能卡包！');
    }
});

// 购买星级技能卡包
document.getElementById('buy-star-skill-pack-btn').addEventListener('click', () => {
    const cost = 100000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        // 根据星级概率抽取技能卡
        const stars = getRandomStarLevel();
        const availableSkills = skillCardPool.filter(skill => skill.stars === stars);
        if (availableSkills.length === 0) {
            alert('当前没有可抽取的技能卡！');
            return;
        }
        const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)];
        ownedSkillCards.push(randomSkill);
        alert(`你获得了${stars}星技能卡：${randomSkill.name}`);
        loadSkillCards();
    } else {
        alert('资金不足，无法购买星级技能卡包！');
    }
});

// 获取随机星级技能卡
function getRandomStarLevel() {
    // 1-5星级，概率可根据需求调整
    const rand = Math.random();
    if (rand < 0.5) return 1;
    if (rand < 0.75) return 2;
    if (rand < 0.9) return 3;
    if (rand < 0.98) return 4;
    return 5;
}

// 监听拖拽目标离开
document.querySelectorAll('.position-slot').forEach(slot => {
    slot.addEventListener('dragleave', dragLeave);
});

// 事件监听器设置
function setupEventListeners() {
    // 菜单按钮
    const menuButtons = [
        'team-management-btn',
        'player-info-btn',
        'match-btn',
        'transfer-market-btn',
        'coach-market-btn',
        'draw-card-btn',
        'skill-card-btn',
        'league-table-btn',
        'training-btn',
        'youth-academy-btn',
        'inbox-btn',
        'achievements-btn',
        'activities-btn',
    ];

    menuButtons.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                showSection(id.replace('-btn', ''));
            });
        }
    });

    // 保存和清空数据按钮
    const saveGameBtn = document.getElementById('save-game-btn');
    if (saveGameBtn) {
        saveGameBtn.addEventListener('click', saveGameData);
    }
    const clearDataBtn = document.getElementById('clear-data-btn');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', clearGameData);
    }

    // 新增功能：球队设施升级按钮
    const upgradeTrainingBtn = document.getElementById('upgrade-training-btn');
    if (upgradeTrainingBtn) {
        upgradeTrainingBtn.addEventListener('click', () => upgradeTrainingFacility());
    }

    const upgradeStadiumBtn = document.getElementById('upgrade-stadium-btn');
    if (upgradeStadiumBtn) {
        upgradeStadiumBtn.addEventListener('click', () => upgradeStadium());
    }
}

// 显示指定的界面
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > .section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    });

    // 特殊处理
    if (sectionId === 'match') {
        // 清空比赛数据
        document.getElementById('event-list').innerHTML = '';
        document.getElementById('match-weather').innerText = '';
        document.getElementById('match-time').innerText = '比赛时间：0\'';
        document.getElementById('score').innerText = '比分：0 - 0';
        document.getElementById('team-stats').innerHTML = `
            <p>射门次数：0</p>
            <p>射正次数：0</p>
            <p>角球数：0</p>
            <p>犯规数：0</p>
            <p>黄牌数：0</p>
            <p>红牌数：0</p>
        `;
    } else if (sectionId === 'inbox') {
        loadInbox();
    } else if (sectionId === 'achievements') {
        loadAchievements();
    } else if (sectionId === 'activities') {
        loadActivities();
    } else if (sectionId === 'transfer-market') {
        loadTransferMarket();
    } else if (sectionId === 'coach-market') {
        loadCoachMarket();
    } else if (sectionId === 'training') {
        loadTraining();
    } else if (sectionId === 'youth-academy') {
        loadYouthAcademy();
    } else if (sectionId === 'player-info') {
        loadPlayerInfo();
    } else if (sectionId === 'league-table') {
        displayLeagueTable();
    } else if (sectionId === 'team-management') {
        generatePitch();
        loadCoachSelection();
        loadTeamPlayers();
    } else if (sectionId === 'skill-card') {
        loadSkillCards();
    }
}

// 自动配置球员功能已经在点击事件中实现

// 拖拽功能
let draggedPlayer = null;

// 拖拽开始
function dragStart(event) {
    draggedPlayer = event.target;
    event.dataTransfer.setData('text/plain', draggedPlayer.dataset.playerName);
}

// 拖拽目标允许放置
function slotDragOver(event) {
    event.preventDefault();
    const slot = event.target.closest('.position-slot');
    const playerListContainer = document.getElementById('player-list-container');
    if (slot) {
        slot.classList.add('dragover');
    } else if (playerListContainer) {
        playerListContainer.classList.add('dragover');
    }
}

// 拖拽离开目标
function dragLeave(event) {
    const slot = event.target.closest('.position-slot');
    const playerListContainer = document.getElementById('player-list-container');
    if (slot) {
        slot.classList.remove('dragover');
    } else if (playerListContainer) {
        playerListContainer.classList.remove('dragover');
    }
}

// 拖拽放下
function slotDrop(event) {
    event.preventDefault();
    const slot = event.target.closest('.position-slot');
    const playerListContainer = document.getElementById('player-list-container');
    if (slot) {
        slot.classList.remove('dragover');
    } else if (playerListContainer) {
        playerListContainer.classList.remove('dragover');
    }

    const playerName = event.dataTransfer.getData('text/plain');
    const player = getPlayerByName(playerName);

    if (!player) return;

    if (slot) {
        const positionKey = slot.dataset.position;

        // 如果拖动的是场上的球员，允许交换位置
        if (draggedPlayer.parentElement.classList.contains('position-slot')) {
            const fromPosition = draggedPlayer.parentElement.dataset.position;
            const toPosition = positionKey;

            // 交换阵容中的球员位置
            const temp = currentStartingLineup[toPosition];
            currentStartingLineup[toPosition] = currentStartingLineup[fromPosition];
            currentStartingLineup[fromPosition] = temp;

            generatePitch();
        } else {
            // 从替补拖动到场上

            // 如果该位置已有人，提示或替换
            if (currentStartingLineup[positionKey]) {
                if (!confirm('该位置已有球员，是否替换？')) {
                    return;
                }
                // 将被替换的球员添加回替补列表
                const replacedPlayerName = currentStartingLineup[positionKey];
                if (replacedPlayerName !== '虚拟球员') {
                    loadTeamPlayers();
                }
            }

            // 更新当前首发阵容
            currentStartingLineup[positionKey] = playerName;
            generatePitch();
            loadTeamPlayers();
        }
    } else if (playerListContainer) {
        // 从场上拖拽回替补
        if (draggedPlayer.parentElement.classList.contains('position-slot')) {
            const positionKey = draggedPlayer.parentElement.dataset.position;
            delete currentStartingLineup[positionKey];
            generatePitch();
            loadTeamPlayers();
        }
    }

    draggedPlayer = null;
}

// 创建球员卡片
function createPlayerCard(player) {
    const playerDiv = document.createElement('div');
    playerDiv.className = `player-card ${getCardClass(player.card)}`;
    playerDiv.innerText = player.name;
    playerDiv.style.width = '100%';
    playerDiv.style.height = '100%';
    playerDiv.style.borderRadius = '50%';
    playerDiv.style.display = 'flex';
    playerDiv.style.alignItems = 'center';
    playerDiv.style.justifyContent = 'center';
    playerDiv.draggable = true;
    playerDiv.dataset.playerName = player.name;
    playerDiv.addEventListener('dragstart', dragStart);
    playerDiv.addEventListener('click', () => showPlayerCard(player));
    return playerDiv;
}

// 根据球员姓名获取球员对象
function getPlayerByName(name) {
    return teamPlayers.find(player => player.name === name) || youthPlayers.find(player => player.name === name);
}

// 生成球场和位置槽已经在 generatePitch 函数中实现

// 修正拖拽事件监听
const playerListContainer = document.getElementById('player-list-container');
if (playerListContainer) {
    playerListContainer.addEventListener('dragover', slotDragOver);
    playerListContainer.addEventListener('dragleave', dragLeave);
    playerListContainer.addEventListener('drop', slotDrop);
}

// 进一步功能实现

// 新增功能：球队设施升级

// 升级训练基地
function upgradeTrainingFacility() {
    const upgradeCost = 200000 * trainingFacilityLevel; // 每级升级费用递增
    if (funds >= upgradeCost && trainingFacilityLevel < 5) {
        funds -= upgradeCost;
        trainingFacilityLevel += 1;
        updateFundsDisplay();
        alert(`训练基地升级到第${trainingFacilityLevel}级！训练效果提升。`);
    } else if (trainingFacilityLevel >= 5) {
        alert('训练基地已达到最高等级！');
    } else {
        alert('资金不足，无法升级训练基地！');
    }
}

// 升级球场
function upgradeStadium() {
    const upgradeCost = 300000 * stadiumLevel; // 每级升级费用递增
    if (funds >= upgradeCost && stadiumLevel < 5) {
        funds -= upgradeCost;
        stadiumLevel += 1;
        updateFundsDisplay();
        alert(`球场升级到第${stadiumLevel}级！主场优势和收入增加。`);
    } else if (stadiumLevel >= 5) {
        alert('球场已达到最高等级！');
    } else {
        alert('资金不足，无法升级球场！');
    }
}

// 页面加载后初始化
window.onload = init;
