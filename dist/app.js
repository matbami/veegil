"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const product = __importStar(require("./controllers/product"));
const user = __importStar(require("./controllers/user"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const Auth_1 = require("./middleware/Auth");
dotenv_1.default.config();
db_1.default();
const app = express_1.default();
app.set("port", 3000);
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Helloworld');
});
// app.put('/product/:id', <any>aba, product.)
app.delete('/product/:id', Auth_1.aba, product.deleteProduct);
app.get('/product/:id', Auth_1.auth, product.viewOneProduct);
app.get('/product', Auth_1.auth, product.viewAllProduct);
app.post('/product', Auth_1.auth, product.addProduct);
app.post('/user', user.userSignup);
app.post('/userlog', user.userLogin);
app.listen(app.get('port'), () => {
    console.log("App is running on port 3000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE2QjtBQUU3QixxREFBbUM7QUFDbkMsK0RBQWdEO0FBQ2hELHlEQUEwQztBQUMxQyw4REFBb0M7QUFDcEMsb0RBQTJCO0FBQzNCLDRDQUE2QztBQUU3QyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLFlBQVMsRUFBRSxDQUFBO0FBRVgsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRTFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFO0lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFFRiw4Q0FBOEM7QUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQU8sVUFBRyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMzRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBTyxXQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFPLFdBQUksRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQU8sV0FBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUVuRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBSXBDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQyxDQUFBIn0=