'use strict'
const Producto = use('App/Models/Producto');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productos
 */
class ProductoController {
  /**
   * Show a list of all productos.
   * GET productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    /*let products = await Producto.all(); 
    return response.json(products);*/
    let producto = await Producto.query().with('marca').with('provedor').fetch(); 
    return response.json(producto);
  }

  /**
   * Render a form to be used for creating a new producto.
   * GET productos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    
  }

  /**
   * Create/save a new producto.
   * POST productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const producto = new Producto();
    producto.codigo = request.input('codigo')
    producto.nombre = request.input('nombre')
    producto.precio = request.input('precio')
    producto.cantidad = request.input('marca')
    producto.id_marca = request.input('id_marca')
    producto.id_provedor = request.input('id_provedor')
    await producto.save()
    
  }

  /**
   * Display a single producto.
   * GET productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const producto = await Producto.find(params.id);
    return response.json(producto);
  }

  /**
   * Render a form to update an existing producto.
   * GET productos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const Producto = await Product.find(params.id);
  }

  /**
   * Update producto details.
   * PUT or PATCH productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const producto = await Producto.find(params.id);
    producto.codigo = request.input('codigo')
    producto.nombre = request.input('nombre')
    producto.precio = request.input('precio')
    producto.cantidad = request.input('marca')
    producto.id_marca = request.input('id_marca')
    producto.id_provedor = request.input('id_provedor')
    await producto.save()

  }

  /**
   * Delete a producto with id.
   * DELETE productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const producto = await Producto.find(params.id);
    producto.delete();
    
  }
}

module.exports = ProductoController
