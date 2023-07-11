const countdown = () => {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");

  const alert = document.querySelector(".alert");
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");
  let countdownTimer = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      alert.classList.add("show");
      alert.textContent = "Value cannot be empty!";
      setTimeout(() => {
        alert.classList.remove("show");
      }, 2000);
    }

    countdownTimer = setInterval(startTimer, 1000);
  });

  function stopInterval() {
    clearInterval(countdownTimer);
  }

  function startTimer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      hour.value = "";
      minute.value = "";
      second.value = "";
      clearInterval(countdownTimer);
    } else if (second.value != 0) {
      second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    } else if (minute.value != 0 && second.value == 0) {
      second.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }

    if (second.value > 59) {
      minute.value++;
      second.value = parseInt(second.value) - 59;
    }
    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }

    hour.value = hour.value.padStart(2, "0");
    minute.value = minute.value.padStart(2, "0");
    second.value = second.value.padStart(2, "0");

    startBtn.disabled = true;
  }

  stopBtn.addEventListener("click", () => {
    stopInterval();
    startBtn.disabled = false;
  });

  resetBtn.addEventListener("click", () => {
    stopInterval();
    hour.value = "";
    minute.value = "";
    second.value = "";
    startBtn.disabled = false;
  });
};

export default countdown;
