const router = require('express').Router();
// const { Merchandise } = require('../models');
const Merchandise = require('../models/Merchandise')

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const merchandiseData = await Merchandise.findAll({
        // include: [
        //   {
        //     // model: Merchandise,
        //     attributes: ['title'],
        //   },
        // ],
      });
  
      // Serialize data so the template can read it
      const merchandises = merchandiseData.map((merchandise) => merchandise.get({ plain: true }));
      
      // Pass serialized data and session flag into template
      res.render('merchandise', { 
        merchandises, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/merchandise-buy', async (req, res) => {
    try {
        res.render('merchandise-buy', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//   const merchandiseData = await Merchandise.findAll({
//     include: [
//         model: Merchandise,
//         attributes: ['id', 'title', 'description', 'price'],
//     ]
//   })
//     .then(merchandiseData => {
//         res.json(merchandiseData)
//         // .catch(err => {
//         //     res.status(404).json(err);
//         // });
//       });
// });

// router.get('/', async (req,res) => {
//     try {
//         res.render('merchandise', {
            
//         }, 
//         );
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/id:', (req, res) => {

//       Merchandise.findAll({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(merchandiseData => {
//           res.json(merchandiseData)
//           .catch(err => {
//               res.status(404).json(err);
//           });
//         });
//   });
 
// router.post('/', async (req, res) => {

//     try { const newMerchandise = await Merchandise.create({
//         ...req.body, 
//         user_id: req.session.user_id, 
//     });

//     res.json(newMerchandise);

// } catch (err) {
//     res.status(500).json(err);
// }

// });

// router.delete('/:id', async (req, res) => {
    
//     try { const merchandiseData = await Merchandise.destroy({
//         where: {
//             id: req.params.id,
//             user_id: req.session.user_id,
//         },
//     })

//     if(merchandiseData) {
//         res.status(404).json({
//             message: 'Item not found'});
//             return;
//     }

//     res.status(200).json(merchandiseData);

// } catch(err) {
//     res.status(500).json(err);
// }
// });

module.exports = router;