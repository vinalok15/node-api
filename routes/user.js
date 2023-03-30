import express from 'express';
import { getAllUsers, getUserDetails, register } from '../controllers/user.js';
import { User } from '../models/user.js';

const router = express.Router();

router.get('/all', getAllUsers);

router.post('/new', register);

router.get('/:id', getUserDetails);

export default router;
