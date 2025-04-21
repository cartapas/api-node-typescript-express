import express from 'express'
import * as diaryServices from '../services/diaryService'
import toNewDiaryEntry from '../utils'

const router = express.Router()

// Endpoints definition
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (req, res) => {
  const entry = diaryServices.findById(+req.params.id)
  res.send(entry)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('An unexpected error occurred')
    }
  }
})

export default router
