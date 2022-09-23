import express from 'express'; //biblioteca
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();//instancia da biblioteca

//Configurando a Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('App executando a porta 3000.')
})