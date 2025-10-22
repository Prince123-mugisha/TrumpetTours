import mongoose, { Document, Schema } from 'mongoose';

// Define testimonial status
export enum TestimonialStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending'
}

// Interface for the Testimonial document
export interface ITestimonial extends Document {
  _id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  verified: boolean;
  status: TestimonialStatus;
  tourId?: string; // Reference to tour if applicable
  serviceId?: string; // Reference to service if applicable
  destination?: string;
  category?: string;
  imageUrl?: string;
  imagePublicId?: string;
  order: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const TestimonialSchema = new Schema<ITestimonial>({
  name: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  location: {
    type: String,
    required: [true, 'Customer location is required'],
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  quote: {
    type: String,
    required: [true, 'Testimonial quote is required'],
    trim: true,
    maxlength: [1000, 'Quote cannot exceed 1000 characters']
  },
  verified: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: Object.values(TestimonialStatus),
    default: TestimonialStatus.ACTIVE
  },
  tourId: {
    type: Schema.Types.ObjectId,
    ref: 'Tour'
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  destination: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    validate: {
      validator: function(v: string) {
        if (!v) return true; // Optional field
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: 'Image URL must be a valid image URL'
    }
  },
  imagePublicId: {
    type: String
  },
  order: {
    type: Number,
    default: 0,
    min: [0, 'Order cannot be negative']
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
TestimonialSchema.index({ status: 1, verified: 1 });
TestimonialSchema.index({ isFeatured: 1, status: 1 });
TestimonialSchema.index({ rating: -1 });
TestimonialSchema.index({ destination: 1 });
TestimonialSchema.index({ category: 1 });
TestimonialSchema.index({ order: 1 });

// Static methods for common queries
TestimonialSchema.statics.findActive = function() {
  return this.find({ status: TestimonialStatus.ACTIVE }).sort({ order: 1, createdAt: -1 });
};

TestimonialSchema.statics.findFeatured = function() {
  return this.find({ isFeatured: true, status: TestimonialStatus.ACTIVE }).sort({ order: 1, createdAt: -1 });
};

TestimonialSchema.statics.findByRating = function(minRating: number) {
  return this.find({ 
    rating: { $gte: minRating }, 
    status: TestimonialStatus.ACTIVE 
  }).sort({ rating: -1, createdAt: -1 });
};

TestimonialSchema.statics.findByDestination = function(destination: string) {
  return this.find({ 
    destination, 
    status: TestimonialStatus.ACTIVE 
  }).sort({ order: 1, createdAt: -1 });
};

// Export the model
const Testimonial = mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;

