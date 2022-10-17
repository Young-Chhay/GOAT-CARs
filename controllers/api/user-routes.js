const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');



// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// // GET a single user
// router.get('/:id', (req, res) => {
//     User.findOne({
//         attributes: { exclude: ['password'] },
//         where: {
//             id: req.params.id
//         },
//         include: [
//             {
//                 model: Car,
//                 attributes: ['id', 'make', 'model', 'year', 'color', 'price', 'seller_id', 'buyer_id']
//             },
//             {
//                 model: Sale,
//                 attributes: ['id', 'car_id', 'user_id', 'sale_date']
//             }
//         ]
//     })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// POST a new user
router.post('/', (req, res) => {
    // console.log('post has worked!')

    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

        .then(dbUserData => res.json(dbUserData));
    // .then(dbUserData => {
    //     req.session.save(() => {
    //         req.session.user_id = dbUserData.id;
    //         req.session.username = dbUserData.username;
    //         req.session.loggedIn = true;

    //         res.json(dbUserData);
    //     });
    // });
});

// brought the template from mvc mini project
// router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create(req.body);

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;

//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // POST login
// router.post('/login', (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then(dbUserData => {
//         if (!dbUserData) {
//             res.status(400).json({ message: 'No user with that username!' });
//             return;
//         }

//         const validPassword = dbUserData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect password!' });
//             return;
//         }

//         req.session.save(() => {
//             // declare session variables
//             req.session.user_id = dbUserData.id;
//             req.session.username = dbUserData.username;
//             req.session.loggedIn = true;

//             res.json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//     });
// });

// // POST logout
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     }
//     else {
//         res.status(404).end();
//     }
// });

// // PUT update a user
// router.put('/:id', withAuth, (req, res) => {
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbUserData => {
//             if (!dbUserData[0]) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// // DELETE a user
// router.delete('/:id', withAuth, (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
