// extra.js

// 确保在全局作用域中定义新变量，以便 script.js 能够保存和加载它们
var fanSupportLevel = fanSupportLevel || 100; // 初始球迷支持度
var teamReputation = teamReputation || 100;   // 初始球队声望
var sponsorshipStatus = sponsorshipStatus || null; // 赞助合同状态
var advertisingIncome = advertisingIncome || 0;   // 广告收入
var cupStage = cupStage || '未开始';               // 杯赛阶段
var internationalMatchStatus = internationalMatchStatus || '未开始'; // 国际比赛状态

// ==================== 球迷系统 ====================

// 更新球迷支持度显示
function updateFanSupportDisplay() {
    const fanSupportLevelElem = document.getElementById('fan-support-level');
    const fanInfluenceElem = document.getElementById('fan-influence');
    const fanReputationInfluenceElem = document.getElementById('fan-reputation-influence');
    if (fanSupportLevelElem) {
        fanSupportLevelElem.innerText = fanSupportLevel;
    }
    if (fanInfluenceElem) {
        fanInfluenceElem.innerText = `${(fanSupportLevel * 0.02).toFixed(2)}%`; // 2% 每100支持度
    }
    if (fanReputationInfluenceElem) {
        fanReputationInfluenceElem.innerText = `${(fanSupportLevel * 0.01).toFixed(2)}%`; // 1% 每100支持度
    }
}

// 初始化球迷支持度显示
updateFanSupportDisplay();

// 增加球迷支持度
document.getElementById('increase-fan-support-btn').addEventListener('click', () => {
    const cost = 5000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        fanSupportLevel += 50; // 每次增加50
        if (fanSupportLevel > 500) fanSupportLevel = 500; // 最大支持度500
        updateFanSupportDisplay();
        alert(`球迷支持度已增加到${fanSupportLevel}！`);
    } else {
        alert('资金不足，无法增加球迷支持度！');
    }
});

// 减少球迷支持度
document.getElementById('decrease-fan-support-btn').addEventListener('click', () => {
    fanSupportLevel -= 50; // 每次减少50
    if (fanSupportLevel < 0) fanSupportLevel = 0; // 最小支持度0
    updateFanSupportDisplay();
    alert(`球迷支持度已减少到${fanSupportLevel}！`);
});

// ==================== 财务管理 ====================

// 更新财务管理显示
function updateFinancialManagementDisplay() {
    const sponsorshipStatusElem = document.getElementById('sponsorship-status');
    const advertisingIncomeElem = document.getElementById('advertising-income');
    const sponsorshipInfluenceElem = document.getElementById('sponsorship-influence');
    const advertisingInfluenceElem = document.getElementById('advertising-influence');

    if (sponsorshipStatusElem) {
        sponsorshipStatusElem.innerText = sponsorshipStatus ? `${sponsorshipStatus.sponsorName}` : '无';
    }

    if (advertisingIncomeElem) {
        advertisingIncomeElem.innerText = `${advertisingIncome}金币/日`;
    }

    if (sponsorshipInfluenceElem) {
        sponsorshipInfluenceElem.innerText = sponsorshipStatus ? `${sponsorshipStatus.bonusPercent}%` : '0%';
    }

    if (advertisingInfluenceElem) {
        advertisingInfluenceElem.innerText = `${advertisingIncome > 0 ? 10 : 0}%`; // 10% 广告收入提升
    }
}

// 初始化财务管理显示
updateFinancialManagementDisplay();

// 签约赞助合同
document.getElementById('sign-sponsorship-btn').addEventListener('click', () => {
    const cost = 300000;
    if (funds >= cost && !sponsorshipStatus) {
        funds -= cost;
        updateFundsDisplay();
        sponsorshipStatus = {
            sponsorName: '企业赞助商',
            dailyIncome: 5000,
            bonusPercent: 50, // 比赛收入提升50%
        };
        updateFinancialManagementDisplay();
        alert('你已成功签约赞助合同，每日获得5000金币收入，比赛收入增加50%。');
    } else if (sponsorshipStatus) {
        alert('你已经有一个赞助合同，无法再签约！');
    } else {
        alert('资金不足，无法签约赞助合同！');
    }
});

// 取消赞助合同
document.getElementById('cancel-sponsorship-btn').addEventListener('click', () => {
    if (sponsorshipStatus) {
        const penalty = 50000; // 取消合同的违约金
        if (funds >= penalty) {
            funds -= penalty;
            updateFundsDisplay();
            sponsorshipStatus = null;
            updateFinancialManagementDisplay();
            alert(`你已取消赞助合同，支付了${penalty}金币的违约金。`);
        } else {
            alert('资金不足，无法支付违约金取消赞助合同！');
        }
    } else {
        alert('你没有签约任何赞助合同！');
    }
});

// 增加广告收入
document.getElementById('increase-advertising-btn').addEventListener('click', () => {
    const cost = 50000;
    if (funds >= cost) {
        funds -= cost;
        updateFundsDisplay();
        advertisingIncome += 1000; // 每次增加1000
        updateFinancialManagementDisplay();
        alert(`广告收入已增加到${advertisingIncome}金币/日！`);
    } else {
        alert('资金不足，无法增加广告收入！');
    }
});

// 减少广告收入
document.getElementById('decrease-advertising-btn').addEventListener('click', () => {
    if (advertisingIncome > 0) {
        advertisingIncome -= 1000; // 每次减少1000
        if (advertisingIncome < 0) advertisingIncome = 0;
        updateFinancialManagementDisplay();
        alert(`广告收入已减少到${advertisingIncome}金币/日！`);
    } else {
        alert('广告收入已为零，无法再减少！');
    }
});

// ==================== 赛事系统 ====================

// 更新赛事系统显示
function updateTournamentSystemDisplay() {
    const cupStageElem = document.getElementById('cup-stage');
    const internationalMatchStatusElem = document.getElementById('international-match-status');
    const tournamentBonusElem = document.getElementById('tournament-bonus');
    const internationalReputationInfluenceElem = document.getElementById('international-reputation-influence');

    if (cupStageElem) {
        cupStageElem.innerText = cupStage;
    }

    if (internationalMatchStatusElem) {
        internationalMatchStatusElem.innerText = internationalMatchStatus;
    }

    if (tournamentBonusElem) {
        tournamentBonusElem.innerText = cupStage === '已结束' ? '100000金币' : '0';
    }

    if (internationalReputationInfluenceElem) {
        internationalReputationInfluenceElem.innerText = internationalMatchStatus === '已结束' ? '15%' : '0%';
    }
}

// 初始化赛事系统显示
updateTournamentSystemDisplay();

// 开始杯赛
document.getElementById('start-cup-btn').addEventListener('click', () => {
    if (cupStage === '进行中') {
        alert('杯赛已经进行中！');
        return;
    }
    if (cupStage === '已结束') {
        alert('杯赛已经结束！');
        return;
    }
    cupStage = '进行中';
    updateTournamentSystemDisplay();
    alert('你已开始杯赛！');
});

// 模拟杯赛结果
document.getElementById('simulate-cup-btn').addEventListener('click', () => {
    if (cupStage !== '进行中') {
        alert('杯赛尚未开始！');
        return;
    }
    // 模拟杯赛结果
    const outcome = Math.random();
    if (outcome < 0.5) {
        // 赢得杯赛
        funds += 100000; // 奖金
        teamReputation += 10;
        alert('你赢得了杯赛，获得了100000金币奖金，球队声望提升了10！');
    } else {
        // 未赢得杯赛
        alert('你未能赢得杯赛。');
    }
    cupStage = '已结束';
    updateTournamentSystemDisplay();
});

// 开始国际比赛
document.getElementById('start-international-match-btn').addEventListener('click', () => {
    if (internationalMatchStatus === '进行中') {
        alert('国际比赛已经进行中！');
        return;
    }
    if (internationalMatchStatus === '已结束') {
        alert('国际比赛已经结束！');
        return;
    }
    internationalMatchStatus = '进行中';
    updateTournamentSystemDisplay();
    alert('你已开始国际比赛！');
});

// 模拟国际比赛结果
document.getElementById('simulate-international-match-btn').addEventListener('click', () => {
    if (internationalMatchStatus !== '进行中') {
        alert('国际比赛尚未开始！');
        return;
    }
    // 模拟国际比赛结果
    const outcome = Math.random();
    if (outcome < 0.4) {
        // 赢得国际比赛
        funds += 150000; // 奖金
        teamReputation += 15;
        alert('你赢得了国际比赛，获得了150000金币奖金，球队声望提升了15！');
    } else if (outcome < 0.7) {
        // 平局
        funds += 50000; // 小奖金
        teamReputation += 5;
        alert('国际比赛以平局结束，你获得了50000金币奖金，球队声望提升了5！');
    } else {
        // 未赢得国际比赛
        alert('你未能赢得国际比赛。');
    }
    internationalMatchStatus = '已结束';
    updateTournamentSystemDisplay();
});

// ==================== 球队设施影响 ====================

// 训练效果提升基于训练基地等级
function applyTrainingFacilityEffect(player) {
    const trainingEffect = 1 + (trainingFacilityLevel - 1) * 0.05; // 每级提升5%
    player.stats.shooting = Math.floor(player.stats.shooting * trainingEffect);
    player.stats.defense = Math.floor(player.stats.defense * trainingEffect);
    player.stats.speed = Math.floor(player.stats.speed * trainingEffect);
    player.stats.dribbling = Math.floor(player.stats.dribbling * trainingEffect);
    player.stats.passing = Math.floor(player.stats.passing * trainingEffect);
    player.overall = calculateOverall(player.stats);
    player.value = Math.floor(player.value * trainingEffect);
}

// 覆盖 trainPlayer 函数以应用训练基地效果
const originalTrainPlayer = window.trainPlayer;

window.trainPlayer = function(player) {
    originalTrainPlayer(player);
    // 应用训练基地效果
    applyTrainingFacilityEffect(player);
    alert(`${player.name}的属性经过训练有所提升（训练基地等级${trainingFacilityLevel}）。`);
};

// 比赛收入基于球场等级和球迷支持度
function calculateMatchIncome(baseIncome) {
    const stadiumBonus = stadiumLevel * 0.10; // 每级提升10%
    const fanBonus = (fanSupportLevel / 100) * 0.05; // 每100支持度提升5%
    return Math.floor(baseIncome * (1 + stadiumBonus + fanBonus));
}

// 覆盖 startMatch 函数以应用比赛收入和其他影响
const originalStartMatch = window.startMatch;

window.startMatch = function() {
    originalStartMatch();
    // 假设 script.js 更新了 'funds' 变量 after match
    // 现在额外添加比赛收入和影响
    // 这里需要确定何时执行额外逻辑，假设在比赛结束后立即执行
    // 由于 script.js 的 startMatch 使用 setInterval, we'll need to hook into when the match ends

    // Listen for match end by overriding the function that determines the match end
    // Alternatively, use a timer or a callback. For simplicity, add after a delay

    // Wait for the match to finish (assuming match takes 90 seconds as per script.js)
    setTimeout(() => {
        // 基础比赛收入
        let baseMatchIncome = 100000; // 示例值，根据实际游戏逻辑调整
        // 计算调整后的比赛收入
        let adjustedIncome = calculateMatchIncome(baseMatchIncome);
        funds += adjustedIncome;
        updateFundsDisplay();
        // 显示比赛收入
        const matchIncomeElem = document.getElementById('match-income');
        if (matchIncomeElem) {
            matchIncomeElem.innerText = `比赛收入：${adjustedIncome}金币`;
        }
        alert(`你从比赛中获得了${adjustedIncome}金币收入。`);

        // 赞助合同每日收入
        if (sponsorshipStatus) {
            funds += sponsorshipStatus.dailyIncome;
            updateFundsDisplay();
            alert(`来自赞助合同的每日收入：${sponsorshipStatus.dailyIncome}金币。`);
        }

        // 广告收入
        if (advertisingIncome > 0) {
            funds += advertisingIncome;
            updateFundsDisplay();
            alert(`来自广告的每日收入：${advertisingIncome}金币。`);
        }

        // 更新球队声望
        // 假设 script.js 设置了 lastMatchResult 变量
        if (typeof lastMatchResult !== 'undefined') {
            if (lastMatchResult === 'win') {
                teamReputation += 5;
            } else if (lastMatchResult === 'draw') {
                teamReputation += 2;
            } else if (lastMatchResult === 'lose') {
                teamReputation -= 3;
            }
            if (teamReputation > 100) teamReputation = 100;
            if (teamReputation < 0) teamReputation = 0;
            alert(`球队声望现为：${teamReputation}`);
        }

    }, 95000); // 假设比赛在95秒后结束
};

// ==================== 球迷系统影响 ====================

// 计算比赛收入时考虑球迷支持度和球场等级
// 已在 calculateMatchIncome 函数中实现

// 计算球队声望的改变已经在 startMatch 覆盖函数中实现

// ==================== 转会谈判 ====================

// 增加更复杂的转会谈判机制
function negotiatePlayerEnhanced(player) {
    const negotiationModalElement = document.getElementById('negotiation-modal');
    const negotiationModal = new bootstrap.Modal(negotiationModalElement);
    document.getElementById('negotiation-player-name').innerText = player.name;
    const negotiationContent = document.getElementById('negotiation-content');
    negotiationContent.innerHTML = `
        <p>球员估价：${player.value}金币</p>
        <p>综合能力：${player.overall}</p>
        <p>技能卡：${player.skills.length > 0 ? player.skills[0].name : '无'}</p>
        <input type="number" id="offer-input" class="form-control mb-2" placeholder="请输入您的报价">
        <p id="negotiation-feedback" class="text-danger"></p>
    `;
    document.getElementById('offer-btn').onclick = () => makeEnhancedOffer(player, negotiationModal);
    document.getElementById('cancel-negotiation-btn').onclick = () => negotiationModal.hide();
    negotiationModal.show();
}

// 增加技能卡和球员偏好的影响
function makeEnhancedOffer(player, negotiationModal) {
    const offerInput = document.getElementById('offer-input');
    const offer = parseInt(offerInput.value);
    const feedback = document.getElementById('negotiation-feedback');

    if (isNaN(offer) || offer <= 0) {
        feedback.innerText = '请输入有效的报价金额。';
        return;
    }

    // 考虑球员偏好和技能卡
    let minAcceptablePrice = player.value * 0.8;
    let maxAcceptablePrice = player.value * 1.2;

    // 如果球员有技能卡，增加他们对高报价的偏好
    if (player.skills.length > 0) {
        maxAcceptablePrice += player.skills[0].effect.shooting || 0; // 示例：技能卡影响价格
    }

    // 如果球队有高谈判技巧，调整价格范围
    let negotiationSkillBonus = 0;
    if (currentCoach && currentCoach.bonus) {
        negotiationSkillBonus = currentCoach.bonus.passing * 100; // 示例：教练的谈判技能
    }

    minAcceptablePrice -= negotiationSkillBonus;
    maxAcceptablePrice += negotiationSkillBonus;

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

// 覆盖 negotiatePlayer 函数
const originalNegotiatePlayer = window.negotiatePlayer;
window.negotiatePlayer = function(player) {
    negotiatePlayerEnhanced(player);
};

// ==================== 财务管理的每日收入 ====================

// 在每次保存游戏时，确保额外的收入被计入
function applyDailyFinancials() {
    if (sponsorshipStatus) {
        funds += sponsorshipStatus.dailyIncome;
        updateFundsDisplay();
        alert(`来自赞助合同的每日收入：${sponsorshipStatus.dailyIncome}金币。`);
    }

    if (advertisingIncome > 0) {
        funds += advertisingIncome;
        updateFundsDisplay();
        alert(`来自广告的每日收入：${advertisingIncome}金币。`);
    }
}

// 你可以在游戏的某个地方调用 applyDailyFinancials，例如每天游戏内时间流逝时
// 这里假设在每场比赛后调用
// 因为 script.js 未提供时间流逝机制，这里不自动调用
// 可以在 startMatch 覆盖函数中调用 applyDailyFinancials()
const originalStartMatchWithFinancials = window.startMatch;

window.startMatch = function() {
    originalStartMatchWithFinancials();
    applyDailyFinancials();
};

// ==================== 球迷系统影响 ====================

// 影响比赛收入和球队声望已经在相关函数中实现

// ==================== 赛事系统影响 ====================

// 赛事系统的奖金和声望提升已经在 simulate 函数中实现

// ==================== 初始化 ====================

// 初始化所有显示
function initializeExtraFeatures() {
    updateFanSupportDisplay();
    updateFinancialManagementDisplay();
    updateTournamentSystemDisplay();
}

// 页面加载完成后初始化
window.addEventListener('load', initializeExtraFeatures);
