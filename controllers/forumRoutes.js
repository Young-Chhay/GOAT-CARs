const router = require('express').Router();

router.get('/', async (req,res) => {
    try {
        res.render('forum-main', {

        }, 
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/all-posts', (req, res) => {
    res.render('forum-all-posts', {});
});

router.get('/my-posts', (req, res) => {
    res.render('forum-my-posts', {});
});

router.get('/car-review', (req, res) => {
    res.render('forum-car-review', {});
});

router.get('/ask-price', (req, res) => {
    res.render('forum-ask-price', {});
});

router.get('/maintenance-talk', (req, res) => {
    res.render('forum-maintenance-talk', {});
});

router.get('/free-talk', (req, res) => {
    res.render('forum-free-talk', {});
});

router.get('/view-post', (req, res) => {
    res.render('forum-view-post', {});
});

router.get('/new-post', (req, res) => {
    res.render('forum-new-post', {});
});

module.exports = router;