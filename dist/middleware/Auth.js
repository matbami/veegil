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
exports.aba = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../model/user"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.JWT_TOKEN}`);
        const user = yield user_1.default.findOne({ _id: decoded._id });
        // console.log(user)
        // if (!user) {
        //     throw new Error()
        // }
        // (<any>req).token = token
        //     (<any>req).user = user
        // console.log(user)
        next();
    }
    catch (error) {
        res.status(401).send({ error: "please authenticate" });
    }
});
exports.auth = auth;
const aba = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.JWT_TOKEN}`);
        const user = yield user_1.default.findOne({ _id: decoded._id });
        const check = user.isAdmin;
        if (check == false) {
            res.send("you must be logged in first");
        }
        // (<any>req).token = token
        //     (<any>req).user = user
        // console.log(user)
        next();
    }
    catch (error) {
        res.status(401).send({ error: "please authenticate" });
    }
});
exports.aba = aba;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvQXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBOEI7QUFFOUIseURBQWdDO0FBQ2hDLE1BQU0sSUFBSSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDbkUsSUFBSTtRQUdBLE1BQU0sS0FBSyxHQUFTLEdBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN2RSxNQUFNLE9BQU8sR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFRLE9BQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQzVELG9CQUFvQjtRQUVwQixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLElBQUk7UUFDSiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUVwQixJQUFJLEVBQUUsQ0FBQTtLQUVUO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDTixHQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUE7S0FDaEU7QUFHTCxDQUFDLENBQUEsQ0FBQTtBQTBCUSxvQkFBSTtBQXhCYixNQUFNLEdBQUcsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ2xFLElBQUk7UUFHQSxNQUFNLEtBQUssR0FBUyxHQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdkUsTUFBTSxPQUFPLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQzdELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBUSxPQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM1RCxNQUFNLEtBQUssR0FBUyxJQUFLLENBQUMsT0FBTyxDQUFBO1FBRWpDLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNWLEdBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtTQUNqRDtRQUNELDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBRXBCLElBQUksRUFBRSxDQUFBO0tBRVQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNOLEdBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQTtLQUNoRTtBQUdMLENBQUMsQ0FBQSxDQUFBO0FBQ2Msa0JBQUcifQ==