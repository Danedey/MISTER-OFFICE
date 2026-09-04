// utils/user.test.js
const request = require('supertest');
const app = require('../../server');
const db = require('../config/database');

describe('Registro de usuario', () => {
    afterAll(async () => {
        //cerra conexion al terminar las pruebas
        await db.end();
    });


    it('deberia logear a un usuario hola', async () => {
        const res = await request(app)
            .post('/api/usuarios/login')
            .send({
                email: 'test1753913491725@mail.com',
                password: 'Password123'
                
            });

        console.log("📦 Respuesta del backend al logeo:", res.body);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Login exitoso');

    });

    it('deberia rechazar: email debe ser valido', async () => {
        const res = await request(app)
            .post('/api/usuarios/login')
            .send({
                email: 'test1753913491725@mail..com',
                password: 'Password123'
                
            });

        console.log("📦 Respuesta del backend al logeo:", res.body);

        expect(res.statusCode).toEqual(400);
        expect(res.body.errors[0].msg).toBe('Debe de ser un correo valido');

    });

    it('deberia rechazar: email debe ser valido', async () => {
        const res = await request(app)
            .post('/api/usuarios/login')
            .send({
                email: '    test17539134917    25@mailcom  ',
                password: 'Password123'
                
            });

        console.log("📦 Respuesta del backend al logeo:", res.body);

        expect(res.statusCode).toEqual(400);
        expect(res.body.errors[0].msg).toBe('Debe de ser un correo valido');

    });

    it('deberia rechazar: la constrasena no es correcta', async () => {
        const res = await request(app)
            .post('/api/usuarios/login')
            .send({
                email: 'test1753913491725@mail.com',
                password: '123123'
                
            });

        console.log("📦 Respuesta del backend al logeo mal contra:", res.body);

        expect(res.statusCode).toEqual(401);
        expect(res.body.error).toBe('Las contrasena no son iguales');

    });

    it('deberia rechazar: no encontrar al usuario al momento de logear', async () => {
        const res = await request(app)
            .post('/api/usuarios/login')
            .send({
                email: 'nola@mail.com',
                password: '123123'
                
            });

        console.log("📦 Respuesta del backend al logeo mal no registrado:", res.body);

        expect(res.statusCode).toEqual(402);
        expect(res.body.error).toBe('No se encontro la cuenta');

    });




    // it('deberia registrar un nuevo usuario hola', async () => {
    //     const res = await request(app)
    //         .post('/api/usuarios/registrar')
    //         .send({
    //             email: `test${Date.now()}@mail.com`,
    //             password: 'Password123',
    //             nombre: 'Usuario test'
    //         });

    //     console.log("📦 Respuesta del backend al registro bien:", res.body);

    //     expect(res.statusCode).toEqual(201);
    //     expect(res.body.message).toBe('Usuario registrado con exito siuu');

    // });

    it('deberia rechazar un registro con email invalido', async () => {
        const res = await request(app)
            .post('/api/usuarios/registrar')
            .send({
                email: 'invalido',
                contrasena: 'Password123',
                nombre: 'Usuario test'
            });


        console.log("📦 Respuesta del backend al registro mal:", res.body);

        expect(res.statusCode).toEqual(400);
        expect(res.body.errors[0].msg).toBe('Debe ser un email valido');

    });

});