var userInput = document.getElementsByName("typeface")[0];
var previewText = document.getElementsByClassName("preview")[0];

function updateTypeface() {
  if (userInput.value != undefined) {
    userInput.style.fontFamily = userInput.value;
    previewText.style.fontFamily = userInput.value;
  }
}

userInput.addEventListener("input", updateValue);

function updateValue(e) {
  chrome.storage.local.set({
      typeface: e.target.value,
    },
    function () {
      chrome.tabs.executeScript({
        file: "content.js",
      });
    }
  );
  updateTypeface();
}

chrome.storage.local.get("typeface", function (stored) {
  if (stored.typeface != undefined) {
    userInput.value = stored.typeface;
    updateTypeface();
  }
});