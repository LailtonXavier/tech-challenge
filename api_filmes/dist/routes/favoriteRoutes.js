"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _FavoriteController = require('../controllers/FavoriteController'); var _FavoriteController2 = _interopRequireDefault(_FavoriteController);

const router = new (0, _express.Router)();

router.get('/', _FavoriteController2.default.index);
router.post('/', _FavoriteController2.default.store);
router.delete('/:id', _FavoriteController2.default.delete);

exports. default = router;
