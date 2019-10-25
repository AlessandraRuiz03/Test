'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    static get table(){
        return 'productos'
       
    }

    marca(){
        return this.belongsTo('App/Models/Marca','id_marca')
      
    }
    provedor(){
        return this.belongsTo('App/Models/Provedor','id_provedor')
      
    }


}

module.exports = Producto
