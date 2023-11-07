function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function spam() {
  try {
    const selfVideo = document.getElementById('selfvideo');

    if (selfVideo) {
      console.warn("SCRIPT CAN ONLY BE USED IN THE TEXT SECTION OF OMEGLE");
      console.warn("THIS IS TO PREVENT NERDS LIKE YOU FROM BEING BANNED");
      clearInterval(spamInterval);
      return;
    }

    const wlc = ['Hi', 'Hey', 'Sup', 'Hello', 'lol', ':)', 'Whats up', 'Yo', 'Heyy'];
    const Ad = ['YOUR_MESSAGE', 'YOUR_MESSAGE'];

    const sendButton = document.querySelector('.sendbtn');
    const disconnectButton = document.querySelector('.disconnectbtn');
    const chatMessage = document.querySelector('.chatmsg');
    const broadcastId = document.getElementById('broadcast-id').textContent;
    const onlineCount = document.getElementById('onlinecount').textContent.trim();

    if (!sendButton || !disconnectButton || !chatMessage) {
      if (retryCount < 2) {
        retryCount++;
        console.warn("One or more elements not found. Retrying...");
        return;
      }
      console.error("One or more elements not found. Aborting spam.");
      console.log('%cReport this error on the official script page: https://github.com/Mr-Zanzibar/Omegle-SpamBot', 'color: magenta; font-weight: bold;');
      clearInterval(spamInterval);
      return;
    }

    retryCount = 0;

    const rwlc = getRandomItem(wlc);
    const rAd = getRandomItem(Ad);

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

let retryCount = 0;
const spamInterval = setInterval(spam, 5000); // 5 sec
