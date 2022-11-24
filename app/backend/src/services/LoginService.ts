import bcrypt = require('bcryptjs');
import jsonwebtoken = require('jsonwebtoken');
import Users from '../database/models/UserModel';
import UserInterface from '../interfaces/UsersInterface';

class LoginService {
  private _response: Users | null | undefined;
  public login = async (arg: { email: string; password: string; }) => {
    const { email, password } = arg;
    this._response = await Users.findOne({ where: { email } });
    if (this._response === null) {
      const error = new Error('Incorrect email or password');
      error.name = 'unauthorizedUserError';
      throw error;
}

    const { dataValues } = this._response as UserInterface;
    const { password: passwordIntoDB } = dataValues;
    const response = await bcrypt.compare(password, passwordIntoDB);

    // const response = await bcrypt.compare(password, passwordIntoDB);

    if (!response) {
      const error = new Error('Incorrect email or password');
      error.name = 'unauthorizedUserError';
      throw error;
    }

    const secret = process.env.JWT_SECRET;
    const token = jsonwebtoken.sign({ data: this._response }, secret as jsonwebtoken.Secret);
    return { token };
  };
}

export default LoginService;
