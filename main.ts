import express from 'express';
import middleware from './middleware';
import cors from 'cors';
import './model/DB';

import Account from './routes/Account';
import Card from './routes/Card';

const App = express();
const port = 8000;

App.use(cors());
App.use(middleware.Parser);

App.use("/v1/account", Account);
App.use("/v1/card", Card);

App.listen(port, () => {
    console.log("Server on", port);
})