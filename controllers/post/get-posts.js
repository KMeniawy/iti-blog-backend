const { postModel } = require("../../models");
const { successHandler } = require("../../utils/responseHandler");

exports.getPosts = async (req, res, next) => {
  try {
    const allPosts = await postModel.find({});

    const posts = await postModel
      .find({})
      .populate("user");

    successHandler(res, posts, allPosts.length);
  } catch (err) {
    next(err);
  }
};
