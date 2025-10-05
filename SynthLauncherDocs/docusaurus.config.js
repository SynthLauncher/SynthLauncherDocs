// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SynthLauncher Docs',
  tagline: 'The official documentation for SynthLauncher',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://SynthLauncher.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SynthLauncherDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SynthLauncher', // Usually your GitHub org/user name.
  projectName: 'SynthLauncherDocs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog:false,
        //blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
      sidebar: {
        hideable: true,
      },
    },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'SynthLauncher Docs',
        logo: {
          alt: 'Synth Logo',
          src: 'img/logo.svg',
        },
        items: [
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://synthlauncher.vercel.app',
            label: 'Main Website',
            position: 'right',
          },
          {
            href: 'https://discord.gg/3nCsfqF9YZ',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/SynthLauncher/SynthLauncherDocs/tree/main',
            label: 'Wiki GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/SynthLauncher/SynthLauncher',
            label: 'Launcher GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Main Website (Outdated, new site WIP)',
                href: 'https://synthlauncher.vercel.app',
                position: 'left',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3nCsfqF9YZ',
                positon: 'left',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SynthLauncher Organization & Contributors <br/> Made with ❤️ in Georgia & New Zealand`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
export default config;
