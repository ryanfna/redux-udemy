import { UserDto } from '@types'

const USER_KEY = 'user'

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
  storeData<UserDto>(USER_KEY, user)
}

const getUser = () => {
  return getData<UserDto>(USER_KEY)
}

const clearUser = () => {
  localStorage.removeItem(USER_KEY)
}

export { storeData, getData, storeUser, getUser, clearUser }
