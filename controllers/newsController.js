const CryptoNewsAPI = require('crypto-news-api').default;

const API = new CryptoNewsAPI(process.env.NEWS_API_KEY);

exports.getTopNews = async (req, res) => {
  try {
    const articles = await API.getTopNews();
    res.json({ result: true, data: articles });
  } catch (err) {
    res.status(500).json({ result: false, error: err });
  }
};

exports.getCombinedFeedByCoin = async (req, res) => {
  try {
    const items = await API.getTopFeedByCoin(req.params.coin);
    res.json({ result: true, data: items });
  } catch (err) {
    res.status(500).json({ result: false, error: err });
  }
};

exports.getTopNewsByCoin = async (req, res) => {
  try {
    const articles = await API.getTopNewsByCoin(req.params.coin);
    res.json({ result: true, data: articles });
  } catch (err) {
    res.status(500).json({ result: false, error: err });
  }
};

exports.getTweetsByCoin = async (req, res) => {
  try {
    const tweets = await API.getLatestTweetsByCoin(req.params.coin);
    res.json({ result: true, data: tweets });
  } catch (err) {
    res.status(500).json({ result: false, error: err });
  }
};
