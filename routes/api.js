const express = require('express');
const router = express.Router();

// GET all Products
router.get('/products', (req, res) => {
});

// GET Product by id
router.get('/products/:id', (req, res) => {
});

// POST new Product
router.post('/products', (req, res) => {
});

// PUT update Product by id
router.put('/products/:id', (req, res) => {
});

// DELETE remove Product by id
router.delete('/products/:id', (req, res) => {
});

// DELETE remove all Products
router.delete('/products', (req, res) => {
});

// GET find all Products which name contains 'kw'
router.get('/products', (req, res) => {
  const { name } = req.query;
});

module.exports = router;