module.exports = {
  client: {
    includes: ['./src/**/*.{ts,tsx}'],
    excludes: ['**/tests/**/*', '**/node_modules'],
    service: {
      name: 'graphqlplaceholder',
      localSchemaFile: './schema.graphql',
      // url: 'https://api.graphqlplaceholder.com/',
      // optional headers
      // headers: {
      //   authorization: 'Bearer lkjfalkfjadkfjeopknavadf',
      // },
      // optional disable SSL validation check
      // skipSSLValidation: true,
    },
  },
}
