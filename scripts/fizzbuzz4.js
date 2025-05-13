document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('fuzzbuzz-form');
  const greeting = document.getElementById('greeting');
  const wordList = document.getElementById('word-list');

  function checkDivision(num, divisor) {
    return num % divisor === 0;
  }

  const loadFizzBuzz = (div1, word1, div2, word2, div3, word3, maxCount, defaultWord) => {
    wordList.innerHTML = "";

    for (let i = 1; i <= maxCount; i++) {
      let lineText = "";

      if (checkDivision(i, div1) && checkDivision(i, div2) && checkDivision(i, div3)) {
        lineText = `${word1} ${word2} ${word3}`;
      } else if (checkDivision(i, div1) && checkDivision(i, div2)) {
        lineText = `${word1} ${word2}`;
      } else if (checkDivision(i, div1) && checkDivision(i, div3)) {
        lineText = `${word1} ${word3}`;
      } else if (checkDivision(i, div2) && checkDivision(i, div3)) {
        lineText = `${word2} ${word3}`;
      } else if (checkDivision(i, div1)) {
        lineText = word1;
      } else if (checkDivision(i, div2)) {
        lineText = word2;
      } else if (checkDivision(i, div3)) {
        lineText = word3;
      } else {
        lineText = defaultWord;
      }

      const listItem = document.createElement("li");
      listItem.textContent = lineText;
      wordList.appendChild(listItem);
    }
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const {
      ['first-name']: firstNameInput,
      ['middle-initial']: middleInitialInput,
      ['last-name']: lastNameInput,
      ['word-1']: word1Input,
      ['word-2']: word2Input,
      ['word-3']: word3Input,
      ['default-word']: defaultWordInput,
      ['divisor-1']: div1Input,
      ['divisor-2']: div2Input,
      ['divisor-3']: div3Input,
      ['total-count']: totalCountInput,
    } = form.elements;

    const firstName = firstNameInput.value.trim();
    const middleInitial = middleInitialInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const word1 = word1Input.value.trim();
    const word2 = word2Input.value.trim();
    const word3 = word3Input.value.trim();
    const defaultWord = defaultWordInput.value.trim();
    const divisor1 = parseInt(div1Input.value);
    const divisor2 = parseInt(div2Input.value);
    const divisor3 = parseInt(div3Input.value);
    const total = parseInt(totalCountInput.value);

    let fullName = firstName;
    if (middleInitial) {
      fullName += ` ${middleInitial}.`;
    }
    fullName += ` ${lastName}`;

    greeting.textContent = `Welcome to Jack of All Spades Podcast, ${fullName}!`;

    loadFizzBuzz(divisor1, word1, divisor2, word2, divisor3, word3, total, defaultWord);
  });
});
