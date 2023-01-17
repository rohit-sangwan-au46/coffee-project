const siteRouter = require('./site');
const menuRouter = require('./menu');

function route(app) {
    //Menu page
    app.use('/menu', menuRouter);

    //Static page
    app.use('/', siteRouter);
}

module.exports = route;

//modue export there object ( class, function,... ) will be returned when we reqire() that module