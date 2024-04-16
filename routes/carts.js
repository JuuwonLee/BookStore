const express = require('express');
const router = express.Router();
const {addToCart, getCartItems, removeCartItem} = require('../controller/CartController');

router.use(express.json());

router.post('/', addToCart) // 장바구니 담기
router.get('/', getCartItems) // 장바구니 조회 or 선택한 장바구니 상품 목록 조회
router.delete('/:id', removeCartItem) // 장바구니 도서 삭제



module.exports = router;