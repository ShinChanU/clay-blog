import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 압축 설정
  compress: true,

  // 성능 최적화
  experimental: {
    optimizeCss: true,
  },

  // 헤더 설정으로 SEO 최적화
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
        source: '/(.*)',
      },
    ];
  },

  // 이미지 최적화 설정
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
