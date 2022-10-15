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

router.get('/allposts', (req, res) => {
    res.render('forum-allposts', {});
});

module.exports = router;