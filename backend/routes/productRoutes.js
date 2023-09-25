import express from 'express'
const productRouter = express.Router();
// const protect = require("../middleWare/authMiddleware");

import { createProduct } from "../controllers/product/productController.js";

// Now you can use these functions in your code
// import { upload } from '../utils/fileUpload.js';


productRouter.post("/", createProduct);
// router.patch("/:id", protect, upload.single("image"), updateProduct);
// router.get("/", protect, getProducts);
// router.get("/:id", protect, getProduct);
// router.delete("/:id", protect, deleteProduct);

export default productRouter;