const router = require('express').Router();
const newsController = require('./controllers/newsController');

// send empty OK on root path
router.get('/', (req, res) => res.status(204).json({}));

router.get('/news', newsController.getTopNews);
router.get('/news/aggregated/:coin', newsController.getCombinedFeedByCoin);
router.get('/news/:coin', newsController.getTopNewsByCoin);
router.get('/news/tweets/:coin', newsController.getTweetsByCoin);

module.exports = router;
