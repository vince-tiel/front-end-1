/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true
  }
  // env: {
  //   API_KEY: "AIzaSyAlLGMzRkgnYtk9kIq1T2ySRfdpVnYiwR0",
  //   AUTH_DOMAIN: "formation-f0515.firebaseapp.com",
  //   PROJECT_ID: "formation-f0515",
  //   STORAGE_BUCKET: "formation-f0515.appspot.com",
  //   MESSAGING_SENDER_ID: "340001597940",
  //   APP_ID: "1:340001597940:web:fe74ca26ebafc295e771a1"
  // }
};
// module.exports = nextConfig;

export default nextConfig;

