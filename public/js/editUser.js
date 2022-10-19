// Profile Section to edit user information
// Change user password, 
// Change username, 
// Change first & last name, 
// Delete user account.

// Path: public/js/editUser.js

// Update user 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });

        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Change user password
router.put('/password/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });

        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Change username
router.put('/username/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });

        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Change first & last name
router.put('/name/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });

        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }   

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete user account
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;



// Change user password
 

// Change username


// Change first & last name






