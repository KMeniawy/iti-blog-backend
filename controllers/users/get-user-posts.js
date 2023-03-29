const { userModel: User, postModel: Post } = require("../../models");
  const { successHandler, errorHandler } = require("../../utils/responseHandler");

  exports.getUserPosts = async (req, res, next) => {
    try {
      const { userId } = req.params;

      if (!userId) {
        throw errorHandler("user id is required", 400);
      }

      const posts = await Post
        .find({ user: userId })
        .populate("user");

      successHandler(res, posts, posts.length);
    } catch (err) {
      next(err);
    }
  };