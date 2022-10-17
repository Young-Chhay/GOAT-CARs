const router = require('express').Router();

router.get('/', async (req,res) => {
    try {
        res.render('forum-main', {
            logged_in: req.session.logged_in
        }, 
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/all-posts', (req, res) => {
    res.render('forum-all-posts', {
        logged_in: req.session.logged_in
    });
});

router.get('/my-posts', (req, res) => {
    res.render('forum-my-posts', {

        logged_in: req.session.logged_in
    });
});

router.get('/car-review', (req, res) => {
    res.render('forum-car-review', {
        logged_in: req.session.logged_in
    });
});

router.get('/ask-price', (req, res) => {
    res.render('forum-ask-price', {
        logged_in: req.session.logged_in
    });
});

router.get('/maintenance-talk', (req, res) => {
    res.render('forum-maintenance-talk', {
        logged_in: req.session.logged_in
    });
});

router.get('/free-talk', (req, res) => {
    res.render('forum-free-talk', {
        logged_in: req.session.logged_in
    });
});

router.get('/view-post', (req, res) => {
    res.render('forum-view-post', {
        logged_in: req.session.logged_in
    });
});

router.get('/new-post', (req, res) => {
    res.render('forum-new-post', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;