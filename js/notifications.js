

const checkPermission = () => {
   if(!('serviceWorker' in navigator)) {
       throw new Error ('SvcWorker is not supported')
   }

   if (!('Notification' in window)) {
       throw new Error ('Notification is not supported')
   }
}

const registerSW = async () => {
   const registration = await navigator.serviceWorker.register('./js/sw.js');
   return registration; 
}

const requestNotificationpermission = async () => {
   const permission = await Notification.requestPermission();
   if (permission !== 'granted') {
       throw new Error ("Notification permission is not granted")
   } else {
       new Notification ("PTI Competition is on April 16th");
   }
}

checkPermission();
registerSW();
requestNotificationpermission();






















/* 

notifications.js 
 const checkPermission = () => {
    if(!('serviceWorker' in navigator)) {
        throw new Error ('SvcWorker is not supported')
    }

    if (!('Notification' in window)) {
        throw new Error ('Notification is not supported')
    }
 }

 const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration; 
 }

 const requestNotificationpermission = async () => {
    const permission = await Notification.requestPermission();
 }

 if (permission !== 'granted') {
        throw new Error ("Notification permission is not granted")
 } else {
    new Notification ("PTI Competition is on April 16th");
 }

 checkPermission()
 registerSW()
*/  