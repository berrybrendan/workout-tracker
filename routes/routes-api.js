const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts/create", ({ body }, res) => {
  Workout.create({ body })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/:id/update", ({ body }, res) => {
  Workout.findByIdAndUpdate(
    { _id: mongojs.ObjectId(req.params.id) },
    { $push: { exercise: body } }
  )
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;