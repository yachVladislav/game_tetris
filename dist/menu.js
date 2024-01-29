function showSettings() {
    console.log(defaultInterval);
}

function startGame() {
    // Ваш код для начала игры
}

function showLeaderboard() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('settings').classList.add('hidden');
    document.getElementById('leaderboard').classList.remove('hidden');

    // Ваш код для получения и отображения таблицы рекордов из local storage
}

function saveSettings() {
    // Ваш код для сохранения настроек в local storage
    alert('Настройки сохранены!');
}