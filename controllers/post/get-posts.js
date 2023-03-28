const { postModel } = require("../../models");
const { successHandler } = require("../../utils/responseHandler");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postModel
      .find({})
      .populate("user");

    successHandler(res, posts);
  } catch (err) {
    next(err);
  }
};
