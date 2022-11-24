import { Request, Response, NextFunction } from 'express';
import jsonwebtoken = require('jsonwebtoken');

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET || 'jwt_secret';
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ messagage: 'Token not found' });
  }

  try {
    const decoded = jsonwebtoken.verify(token, secret) as jsonwebtoken.JwtPayload;
    const { role } = decoded.data;
    return res.status(200).json(role);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default validate;
