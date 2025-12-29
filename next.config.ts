import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Boshqa konfiguratsiyalaringiz bo‘lsa shu yerga qo‘shishingiz mumkin

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "**",
      },
      {
      protocol: "https",
      hostname: "png.pngtree.com",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "www.clipartmax.com",
      pathname: "**",
    },
    { protocol: "https", hostname: "static.vecteezy.com", pathname: "**" },
    { protocol: "https", hostname: "thumbs.dreamstime.com", pathname: "**" },
    { protocol: "https", hostname: "thumbs.dreamstime.com", pathname: "**" },
    { protocol: "https", hostname: "media.istockphoto.com", pathname: "**" },
    { protocol: "https", hostname: "static.vecteezy.com", pathname: "**" },
{
      protocol: "https",
      hostname: "www.shutterstock.com",
      pathname: "**",
    },
      // Qo‘shimcha domenlar kerak bo‘lsa shu yerga qo‘shing, masalan:
      // {
      //   protocol: "https",
      //   hostname: "www.clipartmax.com",
      //   port: "",
      //   pathname: "**",
      // },
    ],
  },
};

export default nextConfig;