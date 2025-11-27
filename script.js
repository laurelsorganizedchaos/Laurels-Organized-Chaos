// =============================================
// Laurel's Organized Chaos – Blog Script
// Auto-updating blog list + latest posts
// Matches the gothic black/pink/purple/blue theme
// =============================================

// Change this if your post files live somewhere else
// ""  -> files are in the root
// "blog/" -> files live in /blog/ folder (default)
const BLOG_BASE_PATH = "blog/";

// Master list of blog posts.
// Add a new post by adding a new object to this array.
const POSTS = [
  {
    slug: "chaotically-blessed-thanksgiving.html",
    title: "A Chaotically Blessed Thanksgiving (Hold the Family Drama)",
    tag: "Mom Life",
    date: "2025-11-23",
    snippet:
      "Loving your kids fiercely while admitting this shit is hard — no Pinterest perfection, just real feelings and real exhaustion."
  },
  {
    slug: "motherhood-without-the-mask.html",
    title: "Motherhood Without the Mask",
    tag: "Motherhood",
    date: "2025-11-10",
    snippet:
      "I love my kids more than my own sanity — but that doesn’t mean I haven’t fantasized about dropping them off at the fire station on the hard days."
  },
  {
    slug: "our-vegas-wedding-day.html",
    title: "Our Vegas Wedding Day: Chaos, Nerves, and So Much Love",
    tag: "Love & Marriage",
    date: "2025-11-12",
    snippet:
      "Exhausted, stressed, low-key panicking about everything going wrong — and somehow it still turned into the most perfect, intimate dark fairytale."
  }
  // 👉 Add more posts here as you create new HTML files.
  // {
  //   slug: "your-new-post-file.html",
  //   title: "Your New Post Title",
  //   tag: "Category / Tag",
  //   date: "2025-12-01",
  //   snippet: "Short, spicy summary of the chaos in this post."
  // },
];

// ========== UTILITIES ==========

/**
 * Convert "2025-11-23" -> "Nov 23, 2025"
 */
function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate + "T00:00:00");
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLo
