import Express from 'express';

const app = Express();

app.use(Express.static('./client'));

app.listen(3000, () => console.log('Server started'));
