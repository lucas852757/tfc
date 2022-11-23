import bcrypt = require('bcryptjs');
import jsonwebtoken = require('jsonwebtoken');
import Users from '../database/models/UserModel';

class LoginService {
  private _response: Users | null | undefined;
  public login = async (arg: { email: string; password: string; }) => {
    const { email, password } = arg;
    this._response = await Users.findOne({ where: { email } });
    if (this._response === null) {
      const error = new Error('Incorrect email or password');
      error.name = 'UnauthorizedUserError';
      throw error;
    }

    const { password: passwordIntoDB } = this._response?.toJSON() as Users;

    const response = await bcrypt.compare(password, passwordIntoDB);

    if (!response) {
      const error = new Error('Incorrect email or password');
      error.name = 'UnauthorizedUserError';
      throw error;
    }

    const secret = process.env.JWT_SECRET;
    const token = jsonwebtoken.sign({ data: this._response }, secret as jsonwebtoken.Secret);
    return { token };
  };
}

export default LoginService;
