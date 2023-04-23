const Game = require("../models/game.model");
const validateSession = require("../middleware/validate-session");
router.post("/add", validateSession, async (req, res) => {
  try {
    const game = new Game({
      title: req.body.game.title,
      owner_id: req.user._id,
      studio: req.body.game.studio,
      user_rating: req.body.game.user_rating,
      have_played: req.body.game.have_played,
    });
    const newGame = await game.save();
    res.json({
      game: newGame,
      message: "Game was added to collection",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/owner", validateSession, async (req, res) => {
  try {
    const game = await Game.find({ owner_id: req.user._id });
    res.json({ game: game, message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/", validateSession, async (req, res) => {
  try {
    const game = await Game.find().populate("owner_id", "firstName lastName");
    res.json({ game: game, message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/:id", validateSession, async (req, res) => {
  try {
    const gameRecord = await Game.findById(req.params.id);

    if (!gameRecord) throw new Error("Record Does Not Exist");

    const isValidOwner = req.user._id == gameRecord.owner_id;
    if (!isValidOwner) {
      throw new Error(
        "The id supplied for game record is not owned by this user. Game wasn't deleted"
      );
    }

    const deletedGame = await Game.deleteOne({
      _id: req.params.id,
      owner_id: req.user._id,
    });
    res.json({
      deletedGame: deletedGame,
      message:
        deletedGame.deletedCount > 0
          ? "game was deleted"
          : "game was not removed",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.patch("/update/:id", validateSession, async (req, res) => {
  try {
    const filter = { _id: req.params.id, owner_id: req.user._id };
    const update = req.body;
    const returnOptions = { new: true };
    const game = await Game.findByIdAndUpdate(filter, update, returnOptions);

    res.json({
      message: game ? "game updated" : "game was not updated",
      game: game ? game : {},
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});
// Get one
router.get("/:id", validateSession, async (req, res) => {
  try {
    const game = await Game.findById({ _id: req.params.id });
    res.status(200).json({
      game: game,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
