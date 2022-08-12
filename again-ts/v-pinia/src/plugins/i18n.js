const install = (app, options) => {
  app.config.globalProperties.$translate = (key) => {
    return key.split('.').reduce((o, i) => {
      if (o) return o[i]
    }, options)
  }

  app.provide('i18n', options)
}

/* export default {
  install,
} */

export { install as default }
