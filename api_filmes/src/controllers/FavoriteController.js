import Favorite from '../models/Favorite';

class FavoriteController {
  async index(req, res) {
    const favorites = await Favorite.findAll({
      attributes: ['id', 'title', 'year', 'imdbid', 'type', 'poster'],
      order: [['id', 'DESC']],
    });

    res.json(favorites);
  }

  async store(req, res) {
    try {
      const favorites = await Favorite.create(req.body);

      return res.json(favorites);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não existe para ser deletado'],
        });
      }

      const favorites = await Favorite.findByPk(id);

      if (!favorites) {
        return res.status(400).json({
          errors: ['ID dos Favoritos nào encotrado'],
        });
      }

      await favorites.destroy();
      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new FavoriteController();
