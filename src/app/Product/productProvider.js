const baseResponseStatus = require("../../../config/baseResponseStatus");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const productDao = require("./productDao");

// Provider: Read 비즈니스 로직 처리
exports.retrieveProduct = async function(category) {
    const connection = await pool.getConnection(async(conn) => conn);
    const ProductResult = await productDao.selectProduct(connection, category);
    connection.release();

    return ProductResult;
};

exports.retrieveProductById = async function(productId) {
    const connection = await pool.getConnection(async(conn) => conn);
    const ProductResult = await productDao.selectProductById(connection, productId);
    connection.release();

    return ProductResult[0];
}

exports.retrieveLike = async function(userId, productId) {
    const connection = await pool.getConnection(async(conn) => conn);
    const ProductResult = await productDao.selectLike(connection, userId, productId);
    connection.release();

    return ProductResult;

}