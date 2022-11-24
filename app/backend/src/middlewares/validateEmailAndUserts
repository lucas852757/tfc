import { Request, Response, NextFunction } from 'express';
import Joi = require('joi');

const valtidate = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const schema = Joi.object({
      email: Joi.string().email().required()
        .messages({ 'string.empty': 'All fields must be filled' }),
      password: Joi.string().not().empty().required()
        .messages({ 'string.empty': 'All fields must be filled' }),
    });
    const { error } = schema.validate({ email, password });
    console.log(error);
    if (error) {
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};
export default valtidate;
