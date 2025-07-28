// import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mevadev.com" }],
        destination: "https://mevadev.com/:path*",
        permanent: true,
      },
    ];
  },
  // Puedes agregar otras opciones aquí si lo deseas
};

module.exports = nextConfig;
