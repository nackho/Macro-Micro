require('dotenv').config();
require('./config/database');

const Split = require('./models/split');
const Bodypart = require('./models/bodypart');

(async function() {

  await Split.deleteMany({});
  const splits = await Split.create([
    {name: 'Pull', sortOrder: 10},
    {name: 'Push', sortOrder: 20},
    {name: 'Leg', sortOrder: 30},
    {name: 'Core/Other', sortOrder: 30},
    {name: 'Cardio', sortOrder: 40},
  ]);

  await Bodypart.deleteMany({});
  const bodyparts = await Bodypart.create([
    {name: 'Back', split: splits[0]},
    {name: 'Biceps', split: splits[0]},
    {name: 'Traps', split: splits[0]},
    {name: 'Chest', split: splits[1]},
    {name: 'Front Delts', split: splits[1]},
    {name: 'Side Delts', split: splits[1]},
    {name: 'Rear Delts', split: splits[1]},
    {name: 'Triceps', split: splits[1]},
    {name: 'Glutes', split: splits[2]},
    {name: 'Quads', split: splits[2]},
    {name: 'Hamstrings', split: splits[2]},
    {name: 'Calfs', split: splits[2]},
    {name: 'Adductors', split: splits[2]},
    {name: 'Abductors', split: splits[2]},
    {name: 'Upper Abs', split: splits[3]},
    {name: 'Lower Abs', split: splits[3]},
    {name: 'Obliques', split: splits[3]},
    {name: 'Forearms', split: splits[3]},
    {name: 'Outdoor Run', split: splits[4]},
    {name: 'Outdoor Walk', split: splits[4]},
    {name: 'Bike', split: splits[4]},
    {name: 'Treadmill', split: splits[4]},
    {name: 'Elliptical', split: splits[4]},
    {name: 'Stairmaster', split: splits[4]},
    {name: 'Other', split: splits[4]},
  ]);

  console.log(bodyparts)

  process.exit();

})();
