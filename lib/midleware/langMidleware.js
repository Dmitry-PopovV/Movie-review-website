function langMidleware() {
    return (req, res) => {
		const lang = req.body.path.slice(1, 3);
		switch (lang) {
			case 'en':
				req.session.lang = "ru";
				res.send('/ru' + req.body.path.slice(3));
				break;
			case 'ru':
				req.session.lang = "en";
				res.send('/en' + req.body.path.slice(3));
				break;
		}

	};
}

module.exports = langMidleware;
