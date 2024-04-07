const express = require("express");
const router = express.Router();
const db = require("../models");
const { Event } = db;
// FIND ALL EVENTS
router.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll();
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC EVENT
router.get("/:id", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE AN EVENT
router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new event",
      data: newEvent,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE AN EVENT
router.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedEvents} event(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
