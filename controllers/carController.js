const Car = require('../models/Car');

exports.getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.addCar = async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.json(newCar);
};
