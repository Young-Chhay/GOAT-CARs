const router = require('express').Router();
const { Merchandise } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Merchandise.findAll({})
    .then(merchandiseData => {
        res.json(merchandiseData)
        .catch(err => {
            res.status(404).json(err);
        });
      });
});

router.get('/id:', (req, res) => {

      Merchandise.findAll({
        where: {
          id: req.params.id
        }
      })
      .then(merchandiseData => {
          res.json(merchandiseData)
          .catch(err => {
              res.status(404).json(err);
          });
        });
  });
 
router.post('/', async (req, res) => {

    try { const newMerchandise = await Merchandise.create({
        ...req.body, 
        user_id: req.session.user_id, 
    });

    res.json(newMerchandise);

} catch (err) {
    res.status(500).json(err);
}

});

router.delete('/:id', async (req, res) => {
    
    try { const merchandiseData = await Merchandise.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    })

    if(merchandiseData) {
        res.status(404).json({
            message: 'Item not found'});
            return;
    }

    res.status(200).json(merchandiseData);

} catch(err) {
    res.status(500).json(err);
}
});

module.exports = router;