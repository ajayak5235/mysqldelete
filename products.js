const db = require('../util/database');

app.delete('productId', (req, res) => {
    const productId = req.params.productId;

    // Assuming you have a MySQL connection pool set up
    pool.query('DELETE FROM products WHERE id = ?', [productId], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while deleting the product.' });
        }

        // Check if a row was affected (indicating a successful deletion)
        if (results.affectedRows === 1) {
            return res.status(200).json({ message: 'Product deleted successfully.' });
        } else {
            return res.status(404).json({ error: 'Product not found.' });
        }
    });
});
