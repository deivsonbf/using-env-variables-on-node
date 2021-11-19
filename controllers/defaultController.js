const express = require('express');
const router = express.Router();
const mysql = require('../config')

// Rota GET
router.get('/', (req, res) => {
    mysql.getConnection((error, conn) => {

        if(error){
            return res.send(error)
        }

        conn.query('select * from usuarios', (error, resultado) => {
            conn.release();
            res.send(resultado);
        })

    })
});

module.exports = router;