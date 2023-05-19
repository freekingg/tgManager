const jwt = require("koa-jwt");
const { secret } = require("../config");
const Router = require("koa-router");
const router = new Router({
  prefix: "/tg"
});
const {
  find,
} = require("../controllers/teletram");


router.get("/", find);

// router.post("/", create);

// router.get("/:id", findById);

module.exports = router;