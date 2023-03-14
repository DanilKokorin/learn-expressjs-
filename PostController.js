import Post from './Post.js'
import PostService from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e.messege)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e.messege)
    }
  }

  async getOne(req, res) {
    try {
      const posts = await PostService.getOne(req.params.id);
      res.json(posts);
    } catch (e) {
      res.status(500).json(e.messege)
    }
  }

  async update(req, res) {
    try {
      const updatePost = await PostService.update(req.body);
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e.messege)
    }
  }

  async delete(req, res) {
    try {
      const post = await Post.delete(req.params);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.messege)
    }
  }
}

export default new PostController();