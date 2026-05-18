// 1. Установите дату (Год-Месяц-ДеньTЧасы:Минуты:Секунды)
const targetDate = new Date("2026-06-09T00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".hero__timer-container").innerHTML = "<h3>Кэмп начался!</h3>";
    return;
  }
  
  // Расчет времени
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Вывод в HTML (добавляем 0 перед однозначными числами для красоты)
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  
}, 1000);