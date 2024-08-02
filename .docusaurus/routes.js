import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '51c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3a5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b10'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch', 'a1e'),
    exact: true
  },
  {
    path: '/blog/website-launched',
    component: ComponentCreator('/blog/website-launched', '26f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '170'),
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
    component: ComponentCreator('/', '252'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
