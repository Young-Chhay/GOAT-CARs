const router = require('express').Router();
const { User, Car } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all cars in the inventory 
// router.get('/', (req, res) => {
//     Car.findAll({
//         // Bring these back when working
//         // attributes: [
//         //     'id',
//         //     'make',
//         //     'model',
//         //     'year',
//         //     'color',
//         //     'price',
//         //     'seller_id',
//         //     'buyer_id'
//         // ],
//         include: [
//             {
//                 model: User,
//                 // Bring attributes back once working
//                 // attributes: ['username']
//             }
//         ]
//     })
//         .then(dbCarData => res.json(dbCarData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Get a single car
// router.get('/:id', (req, res) => {
//     Car.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'make',
//             'model',
//             'year',
//             'color',
//             'price',
//             'seller_id',
//             'buyer_id'
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbCarData => {
//             if (!dbCarData) {
//                 res.status(404).json({ message: 'No car found with this id' });
//                 return;
//             }
//             res.json(dbCarData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Create a new car
router.post('/', async (req, res) => {
    try {
        const carData = await Car.create({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            value: req.body.value,
            image: req.body.image,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        console.log('it has signal of post request!')
        res.status(200).json(carData);
    } catch (err) {
        res.status(500).json(err);
    }
})
// router.post('/', (req, res) => {
//     Car.create({
//         make: req.body.make,
//         model: req.body.model,
//         year: req.body.year,
//         color: req.body.color,
//         // rename from price to Value
//         value: req.body.value,
//         seller_id: req.session.user_id
//     })
//         .then(dbCarData => res.json(dbCarData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// Update a car
// router.put('/:id', withAuth, (req, res) => {
//     Car.update(
//         {
//             make: req.body.make,
//             model: req.body.model,
//             year: req.body.year,
//             color: req.body.color,
//             value: req.body.value,
//             seller_id: req.session.user_id
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbCarData => {
//             if (!dbCarData) {
//                 res.status(404).json({ message: 'No car found with this id' });
//                 return;
//             }
//             res.json(dbCarData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// // Delete a car
// router.delete('/:id', withAuth, (req, res) => {
//     Car.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbCarData => {
//             if (!dbCarData) {
//                 res.status(404).json({ message: 'No car found with this id' });
//                 return;
//             }
//             res.json(dbCarData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
