const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const forumRoutes = require('./forumRoutes');
const merchandiseRoutes = require('./merchandiseRoutes');

router.use('/', homeRoutes)
router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);
router.use('/merchandise', merchandiseRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

