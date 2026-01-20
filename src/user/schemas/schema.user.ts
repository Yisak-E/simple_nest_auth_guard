import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * @Schema()
 * Turns a TypeScript class into a MongoDB schema that NestJS + Mongoose can use.
 * @Prop()
 * Marks a class property as a field in the MongoDB document (like name, email, password, etc.).
 * --> SchemaFactory.createForClass()
 * Converts your decorated class into an actual Mongoose schema object.
 * --> HydratedDocument from mongoose
 * Represents a fully typed Mongoose document created from your schema.
 * 
 */


/**
 * 
 */
export type UserDocument = HydratedDocument<User>;

// schema
@Schema({
    collection: 'users',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        currentTime: () => new Date(),
    }
})

export class User{
    @Prop({required: true})
    username: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email:string;

    @Prop({required: true})
    password: string;

}

export const UserSchema  = SchemaFactory.createForClass(User)