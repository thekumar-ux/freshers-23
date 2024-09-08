/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'plus.unsplash.com',
      'pbs.twimg.com',
      'assets.aceternity.com',
      'img.freepik.com',
      't3.ftcdn.net',
      'i.pinimg.com',
      'images.unsplash.com',
      'sosimg.sgp1.cdn.digitaloceanspaces.com',
      'media.istockphoto.com',
      'www.prokabaddi.com',
      'media.gettyimages.com',
      't3.ftcdn.net',
      'wallpapers.com',
      't4.ftcdn.net',
    ],
  },
  // SEO improvements
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
