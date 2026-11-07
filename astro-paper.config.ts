import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://jamsilva.github.io/",
    title: "In-depth Plumbing: a software blog?",
    description: "A blog for ideas and perspective on technology.",
    author: "João Silva",
    profile: "https://github.com/jamsilva",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Lisbon",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/jamsilva" },
    { name: "linkedin", url: "https://www.linkedin.com/in/joaoamsilva/" },
    { name: "mail",     url: "mailto:joaoandre.m.silva@gmail.com" },
  ],
  shareLinks: [
    { name: "hacker-news", url: "https://news.ycombinator.com/submitlink?u=" },
    { name: "reddit",      url: "https://www.reddit.com/submit?url=" },
    { name: "x",           url: "https://x.com/intent/post?url=" },
    { name: "telegram",    url: "https://t.me/share/url?url=" },
    { name: "mail",        url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
