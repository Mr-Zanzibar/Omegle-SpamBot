let retryCount = 0;

function Spam() {
    try {
        var wlc = ['Hi', 'Hey', 'Sup', 'Hello', 'lol', ':)', 'Whats up', 'Yo', 'Heyy'];
        var Ad = ['YOUR_MESSAGE', 'YOUR_MESSAGE'];

        let sendButton = document.querySelector('.sendbtn');
        let disconnectButton = document.querySelector('.disconnectbtn');
        let chatMessage = document.querySelector('.chatmsg');

        let broadcastId = document.getElementById('broadcast-id').textContent;

        let onlineCount = document.getElementById('onlinecount').textContent.trim();

        if (!sendButton || !disconnectButton || !chatMessage) {
            if (retryCount < 2) {
                retryCount++;
                console.warn("One or more elements not found. Retrying...");
                return;
            }
            console.error("One or more elements not found. Aborting spam.");
            clearInterval(spamInterval);
            return;
        }

        retryCount = 0; // Reset the retry count if elements are found.

        var rwlc = wlc[Math.floor(Math.random() * wlc.length)];
        var rAd = Ad[Math.floor(Math.random() * Ad.length)];

        chatMessage.value = rwlc;
        sendButton.click();
        chatMessage.value = rAd;
        sendButton.click();

        setTimeout(() => {
            disconnectButton.click();
            console.log('%cSuccess: Spam completed without errors.', 'color: green; font-weight: bold;');
            console.log('Broadcast ID:', broadcastId);
            console.log('Online Count:', onlineCount);
        }, 4500);

        setTimeout(() => {
            disconnectButton.click();
        }, 4500);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

let spamInterval = setInterval(Spam, 5000); // 5 sec
