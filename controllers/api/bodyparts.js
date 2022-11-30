const Bodypart = require('../../models/bodypart');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const bodyparts = await Bodypart.find({}).sort('name').populate('split').exec();
  // re-sort based upon the sortOrder of the categories
  console.log('test', bodyparts)
  bodyparts.sort((a, b) => a.split.sortOrder - b.split.sortOrder);
  res.json(bodyparts);
}

async function show(req, res) {
  const bodypart = await Bodypart.findById(req.params.id);
  res.json(bodypart);
}