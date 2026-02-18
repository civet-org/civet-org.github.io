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

        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/civet-social-card.png",

    metadata: [
      { name: "algolia-site-verification", content: "C7B2D419CD12B1E4" },
    ],

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
        {
          to: "/docs/api/introduction",
          position: "left",
          label: "API Reference",
        },
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

    algolia: {
      // The application ID provided by Algolia
      appId: "WV0K97C0T2",

      // Public API key: it is safe to commit it
      apiKey: "52520537c3d9d0a0e52f6b89ae496c68",

      indexName: "Civet",

      // Optional: see doc section below
      contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
