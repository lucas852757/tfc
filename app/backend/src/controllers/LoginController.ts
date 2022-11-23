import LoginService from '../services/LoginService';

class LoginController {
  constructor(private loginService = new LoginService()) {}
  public login = () => {
    try {
      const response = this.loginService.login();
    } catch (error) {
      
    }
  };
}

export default LoginController;
