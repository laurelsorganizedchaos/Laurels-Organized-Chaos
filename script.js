// =============================================
// Laurel's Organized Chaos – Blog Script
// Tarot-style cards + latest chaos + nav highlight
// =============================================

console.log("🔥 Laurel's Organized Chaos script loaded.");

// If your post files live in a subfolder, change this:
// ""       -> posts next to index.html / blog.html
// "blog/"  -> posts are in /blog/ folder
const BLOG_BASE_PATH = "";

// Master post list – add new posts here
const POSTS = [
  {
    slug: "chaotically-blessed-thanksgiving.html",
    title: "A Chaotically Blessed Thanksgiving (Hold the Family Drama)",
    tag: "Mom Life",
    date: "2025-11-23",
    snippet:
      "When your husband isn’t welcome, neither are you or your kids — so you build your own Thanksgiving that’s drama-free, chaotic, and actually full of love."
  },

  // ⭐ UPDATED FILE NAME
  {
    slug: "post-motherhood-without-the-mask.html",
    title: "Motherhood Without the Mask",
    tag: "Motherhood",
    date: "2025-11-10",
    snippet:
      "Yes, you would die for your kids. Yes, there are days you fantasize about silence. Both can be true, and it doesn’t make you a bad mom."
  },

  // ⭐ UPDATED FILE NAME
  {
    slug: "post-wedding-day.html",
    title: "Our Vegas Wedding Day: Chaos, Nerves, and So Much Love",
    tag: "Love & Marriage",
    date: "2025-11-12",
    snippet:
      "Exhaustion, anxiety, and last-minute changes somehow turned into the most intimate, perfect dark fairytale on 11/11."
  },

  // 🔮 Your three additional posts
  {
    slug: "post-organized-chaos.html",
    title: "Post-Organized Chaos: Systems That Actually Fit My Messy Life",
    tag: "Life Design",
    date: "2025-10-25",
    snippet:
      "Instead of forcing myself into rigid routines that never last, I started building soft, witchy systems around the life I actually have — not the imaginary one in my head."
  },
  {
    slug: "post-softness-starting-over.html",
    title: "Softness in Starting Over",
    tag: "Healing",
    date: "2025-10-15",
    snippet:
      "Starting over used to feel like failure. Now it feels like the bravest kind of softness — choosing to be new again when life keeps trying to harden you."
  },
  {
    slug: "post-burn-it-down.html",
    title: "Burn It Down (On Purpose)",
    tag: "Shadow Work",
    date: "2025-10-01",
    snippet:
      "Sometimes the most responsible thing you can do is light a match to the version of your life that’s killing you slowly, and rebuild from the ashes on your own terms."
  }
];

// ---------- Utilities ----------

function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate + "T00:00:00");
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function postUrl(slug) {
  return `${BLOG_BASE_PATH}${slug}`;
}

// pick a tarot symbol based on tag vibes
function getTarotSymbol(tag = "") {
  const t = tag.toLowerCase();
  if (t.includes("mom") || t.includes("mother")) return "☾";
  if (t.includes("marriage") || t.includes("love")) return "🪶";
  if (t.includes("mental") || t.includes("healing")) return "☿";
  if (t.includes("life") || t.includes("design")) return "✦";
  if (t.includes("shadow")) return "🩸";
  return "✶";
}

// build tarot card HTML
function tarotCardHTML(post) {
  const symbol = getTarotSymbol(post.tag);
  const labelTop = post.tag || "Chaos";
  const bottomLabel = `${post.tag || "Life"} • ${formatDate(post.date)}`;

  return `
    <article class="tarot-card">
      <div class="tarot-label-top">${labelTop}</div>
      <div class="tarot-symbol">${symbol}</div>
      <h3 class="tarot-title">
        <a href="${postUrl(post.slug)}">${post.title}</a>
      </h3>
      <p class="tarot-text">
        ${post.snippet}
      </p>
      <div class="tarot-meta">${formatDate(post.date)}</div>
      <div class="tarot-label-bottom">${bottomLabel}</div>
    </article>
  `;
}

// ---------- Render: Blog list on blog.html ----------

function renderBlogList() {
  const container = document.querySelector("#blog-list");
  if (!container) return;

  const sortedPosts = [...POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  container.innerHTML = sortedPosts.map(tarotCardHTML).join("");
}

// ---------- Render: Latest chaos tarot cards on index.html ----------

function renderLatestChaos(limit = 3) {
  const container = document.querySelector("#latest-chaos-grid");
  if (!container) return;

  const sortedPosts = [...POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  container.innerHTML = sortedPosts.map(tarotCardHTML).join("");
}

// ---------- Nav highlight ----------

function highlightActiveNav() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const key = link.getAttribute("data-nav");
    if (!href) return;

    const isHome =
      key === "home" && (path.endsWith("/") || path.endsWith("index.html"));

    const match =
      path.endsWith(href) ||
      path.includes("/" + href) ||
      isHome;

    if (match) {
      link.classList.add("nav-active");
    }
  });
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  renderLatestChaos();
  renderBlogList();
  highlightActiveNav();
});
