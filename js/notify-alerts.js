
function showNotifications(message) {
    // console.log(Notification.permission);
    console.log('showNotifications function called with message:', message);
  
    if (!("Notification" in window)) {
      alert("Notifications are not supported by your browser.");
      return; // Exit the function if notifications are not supported.
    }

    // Check notification permission and handle accordingly
    function showNotification() {
      new Notification(document.title, { body: message });
  }
  
    if (Notification.permission === "granted") {
      
      new Notification(document.title, { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification(document.title, { body: message });
        }
      });
    }
  }
   



















/* 

function showNotifications(message) {
    if(!("Notification" in window)) {
        alert("This browser doees not support notifications")
    } else if (Notification.permission === "granted"){
        new Notification(document.title, {body:message});
    } else if (notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission){
            if(permission === "granted") {
                new Notification(document.title, {body:message});
            }
        });
    }
}
*/ 