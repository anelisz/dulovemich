document.getElementById('noButton').addEventListener('click', function() {
    // Перемещаем кнопку "Нет" на случайные координаты
    var noButton = document.getElementById('noButton');
    var container = document.body;

    var maxX = container.offsetWidth - noButton.offsetWidth;
    var maxY = container.offsetHeight - noButton.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Показать текст
    document.getElementById('response').textContent = "А я сильнее люблю!";
    document.getElementById('response').style.display = "block";

    // Показать кнопку "Продолжить"
    document.getElementById('continueButton').style.display = "block";
});

document.getElementById('continue').addEventListener('click', function() {
    // После нажатия на "Продолжить" переходим на новую страницу
    window.location.href = "page2.html"; // Убедитесь, что файл page2.html существует
});
