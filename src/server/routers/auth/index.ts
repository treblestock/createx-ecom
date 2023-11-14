import { Router } from "express"
import { check } from 'express-validator'
import authMiddleware from "../../middleware/auth.js"
import authController from "../../controllers/auth/index.js"

const router = Router()




router.post('/auth/signup', [
  check('email', 'wrong length email').not().isEmpty(),
  check('pass', 'wrong length pass').not().isEmpty(),
], authController.signup)
router.post('/auth/signin', authController.signin)
router.delete('/auth/delete-account', authMiddleware(['user']),  authController.deleteAccount)
// router.get('/auth/refresh', authController.refresh)
router.get('/auth/users', authMiddleware(['admin']), authController.users)
router.get('/auth/profile', authMiddleware(['user']), authController.profile)


export default router