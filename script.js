const container = document.getElementById("container");

let count = 1;

infiniteScroll();

function infiniteScroll() {
  for (let i = 0; i < 25; i++) {
    const paragraph = document.createElement("p");
    paragraph.innerText = `Masai Students ${count++}`;
    container.appendChild(paragraph);
  }
}

container.addEventListener("scroll", function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    console.log(
      "scrollTop + clientHeight:",
      container.scrollTop + container.clientHeight,
      "scrollHeight:",
      container.scrollHeight
    );

    infiniteScroll();
  }
});
