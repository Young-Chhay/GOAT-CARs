const router = require('express').Router();
const carRoutes = require('./car-routes');
const userRoutes = require('./user-routes');
const forumRoutes = require('./forum-routes');
const auctionRoutes = require('./auction-routes');
const merchandiseRoutes = require('./merchandise-routes')


// End Points
router.use('/cars', carRoutes);
router.use('/users', userRoutes);
router.use('/forum', forumRoutes);
<<<<<<< HEAD
router.use('/merchandise', merchandiseRoutes)
// router.use('/auctions', auctionRoutes);
// router.use('/', homeRoutes);
=======
router.use('/auctions', auctionRoutes);


router.use((req, res) => {
    res.status(404).end();
});

>>>>>>> e9dd8f51ecba3d4245da084358d52798f0b8e0c9


module.exports = router;
