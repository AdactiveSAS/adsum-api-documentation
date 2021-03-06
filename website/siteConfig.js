/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
  title: 'Adsum REST API' /* title for your website */,
  tagline: 'A REST api designed to provide data',
  url: 'https://adactivesas.github.io/adsum-api-documentation' /* your website url */,
  baseUrl: '/adsum-api-documentation/' /* base url for your project */,
  organizationName: 'AdactiveSAS', // or set an env variable ORGANIZATION_NAME
  projectName: 'adsum-api-documentation',
  headerLinks: [
    {doc: '01-authentication', label: 'Docs'},
    {href: 'https://api-doc.adsum.io', label: 'Postman'},
    {doc: 'tuto-01-authentication', label: 'Examples'},
    {doc: 'reference-01-site', label: 'Reference'},
    {href: 'https://adactive.atlassian.net/servicedesk/customer/portal/1', label: 'Help'},
  ],
  algolia: {
    apiKey: "d73c8f4661d940e5a03c1427f1ea33b3",
    indexName: "adsum",
    algoliaOptions: {
      facetFilters: ["tags:rest"]
    }
  },
  users,
  /* path to images for header/footer */
  headerIcon: 'img/adsum.png',
  footerIcon: 'img/adsum.png',
  favicon: 'img/adsum.png',
  /* colors for website */
  colors: {
    primaryColor: '#27ccc0',
    secondaryColor: '#434a54',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    `Copyright © ${new Date().getFullYear()} Adactive SAS`,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://use.fontawesome.com/releases/v5.0.10/js/all.js'
  ],
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
