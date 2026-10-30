// ==========================================
// CONFIG.JS — Все внешние ресурсы и настройки
// ==========================================

const GAME_CONFIG = {
    gameTitle: "Salty Boy - Comic Noir Slot",
    defaultBet: 100,
    saveFileName: "saves",

    audio: {
        backgroundMusic: "music.mp3",
        soundVolume: 0.5
    },

    backgrounds: {
        desertImage: "desert.jpg"
    },

    characterVideo: "boy.webm",

    // Все графические ассеты и видео вынесены сюда
    assets: {
        boyImage: "boy.png",
        girlImage: "girl.webp",
        girlVideo: "girl.webm",
        bossImage: "boss.jpg",
        bossVideo: "boy.webm",
        pipWildImage: "pip.jpg",
        redSymbol: "red.svg",
        blueSymbol: "blu.svg",
        blackSymbol: "blk.svg",
        ygsSymbol: "ygs.svg"
    },

    betSteps: [1, 2, 3, 5, 10, 15, 25, 50, 75, 100, 150, 200, 250, 500]
};
