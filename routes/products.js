const Product = require("../models/Product");
const {
    /*   verifyToken,
      verifyTokenAndAuthorization, */
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
//checking
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
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
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
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    /* const qNew = req.query.new;
    const qCategory = req.query.category;
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
      } */
    try {
        res.status(200).json(
            [
                {
                  "header": "MoveTechⓇ Scrub Top Women",
                  "gender": "female",
                  "section":"scrubTopWomen",
                  "products": [
                    {
                    "_id": "63069083791cee17d07ec36d",
                      "title": "4-Pocket Scrub Top - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","scrub-top-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-women/4-pocket-scrub-top-women.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id":  "63064083791cee17d07ec36d",
                      "title": "3-Pocket Scrub Top - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1295",
                      "categories":["women","scrub-top-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-women/4-pocket-scrub-top-women2.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083791cee17d07ec36d",
                      "title": "Mandarin Scrub Top - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1195",
                      "categories":["women","scrub-top-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-women/4-pocket-scrub-top-women3.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "MOVETECHⓇ SCRUB TOP MEN",
                  "gender": "male",
                  "section":"scrubTopMen",
                  "products": [
                    {
                        "_id": "63029083c91cee17d07ec36d",
                      "title": "4-Pocket Scrub Top - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","scrub-top-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-men/4-pocket-scrub-top.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "6302cf83791cee17d07ec36d",
                      "title": "3-Pocket Scrub Top - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1695",
                      "categories":["men","scrub-top-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-men/4-pocket-scrub-top2.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083rt1cee17d07ec36d",
                      "title": "Zip-Up Polo Scrub Top - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","scrub-top-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-top-men/zip-up-polo-scrub-top.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "MOVETECHⓇ SCRUB PANTS WOMEN",
                  "gender": "female",
                  "section":"scrubPantWomen",
                  "products": [
                    {
                        "_id": "63ret083791cee17d07ec36d",
                      "title": "Jogger Scrub Pants - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1295",
                      "categories":["women","scrub-pant-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-women/jogger-scrub-pants.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "6302908379uyhe17d07ec36d",
                      "title": "Straight Cut Scrub Pants - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1235",
                      "categories":["women","scrub-pant-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-women/straight-cut-scrub-pants.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "6302908nb91cee17d07ec36d",
                      "title": "Jogger Scrub Pants - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","scrub-pant-women"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-women/jogger-scrub-pants3.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "MOVETECHⓇ SCRUB PANTS MEN",
                  "gender": "male",
                  "section":"scrubPantMen",
                  "products": [
                    {
                        "_id": "63029083791cee1ijx7ec36d",
                      "title": "Jogger Scrub Pants - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","scrub-pant-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-men/jogger-scrub-pant.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "6302908jftrcee17d07ec36d",
                      "title": "Jogger Scrub Pants - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","scrub-pant-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-men/jogger-scrub-pant2.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083791ceepls07ec36d",
                      "title": "Jogger Scrub Pants - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","scrub-pant-men"],
                     " size":["small", "medium", "large"],
                      "img" :"scrub-pant-men/jogger-scrub-pant3.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "LONG COAT WOMEN",
                  "gender": "female",
                  "section":"longCoatWomen",
                  "products": [
                    {
                        "_id": "630lz083791cee17d07ec36d",
                      "title": "Long Coat Pro+® - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","long-coat-women"],
                     " size":["small", "medium", "large"],
                      "img" :"long-coat-women/long-coat-women.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083791cemksd07ec36d",
                      "title": "Long Coat Pro+® - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","long-coat-women"],
                     " size":["small", "medium", "large"],
                      "img" :"long-coat-women/long-coat-women2.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "LONG COAT MEN",
                  "gender": "male",
                  "section":"longCoatMen",
                  "products": [
                    {
                        "_id": "63029o09791cee17d07ec36d",
                      "title": "Long Coat Pro+® - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","long-coat-men"],
                     " size":["small", "medium", "large"],
                      "img" :"long-coat-men/long-coat-men.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083791cee17d0md3w6d",
                      "title": "Long Coat Pro+® - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","long-coat-men"],
                      "size":["small", "medium", "large"],
                      "img": "long-coat-men/long-coat-pro+.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "LONG SLEEVES BLAZER WOMEN",
                  "gender": "female",
                  "section":"longSleeveBlazerWomen",
                  "products": [
                    {
                        "_id": "630290983791cee17d07ec36d",
                      "title": "Long Sleeves Blazer Pro+® - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","long-sleeve-blazer-women"],
                      "size":["small", "medium", "large"],
                      "img": "long-sleeve-blazer-women/pro-longsleeves-women01.jpg",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029id3791cee17d07ec36d",
                      "title": "Long Sleeves Blazer  - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","long-sleeve-blazer-women"],
                      "size":["small", "medium", "large"],
                      "img": "long-sleeve-blazer-women/long-sleeves-blazer.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "LONG SLEEVES BLAZER MEN",
                  "gender": "male",
                  "section":"longSleeveBlazerMen",
                  "products": [
                    {
                      "_id": "630290837098cee17d07ec36d",
                      "title": "Long Sleeves Blazer Pro+® - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                     "categories":["men","long-sleeve-blazer-men"],
                      "size":["small", "medium", "large"],
                      "img": "long-sleeves-blazer-men/long-sleeves-blazer-pro.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    },
                    {
                        "_id": "63029083981cee17d07ec36d",
                      "title": "Long Sleeves Blazer  - Male",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","long-sleeve-blazer-men"],
                      "size":["small", "medium", "large"],
                      "img": "long-sleeves-blazer-men/long-sleeves-blazer-men.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "SHORT SLEEVES BLAZER WOMEN",
                  "gender": "female",
                  "section":"shortSleeveBlazerWomen",
                  "products": [
                    {
                        "_id": "630290983791cee17d07ec36d",
                      "title": "Short Sleeves Blazer - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["women","long-sleeve-blazer-women"],
                      "size":["small", "medium", "large"],
                      "img": "short-sleeves-blazer-women/short-sleeves-blazer.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                },
                {
                  "header": "SHORT SLEEVES BLAZER MEN",
                  "gender": "male",
                  "section":"shortSleeveBlazerMen",
                  "products": [
                    {
                        "_id": "63029084391cee17d07ec36d",
                      "title": "Short Sleeves Blazer - Women",
                      "desc": "MoveTechⓇ Plus",
                      "price": "1495",
                      "categories":["men","long-sleeve-blazer-women"],
                      "size":["small", "medium", "large"],
                     " img": "short-sleeves-blazer-women/short-sleeves-blazer-men.png",
                      "colors": [
                        "#814500",
                        "#9f687f",
                        "#387e7c",
                        "#333541",
                        "#9f687f",
                        "#814500"
                      ]
                    }
                  ]
                }
              ]
              
        );
    }
   catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
