const express = require('express');
const mysql = require('../config');
const router = express.Router();

// Rota GET
router.get('/', (req, res) => {
    mysql.getConnection((error, conn) => {

        if (error) {
            return res.status(500).send(error);
        }

        const sql = `SELECT * FROM usuarios;`
        conn.query(sql, (error, result) => {
            conn.release();
            if (error) {

            }
            // let response = JSON.parse(JSON.stringify(result))
            res.json(result);
        });
    });
});

// Rota POST
router.post('/', (req, res) => {

    let msg = '';

    mysql.getConnection((error, conn) => {

        if (error) {
            return res.status(500).send(error);
        }

        // Execução do 1º Insert
        const sql1 = `insert into usuarios_ativos(nome , senha) values (? , ?);`

        conn.query(sql1, [req.body.email, req.body.senha], (error, result) => {

            if (error) {
                msg += 'Query 1 não Executada! ' + error
            } else {
                msg += 'Query 1 Executada com sucesso!'
            }

        })

        // Execução do 2º Insert 
        const sql2 = `insert into usuarios(email , senha) values (? , ?);`

        conn.query(sql2, [req.body.email, req.body.senha], (error, result) => {

            conn.release();

            if (error) {
                msg += 'Query 2 não Executada! ' + error
            } else {
                msg += ', Query 2 Executada com sucesso!'
                res.status(200).send(msg)
            }
        })
    })
})

module.exports = router;