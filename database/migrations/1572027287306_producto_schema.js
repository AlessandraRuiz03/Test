'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',50).notNullable()
      table.string('nombre',50).notNullable()
      table.float('precio',2).notNullable()
      table.integer('cantidad').notNullable()
      table.integer('id_marca').unsigned().references('id').inTable('marca')
      table.integer('id_provedor').unsigned().references('id').inTable('provedor')
    
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
