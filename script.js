document.getElementById("calculate").addEventListener("click", function () {
    calculateHate();
});

document.getElementById("swap").addEventListener("click", function () {
    swapNames();
});

function calculateHate() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();

    const hateLevel = calculateHateLevel(name1, name2);

    const resultElement = document.getElementById("result");
    const hateEmojis = getHateEmojis(hateLevel);

    resultElement.innerHTML = `Hate Level: ${hateLevel}% ${hateEmojis}<br>${getHateSuggestions(hateLevel)}`;
}

function swapNames() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    document.getElementById("name1").value = name2;
    document.getElementById("name2").value = name1;
}

function calculateHateLevel(name1, name2) {
    // Remove spaces and convert names to lowercase.
    name1 = name1.replace(/\s/g, '').toLowerCase();
    name2 = name2.replace(/\s/g, '').toLowerCase();

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
    const score = (lengthDifference * 0.2) + (commonCharacterCount * 1) + getRandomInt(-10, 10);

    // Ensure the score is within the range of 0 to 100.
    const adjustedScore = Math.min(100, Math.max(0, score));

    return Math.round(adjustedScore);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getHateSuggestions(hateLevel) {
    const funnySuggestions = [
        "You seem to be in a loving relationship. Keep nurturing it with kindness!",
        "You're on the right path. Consider planning a special date night to keep the spark alive.",
        "Things are looking up. Share your dreams and aspirations with each other to strengthen your bond.",
        "A little challenge may be creeping in. Try a relaxing weekend together to reconnect.",
        "Tensions are a part of every relationship. Remember to forgive, forget, and move forward together.",
        "Every relationship has its ups and downs. Seek guidance from a relationship expert to grow stronger together.",
        "Laughter can mend even the toughest times. Participate in a fun workshop together to reignite the joy.",
        "Communication is key. Set aside time for open and honest conversations to heal any misunderstandings.",
        "It's a sign to take care of your relationship. Plan an adventure or a surprise to rekindle your love.",
        "Emergency! Revitalize your bond with a fresh perspective and memorable experiences.",
        "Do you know what's even better than love? The love that you two share!",
        "Your relationship is like a fine wine. It gets better with time. Cheers to both of you!",
        "Hate is just love that's too tired to fight. Recharge your love batteries!",
        "Remember, love is like a candle. It may flicker, but it can always be rekindled.",
        "Keep smiling at each other. It's the most potent way to spread love!",
        "You're the captains of your relationship. Set sail for a sea of love and adventure!",
        "Here's the secret recipe for a happy relationship: a dash of love, a spoonful of laughter, and a heap of understanding.",
        "Even a rollercoaster has its ups and downs. Enjoy the ride together!",
        "You two are a team, and together you can conquer anything. Go team love!",
        "Laughter is the glue that holds your love story together. Keep it sticky!",
        "A wise philosopher once said, 'Never go to bed angry.' Well, they were right. Work it out!",
        "If love were a book, your story would be a best-seller.",
        "Sometimes, love is just about holding each other up when the world gets heavy.",
        "Laughter is your relationship's secret ingredient. Add it generously!",
        "Your relationship is like a well-oiled machine. Keep it running smoothly with love and trust.",
        "Relationships are like a garden. Keep tending to it, and it'll bloom beautifully.",
        "The only 'hate' allowed here is hating to be apart from each other!",
        "A loving relationship is the greatest masterpiece of all. Keep painting it with beautiful memories.",
        "Your love story deserves a standing ovation. Keep making each other proud!",
        "A little disagreement is like seasoning in a relationship. It adds flavor!",
        "Hold hands and face the world together. Your love is an unbreakable bond.",
        "Who needs superhero movies when you're living a love story?",
        "The best love stories have twists and turns. Yours is an epic!",
        "Your love is like a fine wine. It gets better with time.",
        "Love doesn't make the world go 'round. It's what makes the ride worthwhile!",
        "A great relationship is about two things: first, appreciating the similarities, and second, respecting the differences.",
        "You're the perfect match, like peanut butter and jelly!",
        "Remember, the best relationships are the ones you never saw coming.",
        "Love is like a jigsaw puzzle. Sometimes it's hard to find the right pieces, but when you do, it's a beautiful picture!",
        "Keep the flames of your love burning brightly!",
        "Love is like a fine wine. It's better when you share it with someone special.",
        "Life is too short to hold onto grudges. Let love be your guide.",
        "A loving relationship is a work of art. Keep painting your masterpiece together.",
        "Laugh together, love together, and you'll grow old together.",
        "Your love is like a lighthouse in a storm. It guides you through the toughest times.",
        "Love is a journey, and you're both on the same path. Enjoy every step!",
        "Your love story is legendary. Keep the adventure alive!",
        "Life may be full of challenges, but love conquers all.",
        "You're in it together, for better or for worse. Make every moment count!"
        // Add more positive and hopeful suggestions here.
    ];

    const randomIndex = Math.floor(Math.random() * funnySuggestions.length);
    return funnySuggestions[randomIndex];
}

function getHateEmojis(hateLevel) {
    if (hateLevel <= 10) {
        return "😍❤️"; // Extremely low hate level - Love and happiness.
    } else if (hateLevel <= 30) {
        return "😄✌️"; // Low to moderate hate level - Smiles and positivity.
    } else if (hateLevel <= 50) {
        return "😐🤔"; // Moderate hate level - Neutral and contemplative.
    } else if (hateLevel <= 70) {
        return "😡😢"; // High hate level - Anger and sadness.
    } else {
        return "😡💔"; // Extremely high hate level - High anger and heartbreak.
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
