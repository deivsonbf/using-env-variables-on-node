const app = require('./index');
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
<<<<<<< HEAD
	if( port == 5000){
		console.log("Desenvolvimento")

	}else{
		console.log("produção")
	}
})
=======
    console.log("Estou no ambiente de : " + process.env.NODE_ENV);
})
>>>>>>> 87abe5de66ff105612fe3cf9809173722f1b1dd0
