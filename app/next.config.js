module.exports = {
  images: {
    domains: ['www-stg.koov.io', 'secure.gravatar.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/column',
        permanent: true,
      },
    ]
  },
};
