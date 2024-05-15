/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@fakestore/ui"],
  images: {
     remotePatterns: [
      {
        hostname: "fakestoreapi.com",
      },
    ],
}
}
