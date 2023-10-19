import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

//Get the gql url defined in environment
dotenv.config({ path: "./.env.local" });
export const localHasuraEndpoint = "http://localhost:8080/v1/graphql";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? localHasuraEndpoint,
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
