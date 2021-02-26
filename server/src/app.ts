import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { ApolloServer } from 'apollo-server-koa';

const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public server: Koa;

  public router: Router;
  // private apolloServer: ApolloServer;

  constructor() {
    this.server = new Koa();
    this.router = new Router();
    // this.apolloServer = new ApolloServer({});
    this.middleware();
    this.setRouter();
  }

  private middleware() {
    const corsOptions = {
      credentials: true,
    };
    this.server.use(bodyParser());
    this.server.use(cors(corsOptions));
    /*
    this.apolloServer.applyMiddleware({
      app: this.server,
      path: GRAPHQL_ENDPOINT,
      cors: corsOptions,
    });
    */
  }

  private setRouter() {
    this.router.get('/', (ctx) => {
      ctx.body = 'hello world';
    });
  }
}

export default new App();
