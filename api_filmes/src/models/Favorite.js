import Sequelize, { Model } from 'sequelize';

export default class Favorite extends Model {
  static init(sequelize) {
    super.init({

      title: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      year: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      imdbid: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'ImdbID deve ser unico',
        },
      },
      poster: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
