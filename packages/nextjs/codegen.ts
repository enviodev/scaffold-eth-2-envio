import { CodegenConfig } from "@graphql-codegen/cli";

export const localHasuraEndpoint = "http://localhost:8080/v1/graphql";

const config: CodegenConfig = {
  schema: localHasuraEndpoint,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
