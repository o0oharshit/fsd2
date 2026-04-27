const product = require('../models/productModel');

// @desc Get all products
const getProducts = async (req, res, next) => {
    try {
        const { category, minPrice, maxPrice } = req.query;
        const filter = {};

        if (category) {
            filter.category = category;
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        const products = await product.find(filter).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
            message: 'Get all products'
        });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {

    try {
        const product = await product.findById(req.params.id);
        if (!product) {
            
            const error = new Error('Product not found');
            error.statusCode = 404;
            return next(error);
        } 
        res.status(200).json({
            success: true,
            data: product,
            message: 'Get product by id'
        });
    } catch (error) {
        next(error);

    }
};

//create product --post

const createProduct = async (req, res, next) => {

    try {
        const product = await product.create(req.body);
        res.status(201).json({
            success: true,
            data: product,
            message: 'Product created successfully'
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            error.statusCode = 400;
        }
        next(error);

    }
} ; 


module.exports = { getProducts, getProductById }; 