const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: prod ? false : true,
    dest: "public",
    register: true,
    scope: "/app",
    sw: "sw.js",
    skipWaiting: false,
  },
  images: {
    domains: [
      "old.northfloridachiropracticphysicaltherapy.com",
      "northfloridachiropracticphysicaltherapy.crt",
      "res.cloudinary.com",
    ],
  },
});
