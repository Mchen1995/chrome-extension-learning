const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleDateString();
timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "CM4",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);
