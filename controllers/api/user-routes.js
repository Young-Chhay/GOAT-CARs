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
        req.session.user_id = userData.id;
        res.status(200).json(userData);
    });
} catch (err){
    console.log(err);
    res.status(500).json(err);
}

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

router.put('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update( 
            {
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
            

        // if (!userData[0]) {
        //     res.status(404).json({ message: 'No user found with this id' });
        //     return;
        // }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Change user password
// router.put('/password/:id', withAuth, async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             individualHooks: true,
//             where: {
//                 id: req.params.id
//             }
//         });

//         if (!userData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Change username
// router.put('/username/:id', withAuth, async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             individualHooks: true,
//             where: {
//                 id: req.params.id
//             }
//         });

//         if (!userData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Change first & last name
// router.put('/name/:id', withAuth, async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             individualHooks: true,
//             where: {
//                 id: req.params.id
//             }
//         });

//         if (!userData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }   

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Delete user account
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const userData = await User.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });

//         if (!userData) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }

//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
