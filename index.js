var googlehome = require('google-home-notifier');

var sounds = [
	'https://yambal.github.io/static-mtral/cuckoo_12.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_01.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_02.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_03.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_04.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_05.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_06.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_07.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_08.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_09.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_10.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_11.mp3',
	'https://yambal.github.io/static-mtral/cuckoo_12.mp3'
]



CuckooClock = {
	start: function(ip){
		googlehome.device("Google-Home", 'ja');
		googlehome.ip(ip);

		const {CronJob} = require('cron');

		new CronJob('* 0 7-24 * * *', () => {
			var d = new Date();
			var h = d.getHours();
			var sound = sounds[h];
			googlehome.play(sound, function(res) {
			  console.log(res);
			});
		}, null, true);
	}
}

module.exports = CuckooClock ;
