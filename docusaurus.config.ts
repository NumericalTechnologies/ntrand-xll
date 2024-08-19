import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "NtRand",
  tagline:
    "For Excel® Users, FREE Excel Random Number Generator based on Mersenne Twister",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.ntrand.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Numerical Technologies", // Usually your GitHub org/user name.
  projectName: "ntrand-xll", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },

  presets: [
    [
      "classic",
      {
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: "ignore",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-H1JVP1XFBV",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "ja"],
        // ```
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "NtRand",
      logo: {
        alt: "NtRand Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs/overview",
          label: "Overview",
        },
        {
          to: "/docs/installation",
          label: "Documentation",
        },
        {
          to: "/docs/gallery-of-distributions/distribution-navi",
          label: "Distribution Navigator",
        },
        {
          // download link
          href: "https://github.com/NumericalTechnologies/ntrand-xll/releases",
          label: "Download",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/NumericalTechnologies/ntrand-xll",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Terms of Service",
              to: "/terms-of-service",
            },
            {
              label: "License Agreement",
              to: "/license-agreement",
            },
            {
              label: "Privacy Policy",
              to: "/privacy-policy",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "Overview",
              to: "/docs/overview",
            },
            {
              label: "Installation",
              to: "/docs/installation",
            },
            {
              label: "Function Reference",
              to: "/docs/function-reference",
            },
            {
              label: "FAQ",
              to: "/docs/faq",
            },
          ],
        },
        {
          title: "External Links",
          items: [
            {
              label: "Numerical Technologies",
              href: "https://www.numtech.com",
            },
            {
              label: "ニューメリカルテクノロジーズ株式会社",
              href: "https://www.numtech.co.jp",
            },
            {
              label: "GitHub",
              href: "https://github.com/NumericalTechnologies/ntrand-xll",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NtRand. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
