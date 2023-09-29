import { Schema, model } from 'mongoose';
import { Details } from './components.interface';

const ComponentSchema = new Schema<Details>(
  {
    image: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      specification: {
        type: String,
        required: true,
      },
      port: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      resolution: {
        type: String,
        required: true,
      },
      voltage: {
        type: String,
      },
    },
    individualRating: {
      type: Number,
      required: true,
    },
    averageRating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: [],
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Components = model<Details>('component', ComponentSchema);
