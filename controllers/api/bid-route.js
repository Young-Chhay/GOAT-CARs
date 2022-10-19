const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) => {
    try {
        const bidData = await Bid.create({
            bid_amount: req.body.bid,
            auction_id: req.body.auction,
            user_id: req.session.user_id,
        });
        res.status(200).json(bidData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
