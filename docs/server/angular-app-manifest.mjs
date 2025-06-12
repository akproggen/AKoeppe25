
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AKoeppe25/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AKoeppe25"
  },
  {
    "renderMode": 2,
    "route": "/AKoeppe25/home"
  },
  {
    "renderMode": 2,
    "route": "/AKoeppe25/news"
  },
  {
    "renderMode": 2,
    "route": "/AKoeppe25/about"
  },
  {
    "renderMode": 2,
    "route": "/AKoeppe25/contact"
  },
  {
    "renderMode": 2,
    "route": "/AKoeppe25/test01"
  },
  {
    "renderMode": 2,
    "redirectTo": "/AKoeppe25",
    "route": "/AKoeppe25/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5101, hash: '82e720918329eab70e3ae43bf790c3420b9d37a15695f9e020d93c141dd2e4d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: '31c37d383bb9a09572e667ed6bcb347f476dc6afc70e3e989918ee457462a89e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22074, hash: 'e3eaef4c108db3c744b6f1b8cf5855731a01bfa45ae9aba17e439044f9171ca9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22074, hash: 'e3eaef4c108db3c744b6f1b8cf5855731a01bfa45ae9aba17e439044f9171ca9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14162, hash: '3f2efd65549881be064e2052c682fa77b11b468bde8f3d51e4fc1c616b8aa9a9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22556, hash: '872925f3abec9b8dffd9e582e930e79fa64c0e667800e74766d9ba2855603a95', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'test01/index.html': {size: 14158, hash: '9991258fd57dad09432a2439b79cccb54745be2699dab07ddd528fe7207145e3', text: () => import('./assets-chunks/test01_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 40724, hash: '221afea969fdbf743ed1a69b43a54fb372d45741af30b921a40c1f3af632218a', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
