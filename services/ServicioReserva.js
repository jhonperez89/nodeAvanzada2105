import {modeloReserva} from '../models/modeloReserva.js'


export class ServicioReserva{
    constructor(){}

    async registrar(reserva){
        let registrarReserva = new modeloReserva(reserva)
        return await registrarReserva.save()
    }

    async buscarTodas(){
        let registrarReserva = await modeloReserva.find()
        return registrarReserva
    }

    async buscarPorId(id){
        let registrarReserva = await modeloReserva.findById(id)
        return registrarReserva
    }

    async editar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndUpdate(id)
    }

}