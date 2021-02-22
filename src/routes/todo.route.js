  
import express from 'express';
import TodoController from '../controllers/todo.controller';
import checkAuth from '../middleware/checkAuth';


const router = express.Router();


router.post(
	'/create-todo',checkAuth,TodoController.createTodo
);
router.get(
	'/todos',checkAuth,TodoController.findAllTodos
);
router.get(
	'/todo/:todoId',checkAuth,TodoController.findSingleTodo
);
router.patch(
	'/todo/:todoId',checkAuth,TodoController.updateTodo
);
router.delete(
	'/todo/:todoId',checkAuth,TodoController.deleteSingleTodo
);



export default router;
