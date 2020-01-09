const express = require("express");
const stepsModel = require("./steps-model");

const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const steps = await stepsModel.find(id);

    res.json(steps);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
