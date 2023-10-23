document.getElementById("calculate").addEventListener("click", function () {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  const name1error = document.getElementsByClassName("name1error");
  const name2error = document.getElementsByClassName("name2error");

  if (name1 !== "" && name2 !== "") {
    calculateLove(name1, name2);
  }
  if (name1 === "") {
    name1error[0].style.display = "block";
    name2error[0].style.display = "none";
  }
  if (name2 === "") {
    name1error[0].style.display = "none";
    name2error[0].style.display = "block";
  }
  if (name1 === "" && name2 === "") {
    name1error[0].style.display = "block";
    name2error[0].style.display = "block";
  }
});

document.getElementById("name1").addEventListener("keypress", function (event) {
  const name1 = document.getElementById("name1").value.trim();
  const name1error = document.getElementsByClassName("name1error");
  if (name1 !== "") {
    name1error[0].style.display = "none";
  }
  if (event.keyCode === 13) {
    const name2 = document.getElementById("name2").value.trim();
    const name2error = document.getElementsByClassName("name2error");
    if (name2 !== "") {
      calculateLove(name1, name2);
    }
    if (name2 === "") {
      name1error[0].style.display = "none";
      name2error[0].style.display = "block";
    }
  }
});

document.getElementById("name2").addEventListener("keypress", function (event) {
  const name2 = document.getElementById("name2").value.trim();
  const name2error = document.getElementsByClassName("name2error");
  if (name2 !== "") {
    name2error[0].style.display = "none";
  }
  if (event.keyCode === 13) {
    const name1 = document.getElementById("name1").value.trim();
    const name1error = document.getElementsByClassName("name1error");
    if (name1 !== "") {
      calculateLove(name1, name2);
    }
    if (name1 === "") {
      name1error[0].style.display = "block";
      name2error[0].style.display = "none";
    }
  }
});

document.getElementById("swap").addEventListener("click", function () {
  swapNames();
});

function calculateLove(name1, name2) {
  const loveLevel = calculateLoveLevel(name1, name2);

  const inputGroupElement = document.getElementsByClassName("input-group");
  const resultElement = document.getElementsByClassName("result");
  const emojis = document.getElementsByClassName("emojis");
  const resultPercentageElement =
    document.getElementsByClassName("result-percentage");
  const loveEmojis = getLoveEmojis(loveLevel);

  // resultElement.innerHTML = `Love Level: ${loveLevel}% ${loveEmojis}<br>${getLoveSuggestions(loveLevel)}`;
  resultElement[0].style.display = "flex";
  emojis[0].innerHTML = loveEmojis;
  resultPercentageElement[0].innerHTML = `${loveLevel}%`;

  inputGroupElement[0].style.display = "none";

  const calculate = document.getElementById("calculate");
  calculate.innerHTML = "Break Again";

  const swap = document.getElementById("swap");
  swap.style.display = "none";

  const back = document.getElementById("back");
  back.style.display = "block";

  const hope = document.getElementsByClassName("hope");
  hope[0].style.display = "block";
  hope[0].innerHTML = getLoveSuggestions(loveLevel);
}

const back = document.getElementById("back");
back.addEventListener("click", function () {
  const inputGroupElement = document.getElementsByClassName("input-group");
  const resultElement = document.getElementsByClassName("result");
  const emojis = document.getElementsByClassName("emojis");
  const resultPercentageElement =
    document.getElementsByClassName("result-percentage");

  inputGroupElement[0].style.display = "flex";

  resultElement[0].style.display = "none";
  emojis[0].innerHTML = "";
  resultPercentageElement[0].innerHTML = "";

  const calculate = document.getElementById("calculate");
  calculate.innerHTML = "Calculate";

  const swap = document.getElementById("swap");
  swap.style.display = "block";

  back.style.display = "none";

  // Clear the input fields.
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";

  document.getElementsByClassName("hope")[0].style.display = "none";
});

function swapNames() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;

  document.getElementById("name1").value = name2;
  document.getElementById("name2").value = name1;
}

function calculateLoveLevel(name1, name2) {
  // Remove spaces and convert names to lowercase.
  name1 = name1.replace(/\s/g, "").toLowerCase();
  name2 = name2.replace(/\s/g, "").toLowerCase();

  // Calculate the absolute difference in the lengths of the names.
  const lengthDifference = Math.abs(name1.length - name2.length);

  // Calculate the number of common characters.
  let commonCharacterCount = 0;
  for (let i = 0; i < name1.length; i++) {
    if (name2.includes(name1[i])) {
      commonCharacterCount++;
    }
  }

  // Calculate a weighted score based on various factors and add a random factor.
  const score =
    lengthDifference * 0.2 + commonCharacterCount * 1 + getRandomInt(-10, 10);

  // Ensure the score is within the range of 0 to 100.
  const adjustedScore = Math.min(100, Math.max(0, score));

  return Math.round(adjustedScore);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getLoveSuggestions(loveLevel) {
  const funnySuggestions = [
    "You appear to be experiencing some tensions in your relationship. It's crucial to address the issues openly and honestly.",
    "Hate can be toxic. Try to find common ground and resolve conflicts through constructive communication.",
    "It seems like there's a significant level of hate. Consider seeking professional help or mediation to work through your issues.",
    "Your hate level is dangerously high. It's essential to address and resolve your conflicts as soon as possible to prevent further harm.",
    "Hate can erode a relationship. Focus on rebuilding trust and understanding to create a healthier connection.",
    "Tensions can lead to destructive patterns. Take time to cool off and then work on repairing your bond.",
    "Hate is a heavy burden. Seek support from friends, family, or a therapist to help you navigate your challenges.",
    "Don't let hate take over. Plan activities that you both enjoy to rekindle the positive aspects of your relationship.",
    "Sometimes, a fresh start is needed. Explore new ways to connect and rediscover the love you once shared.",
    "Remember, it's never too late to change. Work on forgiving, forgetting, and rebuilding a stronger connection."
];


  const randomIndex = Math.floor(Math.random() * funnySuggestions.length);
  return funnySuggestions[randomIndex];
}

function getLoveEmojis(loveLevel) {
  if (loveLevel <= 10) {
    return "😍❤️"; // Extremely low love level - Love and happiness.
  } else if (loveLevel <= 30) {
    return "😄✌️"; // Low to moderate love level - Smiles and positivity.
  } else if (loveLevel <= 50) {
    return "😐🤔"; // Moderate love level - Neutral and contemplative.
  } else if (loveLevel <= 70) {
    return "😡😢"; // High love level - Anger and sadness.
  } else {
    return "😡💔"; // Extremely high love level - High anger and heartbreak.
  }
}
