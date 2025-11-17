// ===== BLOG POSTS =====
// Newest first
const BLOG_POSTS = [
  {
    slug: "post-motherhood-without-the-mask.html",
    title: "Motherhood Without the Mask",
    tag: "Mom Life",
    snippet:
      "Loving your kids fiercely while admitting this shit is hard — no Pinterest perfection, just real feelings and real exhaustion."
  },
  {
    slug: "post-organized-chaos.html",
    title: "Organized Chaos: Brains, Burnout & Being Human",
    tag: "Mental Health",
    snippet:
      "For the days when existing feels like the only thing you accomplished — and it still counts."
  },
  {
    slug: "post-softness-starting-over.html",
    title: "The Softness in Starting Over",
    tag: "Self",
    snippet:
      "Starting over isn’t always dramatic. Sometimes it’s quiet, shaky decisions that no one claps for — but they quietly change everything."
  },
  {
    slug: "post-burn-it-down.html",
    title: "Burn It Down: When Your Old Life Doesn’t Fit Anymore",
    tag: "Life",
    snippet:
      "Letting go of a life you built when you were just trying to survive — and choosing to build something truer."
  }
];

// ===== STORE PRODUCTS =====
// Edit this list as you add more things.
//
// url:
//   - use your Printful/Printify/checkout link
//   - or "#" for coming soon
const PRODUCTS = [
  {
    title: "Running on Trauma and Caffeine – Gothic Mug (15oz)",
    tag: "Drinkware",
    price: "$28",
    description:
      "Full-wrap gothic mug with ornate lettering and a soft smoky background — for witches, moms, students, and anyone running on trauma and caffeine.",
    url: "https://laurelsorganizedchaos.printful.me/checkout",
    ctaLabel: "Buy Now"
  },
  {
    title: "“It’s Your Life” Gothic Art Print",
    tag: "Digital Art",
    price: "$12",
    description:
      "Dark feminine artwork featuring the quote “It’s your life, everyone else is just in it” — perfect for walls, desks, or altars.",
    url: "#",
    ctaLabel: "Coming Soon"
  },
  {
    title: "Chaos Diary: Shadow Work Journal",
    tag: "Journals",
    price: "$18",
    description:
      "A guided journal for brain dumps, shadow work, and late-night “what am I even doing?” sessions.",
    url: "#",
    ctaLabel: "Coming Soon"
  },
  {
    title: "Witchy Wallpaper Pack",
    tag: "Wallpapers",
    price: "$9",
    description:
      "A set of witchy, dark feminine phone wallpapers so your lock screen matches your inner main-character chaos.",
    url: "#",
    ctaLabel: "Coming Soon"
  },
  {
    title: "Dark Feminine Essentials Bundle",
    tag: "Bundle",
    price: "$27",
    description:
      "A curated bundle of prints, journal pages, and wallpapers to create one cohesive, haunting aesthetic.",
    url: "#",
    ctaLabel: "Coming Soon"
  },
  {
    title: "Affirmations for Exhausted Witches (Digital)",
    tag: "Other",
    price: "$7",
    description:
      "Short, honest, slightly feral affirmations for the days when “love and light” just isn’t cutting it.",
    url: "#",
    ctaLabel: "Coming Soon"
  }
];

// ===== HELPERS =====

// Render blog cards into a container
function renderBlogCards(containerId, postsToRender) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cardsHtml = postsToRender
    .map(
      (post) => `
      <article class="card">
        <p class="card-tag">${post.tag}</p>
        <h4 class="card-title">${post.title}</h4>
        <p class="card-snippet">
          ${post.snippet}
        </p>
        <a href="${post.slug}" class="card-link">Read Post</a>
      </article>
    `
    )
    .join("");

  container.innerHTML = cardsHtml;
}

// Render product cards into a container
function renderProductCards(containerId, productsToRender) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cardsHtml = productsToRender
    .map((product) => {
      const hasLink = product.url && product.url !== "#";
      const actionHtml = hasLink
        ? `<a href="${product.url}" class="card-link" target="_blank" rel="noopener noreferrer">${product.ctaLabel || "Buy Now"}</a>`
        : `<button class="card-link" type="button" disabled>${product.ctaLabel || "Coming Soon"}</button>`;

      return `
        <article class="card product-card">
          <p class="card-tag">${product.tag}</p>
          <h4 class="card-title">${product.title}</h4>
          <p class="card-snippet">
            ${product.description}
          </p>
          <p class="product-price">${product.price}</p>
          ${actionHtml}
        </article>
      `;
    })
    .join("");

  container.innerHTML = cardsHtml;
}

// ===== PAGE INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Home page: latest 3 posts
  if (document.getElementById("latest-posts")) {
    const latestThree = BLOG_POSTS.slice(0, 3);
    renderBlogCards("latest-posts", latestThree);
  }

  // Blog page: all posts
  if (document.getElementById("blog-posts")) {
    renderBlogCards("blog-posts", BLOG_POSTS);
  }

  // Store page: all products
  if (document.getElementById("store-products")) {
    renderProductCards("store-products", PRODUCTS);
  }
});
