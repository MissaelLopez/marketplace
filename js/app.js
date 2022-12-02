var url = window.location.href;
var swLocation = "/marketplace/sw.js";

if (navigator.serviceWorker) {
  if (url.includes("localhost")) {
    swLocation = "/sw.js";
  }
  navigator.serviceWorker.register(swLocation);
}

function isOnline() {
  if (navigator.onLine) {
    alert("Online");
  } else {
    alert("Offline");
  }
}

window.addEventListener("online", isOnline);
window.addEventListener("offline", isOnline);

isOnline();
