/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'core_coffee'; // same as your GitHub repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(isGitHubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

module.exports = nextConfig;
