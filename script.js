let time = document.querySelector("#time");
function clock() {
  const time = document.querySelector("#time");
  let date = new Date();
  let years = date.GetFullyYear();
  let months = date.GetMonth();
  let days = date.GetDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (months < 10) {
    months = "0" + months;
  }
  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.textContent = years + "-" + months + "-" + days + "-" + hours + "-" + minutes + "-" + seconds;
}
setInterval(() => { clock() }, 1000);
