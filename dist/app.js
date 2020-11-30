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
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
db_1.default();
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(cors_1.default());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE2QjtBQUU3QixxREFBbUM7QUFDbkMsK0RBQWdEO0FBQ2hELHlEQUEwQztBQUMxQyw4REFBb0M7QUFDcEMsb0RBQTJCO0FBQzNCLDRDQUE2QztBQUM3QyxnREFBdUI7QUFFdkIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixZQUFTLEVBQUUsQ0FBQTtBQUVYLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBUSxPQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQTtBQUVoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUE7QUFFZixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtJQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQyxDQUFBO0FBRUYsOENBQThDO0FBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFPLFVBQUcsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQU8sV0FBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBTyxXQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFPLFdBQUksRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFFbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUlwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUMsQ0FBQSJ9