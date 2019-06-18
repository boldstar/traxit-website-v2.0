// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: 'TRAXIT',

    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
    },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'feature/**/*.md',
        typeName: 'Post',
        remark: {

        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/refunds', '/privacy', 'terms'],
        config: {
          '/trial': {
            changefreq: 'monthly',
            priority: 0.1
          },
          '/feature/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/pricing': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/': {
            changefreq: 'monthly',
            priority: 1.0
          },
        }
      }
    }
  ]
}
