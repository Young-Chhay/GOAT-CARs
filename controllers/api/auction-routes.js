const router = require('express').Router();
const { User, Car, Auction } = require('../../models');
const Bid = require('../../models/bid');
const withAuth = require('../../utils/auth');

// Auction routes
router.get('/', (req, res) => {
    Auction.findAll({
        // attributes: [
        //     'id',
        //     'car_id',
        //     'user_id',
        //     'auction_date'
        // ],
        include: [
            // {
            //     model: Car,
            //     attributes: ['make', 'model', 'year', 'color', 'price']
            // },
            {
                model: User,
                // attributes: ['username']
            },
            {
                model: Bid,
                // leave attributes out so we get all of them
            }
        ]
    })
        .then(dbAuctionData => res.json(dbAuctionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Auction.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'car_id',
            'user_id',
            'auction_date'
        ],
        include: [
            {
                model: Car,
                attributes: ['make', 'model', 'year', 'color', 'price']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbAuctionData => {
            if (!dbAuctionData) {
                res.status(404).json({ message: 'No auction found with this id' });
                return;
            }
            res.json(dbAuctionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// ******* put withauth back in once users are logged in
router.post('/', (req, res) => {
    Auction.create({
        car_id: req.body.car_id,
        // change "body" to session once logged in works
        user_id: req.body.user_id,
        sale_date: req.body.sale_date,
        starting_bid: req.body.starting_bid
    })
        .then(dbAuctionData => res.json(dbAuctionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Auction.update(
        {
            car_id: req.body.car_id,
            user_id: req.session.user_id,
            sale_date: req.body.sale_date
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbAuctionData => {
            if (!dbAuctionData) {
                res.status(404).json({ message: 'No auction found with this id' });
                return;
            }
            res.json(dbAuctionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Auction.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbAuctionData => {
            if (!dbAuctionData) {
                res.status(404).json({ message: 'No auction found with this id' });
                return;
            }
            res.json(dbAuctionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
