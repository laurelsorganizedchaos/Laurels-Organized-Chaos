// Simple list of blog posts, newest FIRST
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
      "Starting over isn’t always dramatic. Sometimes it’s quiet, shaky decisions that no one claps for — but change everything."
  },
  {
    slug: "post-burn-it-down.html",
    title: "Burn It Down: When Your Old Life Doesn’t Fit Anymore",
    tag: "Life",
    snippet:
      "Letting go of a life you built when you were just trying to survive — and choosing to build something truer."
  }
];

// Helper to render cards into a container
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
});
