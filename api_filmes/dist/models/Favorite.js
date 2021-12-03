"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Favorite extends _sequelize.Model {
  static init(sequelize) {
    super.init({

      title: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      year: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      type: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      imdbid: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'ImdbID deve ser unico',
        },
      },
      poster: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Favorite;
