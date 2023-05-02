import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '671'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c91'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '931'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '6a9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'af8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c7b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '887'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f51'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '65c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1d1'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch', '1f9'),
    exact: true
  },
  {
    path: '/blog/website-launched',
    component: ComponentCreator('/blog/website-launched', '86f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5a2'),
    routes: [
      {
        path: '/docs/api/',
        component: ComponentCreator('/docs/api/', '045'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/api/core',
        component: ComponentCreator('/docs/api/core', '121'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/api/events',
        component: ComponentCreator('/docs/api/events', '977'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/api-reference',
        component: ComponentCreator('/docs/category/api-reference', 'b23'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', 'fe4'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/guides',
        component: ComponentCreator('/docs/category/guides', '277'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '3f9'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/getting-started/usage',
        component: ComponentCreator('/docs/getting-started/usage', '99b'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/guides/extending',
        component: ComponentCreator('/docs/guides/extending', 'df8'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '001'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
