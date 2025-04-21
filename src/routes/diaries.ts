import express from 'express'
import * as diaryServices from '../services/diaryService'

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
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  })

  res.json(newDiaryEntry)
})

export default router
