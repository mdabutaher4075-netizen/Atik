importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({ messagingSenderId: "956256224061" });
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
    const adUrl = payload.data.ad_url;
    return clients.openWindow(adUrl);
});
