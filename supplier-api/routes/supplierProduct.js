const multer = require('multer');
const Product = require("../models/SupplierProduct");

const router = require("express").Router();


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads/');
    },
  
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
  });
  

//Add Product
router.post("/:id", upload.single('img'), async (req, res) => {
    console.log(req.file);

    const newProduct = new Product({
        title: req.body.title,
        desc: req.body.desc,
        img: req.file.filename,
        categories: req.body.categories,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        stock: req.body.stock,
        suppplierId: req.params.id
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Product
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

//Delete Product
router.delete(":/id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get Product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get All Products
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else{
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;