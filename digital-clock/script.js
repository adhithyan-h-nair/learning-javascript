function getTime() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2, 0)
  const timeString = `${hour}:${minute}:${second} ${ampm}`;
  document.getElementById("clock").innerText = timeString;
}
getTime();
setInterval(getTime, 1000);
