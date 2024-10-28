const mode = process.env.BUILD_MODE ?? "standalone";
console.log("[Next] build mode", mode);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: mode,
  images: {
    unoptimized: true,
  },
};



module.exports = nextConfig;
