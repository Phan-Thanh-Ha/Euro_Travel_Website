module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
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
        source: "/tour/:slug*",
        destination: "/tour/:slug*",
      },
      {
        source: "/du-lich/:slug*",
        destination: "/travel/:slug*",
      },
      {
        source: "/lien-he/:slug*",
        destination: "/contact/:slug*",
      },
      {
        source: "/goc-ky-niem",
        destination: "/gallery",
      },
      {
        source: "/anh-dich-vu-thuc-te",
        destination: "/gallery",
      },
      {
        source: "/anh-dich-vu-thuc-te/:slug*",
        destination: "/gallery/:slug*",
      },
      {
        source: "/goc-ky-niem/:slug*",
        destination: "/gallery/:slug*",
      },
      {
        source: "/cam-nang",
        destination: "/blogs",
      },
      {
        source: "/cam-nang/:slug*",
        destination: "/blogs/:slug*",
      },
      {
        source: "/chi-tiet-bai-viet/:slug*",
        destination: "/blogs/detail/:slug*",
      },
    ];
  },
};
