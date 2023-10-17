const express = require('express');
const router = express.Router();

// GET all Products
router.get('/api/products', (req, res) => {
});

// GET Product by id
router.get('/api/products/:id', (req, res) => {
});

// POST new Product
router.post('/api/products', (req, res) => {
});

// PUT update Product by id
router.put('/api/products/:id', (req, res) => {
});

// DELETE remove Product by id
router.delete('/api/products/:id', (req, res) => {
});

// DELETE remove all Products
router.delete('/api/products', (req, res) => {
});

// GET find all Products which name contains 'kw'
router.get('/api/products', (req, res) => {
  const { name } = req.query;
});

module.exports = router;