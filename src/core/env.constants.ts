interface Env {
  nodeEnv: string;
  basePicturesUrl: string;
  apiUrl: string;
  jsonServerUrl: string;
  graphQLUrl: string;
}

export const EnvConstants: Env = {
  nodeEnv: process.env.NODE_ENV,
  basePicturesUrl: process.env.BASE_PICTURES_URL,
  apiUrl: process.env.API_URL,
  jsonServerUrl: process.env.JSON_SERVER_URL,
  graphQLUrl: process.env.GRAPHQL_URL,
};
