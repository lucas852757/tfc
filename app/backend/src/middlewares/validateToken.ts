import { Request, Response, NextFunction } from 'express';
import jsonwebtoken = require('jsonwebtoken');

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET || 'jwt_secret';
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jsonwebtoken.verify(token, secret);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
