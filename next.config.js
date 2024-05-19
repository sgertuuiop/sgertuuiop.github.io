/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let ASSET_PREFIX = "";
let BASE_PATH = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  ASSET_PREFIX = `https://${repo}/`;
  BASE_PATH = ``;
}

module.exports = nextConfig = {
  output: "export",
  assetPrefix: ASSET_PREFIX,
  basePath: BASE_PATH,
};
