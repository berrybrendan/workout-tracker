const router = require("express").Router();
const Workout = require("../models/workout.js");

// html routes

router.get("/exercise", (req, res) => {
  res.redirect("exercise.html");
});

router.get("/stats", (req, res) => {
  res.redirect("stats.html");
});

router.get("/api/workouts", (req, res) => {
  console.log(res);
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ exercise: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercise/:id", (req, res) => {
  Workout.find({ _id: mongojs.ObjectId(req.params.id) })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;