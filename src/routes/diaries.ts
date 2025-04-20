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

router.post('/', (_req, res) => {
  res.send('Saving a diary entry...')
})

export default router
