import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'

const app = new Elysia({ adapter: node() })
	.get('/', () => 'que onda wedo wedito')
	.listen(3000, ({ hostname, port }) => {
		console.log(
			`🦊 Elysia is running at ${hostname}:${port}`
		)
	})