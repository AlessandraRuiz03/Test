'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')



Route.on('/').render('/welcome')
Route.get('producto','ProductoController.index') 

Route.get('producto/:id','ProductoController.show') 
Route.get('productnuevo','ProductoController.create')  
Route.post('productcrear','ProductoController.store')
Route.get('productedit/:id','ProductoController.edit') 
Route.post('producteditar/:id','ProductoController.update') 
Route.get('productdelete/:id','ProductoController.destroy') 



Route.get('marca','MarcaController.index') 

Route.get('marca/:id','MarcaController.show') 
Route.get('marcanuevo','MarcaController.create')  
Route.post('marcacrear','MarcaController.store')
Route.get('marcaedit/:id','MarcaController.edit') 
Route.post('marcaeditar/:id','MarcaController.update') 
Route.get('marcadelete/:id','MarcaController.destroy') 


Route.get('provedor','ProvedorController.index') 

Route.get('provedor/:id','ProvedorController.show') 
Route.get('provedornuevo','ProvedorController.create')  
Route.post('provedorcrear','ProvedorController.store')
Route.get('provedoredit/:id','ProvedorController.edit') 
Route.post('provedoreditar/:id','ProvedorController.update') 
Route.get('provedordelete/:id','ProvedorController.destroy') 

