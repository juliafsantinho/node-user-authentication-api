import express, {Request, Response, NextFunction} from 'express';//biblioteca
import usersRoute from './routes/users.route';

const app = express();//instancia da biblioteca

//Configurando a Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso! ' });
});

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('App executando a porta 3000.')
})