
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/news"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/test01"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5091, hash: 'f804019fcd1de46b758afb96dfbd7965e9a21074491fcdc06a00575b17e8e9d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1063, hash: '38b55be6c5054f00921d85ffb9d6ff484ca94b4442dda26a4998bae5d0a7d40f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22004, hash: 'a1ae86dbdd85b22f7f4f7b603517bee2c8b22c0e81a913d34fd1ab47d9faa4d9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22004, hash: 'a1ae86dbdd85b22f7f4f7b603517bee2c8b22c0e81a913d34fd1ab47d9faa4d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22486, hash: '799b86efaf85c3149b0bbc94d6d4edd571a35b767691b5e65367338cd972139a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14092, hash: '650f89bd5a457bd168b1683a4a626626de2c8cd4e996b39f065b34a62663f4a6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'test01/index.html': {size: 14088, hash: 'd47bb70c08e7695029cda11d01a7d6d71a0d9e6dd98890e6cd966ba1ffbf5256', text: () => import('./assets-chunks/test01_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 52236, hash: '3a61e28a6eed787ff02191179c1d743190a520578750339974b3707b2b8ec887', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
