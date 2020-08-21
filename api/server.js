const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 5000

app.get('/', (req, res) => res.json({ text: 'Hello World!' }));
app.listen(port, () => console.log(`Sequelize Demo app listening on port ${port}!`))