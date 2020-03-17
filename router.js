const express = require('express');
const router = express.Router();
const Personalized = require('./models/personalized');
const Mv = require('./models/mv');
const Newsong = require('./models/newsong');
const Banner = require('./models/banner');
const SearchHot = require('./models/searchHot');
const Song = require('./models/song');
const Lyric = require('./models/lyric');


router.get("/personalized", (req, res) => {
	Personalized.find({}, (err, personalized) => {
		res.send(personalized);
		return personalized;
	});
});

router.get('/personalized/mv', (req, res) => {
	Mv.find({}, (err, mvs) => {
		res.send(mvs);
		return mvs;
	});
});

router.get('/personalized/newsong', (req, res) => {
	Newsong.find({}, (err, newsongs) => {
		res.send(newsongs);
		return newsongs;
	});
});

router.get('/banner', (req, res) => {
		Banner.find({}, (err, banners) => {
			res.send(banners);
			return banners;
		});
});

router.get('/search/hot', (req, res) => {
	SearchHot.find({}, (err, hots) => {
		res.send(hots);
		return hots;
	});
});

router.get('/top/song', (req, res) => {
	// let typeGet = req.query.type;
	Song.find({type: req.query.type}, (err, songs) => {
		res.send(songs[0]);
		return songs[0];
	})
});

router.get('/lyric', (req, res) => {
	Lyric.find({id: req.query.id}, (err, lyrics) => {
		res.send(lyrics[0]);
		return lyrics[0];
	});
});

// 
// router.get('/delcar', (req, res) => {
// 	console.log(req.query);
// 	Car.deleteOne({
// 		_id: req.query.id
// 	}, function(err) {
// 		if (err) {
// 			return res.status(500).send('Servdr error.');
// 		}
// 		res.send("ok");
// 	});
// })
module.exports = router;
