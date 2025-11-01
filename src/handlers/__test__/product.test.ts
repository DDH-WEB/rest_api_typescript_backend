import request from 'supertest'
import server from '../../server'

// jest.setTimeout(20000); // 20 segundos
describe('POST /api/products', () => {
    jest.setTimeout(60000); // 1 minuto completo

    it('should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)
        
        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)
    })

    it('should validate that the price is greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name : 'Monitor',
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        
        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)
    })

    it('should validate that the price is number and greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name : 'Monitor',
            price: 'hola'
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)
        
        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(1)
    })

    it('should create new product', async () => {
        const response = await request(server).post('/api/products').send({
            name : 'Monitor barato',
            price: 100
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')
        
        expect(response.status).not.toBe(404)
    })
})

describe('GET /api/products',() => {
    jest.setTimeout(60000); // 1 minuto completo

    it('should check if api/product url exists', async () => {
        const response = await request(server).get('/api/products')
        expect(response.status).not.toBe(404)
    })


    it('GET a JSON response with products', async() => {
        const response = await request(server).get('/api/products')
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')
        expect(response.status).toBe(200)
        
        expect(response.body).not.toHaveProperty('errors')
    })
})

describe('GET /api/products/:id',() => {
    jest.setTimeout(60000); // 1 minuto completo
    it('Sould return a 404 response for a non-existent product',async () =>{
        const id = 10000
        const response = await request(server).get(`/api/products/${id}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('error')
        expect(response.body.error).toBe('Producto no Econtrado')
    })

    it('should check a valid ID in the URL', async() => {
        const response = await request(server).get('/api/products/not-valid-url')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('ID No Valido')
    })

    it('get a JSON response for a single product', async() => {
        const response = await request(server).get('/api/products/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')
    })
})

describe('PUT /api/products/:id' , () => {
    jest.setTimeout(60000); // 1 minuto completo
    it('should check a valid ID in the URL', async() => {
        const response = await request(server).put('/api/products/not-valid-url').send({
                                                                                        name: "Monitor",
                                                                                        availability: true,
                                                                                        price: 300
                                                                                    })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('ID No Valido')
    })

    it('should diplay validation error message when updating a product', async() => {
        const response = await request(server).put('/api/products/1').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toBeTruthy()
        expect(response.body.errors).toHaveLength(5)
        
        expect(response.body.errors).not.toHaveLength(2)
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

   it('should that the price is greater than 0', async() => {
        const response = await request(server).put('/api/products/1').send({
                                                                        name: "Monitor",
                                                                        availability: true,
                                                                        price: 0
                                                                    })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toBeTruthy()
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('No valido, Precio')
        
        expect(response.body.errors).not.toHaveLength(0)
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    it('should return a 404 response for a non-existent product', async() => {
        const product = 10000
        const response = await request(server).put(`/api/products/${product}`).send({
                                                                        name: "Monitor",
                                                                        availability: true,
                                                                        price: 500
                                                                    })

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto no Econtrado')
        
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    it('should update an existing product with valid data', async() => {
        const response = await request(server).put(`/api/products/1`).send({
                                                                        name: "Monitor",
                                                                        availability: true,
                                                                        price: 500
                                                                    })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')
        
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errors')
    })
})

describe('PATCH /api/products/:id', () =>{
    it('should return a 404 response for a non-existing product', async () =>{
        const product = 10000
        const response = await request(server).patch(`/api/products/${product}`)
        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto no Econtrado')
        
        expect(response.body).not.toHaveProperty('data')
        expect(response.status).not.toBe(200)
    })
    it('should update the product availability', async () =>{
        const response = await request(server).patch('/api/products/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body.data.availability).toBe(false)

        expect(response.status).not.toBe(404)
        expect(response.status).not.toBe(400)
        expect(response.body).not.toHaveProperty('error')
    })

})

describe('DELETE /api/products/:id', () => {
    jest.setTimeout(60000); // 1 minuto completo
    it('should check a valid ID', async () => {
        const response = await request(server).delete('/api/products/not-valid')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors[0].msg).toBe('ID No Valido')
    })

    it('should return a 404 response for a non-existen product', async() => {
        const product = 1000
        const response = await request(server).delete(`/api/products/${product}`)
        expect(response.status).toBe(404)

        expect(response.status).not.toBe(200)
    })

    it('should delete a product', async() => {
        const response = await request(server).delete('/api/products/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(404)
        expect(response.status).not.toBe(400)
    })


})

