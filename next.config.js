/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // next.js는
  // 외부에서 이미지나 뭘 가져올때 도메인 등록을 해줘야됌
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
