document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('name-form');
    const greeting = document.getElementById('greeting');
    const wordList = document.getElementById('word-list');
  
    // Function to check if one number is evenly divisible by another
    function checkDivision(num, divisor) {
      return num % divisor === 0;
    }
  
    const loadFizzBuzz = () => {
      wordList.innerHTML = "";
  
      const defaultWord = "New Podcast Episode";
      const maxCount = 140;
  
      // Divisors
      const firstDivisor = 3;
      const secondDivisor = 5;
      const thirdDivisor = 7;
  
      for (let i = 1; i <= maxCount; i++) {
        let lineText = "";
  
        if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
          lineText += "Shout Out and Behind Scenes Videos, BANG!";
        } else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
          lineText += "Shout Out and Behind Scenes Videos!";
        } else if (checkDivision(i, firstDivisor) && checkDivision(i, thirdDivisor)) {
            lineText += "Shout Out Videos, BANG!";
        } else if (checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
            lineText += "Behind Scenes Videos, BANG!";
        } else if (checkDivision(i, firstDivisor)) {
            lineText += "Shout Out Videos!";
         } else if (checkDivision(i, secondDivisor)) {
            lineText += "Behind Scenes Videos!";
         } else if (checkDivision(i, thirdDivisor)) {
            lineText += "BANG!";
         } else {
            lineText += defaultWord;
        }
  
        const listItem = document.createElement("li");
        listItem.textContent = lineText;
        wordList.appendChild(listItem);
      }
    };
  
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
  
      greeting.textContent = `Welcome to Jack of All Spades Podcast, ${fullName}!`;
      wordList.innerHTML = "";
  
      loadFizzBuzz();
    });
  });