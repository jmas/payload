import { buildConfig } from '../buildConfig';
import { devUser } from '../credentials';

export default buildConfig({
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
  ],
  plugins: [
    async (config) => ({
      ...config,
      collections: [
        ...config.collections || [],
        {
          slug: 'pages',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    });
  },
});
