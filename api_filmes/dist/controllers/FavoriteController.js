"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Favorite = require('../models/Favorite'); var _Favorite2 = _interopRequireDefault(_Favorite);

class FavoriteController {
  async index(req, res) {
    const favorites = await _Favorite2.default.findAll({
      attributes: ['id', 'title', 'year', 'imdbid', 'type', 'poster'],
      order: [['id', 'DESC']],
    });

    res.json(favorites);
  }

  async store(req, res) {
    try {
      const favorites = await _Favorite2.default.create(req.body);

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

      const favorites = await _Favorite2.default.findByPk(id);

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

exports. default = new FavoriteController();
