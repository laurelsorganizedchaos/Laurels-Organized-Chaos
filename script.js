// =============================================
// Laurel's Organized Chaos – Blog + Store Script
// Tarot-style cards + latest chaos + nav highlight
// =============================================

// If your post files live in a subfolder, change this:
// ""            -> posts next to index.html / blog.html
// "blog/"       -> posts are in /blog/ folder
const BLOG_BASE_PATH = "";

// ---------- BLOG POSTS ----------
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
  {
    slug: "post-motherhood-without-the-mask.html",
    title: "Motherhood Without the Mask",
    tag: "Mom Life",
    date: "2025-11-10",
    snippet:
      "Yes, you would die for your kids. Yes, there are days you fantasize about silence. Both can be true, and it doesn’t make you a bad mom."
  },
  {
    slug: "post-wedding-day.html",
    title: "Our Vegas Wedding Day: Chaos, Nerves, and So Much Love",
    tag: "Love & Marriage",
    date: "2025-11-12",
    snippet:
      "Exhaustion, anxiety, and last-minute changes somehow turned into the most intimate, perfect dark fairytale on 11/11."
  },
  {
    slug: "post-organized-chaos.html",
    title: "Post-Organized Chaos",
    tag: "Rebuilding",
    date: "2025-11-05",
    snippet:
      "What happens after the breakdown, when you’re still here, still tired, but finally ready to rebuild on your own terms."
  },
  {
    slug: "post-softness-starting-over.html",
    title: "Softness in Starting Over",
    tag: "Mental Health",
    date: "2025-11-06",
    snippet:
      "Starting over isn’t weakness — it’s choosing softness for yourself after life’s been anything but soft."
  },
  {
    slug: "post-burn-it-down.html",
    title: "Burn It Down (Gently)",
    tag: "Shadow Work",
    date: "2025-11-07",
    snippet:
      "Sometimes the only way to move forward is to let the old version of you die a dramatic, glittery death."
  },
  {
    slug: "post-value-dental.html",
    title: "Value Dental of Reno: The Clinic That Ghosted Me",
    tag: "Review",
    date: "2025-11-27",
    snippet:
      "My honest experience with Value Dental of Reno — from a hopeful start to being completely ghosted after major dental surgery."
  }
  // Add more posts here as you write them
];

// ---------- STORE PRODUCTS ----------

const PRODUCTS = [
  {
    id: "antisocial-blanket",
    title: "“I’m Not Antisocial, I’m Anti-Stupid” Gothic Blanket",
    type: "Blanket",
    symbol: "✶",
    date: "2025-11-25", // use this to control 'newest' order
    image: "images/antisocialblanket.webp",
    alt: "Gothic blanket that reads 'I'm not antisocial, I'm anti-stupid' with crows, candle, and crystals.",
    url: "https://laurelsorganizedchaos.printful.me/product/gothic-im-not-antisocial-im-anti-stupid",
    blurb:
      "Curl up under something that matches your mood and your standards: cozy, dark, and completely over everyone’s bullshit.",
    meta: "Printful · Throw Blanket",
    footer: "Wrap in chaos"
  },
  {
    id: "antisocial-tote",
    title: "“I’m Not Antisocial, I’m Anti-Stupid” Gothic Tote",
    type: "Tote Bag",
    symbol: "🩸",
    date: "2025-11-24",
    image: "images/antisocialtote.webp",
    alt: "Gothic tote bag with crows, candle, and pink text that reads 'I'm not antisocial, I'm anti-stupid'.",
    url: "https://laurelsorganizedchaos.printful.me/product/gothic-im-not-antisocial-im-anti-stupid-tote-bag",
    blurb:
      "For errands, appointments, and school runs where you’re overstimulated by people and underwhelmed by their intelligence.",
    meta: "Printful · Tote Bag",
    footer: "Carry the boundary"
  },
  {
    id: "witchy-mom-tote",
    title: "Witchy Mom Chaos Tote",
    type: "Tote Bag",
    symbol: "☾",
    date: "2025-11-22",
    image: "images/witchmomtote.webp",
    alt: "Tote bag with witchy mom chaos illustration and dark humor wording.",
    url: "https://laurelsorganizedchaos.printful.me/product/witchy-mom-chaos-tote",
    blurb:
      "Diapers, snacks, random rocks your kids gave you, and maybe a tarot deck — this tote can handle it.",
    meta: "Printful · Tote Bag",
    footer: "Haul the chaos"
  },
  {
    id: "trauma-mug",
    title: "“Running on Trauma & Caffeine” Gothic Mug",
    type: "Mug",
    symbol: "♄",
    date: "2025-11-20",
    image: "images/traumamug.webp",
    alt: "Black gothic mug that says 'Running on Trauma and Caffeine' in white script.",
    url: "https://laurelsorganizedchaos.printful.me/product/running-on-trauma-and-caffeine-gothic-mug-15oz-wrap",
    blurb:
      "For mornings when your nervous system has left the building and coffee is your emotional support potion.",
    meta: "Printful · 15oz Mug",
    footer: "Sip the spell"
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
  if (t.includes("mental")) return "☿";
  if (t.includes("money") || t.includes("business")) return "♃";
  if (t.includes("review")) return "⚠️";
  if (t.includes("shadow")) return "🜃";
  return "🩸";
}

// build tarot card HTML for posts
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

// build tarot card HTML for products
function productCardHTML(product) {
  const typeLabel = product.type || "Product";
  const symbol = product.symbol || "✶";

  return `
    <article class="tarot-card">
      <div class="tarot-label-top">${typeLabel}</div>
      <div class="tarot-symbol">${symbol}</div>
      ${
        product.image
          ? `
      <div class="product-image">
        <img src="${product.image}" alt="${product.alt || product.title}" />
      </div>`
          : ""
      }
      <h3 class="tarot-title">
        <a href="${product.url}" target="_blank" rel="noopener">
          ${product.title}
        </a>
      </h3>
      <p class="tarot-text">
        ${product.blurb || ""}
      </p>
      <div class="tarot-meta">${product.meta || `Printful · ${typeLabel}`}</div>
      <div class="tarot-label-bottom">${product.footer || ""}</div>
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

// ---------- Render: Featured products on index.html ----------

function renderFeaturedProducts(limit = 3) {
  const container = document.querySelector("#featured-products-grid");
  if (!container) return;

  const sortedProducts = [...PRODUCTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  container.innerHTML = sortedProducts.map(productCardHTML).join("");
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
    const match = path.endsWith(href) || path.includes(href) || isHome;

    if (match) {
      link.classList.add("nav-active");
    }
  });
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  renderLatestChaos();
  renderBlogList();
  renderFeaturedProducts(); // new: auto-fill products on home
  highlightActiveNav();
});
