import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import Favorite from '../models/Favorite';

const models = [Favorite];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
