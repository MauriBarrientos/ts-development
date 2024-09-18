# Formotex #

En este proyecto se realizó un gesto de stock para controlar el equipamiento de la empresa distruibuidora Formotex.
Control de inventario, datos, destino y proveniencia. 
Desde el backend con la respectiva abstracción utilizando Postgresql y Express hasta un front-end sencillo con React. Hecho con TS orientado en objetos

##Instrucciones

Sigue los siguientes pasos
1- Clona este repositorio
```bash
https://github.com/MauriBarrientos/ts-development.git
```

2- Ponte sobre el directorio 
```bash
cd ts-development
```

3- Posicionate sobre "server" para el backend y sobre "client/formotex" para el front-end e installa las dependencias.

```bash
npm install
```

4-Ejecuta el script para ambos en terminales separadas.
```bash
npm run dev
```

5-Ejemplo de environments:

```
PORT=3000
DB_NAME=formotex
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres
SECRET_KEY=secret
```