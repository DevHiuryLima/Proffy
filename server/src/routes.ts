import express from 'express'
import ClassesControler from './controllers/ClassesControler';
import ConnectionsController from './controllers/ConncetionsController';


const routes = express.Router();
const classesControler = new ClassesControler();
const connectionsController = new ConnectionsController();


routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;