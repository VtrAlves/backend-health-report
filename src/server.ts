import express from 'express'

import routes from './routes'

const app = express()

app.use(routes)

app.get('/', (req, res) => {
	return res.json('Hello World')
})

app.listen(3333, () => {
	console.log('Server is running on port 3333')
})
