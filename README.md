# react-exercise

```bash
npx sequelize-cli model:generate --name brand --attributes name:string,image:string

npx sequelize-cli model:generate --name user --attributes name:string

npx sequelize-cli model:generate --name item --attributes name:string,price:integer,category:string,image:string,brandId:integer,userId:integer

```