/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Cloudflare Turnstile site keys are designed to be public and are required by the browser widget.
    TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
