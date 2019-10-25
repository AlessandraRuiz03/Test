'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Provedor extends Model {
    static get table(){
        return 'provedors'
       
    }
}

module.exports = Provedor
