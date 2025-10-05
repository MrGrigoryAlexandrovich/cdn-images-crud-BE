import mongoose, { Schema, Document } from "mongoose";

export interface IImage extends Document {
  url: string;
  public_id: string;
  createdAt: Date;
}

const ImageSchema: Schema = new Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IImage>("Image", ImageSchema);
