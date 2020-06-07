import { oakContext, User } from './../../types.ts'
import { Users } from '../../db/index.ts'

export default {
    index: async ({ response }: oakContext) => {
        const users: User[] = await Users.find()
        
        response.status = 200
        response.body = { results: users }
    },

    show: async ({ response, params }: oakContext) => {
        const { id } = params
        const user: User = await Users.findOne({ _id: { $oid: id }})

        response.status = 200
        response.body = {
            results: user
        }
    },

    store: async ({ request, response }: oakContext) => {
        const { value }: { value: any } = await request.body()

        if (request.hasBody) {
            const { $oid } = await Users.insertOne(value)
            const user: User = { _id: { $oid }, ...value }            

            response.status = 201
            response.body = {
                results: user
            }
        }
    },

    update: async ({ request, response, params }: oakContext) => {
        const { id } = params
        
        const { value } = await request.body()
        const user = await Users.updateOne({ _id: { $oid: id }}, { $set: value })
        response.status = 200
        response.body = {
            results: user
        }
    },

    destroy: async ({ response, params }: oakContext) => {
        const { id } = params
        await Users.deleteOne({ _id: { $oid: id } })

        response.status = 200
        response.body = {}
    }
}