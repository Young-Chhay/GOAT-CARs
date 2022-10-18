const router = require('express').Router();
const { User, Auction } = require('../models');
const withAuth = require('../utils/auth');


router.get('/auction', async (req, res) => {
    try {
        const auctionData = await Auction.findOne({
            where: {
                active: true
            },
        });

        const auctions = auctionData.get({ plain: true });

        res.render('auction', {
            auctions
        });
    } catch (err) {
        res.status(500).json(err);
    }
    // try {
    //     res.render('auction', {
    //         logged_in: req.session.logged_in
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            // include: [{ }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/forum', (req, res) => {
//     res.render('forum-main');
// })

// router.get('/forum/allposts', (req, res) => {
//     res.render('forum-table');
// })

module.exports = router;
