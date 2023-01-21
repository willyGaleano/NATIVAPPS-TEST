# NATIVAPPS CHALLENGE API

Prueba técnica - NATIVAPPS

- [Base URL : http://localhost:3010/v1](http://localhost:3010/v1)

## Config

Crear el archivos .env:

```bash
PORT=3000
DB_HOST=nativappsdb
DB_PORT=5432
DB_NAME=nativapps
USER=postgres
PASSWORD=MySecr3tPassWord@as2
```

## Correr localmente

Clonar el proyecto y ejecutar el siguiente comando:

```bash
docker-compose up
```

## Ejecutar pruebas

```bash
yarn test
```

## Endpoint 🚀

_Create Patient_

http://localhost:3000/v1/patient/create

[![create-Patient1.png](https://i.postimg.cc/CLY3DGdz/create-Patient1.png)](https://postimg.cc/QV4YZWQ3)

[![create-Patient2.png](https://i.postimg.cc/4yTxpYhs/create-Patient2.png)](https://postimg.cc/wy0zpTVG)





Validando los campos

[![validation.png](https://i.postimg.cc/6qSzHNtW/validation.png)](https://postimg.cc/m1YQDJPJ)

