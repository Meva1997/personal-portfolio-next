/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mevadev.com",
  generateRobotsTxt: true, // (optional)
  outDir: "./public", // Output directory for the sitemap files
  // ...other options
};
