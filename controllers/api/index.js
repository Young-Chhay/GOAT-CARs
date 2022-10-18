const router = require('express').Router();
const carRoutes = require('./car-routes');
const userRoutes = require('./user-routes');
const forumRoutes = require('./forum-routes');
const merchandiseRoutes = require('./merchandise-routes')


// End Points
router.use('/cars', carRoutes);
router.use('/users', userRoutes);
router.use('/forum', forumRoutes);
// router.use('/merchandise', merchandiseRoutes)


// router.use((req, res) => {
//     res.status(404).end();
// });



module.exports = router;
