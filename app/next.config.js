module.exports = {
  images: {
    domains: ["www-stg.koov.io", "secure.gravatar.com", "assets.vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/column",
        permanent: true,
      },
    ];
  },

};
