require('dotenv').config()
const express = require ('express');
const sequelize = require('./db')

const testRouter = require('./routes/test.routes')

const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
   try {
      setTimeout(async () => {
         try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await sequelize.sync();
            console.log('All models were synchronized successfully.');
         } catch (error) {
            console.error('Unable to connect to the database:', error);
         }
      }, 5000);
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
   } catch (e) {
      console.log(e)
   }
}

start()

//app.use(express.json())
//app.use('/test', testRouter);