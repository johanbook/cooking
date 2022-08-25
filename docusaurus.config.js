// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cooking",
  tagline: "My cooking docs",
  url: "https://johanbook.com",
  baseUrl: "/cooking/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://johanbook.com/favicon.ico",
  organizationName: "cooking",
  projectName: "cooking",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {},
      }),
    ],
  ],

  scripts: [
    {
      src: "https://analytics.johanbook.com/js/plausible.js",
      defer: true,
      "data-domain": "johanbook.com",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Cooking",
        items: [
          {
            label: "Coding",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/docs",
          },
          { to: "/", label: "Cooking", position: "left" },
          {
            label: "Workout",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/workout",
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
