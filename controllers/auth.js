import User from '../models/auth.js';
import expressJwt from 'express-jwt';
import _ from 'lodash';
import { OAuth2Client } from 'google-auth-library';
import fetch from 'node-fetch';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

// functions
import msg from '../helpers/jsonMsg.js';
import { errorHandler } from '../helpers/database.js';

const signup = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  res.json(msg(null, 'Successfully registered!', { name, email, password }));
};

export default {
  signup,
};
