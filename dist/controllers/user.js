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
exports.userLogin = exports.userSignup = void 0;
const user_1 = __importDefault(require("../model/user"));
exports.userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(req.body);
        // const check = await User.findByCredentials(req.body.email, req.body.password)
        // if (check) {
        //     res.json({
        //         data: {
        //             message: "Email taken"
        //         }
        //     })
        // }
        const token = yield user.generateAuthToken();
        yield user.save();
        res.status(200).json({
            status: 'success',
            data: {
                message: "Registration successful",
                user, token
            }
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByCredentials(req.body.email, req.body.password);
        const token = yield user.generateAuthToken();
        if (!user) {
            res.status(404).send('Cannot Login');
        }
        res.status(201).json({
            status: 'success',
            data: {
                message: "Login successful",
                user, token
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEseURBQWdDO0FBSW5CLFFBQUEsVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsZ0ZBQWdGO1FBQ2hGLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHFDQUFxQztRQUNyQyxZQUFZO1FBQ1osU0FBUztRQUNULElBQUk7UUFDSixNQUFNLEtBQUssR0FBRyxNQUFZLElBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ25ELE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBRTtnQkFDRixPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxJQUFJLEVBQUUsS0FBSzthQUNkO1NBQ0osQ0FBQyxDQUFBO0tBQ0w7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbEI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzNELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVFLE1BQU0sS0FBSyxHQUFHLE1BQVksSUFBSyxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1NBQ3ZDO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSixDQUFDLENBQUE7S0FHTDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUM5QjtBQUVMLENBQUMsQ0FBQSxDQUFBIn0=