import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './app/routes/index.ts'

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 5000 });