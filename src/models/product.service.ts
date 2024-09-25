import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/product.model"

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /** SPA */

    /** SSR */

    public async createNewProduct(input: ProductInput): Promise<any> {
    try {
      return await this.productModel.create(input);
    }
    catch(err) {
        console.error("Error, createNewProduct:", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}

export default ProductService;