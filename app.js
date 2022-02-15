// selectors

const addBtn = document.querySelector("#add");
const numberPlaceholder = document.querySelector("#number");
const lotto = document.querySelector(".lottom");

// functions

const createNumber = () => {
  let i = 0;
  let lottoNumbers = [];
  while (i < 6) {
    const numbers = Math.floor(Math.random() * 49 + 1);
    //   console.log(numbers);
    if (!lottoNumbers.includes(numbers)) {
      lottoNumbers.push(numbers);
    }
    i++;
  }
  lottoNumbers.sort((a, b) => {
    return a - b;
  });

  return lottoNumbers;
};

const loopCreateNumber = () => {
  const döngü = numberPlaceholder.value;
  // console.log(döngü);
  let j = 0;
  while (j < döngü) {
    createNumber();
    const paragraf = document.createElement("p");
    paragraf.className = "lotto";
    lotto.appendChild(paragraf);
    paragraf.innerHTML = createNumber();
    j++;
  }
};

//event listeners
// bu bir test commiti

addBtn.addEventListener("click", () => {
  lotto.innerHTML = "";
  if (!numberPlaceholder.value) {
    return;
  }
  // console.log(createNumber());
  loopCreateNumber();
  numberPlaceholder.value = "";
});

numberPlaceholder.addEventListener("change", () => {
  lotto.innerHTML = "";
});
