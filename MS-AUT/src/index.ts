import express, {Request, Response, NextFunction} from 'express';//biblioteca

const app = express();//instancia da biblioteca

//configurando as rotas
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso TOTAL! ' });
});

app.listen(3000, () => {
    console.log('App executando a porta 3000.')
})