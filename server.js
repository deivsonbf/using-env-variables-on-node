const app = require('./index');
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    console.log("Estou no ambiente de : " + process.env.NODE_ENV);
})