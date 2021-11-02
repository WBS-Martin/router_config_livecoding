import express from 'express'
import {
  getUsers,
  getUser,
  deleteUser,
} from '../controllers/usersController.js'
import { checkIfUserExists } from '../middlewares/checkIfUserExists.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', checkIfUserExists, getUser)
router.delete('/:id', checkIfUserExists, deleteUser)

export default router
