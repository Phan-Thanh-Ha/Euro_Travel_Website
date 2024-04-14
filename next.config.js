module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.hallstattvietnam.com.vn",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/introduce-eurotravel",
      },
      {
        source: "/chinh-sach-bao-mat",
        destination: "/private-policy",
      },
      {
        source: "/dieu-khoan-dich-vu",
        destination: "/terms-policy",
      },
      {
        source: "/chinh-sach-hoan-huy-dich-vu",
        destination: "/service-cancellation-policy",
      },
      {
        source: "/phuong-thuc-thanh-toan",
        destination: "/payment-method",
      },
      {
        source: "/du-lich/:slug*",
        destination: "/tour/:slug*",
      },
    ];
  },
};
