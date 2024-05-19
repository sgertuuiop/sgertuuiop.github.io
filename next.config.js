/** @type {import('next').NextConfig} */

// prettier-ignore
const nextConfig = {
  output: 'export',
};

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `https://${repo}/`;
  basePath = ``;
}

module.exports = nextConfig;

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};
