const router = require('express').Router();
const Auction = require('../../models/Auction');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newAuction = await Auction.create({
            title: req.body.title,
            description: req.body.descr,
            date_end: req.body.endDate,
            time_end: req.body.endHour,
            starting_bid: req.body.startBid,
            car_id: req.body.car,
            user_id: req.session.user_id,
        });
        res.status(200).json(newAuction);

    }   catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;