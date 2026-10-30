const GAME_THEME = {
    symbolsData: {
        red: `<div style="width:100%;height:100%;background:#f43f5e;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.redSymbol}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.5);" onerror="this.style.display='none'">
        </div>`,
        blue: `<div style="width:100%;height:100%;background:#60a5fa;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.blueSymbol}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.5);" onerror="this.style.display='none'">
        </div>`,
        black: `<div style="width:100%;height:100%;background:#64748b;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.blackSymbol}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.5);" onerror="this.style.display='none'">
        </div>`,
        ygs: `<div style="width:100%;height:100%;background:#4ade80;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.ygsSymbol}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.5);" onerror="this.style.display='none'">
        </div>`,
        boss: `<div style="width:100%;height:100%;background:#b45309;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.bossImage}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
        </div>`,
        girl: `<div style="width:100%;height:100%;background:#991b1b;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.girlImage}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
        </div>`,
        gangster: `<div style="width:100%;height:100%;background:#1e3a8a;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.boyImage}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
        </div>`,
        wild: `<div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;border-radius:4px;overflow:hidden;position:relative;">
            <img src="${GAME_CONFIG.assets.pipWildImage}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
        </div>`,
        scatter: `<div style="width:100%;height:100%;background:#eab308;display:flex;align-items:center;justify-content:center;border-radius:4px;">
            <div style="font-size:36px;font-weight:900;color:#713f12;">₿</div>
        </div>`
    },

    symbolsConfig: [
        { id: 'red', val: 0.12, isPremium: false, weight: 25 },
        { id: 'blue', val: 0.10, isPremium: false, weight: 25 },
        { id: 'black', val: 0.08, isPremium: false, weight: 25 },
        { id: 'ygs', val: 0.15, isPremium: false, weight: 20 },
        { id: 'boss', val: 1.50, isPremium: true, weight: 10 },
        { id: 'girl', val: 2.00, isPremium: true, weight: 8 },
        { id: 'gangster', val: 1.80, isPremium: true, weight: 8 },
        { id: 'wild', val: 3.00, isPremium: false, isWild: true, weight: 5 },
        { id: 'scatter', val: 0.50, isPremium: false, isScatter: true, weight: 2 }
    ]
};
