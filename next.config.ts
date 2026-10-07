import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split("/");
  const repoName = parts[1] || "";
  // If the repository name is <username>.github.io, it is served from the root domain
  if (!repoName.endsWith(".github.io")) {
    repo = repoName;
  }
}

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : repo
    ? `/${repo}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
