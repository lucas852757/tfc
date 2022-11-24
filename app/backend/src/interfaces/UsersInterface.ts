/* source:https://oieduardorabelo.medium.com/typescript-entendendo-generics-por-completo-40a372aeea5 */
import Users from '../database/models/UserModel';

interface UserInterface extends Users {

  dataValues: { password: string },

}

export default UserInterface;
