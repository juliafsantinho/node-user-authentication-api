# Microseerviço de autenticação com Nodejs

Este projeto é composto por um **microsserviço de autenticação** que poderá compor a caixinha de ferramentas e ser muito útil no dia a dia. :hammer::wrench:

## Composição do projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate
