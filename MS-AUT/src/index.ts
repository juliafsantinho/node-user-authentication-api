import express, {Request, Response, NextFunction} from 'express';//biblioteca
import usersRoute from './routes/users.route';

const app = express();//instancia da biblioteca

//configurando as rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso! ' });
});

app.listen(3000, () => {
    console.log('App executando a porta 3000.')
})