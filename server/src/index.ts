import db from '@shared/db/.';
import app from '@/app';
import { SERVER_PORT } from '@/config';

const PORT = SERVER_PORT || 3000;

db.connect();

app.server.listen(PORT, () => console.log(`listening on port ${PORT}`));
