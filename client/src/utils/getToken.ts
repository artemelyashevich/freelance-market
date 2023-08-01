export const getCookie = () => {
    return document.cookie.split('; ').reduce((acc: any, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      return acc
    }, {})
  }