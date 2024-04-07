const express = require("express");
const router = express.Router();
const db = require("../models");
const { Stage } = db;
//Find All Stages

router.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll();
    res(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find A specific stage
router.get("/:id", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id },
    });
    res.status(200).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Create a Stage
router.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new stage",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update event
router.put("/:id", async (req, res) => {
  try {
    const updatedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedStage} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//EXPORT
module.exports = router;
