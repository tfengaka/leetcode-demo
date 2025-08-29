// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.PUBLIC_GRAPHQL_ENDPOINT as string]: {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.PUBLIC_ADMIN_SECRET_KEY || 'adminadmin',
        },
      },
    },
  ],
  documents: ['src/**/*.graphql'],
  generates: {
    './src/graphql/index.ts': {
      config: {
        withHooks: true,
        withHOC: false,
        withMutationFn: false,
        withComponent: false,
        skipTypename: true,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
