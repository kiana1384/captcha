let show = document.querySelector("div.show");
let ok = document.querySelector("button.ok");
let text = document.querySelector("input#text");
let reset = document.querySelector("button.reset");

reset.addEventListener("click", () => {
    randomstring();
    inputvo.value = "";
  });
function randomstring() {
    let randomstring1 = Math.random().toString(36).substring(2,7);
    let randomstringarray = randomstring1.split("");
    let changestring = randomstringarray.map((char) => {
      if (Math.random() > 0.5) {
        return char.toUpperCase();
      } else {
      return char;
      }
    });
    show.innerHTML = changestring.join("");
    check(changestring.join(""));
  };
  randomstring();