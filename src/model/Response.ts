import mongoose, { Schema, Document } from 'mongoose';

interface IResponse extends Document {
  name: string;
  email: string;
  message: string;
}

const responseSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export const ResponseModel = mongoose.models.Response || mongoose.model<IResponse>('Response', responseSchema);
