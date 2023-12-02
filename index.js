let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId); // Отменяем предыдущий интервал, если он уже существует
  }
  timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
  clearInterval(timerId); // останавливаем таймер
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  clock.textContent = hours + ":" + formattedMinutes + ":" + formattedSeconds;
}

// updateClock();
