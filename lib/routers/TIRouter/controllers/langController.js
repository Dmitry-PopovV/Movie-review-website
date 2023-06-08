function langMidleware(req, res) {
	switch (req.session.lang) {
		case 'en':
			req.session.lang = "ru";
			res.send('ru');
			break;
		case 'ru':
			req.session.lang = "en";
			res.send('en');
			break;
	}
}

module.exports = langMidleware;
