function sendUserLangMidleware(req, res) {
    res.json([req.session.lang]);
}

module.exports = sendUserLangMidleware;