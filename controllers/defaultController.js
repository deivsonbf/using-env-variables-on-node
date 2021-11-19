const express = require('express');
const router = express.Router();

// Rota GET
router.get('/', (req, res) => {
    res.send('API with dotenv configuration')
});

module.exports = router;