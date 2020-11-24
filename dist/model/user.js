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
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});
UserSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const token = jsonwebtoken_1.default.sign({ _id: user.id.toString() }, `${process.env.JWT_TOKEN}`);
        // user.tokens = user.tokens.concat({token})
        yield user.save();
        return token;
    });
};
UserSchema.statics.findByCredentials = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield exports.User.findOne({ email });
    if (!user) {
        return new Error('Unable to login');
    }
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Unable to login');
    }
    return user;
});
//middleware
//run some code before a user is saved and hash
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (user.isModified('password')) {
            user.password = yield bcryptjs_1.default.hash(user.password, 8);
        }
        next();
    });
});
exports.User = mongoose_1.default.model('User', UserSchema);
exports.default = exports.User;
// export interface IUser extends mongoose.Document {
//     name:{},
//     email: str
//     password: string
//   }
//   const usersSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//   });
//   usersSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({_id:user.id.toString()},'thisismyproject')
//     // user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }
// usersSchema.statics.findByCredentials = async(email: string,password:string)=>{
//     const user = await User.findOne({email})
//     if(!user){
//         throw new Error('Unable to login')
//     }
//     const isMatch = await bcrypt.compare(password,user.password)
//     if(!isMatch){
//         throw new Error('Unable to login')
//     }
//     return user
// }
// //middleware
// //run some code before a user is saved and hash
//   usersSchema.pre<IUser>("save", async function(next) {
//     const user = this;
//     if(user.isModified('password')){
//     user.password = await bcrypt.hash(user.password,8) 
//    }
//     user.password
//     // user.password and user.username exists here.
//     next();
//   });
//   const User = mongoose.model<IUser>("Users", usersSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVsL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStCO0FBQy9CLGdFQUE4QjtBQUM5Qix3REFBNkI7QUFvQjdCLE1BQU0sVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSztLQUNqQjtDQUdKLENBQUMsQ0FBQTtBQUVGLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUc7O1FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDL0UsNENBQTRDO1FBQzVDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2pCLE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7Q0FBQSxDQUFBO0FBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxDQUFPLEtBQWEsRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFFN0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUUxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsT0FBTyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0tBQ3RDO0lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTdELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7S0FDckM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQSxDQUFBO0FBQ0QsWUFBWTtBQUNaLCtDQUErQztBQUkvQyxVQUFVLENBQUMsR0FBRyxDQUFRLE1BQU0sRUFBRSxVQUFnQixJQUFJOztRQUM5QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUE7UUFFakIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxrQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBRXREO1FBRUQsSUFBSSxFQUFFLENBQUE7SUFFVixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRVcsUUFBQSxJQUFJLEdBQVksa0JBQVEsQ0FBQyxLQUFLLENBQWlCLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUUvRSxrQkFBZSxZQUFJLENBQUE7QUFFbkIscURBQXFEO0FBQ3JELGVBQWU7QUFDZixpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLE1BQU07QUFFTiw4Q0FBOEM7QUFDOUMsY0FBYztBQUNkLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsU0FBUztBQUNULGVBQWU7QUFDZix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsUUFBUTtBQUVSLDhEQUE4RDtBQUM5RCx3QkFBd0I7QUFDeEIseUVBQXlFO0FBQ3pFLG1EQUFtRDtBQUNuRCx3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLElBQUk7QUFFSixrRkFBa0Y7QUFFbEYsK0NBQStDO0FBRS9DLGlCQUFpQjtBQUNqQiw2Q0FBNkM7QUFDN0MsUUFBUTtBQUVSLG1FQUFtRTtBQUVuRSxvQkFBb0I7QUFDcEIsNkNBQTZDO0FBQzdDLFFBQVE7QUFDUixrQkFBa0I7QUFDbEIsSUFBSTtBQUNKLGVBQWU7QUFDZixrREFBa0Q7QUFFbEQsMERBQTBEO0FBQzFELHlCQUF5QjtBQUV6Qix1Q0FBdUM7QUFDdkMsMERBQTBEO0FBRTFELE9BQU87QUFDUCxvQkFBb0I7QUFDcEIsc0RBQXNEO0FBQ3RELGNBQWM7QUFDZCxRQUFRO0FBRVIsOERBQThEIn0=