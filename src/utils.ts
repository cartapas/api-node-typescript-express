import { NewDiaryEntry, Weather, Visibility } from './types'

// Check if the commentFromRequest is a string
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

// Method to check if the parameter sent is a string
const isString = (param: any): boolean => {
  return typeof param === 'string' || param instanceof String
}

// Method to check if the parameter sent is a date
const isDate = (param: any): boolean => {
  return Boolean(Date.parse(param))
}

// Method to check if the parameter sent is in the Weather enum
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

// Method to check if the parameter sent is in the Visibility enum
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

// Stores after parameter validations
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
