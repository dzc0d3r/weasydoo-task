/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@fakestore/ui"],
  images: {
    domains: ["fakestoreapi.com", "via.placeholder.com"],
  },
};
