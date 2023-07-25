/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `https://${repo}/`
  basePath = `/`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}

