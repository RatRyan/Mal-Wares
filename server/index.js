import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'this is a very secret code',
    saveUninitialized: true,
    resave: false
}));

app.set("/", )

app.listen(3000);