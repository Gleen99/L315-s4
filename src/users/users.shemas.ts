import {Document,Schema } from 'mongoose';

export interface Users extends  Document {
    id: string
    firstname: String,
    lastname: String,
    email: String,
}

export const UserSchema =  new  Schema ({
    firstname: String,
    lastname: String,
    email: String,
});