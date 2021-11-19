import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Conector extends Document {

    @Prop()
    name: string

    @Prop()
    type: string
    
    @Prop()
    privacy: string
    enum: ['PUBLIC','PRIVATE']

    
    @Prop()
    base_URL: string
}
export const ConectorSchema= SchemaFactory.createForClass(Conector);