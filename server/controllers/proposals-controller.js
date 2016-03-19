var proposals = [];

module.exports.create = function (req, res) {
    proposals.push(req.body);
    res.json(req.body);
};

module.exports.list = function (req, res) {
    res.json(proposals);
};