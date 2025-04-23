document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('name-form');
  const greeting = document.getElementById('greeting');
  const wordList = document.getElementById('word-list');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const middleInitial = document.getElementById('middle-initial').value.trim();
    const lastName = document.getElementById('last-name').value.trim();

    let fullName = firstName;
    if (middleInitial) {
      fullName += ` ${middleInitial}.`;
    }
    fullName += ` ${lastName}`;

    greeting.textContent = `Welcome to Jack of All Spade Podcast, ${fullName}!`;
    wordList.innerHTML = "";
  });

  // Function to check if one number is evenly divisible by another
  function checkDivision(num, divisor) {
    return num % divisor === 0;
  }

  // FizzBuzz-style generator using checkDivision function
  window.loadFizzBuzz = function () {
    form.style.display = 'none';
    wordList.innerHTML = "";

    const defaultWord = "New Podcast Episode";
    const maxCount = 140;

    const firstDivisor = 3;
    const secondDivisor = 5;

    for (let i = 1; i <= maxCount; i++) {
      let lineText = `${i}. `;

      if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
        lineText += "Shout Out Videos! Behind Scenes Videos!";
      } else if (checkDivision(i, firstDivisor)) {
        lineText += "Shout Out Videos!";
      } else if (checkDivision(i, secondDivisor)) {
        lineText += "Behind Scenes Videos!";
      } else {
        lineText += defaultWord;
      }

      const listItem = document.createElement("li");
      listItem.textContent = lineText;
      wordList.appendChild(listItem);
    }
  };
});
