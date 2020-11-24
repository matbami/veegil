"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.viewOneProduct = exports.viewAllProduct = exports.addProduct = void 0;
const product_1 = __importDefault(require("../model/product"));
exports.addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new product_1.default(req.body);
        yield product.save();
        res.status(201).send(product);
    }
    catch (error) {
        res.send(error);
    }
});
exports.viewAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({});
        res.status(200).send(products);
    }
    catch (error) {
        res.send(error);
    }
});
exports.viewOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield product_1.default.findById(id);
        if (!product) {
            res.status(404).json("No such product");
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (error) {
        res.send(error);
    }
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield product_1.default.findByIdAndDelete(id);
        res.status(200).send("successfully deleted");
    }
    catch (error) {
        res.send(error);
    }
});
// export const updateProduct = async (req: Request, res: Response) => {
//     const id = req.params.id
//     try {
//         const product = Product.findById(req.body)
//         await product.save()
//         res.status(200).send("successfully deleted")
//     } catch (error) {
//         res.send(error)
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsK0RBQXNDO0FBSXpCLFFBQUEsVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ2hDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ2xCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFFWSxRQUFBLGNBQWMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNoRSxJQUFJO1FBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNqQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNsQjtBQUVMLENBQUMsQ0FBQSxDQUFBO0FBRVksUUFBQSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDaEUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7SUFDeEIsSUFBSTtRQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0saUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDMUM7YUFDSTtZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2hDO0tBRUo7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbEI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQUdZLFFBQUEsYUFBYSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO0lBQ3hCLElBQUk7UUFDQSxNQUFNLE9BQU8sR0FBRyxNQUFNLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtLQUMvQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNsQjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBR0Qsd0VBQXdFO0FBQ3hFLCtCQUErQjtBQUMvQixZQUFZO0FBQ1oscURBQXFEO0FBQ3JELCtCQUErQjtBQUMvQix1REFBdUQ7QUFDdkQsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsSUFBSSJ9