import express from 'express';

const router = express.Router();

// Endpoints definition
router.get('/', (_req, res) => {
    res.send('Fetching all entry diaries...');
})

router.post('/', (_req, res) => {
    res.send('Saving a diary entry...');
})

export default router;