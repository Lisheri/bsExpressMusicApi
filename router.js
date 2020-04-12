const express = require('express');
const router = express.Router();
const Personalized = require('./models/personalized');
const Mv = require('./models/mv');
const Newsong = require('./models/newsong');
const Banner = require('./models/banner');
const SearchHot = require('./models/searchHot');
const Song = require('./models/song');
const Lyric = require('./models/lyric');
const Higthquality = require('./models/highquality');
const Playlist = require('./models/playlist');
const MusicComment = require('./models/musicComment');
const SimiPlaylist = require('./models/simiPlaylist');
const SimiSong = require('./models/simiSong');
const PlaylistDetail = require('./models/playlistDetail');
const AllSong = require('./models/allSong');
const AllPrivilege = require('./models/allPrivilege');
const MvDetail = require('./models/mvDetail');
const MvUrl = require('./models/mvUrl');
const MvSimi = require('./models/mvSimi');
const MvArtist = require('./models/mvArtist');
const NewMv = require("./models/newMv");
const EditorChoices = require('./models/editorChoice');
const GoodBanner = require('./models/goodBanner');
const HotGood = require('./models/hotgood');



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

router.get('/top/playlist/highquality', (req, res) => {
	Higthquality.find({cat: req.query.cat}, (err, highquality) => {
		res.send(highquality[0]);
		return highquality[0];
	});
});

router.get('/top/playlist', (req, res, next) => {
	const limit = req.query.limit || 50;
	let offset = req.query.offset || 0;
	if (offset < 0) {
		offset = 0;
	}
	Playlist.find({cat: req.query.cat}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				playlists,
				total,
				code,
				more,
				cat
			} = results[0];
			total = playlists.length;
			playlists = playlists.splice(offset, limit);
			const resultNew = {
				playlists,
				total,
				code,
				more,
				cat
			};
			res.send(resultNew);
			return resultNew;
		}
	})
});

router.get('/comment/music', (req, res, next) => {
	const pageSize = req.query.pageSize || 50;
	let offset = req.query.offset || 0;
	if (offset < 0) {
		offset = 0;
	}
	MusicComment.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			} = results[0];
			total = comments.length;
			comments = comments.splice(offset, pageSize);
			const resultNew = {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			};
			res.send(resultNew);
			return resultNew;
		}
	});
});

router.get('/simi/playlist', (req, res) => {
	SimiPlaylist.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		}else {
			let {
				playlists,
				code
			} = results[0];
			const newResult = {
				playlists,
				code
			};
			res.send(newResult);
			return newResult;
		}
	});
});

router.get('/simi/song', (req, res) => {
	SimiSong.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				songs,
				code
			} = results[0];
			const newResult = {
				songs,
				code
			};
			res.send(newResult);
			return newResult;
		}
	});
});

router.get('/playlist/detail', (req, res) => {
	PlaylistDetail.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				code,
				relatedVideos,
				playlist,
				urls,
				privileges
			} = results[0];

			let newResult = {
				code,
				relatedVideos,
				playlist,
				urls,
				privileges
			};
			res.send(newResult);
			return newResult;
		}
	});
});

router.get('/comment/playlist', (req, res, next) => {
	const pageSize = req.query.pageSize || 50;
	let offset = req.query.offset || 0;
	if (offset < 0) {
		offset = 0;
	}
	MusicComment.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			} = results[0];
			total = comments.length;
			comments = comments.splice(offset, pageSize);
			const resultNew = {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			};
			res.send(resultNew);
			return resultNew;
		}
	});
});

router.get('/comment/hot', (req, res, next) => {
	MusicComment.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			} = results[0];
			total = hotComments.length;
			const hasMore = moreHot;
			const resultNew = {
				topComments,
				hasMore,
				hotComments,
				total,
				code,
			};
			res.send(resultNew);
			return resultNew;
		}
	});
});
// const getDetail =async function (details, idArrays, allDetail) {
// 	for (let i = 0; i < idArrays.length; i++) {
// 		const id = parseInt(idArrays[i]);
// 		details.push(await allDetail.find({id: id}, (err, results) => results[0]));
// 	}
// 	return details;
// };
const getDetail =async function (id, allDetail) {
	return allDetail.find({id: id}, (err, results) => results[0])
};
const getDetails = async function(allDetail, idArrays) {
	let details = [];
	for (let i = 0; i < idArrays.length; i++) {
		if ((await getDetail(idArrays[i], allDetail))[0]) {
			details.push((await getDetail(idArrays[i], allDetail))[0]);
		}
	}
	return details;
};
router.get("/song/detail", async (req, res, next) => {
	let ids = req.query.ids;
	let idArrays = ids.split(",");
	const songs = await getDetails(AllSong, idArrays);
	const privileges = await getDetails(AllPrivilege, idArrays);
	const result = {
		songs,
		privileges,
		code: 200
	};
	res.send(result);
	return result;
});

router.get("/mv/detail", (req, res) => {
	MvDetail.find({id: req.query.mvid}, (err, results) => {
		res.send(results[0]);
		return results[0];
	});
});

router.get("/mv/url", (req, res) => {
	MvUrl.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			const {
				id,
				url,
				r,
				size,
				md5,
				code,
				expi,
				fee,
				mvFee,
				st,
				msg
			} = results[0];
			const data = {
				id,
				url,
				r,
				size,
				md5,
				code,
				expi,
				fee,
				mvFee,
				st,
				msg
			};
			const newResult = {
				code: 200,
				data
			};
			res.send(newResult);
			return newResult;
		}
	});
});

router.get("/simi/mv", (req, res) => {
	MvSimi.find({id: req.query.mvid}, (err, results) => {
		res.send(results[0]);
		return results[0];
	})
});

router.get("/artists", (req, res) => {
	MvArtist.find({id: req.query.id}, (err, results) => {
		res.send(results[0]);
		return results[0];
	});
});

router.get("/comment/mv", (req, res) => {
	MusicComment.find({id: req.query.id}, (err, results) => {
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			} = results[0];
			total = hotComments.length;
			const resultNew = {
				isMusician,
				userId,
				topComments,
				moreHot,
				hotComments,
				code,
				comments,
				total,
				more
			};
			res.send(resultNew);
			return resultNew;
		}
	});
});

router.get("/mv/all", (req, res) => {
	NewMv.find({area: req.query.area, order: req.query.order, type: req.query.type}, (err, results) => {
		let offset = parseInt(req.query.offset);
		let pageSize = parseInt(req.query.limit);
		if (!results[0]) {
			res.send([]);
			return null;
		} else {
			let {
				count,
				hasMore,
				data,
				code
			} = results[0];
			count = data.length;
			data = data.splice(offset, pageSize);
			const newResult = {
				count,
				hasMore,
				data,
				code
			};
			res.send(newResult);
			return newResult;
		}
	});
});

router.get("/editor/all", (req, res) => {
	EditorChoices.find({}, (err, results) => {
		res.send(results);
		return results;
	});
});

router.get("/goodBanner", (req, res) => {
	GoodBanner.find({type: 1}, (err, results) => {
		res.send(results);
		return results;
	});
});

router.get("/hotgood/all", (req, res) => {
	HotGood.find({}, (err, results) => {
		res.send(results);
		return results;
	});
})

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
