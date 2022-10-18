const router = require('express').Router();
const { User, Car, Auction } = require('../models');
// const Bid = require('../models/Bid');
const withAuth = require('../utils/auth');

// Auction routes
router.get('/', async (req, res) => {
    try {


        const auctionData = await Auction.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Car,
                    attributes: [
                        'year',
                        'make',
                        'model',
                        'image'
                    ]
                }
            ]
        })
        const auctions = auctionData.map((auction) => auction.get({ plain: true }))
        res.render("auction", {
            auctions,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new-auction', async (req,res) => {
    try {
        const carData = await Car.findAll({
            where: { user_id: req.session.user_id },
        });
        const cars = carData.map((car) => car.get({ plain: true}))

        res.render('auction-new-post', {
            cars,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/bid', async (req,res) => {
    try {
        res.render('auction-bid', {
            logged_in: req.session.logged_in
        }) 
    } catch (err) {
        res.status(500).json(err);
    }
})
// router.get('/:id', (req, res) => {
//     Auction.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'car_id',
//             'user_id',
//             'auction_date'
//         ],
//         include: [
//             {
//                 model: Car,
//                 attributes: ['make', 'model', 'year', 'color', 'price']
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbAuctionData => {
//             if (!dbAuctionData) {
//                 res.status(404).json({ message: 'No auction found with this id' });
//                 return;
//             }
//             res.json(dbAuctionData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// ******* put withauth back in once users are logged in
// router.post('/', (req, res) => {
//     Auction.create({
//         car_id: req.body.car_id,
//         // change "body" to session once logged in works
//         user_id: req.body.user_id,
//         sale_date: req.body.sale_date,
//         starting_bid: req.body.starting_bid
//     })
//         .then(dbAuctionData => res.json(dbAuctionData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.put('/:id', withAuth, (req, res) => {
//     Auction.update(
//         {
//             car_id: req.body.car_id,
//             user_id: req.session.user_id,
//             sale_date: req.body.sale_date
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbAuctionData => {
//             if (!dbAuctionData) {
//                 res.status(404).json({ message: 'No auction found with this id' });
//                 return;
//             }
//             res.json(dbAuctionData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     Auction.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbAuctionData => {
//             if (!dbAuctionData) {
//                 res.status(404).json({ message: 'No auction found with this id' });
//                 return;
//             }
//             res.json(dbAuctionData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
