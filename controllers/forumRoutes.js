const router = require('express').Router();
const Forum = require('../models/Forum');
const User = require('../models/User');
const withAuth = require('../utils/auth');
const { QueryTypes } = require('sequelize');

router.get('/', async (req,res) => {
    try {
        const forumData = await Forum.findAll({
            limit: 3,
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const forums = forumData.map((forum) => forum.get({ plain: true}))
        res.render('forum-main', {
            forums,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/all-posts', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const forums = forumData.map((forum) => forum.get({ plain: true }))
        res.render('forum-all-posts', {
            forums,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }    
});

router.get('/my-posts', async (req, res) => {
    try {
        
        if (!req.session.logged_in) {
            res.redirect('/forum');
            return;
        }

        const userId = req.session.user_id;
        const forumData = await Forum.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            
        });
        
        const forums = forumData.map((forum) => forum.get({ plain: true }))
        res.render('forum-my-posts', {
            forums,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

router.get('/car-review', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            where: { category: "Car Review" },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        const forums = forumData.map((forum) => forum.get({ plain: true }))

        res.render('forum-car-review', {
            forums,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ask-price', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            where: { category: "Ask Price" },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        const forums = forumData.map((forum) => forum.get({ plain: true }))

        res.render('forum-ask-price', {
            forums,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/maintenance-talk', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            where: { category: "Maintenance" },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        const forums = forumData.map((forum) => forum.get({ plain: true }))

        res.render('forum-maintenance-talk', {
            forums,
            logged_in: req.session.logged_in
        }); 
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/free-talk', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            where: { category: "Free Talk" },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        const forums = forumData.map((forum) => forum.get({ plain: true }))

        res.render('forum-free-talk', {
            forums,
            logged_in: req.session.logged_in
        }); 
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/view-post', (req, res) => {
    res.render('forum-view-post', {
        logged_in: req.session.logged_in
    });
});

router.get('/new-post', (req, res) => {
    res.render('forum-new-post', {

        logged_in: req.session.logged_in
    });
});

module.exports = router;