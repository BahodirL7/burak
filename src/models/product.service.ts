import ProductModel from "../schema/product.model"

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }
}

export default ProductService;