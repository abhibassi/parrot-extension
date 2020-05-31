chrome.storage.local.get("typeface", function (stored) {
  if (stored.typeface != undefined) {
    assignTextToTextareas(stored.typeface);
  }
});

function assignTextToTextareas(userInput) {
  var elements = document.getElementsByTagName("*");
  for (let element of elements) {
    element.style.fontFamily = userInput;
  }
}