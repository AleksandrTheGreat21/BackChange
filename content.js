// content.js
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "changeColor") {
    changeBackgroundColor(message.color);
  }
});
