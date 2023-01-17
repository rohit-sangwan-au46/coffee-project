const Drink = require('../models/Drink');

class MenuController {

    // [GET] /
    menu(req, res, next) {
        Drink.find({})
            .then(drinks => {
                drinks = drinks.map(drinks => drinks.toObject());  //with handlebar, must convert drinks to Object, 1 array Document
                res.render('menu', { drinks: drinks });
            })
            .catch(next);
    }
    // [GET] /:slug
    show(req, res, next) {
        Drink.findOne({ slug: req.params.slug })  //get slug parametter from URL //One:1 document
            .then(drinks => {
                drinks = drinks.toObject();
                res.render('drinks/detail', { drinks: drinks });
            })
            .catch(next);
    }

    // [GET] /create
    create(req, res, next) {
        res.render('drinks/create');
    }

    // [POST] /store
    store(req, res, next) {
        console.log(req.body);
        const newDrink = new Drink(req.body);
        newDrink.save()
            .then(() => res.redirect('/menu'))
            .catch(error => {
                console.log('Cannot Create New Drink');
            });
    }

    // [GET] /manage
    manage(req, res, next) {
        Drink.find({})
            .then(drinks => {
                drinks = drinks.map(drinks => drinks.toObject());
                res.render('drinks/manage', { drinks: drinks });
            })
            .catch(next);
    }

    // [GET] /manage/:id/edit
    edit(req, res, next) {
        Drink.findById(req.params.id)
            .then(drinks => {
                drinks = drinks.toObject();
                res.render('drinks/edit', { drinks: drinks });
            })
            .catch(next);
    }
    // [PUT] /manage/:id/edit
    update(req, res, next) {
        Drink.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/menu/manage'))
            .catch(next);
    }

    // [DELETE] /manage/:id
    destroy(req, res, next) {
        Drink.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))  //After deleting, go back to the management page
            .catch(next);
    }
}

module.exports = new MenuController; 