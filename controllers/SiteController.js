class SiteController {

    // [GET] /
    home(req, res) {
        res.render('home');
    }
    // [GET] /about
    about(req, res) {
        res.render('about');
    }
    // [GET] /store
    store(req, res) {
        res.render('store');
    }
}

module.exports = new SiteController; //SiteController();