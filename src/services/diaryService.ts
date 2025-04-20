import { DiaryEntry } from '../types'
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
export const addEntry = (): undefined => undefined
