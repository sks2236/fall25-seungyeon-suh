// Array of tips
const tips = [
  {
    title: "Cleaning Hack",
    description: "Microwave lemon water for 3 minutes to loosen grime — wipe clean easily!",
    category: "Cleaning",
    author: "MomJane"
  },
  {
    title: "Meal Prep Sunday",
    description: "Chop fruits and veggies ahead of time to save weekday stress.",
    category: "Meal Prep",
    author: "HealthyMom"
  },
  {
    title: "Morning Self-Care",
    description: "Stretch and take 5 deep breaths before starting your day.",
    category: "Self Care",
    author: "SelfCareMom"
  },
  {
    title: "Playtime Fun",
    description: "Use recycled boxes to create a fun obstacle course for your kids.",
    category: "Play Ideas",
    author: "CreativeMom"
  },
  {
    title: "Quick Breakfast",
    description: "Overnight oats with fruit are easy, healthy, and quick for busy mornings.",
    category: "Meal Prep",
    author: "HealthyMom"
  }
];

// Get container
const container = document.getElementById("content-container");

// Loop through tips and create elements
tips.forEach(tip => {
  const tipDiv = document.createElement("div");
  tipDiv.classList.add("tip-card");

  const title = document.createElement("h3");
  title.textContent = tip.title;

  const description = document.createElement("p");
  description.textContent = tip.description;

  const meta = document.createElement("small");
  meta.textContent = `Category: ${tip.category} | Author: ${tip.author}`;

  tipDiv.appendChild(title);
  tipDiv.appendChild(description);
  tipDiv.appendChild(meta);

  container.appendChild(tipDiv);
});