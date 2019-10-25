'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvedorSchema extends Schema {
  up () {
    this.create('provedors', (table) => {
      table.increments()
      table.string('nombre',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('provedors')
  }
}

module.exports = ProvedorSchema
