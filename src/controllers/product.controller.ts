import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};

/** SPA */

/** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log('getAllProducts');
        const data = await productService.getAllProducts();
        console.log("data:" ,data);

        res.render("products", { products: data }); 
    } catch (error) {
        console.log("Error, getAllProducts", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log('createNewProduct');
        console.log(req.files);
        if (!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map((ele) => {
            return ele.path;
        });

        // console.log("data:", data);

        await productService.createNewProduct(data);

        res.send(`<script> alert("Successful Creation!"); window.location.replace('/admin/product/all') </script>`);

    } catch (error) {
        console.log("Error, createNewProduct", error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_WRONG;

        res.send(`<script> alert(${message}); window.location.replace('/admin/product/all') </script>`);
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProduct');
        const id = req.params.id;
        // console.log("id:", id);
        const result = await productService.updateChosenProduct(id, req.body);

        res.status(HttpCode.OK).json({ data: result });
    } catch (error) {
        console.log("Error, updateChosenProduct", error);
        if (error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

export default productController;
