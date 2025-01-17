module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://kindiadminn.vercel.app'], // Replace '*' with your frontend URL (e.g., ['https://yourfrontend.com'])
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      secret: process.env.ADMIN_JWT_SECRET || 'Lw3inSkveGsQZ1PhbJFuyQ==', // Set a secret for JWT sessions
      maxAge: 60 * 60 * 1000, // Session duration (1 hour)
      rolling: true, // Keep extending session until it expires
    },
  },
  'strapi::favicon',
  'strapi::public',
];
