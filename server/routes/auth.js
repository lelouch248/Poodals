const router = require("express").Router();
const passport = require("passport");

router.get("/signin/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: false,
      message: "user has been authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

router.get("/signin/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/signin/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["profile"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/signin/failed",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["profile"],
  })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/signin/failed",
  })
);


module.exports = router;