const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig");

const apiRoutes = require('./routes/index');

const db = require('./models/index');

// const {User, Role} = require('./models/index');


const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on ${PORT} port...`);

        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

    //     const u1 = await User.findByPk(2);
    //     const r1 = await Role.findByPk(2);
    //     // u1.addRole(r1);

    //     // const response = await u1.getRoles();
    //     // console.log(response);

    //     const response = await u1.hasRole(r1);
    //     console.log(response);
     })
}

prepareAndStartServer();