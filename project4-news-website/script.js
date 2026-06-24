const stories = [
  {
    title: "AI learning platforms help engineering students complete real-world projects",
    category: "Technology",
    source: "Tech Daily",
    time: "10 min ago",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    summary: "New digital tools are making coding, research, and design workflows faster for students working on portfolio projects."
  },
  {
    title: "Startup funding grows for companies building automation tools",
    category: "Business",
    source: "Market Watch",
    time: "18 min ago",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    summary: "Investors continue to support practical software products that improve productivity for small teams and large companies."
  },
  {
    title: "National cricket training camps focus on fitness and data analytics",
    category: "Sports",
    source: "Sports Desk",
    time: "24 min ago",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
    summary: "Coaches are using performance dashboards and video review to prepare players for upcoming tournaments."
  },
  {
    title: "Clean energy projects expand as cities invest in smarter infrastructure",
    category: "World",
    source: "Global Brief",
    time: "35 min ago",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    summary: "Solar, wind, and battery storage projects are becoming central parts of modern city planning."
  },
  {
    title: "Semiconductor demand rises as AI hardware becomes more important",
    category: "Technology",
    source: "Circuit News",
    time: "42 min ago",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    summary: "Chip manufacturers are expanding production to meet demand from data centers, phones, and connected devices."
  },
  {
    title: "Small businesses use websites and social media to reach more customers",
    category: "Business",
    source: "Finance Today",
    time: "50 min ago",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    summary: "Affordable digital tools are helping local brands improve sales, support, and customer communication."
  },
  {
    title: "Young athletes turn to wearable devices for smarter practice sessions",
    category: "Sports",
    source: "Playbook",
    time: "1 hr ago",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    summary: "Wearables track speed, recovery, heart rate, and sleep, giving athletes better insight into training quality."
  },
  {
    title: "Researchers call for responsible AI use in classrooms",
    category: "World",
    source: "Education Wire",
    time: "1 hr ago",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    summary: "Schools and colleges are creating rules that encourage learning while avoiding blind copying."
  },
  {
    title: "Cloud computing demand increases as companies modernize applications",
    category: "Technology",
    source: "Cloud Report",
    time: "2 hrs ago",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    summary: "Cloud platforms continue to support web apps, analytics, cybersecurity, and remote work systems."
  },
  {
    title: "Digital payments make everyday transactions faster and easier",
    category: "Business",
    source: "Money Desk",
    time: "2 hrs ago",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    summary: "Mobile wallets and instant payment systems are changing how people shop, travel, and manage money."
  },
  {
    title: "Football clubs invest in youth academies and analytics teams",
    category: "Sports",
    source: "Match Centre",
    time: "3 hrs ago",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
    summary: "Clubs are combining coaching, scouting, and data to discover new talent earlier."
  },
  {
    title: "Global teams collaborate online to solve software challenges",
    category: "World",
    source: "World Tech",
    time: "3 hrs ago",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    summary: "Remote collaboration platforms are helping developers, designers, and researchers work across countries."
  }
];

const newsGrid = document.querySelector("#newsGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const tabs = document.querySelectorAll(".tab");
const updatedTime = document.querySelector("#updatedTime");

let selectedCategory = "All";

function formatUpdatedTime() {
  const now = new Date();
  updatedTime.textContent = `Live updated ${now.toLocaleString([], {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

function storyMatchesSearch(story, query) {
  const searchableText = `${story.title} ${story.category} ${story.source} ${story.summary}`.toLowerCase();
  return searchableText.includes(query.toLowerCase());
}

function createStoryCard(story) {
  return `
    <article class="news-card">
      <div class="news-image" style="background-image: url('${story.image}')" role="img" aria-label="${story.category} news image"></div>
      <div class="news-content">
        <span class="news-category ${story.category}">${story.category}</span>
        <h3>${story.title}</h3>
        <p>${story.summary}</p>
        <div class="card-meta">
          <span>${story.source}</span>
          <span>${story.time}</span>
        </div>
      </div>
    </article>
  `;
}

function renderStories() {
  const query = searchInput.value.trim();
  const filteredStories = stories.filter((story) => {
    const categoryMatches = selectedCategory === "All" || story.category === selectedCategory;
    return categoryMatches && storyMatchesSearch(story, query);
  });

  newsGrid.innerHTML = filteredStories.map(createStoryCard).join("");
  emptyState.hidden = filteredStories.length > 0;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    selectedCategory = tab.dataset.category;
    renderStories();
  });
});

searchInput.addEventListener("input", renderStories);

formatUpdatedTime();
renderStories();
setInterval(formatUpdatedTime, 60 * 1000);
