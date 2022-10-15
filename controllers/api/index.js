const router = require('express').Router();
const carRoutes = require('./car-routes');
const userRoutes = require('./user-routes');
const auctionRoutes = require('./auction-routes');
// const homeRoutes = require('./homeRoutes');

// End Points
// router.use('/cars', carRoutes);
// router.use('/users', userRoutes);
// router.use('/auctions', auctionRoutes);
// router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
}
);

module.exports = router;
