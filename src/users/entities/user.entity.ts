import { Document, Schema } from 'mongoose';

export interface Users extends Document {
    id:string,
    firstname: String;
   lastname: String;
  email: String;
}
export interface UsersShemas extends Schema {
    id:string,
     firstname: String;
     lastname: String;
     email: String;
}