document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('name-form');
  const greeting = document.getElementById('greeting');
  const wordList = document.getElementById('word-list');

  const loadFizzBuzz = () => {
    wordList.innerHTML = "";

    const defaultWord = "New Podcast Episode";
    const maxCount = 140;

    for (let i = 1; i <= maxCount; i++) {
      let lineText = "";

      if (i % 3 === 0 && i % 5 === 0) {
        lineText += "Shout Out and Behind Scenes Videos!";
      } else if (i % 3 === 0) {
        lineText += "Shout Out Videos!";
      } else if (i % 5 === 0) {
        lineText += "Behind Scenes Videos!";
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


  
