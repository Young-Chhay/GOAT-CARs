const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const forumRoutes = require('./forumRoutes');

router.use('/', homeRoutes)
router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

