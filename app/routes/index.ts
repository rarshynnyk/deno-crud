import { Router } from 'https://deno.land/x/oak/mod.ts'
import UserController from '../Controllers/Http/UserController.ts'

const router = new Router()

router
    .get('/users', UserController.index)
    .post('/users', UserController.store)
    .get('/users/:id', UserController.show)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.destroy)

export default router