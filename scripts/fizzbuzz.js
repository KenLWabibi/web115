document.getElementById('name-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const middleInitialRaw = document.getElementById('middle-initial').value.trim();
  const lastName = document.getElementById('last-name').value.trim();

  let fullName = firstName;
  if (middleInitialRaw) {
    fullName += ` ${middleInitialRaw}.`;
  }
  fullName += ` ${lastName}`;

  document.getElementById('greeting').textContent =
    `Welcome to Jack of All Spade Podcast, ${fullName}!`;

  const counter = parseInt(prompt(`How many episodes would you like to explore, ${firstName}?`));

  if (isNaN(counter) || counter <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  const wordList = document.getElementById('word-list');
  wordList.innerHTML = "";

  const topics = [
    "Famous Collaborations",
    "Behind Scenes",
    "Listener Q&A",
    "Episode Highlights",
    "Personal Stories"
  ];

  for (let i = 1; i <= counter; i++) {
    let listItem = document.createElement('li');
    let evenOrOdd = (i % 2 === 0) ? "The episode number is even" : "The episode number is odd";
    listItem.textContent = `${topics[i % topics.length]} - ${evenOrOdd}`;
    wordList.appendChild(listItem);
  }
});
