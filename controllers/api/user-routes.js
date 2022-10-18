const router = require('express').Router();
// const { response } = require('express');
// const User = require('../../models/User')
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

// POST a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
    });

    req.session.save(() => {
        req.session.logged_in = true;

        res.status(200).json(userData);
    });
} catch (err){
    console.log(err);
    res.status(500).json(err);
}

        // req.session.save(() => {
        //     // req.session.user_id = userData.id;
        //     // req.session.logged_in = true;

        //     res.status(200).json(userData);
        // });

    // } catch (err) {
    //     res.status(400).json(err);
    // }
});



// POST login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

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

// POST logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

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
