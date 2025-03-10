document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.querySelector("[lmMyBtn]");
  const yourButton = document.querySelector("[lmYourBtn]");
  const textElement = document.querySelector("[lmText]");

  let mySize = 1;
  let yourSize = 1;
  let count = 0;

  myButton.addEventListener("click", function () {
    if (count < 5) {
      mySize -= 0.1;
      yourSize += 0.1;
      myButton.style.transform = `scale(${mySize})`;
      yourButton.style.transform = `scale(${yourSize})`;
      count++;
    } else {
      myButton.style.display = "none";
    }
    textElement.textContent = "Попробуй еще";
    textElement.style.color = "#980000";
  });

  yourButton.addEventListener("click", function () {
    textElement.textContent = "Правильно";
    textElement.style.color = "#00981c";
    myButton.style.transform = "scale(1)";
    myButton.style.display = "inline-block";
    myButton.disabled = true;
    myButton.style.cursor = "default";
    yourButton.style.transform = "scale(1)";
    yourButton.style.backgroundColor = "#00981c";
    yourButton.style.border = "none";
    yourButton.style.cursor = "default";
    mySize = 1;
    yourSize = 1;
    count = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lsInput = document.querySelector("[lsInput]");
  const lsCheckBtn = document.querySelector("[lsCheckBtn]");
  const lsSeeBtn = document.querySelector("[lsSeeBtn]");
  const lsText = document.querySelector("[lsText]");

  let lsSeeBtnSize = 1;
  let lsSeeBtnClicks = 0;

  lsSeeBtn.style.display = "none";

  lsCheckBtn.addEventListener("click", function () {
    const inputValue = lsInput.value;

    if (inputValue === "") {
      lsText.textContent = "Введи любое значение";
    } else {
      lsText.textContent = "Попробуй еще";
      lsSeeBtn.style.display = "inline-block";

      if (lsSeeBtnClicks < 5) {
        lsSeeBtnSize += 0.1;
        lsSeeBtn.style.transform = `scale(${lsSeeBtnSize})`;
        lsSeeBtnClicks++;
      }
      if (lsSeeBtnClicks >= 5) {
        lsInput.disabled = true;
        lsCheckBtn.disabled = true;
        lsCheckBtn.style.cursor = "default";
      }
    }
  });

  lsSeeBtn.addEventListener("click", function () {
    lsText.textContent = "Моя любовь к тебе безгранична.";
    lsSeeBtn.style.display = "none";
    lsSeeBtn.style.transform = "scale(1)";
    lsInput.disabled = true;
    lsCheckBtn.disabled = true;
    lsSeeBtnClicks = 0;
    lsSeeBtnSize = 1;
  });
});
