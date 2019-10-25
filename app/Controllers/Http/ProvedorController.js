'use strict'
const Provedor = use('App/Models/Provedor');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with provedors
 */
class ProvedorController {
  /**
   * Show a list of all provedors.
   * GET provedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let provedor = await Provedor.all(); 
    return response.json(provedor);
  }

  /**
   * Render a form to be used for creating a new provedor.
   * GET provedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new provedor.
   * POST provedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const provedor = new Provedor();
    provedor.nombre = request.input('nombre');
    await provedor.save();
  }

  /**
   * Display a single provedor.
   * GET provedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const provedor = await Provedor.find(params.id);
  }

  /**
   * Render a form to update an existing provedor.
   * GET provedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update provedor details.
   * PUT or PATCH provedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const provedor = await Provedor.find(params.id);
    provedor.nombre = request.input('nombre')
    await provedor.save();
  }

  /**
   * Delete a provedor with id.
   * DELETE provedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const provedor = await Provedor.find(params.id);
    provedor.delete();
  }
}

module.exports = ProvedorController
