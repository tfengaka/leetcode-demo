// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql']: {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.PUBLIC_ADMIN_SECRET_KEY || 'adminadmin',
        },
      },
    },
  ],
  documents: ['src/**/*.{ts,tsx,graphql}'],
  generates: {
    './src/graphql/generated.ts': {
      config: { withHooks: true, withHOC: false, withComponent: false },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
