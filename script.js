const startDate = new Date("2024-07-02"); // Day 1
const totalDays = 32;
const grid = document.getElementById("countdownGrid");
const today = new Date();
today.setHours(0, 0, 0, 0);

// Your surprise messages for each day
const surpriseMessages = [
  "Day 1: Your smile is my favorite sunrise 🌅",
  "Day 2: I still remember the first time I saw you 💫",
  "Day 3: You make the world softer and brighter ✨",
  "Day 4: If love is a song, you're my favorite verse 🎶",
  "Day 5: Your laugh is music to my soul 🎵",
  "Day 6: I can't wait to grow old with you 🕰️",
  "Day 7: You're my home and my adventure 🏡❤️",
  "Day 8: You deserve flowers every day 💐",
  "Day 9: You’re my peace and my chaos 😇🔥",
  "Day 10: I love your sleepy face 😴💕",
  "Day 11: I’m proud to love you 💘",
  "Day 12: If I could, I’d bottle your hugs 🤗",
  "Day 13: You make bad days disappear 🌈",
  "Day 14: You make ordinary moments magical ✨",
  "Day 15: Forever doesn’t seem long enough with you ♾️",
  "Day 16: You're more beautiful every day 🌹",
  "Day 17: I'm addicted to your voice 🎧",
  "Day 18: I notice everything you do for me 👀",
  "Day 19: You’re the reason behind my best smiles 😊",
  "Day 20: I wish I could pause time with you ⏳",
  "Day 21: The way you say my name is everything 😍",
  "Day 22: I’d always find you in a crowded room 💑",
  "Day 23: You’re my favorite notification 🔔❤️",
  "Day 24: Thank you for being you 🙏",
  "Day 25: I wrote your name on the sky 🌌 (in my head at least)",
  "Day 26: I still get butterflies when I see you 🦋",
  "Day 27: You’re the poetry in my every day 📖",
  "Day 28: I love you more than pizza 🍕❤️",
  "Day 29: You’re the calm to my chaos 🌊",
  "Day 30: No one can replace you 🥺",
  "Day 31: Tomorrow is your day 🎂✨",
  "Day 32: Happy Birthday, Reva! 🎉🎈 You are my forever."
];

for (let i = 0; i < totalDays; i++) {
  const tileDate = new Date(startDate);
  tileDate.setDate(tileDate.getDate() + i);

  const tile = document.createElement("div");
  tile.classList.add("day-tile");
  tile.textContent = `Day ${i + 1}`;

  if (tileDate <= today) {
    tile.addEventListener("click", () => {
      alert(surpriseMessages[i] || `Surprise for Day ${i + 1}! 💌`);
    });
  } else {
    tile.classList.add("locked");
    tile.textContent = `Day ${i + 1} 🔒`;
  }

  grid.appendChild(tile);
}
