const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    // Testing petición GET /cafes --> resultado esperado = código 200
    test("Código 200 ruta raíz", async() => {
        const response = await request(server).get('/cafes')

        expect(response.status).toBe(200)
    })

    // Testing petición DELETE /cafes/:id --> resultado esperado = código 404
    test("Código 404 id no existe", async() => {
        const jwt = "token"
        const idProductoEliminar = 999
        const response = await request(server)
        .delete(`/cafes/${idProductoEliminar}`)
        .set("Authorization", jwt)
        .send()

        expect(response.status).toBe(404)
    })

    // Testing petición POST /cafes --> resultado esperado = código 201
    test("Código 201 Agrega nuevo café", async() => {
        const id = Math.floor(Math.random() * 999)
        const cafe = {id, nombre: "Café Nuevo"}
        const response = await request(server)
        .post('/cafes')
        .send(cafe)

        expect(response.status).toBe(201)
    })

    // Testing petición PUT /cafes --> resultado esperado = código 400
    test("Código 400 Actualizar café", async() => {
        const cafeId = {id: 1};
        const { idParams } = 4;
        const response = await request(server)
        .put(`/cafes/${idParams}`)
        .send(cafeId)

        expect(response.status).toBe(400)
    })

});


