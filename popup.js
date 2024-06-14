// popup.js
document.getElementById("changeColorButton").addEventListener("click", () => {
  const color = document.getElementById("colorPicker").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { command: "changeColor", color: color });
  });
});
