import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'

const app = new Elysia({ adapter: node() })
	.get('/', () => 'Pagina principal')
	.listen(3000, ({ hostname, port }) => {
		console.log(
			`🦊 Elysia is running at ${hostname}:${port}`
		)
	})
    .post('/user', ({body}) =>{
        console.log('Recibimos el dato: ',body)
        return {
            message: 'Usuario creado',
            data: body
        }
    })
    .put('/user/:id', ({params, body}) =>{
        console.log('Actualizando el usuario: ', params.id)
        console.log('Con los datos: ', body)
        return {
            message: `Usuario ${params.id} actualizado`,
            data: body
        }
    })