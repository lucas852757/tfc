import * as express from 'express';
import errorMiddleware from './middlewares/ErrorMiddleware';
import loginRoutes from './routes/loginRoute';
import teamsRoutes from './routes/teamRoute';
import matchRoutes from './routes/matchRoute';
import leaderBoardRoutes from './routes/leaderBoardRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/matches', matchRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/teams', teamsRoutes);
    this.app.use('/leaderboard', leaderBoardRoutes);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
