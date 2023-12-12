import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as routes from './routes';

export const app = express();
app.use(morgan('dev')).use(bodyParser.json());

Object.keys(routes).forEach((key) => {
    routes[key](app);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Notre application Node est démarrée sur : http://localhost:${port}`);
});
