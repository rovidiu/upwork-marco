import languages from '../languages'

export function getLocalizedPath(path, locale) {
  let components = path.split('/').filter(c => c.length > 0)
  
  const {
    routers,
  } = languages[locale]
  
  const keys = Object.keys(routers)
  
  components = components.map(component => (keys.indexOf(component) > -1 ? routers[component] : component))
  return components.reduce((acc, component) => (`${acc}/${component}`), `/${locale}`)
}

export const generateTempId = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  
  return `${s4()}${s4()}-${s4()}`
}