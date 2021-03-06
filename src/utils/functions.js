import { LAMBDA_ENDPOINT, IS_PROD } from './constants'

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min)

export const getCurrentYear = () => {
  const d = new Date()
  return d.getFullYear()
}

export default () =>
  IS_PROD 
    ? fetch(LAMBDA_ENDPOINT)
        .then(res => res.json())
    : new Promise(resolve => resolve({ distance: getRandomNumber(0, 50) })) 
