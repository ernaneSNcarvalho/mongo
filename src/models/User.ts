import {Schema, model, Model, connection} from "mongoose";

type UserType = {
    email: string,
    age: number,
    interests: [string],
    name: {
        firstName: string,
        lastName: string
    }
}

const schema = new Schema<UserType>({
    email: String,
    age: Number,
    interests: [String],
    name: {
        firstName: String,
        lastName: String
    }
});

const modelName: string = 'User';

const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>): model<UserType>(modelName, schema);

export default userModel;
