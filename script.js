let searchButton = document.querySelector("#search-all");

searchButton.addEventListener("click", query);

function query() {
  let inputs = [...document.querySelectorAll(".que")];
  let boxes = document.querySelectorAll("input[type='checkbox']");

  let obj = {};
  let array = inputs.map((ele, index) => {
    if (boxes[index].checked === true) {
      obj[inputs[index].value] = index;
    }
  });

  let youtube = `https://www.youtube.com/results?search_query=`;
  let google = `https://www.google.com/search?q=`;
  let mdn = `https://developer.mozilla.org/en-US/search?q=`;
  let arraySites = [youtube, google, mdn];

  for ([key, value] of Object.entries(obj)) {
    window.open(`${arraySites[value]}${key}`);
  }
}
