// src/services/auth.services.js
import api from '../lib/api';

export async function login(email, password) {
    try{
        const res = await api.post('/auth/login', { email, password })
        
        if(res.data.token){
            localStorage.setItem('token', res.data.token);
            // console.log('Inicio de sesion exitoso');
            // console.log('token resivido: ',res.data.token );
            return res.data;
        }
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            const errores = error.response.data.errors;
            if (Array.isArray(errores) && errores.length > 0) {
                return { success: false, msg: errores[0].msg };

            }
            return { success: false, msg: error.response.data.msg || 'Error de validación' };
        }
        return { success: false, msg: 'Error inesperado' };
    }
}

export async function registrar(nombre, email, password){
    

    try{
        const res = await api.post('/auth/sigup',{ nombre, email, password });
        console.log("RECIVIDO DEL            GEt:",res)

        return res.data;

    }
    catch (error) {
        console.log("hubo un error en general ",error.data)
        if (error.response && error.response.status === 400) {
            const errores = error.response.data.errors;
            if (Array.isArray(errores) && errores.length > 0) {
                return { success: false, msg: errores[0].msg };

            }
            return { success: false, msg: error.response.data.msg || 'Error de validación' };
        }
        return { success: false, msg: 'Error inesperado' };
    }
};
