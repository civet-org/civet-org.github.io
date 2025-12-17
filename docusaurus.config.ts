import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Civet",
  tagline: "Painless data integration for your React application",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://civet.js.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "civet-org", // Usually your GitHub org/user name.
  projectName: "civet-org.github.io", // Usually your repo name.
  deploymentBranch: "pages",

  trailingSlash: false,
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/civet-org/civet-org.github.io/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/civet-org/civet-org.github.io/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/civet-social-card.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Civet",
      logo: {
        alt: "Civet Logo",
        src: "img/civet-square-dark.png",
        srcDark: "img/civet-square-light.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/civet-org",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Civet Logo",
        src: "img/civet-square-light.png",
        width: 160,
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/category/getting-started",
            },
            {
              label: "Guides",
              to: "/docs/category/guides",
            },
            {
              label: "API Reference",
              to: "/docs/category/api-reference",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/civet-org",
            },
            {
              label: "NPM",
              href: "https://npmjs.com/org/civet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aaron Burmeister. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
