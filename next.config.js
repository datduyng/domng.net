
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "a.ltrbxd.com", //letterboxd
      "i.scdn.co", // spotify
      "domnguyen.notion.site", //notion
    ],
  },
  rewrites: async () => [
    {
      source: "/l/:slug*",
      destination: "https://notion-url-shortener-dom.vercel.app/:slug*",
    },
    {
      source: "/tools/ocr/:slug*",
      destination: "https://universal-ocr.vercel.app/:slug*",
    },
    {
      source: "/tools/finance/:slug*",
      destination: "https://ai-finance-newsletter.vercel.app/tools/:slug*",
    }
  ]
};
