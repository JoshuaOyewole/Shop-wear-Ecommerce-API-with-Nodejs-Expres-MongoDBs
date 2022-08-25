const Product = require("../models/Products");
const Sproduct = require("../models/Sproduct");


const {
    /*   verifyToken,
      verifyTokenAndAuthorization, */
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE 
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    
    try {
        const product = await Sproduct.findById(req.params.id);
        res.status(200).json(product);
        /* console.log(product)
        const allProducts = product.map(category =>{
           return category.products
        })
        const firstItem = allProducts[0];
        const secondItem = allProducts[1];
        const thirdItem = allProducts[2];
        const fourtItem = allProducts[3];
        const fiveItem = allProducts[4];
        const sixthItem = allProducts[5];
        const seventhItem = allProducts[6];
        const eightItem = allProducts[7];
        const ninethItem = allProducts[8];
        const tenItem = allProducts[9];

        const allItems = [...firstItem, ...secondItem, ...thirdItem, ...fourtItem, ...fiveItem, ...sixthItem, ...seventhItem, ...eightItem, ...ninethItem, ...tenItem]
        
        const exactItem = allItems.filter(item=>item.pid === req.params.id)
      console.log(allItems); */ 
    } catch (err) {
        res.status(500).json(err);  
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;

    console.log(qNew);
    const qCategory = req.query.category;
    console.log(qCategory);
    
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      } 
        res.status(200).json( products);
    }
   catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;





