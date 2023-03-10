/* source: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression */
import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import ErrorMiddleware from '../interfaces/errMiddlewareInterface';

const errors = {
  // validationError: 400,
  unauthorizedUserError: 401,
  notFoundError: 404,
  // JsonWebTokenError: 401,
  bankError: 500,
  twoEqualsTeamsError: 422,

  // Erros do Joi
  'string.min': 422,
  'string.base': 422,
  'number.min': 422,
  'number.base': 422,
  'any.required': 400,
  'string.empty': 400,
  'array.base': 422,
  // 'array.includesRequiredUnknowns': 422,
};

const middlewareOfError = async (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // console.log('------>', (<ErrorMiddleware>err).isJoi);

  // Joi
  if ((<ErrorMiddleware>err).isJoi) {
  // (<ErrorMiddleware>err).name;
    const status = await errors[(<ErrorMiddleware>err).details[0].type as keyof typeof errors];
    /* if (!status) return res.sendStatus(500); */
    return res.status(status).json({ message: (<ErrorMiddleware>err).message });
  }
  // Erros que não estão realicinados ao Joi
  const status = await errors[(<ErrorMiddleware>err).name as keyof typeof errors];
  return res.status(status).json({ message: (<ErrorMiddleware>err).message });
};

export default middlewareOfError;
