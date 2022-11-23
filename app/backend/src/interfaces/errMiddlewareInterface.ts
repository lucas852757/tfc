import express = require('express');

interface ErrorMiddleware extends express.ErrorRequestHandler {
  name: string,
  message: string,
  isJoi: object[],
  status: number,
  details: [{ message:string, path:string[], type:string, context: object }],
}

export default ErrorMiddleware;
