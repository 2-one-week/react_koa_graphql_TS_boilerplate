import mongoose from 'mongoose';
import { DB_HOST, DB_NAME } from '@/config';

enum message {
  CONNECT_ERROR = 'mongodb connection error',
  CONNECT_SUCCEED = 'mongodb connected',
}

const connect = () => {
  mongoose
    .connect(DB_HOST!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      dbName: DB_NAME,
    })
    .then(() => console.log(message.CONNECT_SUCCEED))
    .catch((err) => console.error(message.CONNECT_ERROR, err));
};

mongoose.connection.on('disconnected', connect);

export default { connect };
