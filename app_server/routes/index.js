var express = require('express');
var router = express.Router();

var ctrlMekanlar=require('../controllers/mekanlar')

var ctrlDigerleri=require('../controllers/digerleri')


router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);


router.get('/hakkinda', ctrlDigerleri.hakkinda);


/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
module.exports = router;
