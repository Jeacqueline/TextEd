const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt=event;
    butInstall.classList.remove('hiden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.classList.add('hidden');
    window.deferredPrompt.prompt();
    const {outcome}= await window.deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    window.deferredPrompt= null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App correctly installed!🥳', event);
    window.deferredPrompt= null;
});
