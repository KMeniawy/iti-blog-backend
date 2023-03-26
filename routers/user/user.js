const express = require("express");
const { protect } = require("../../controllers/auth/auth");

const { getOneUser } = require("../../controllers/users/get_one");
const { updateUser } = require("../../controllers/users/update_user");


const userRouter = express.Router();

userRouter.get("/:userID", getOneUser);

userRouter.patch(
  "/",
  protect,
  updateUser
);

module.exports = userRouter;
