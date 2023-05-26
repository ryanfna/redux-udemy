import { UserDto } from '@types'

// store object to local storage
const storeData = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data))
}

// get object from local storage
const getData = <T>(key: string): T => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : {}
}

const storeUser = (user: UserDto) => {
  storeData('user', user)
}

const getUser = () => {
  return getData('user')
}

const clearUser = () => {
  localStorage.removeItem('user')
}

export { storeData, getData, storeUser, getUser, clearUser }
