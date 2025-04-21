import { DiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

// Obtener entradas
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

// Obtener una entrada por id
export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}

// Adicionar entradas
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    // id: diaries.length + 1,         // Look for the diaries array of objects length and create the next id.
    id: Math.max(...diaries.map(d => d.id)) + 1, // Look for the max id in the diaries array of object and create the next id.
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
