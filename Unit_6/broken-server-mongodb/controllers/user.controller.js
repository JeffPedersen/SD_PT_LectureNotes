const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    const newUser = await user.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT, {
      expiresIn: 60 * 60 * 24,
    });
    res.json({
      user: newUser,
      message: "Success: User Created",
      token: token,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("User Not Found");
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      throw new Error("Passwords Do Not Match");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: 60 * 60 * 24,
    });

    res.json({ user: user, message: "Success", token: token });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
