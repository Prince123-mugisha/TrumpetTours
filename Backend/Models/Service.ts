import mongoose, { Document, Schema } from 'mongoose';

// Define service categories based on your frontend
export enum ServiceCategory {
  GUIDED_TOURS = 'guided_tours',
  TAILOR_MADE_ITINERARIES = 'tailor_made_itineraries',
  ACCOMMODATIONS = 'accommodations',
  TOURIST_PERMITS = 'tourist_permits',
  TRANSPORTATION = 'transportation',
  CULTURAL_EXPERIENCES = 'cultural_experiences',
  WILDLIFE_SAFARIS = 'wildlife_safaris',
  ADVENTURE_ACTIVITIES = 'adventure_activities',
  OTHER = 'other'
}

// Define service status
export enum ServiceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  COMING_SOON = 'coming_soon'
}

// Interface for the Service document
export interface IService extends Document {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: ServiceCategory;
  icon?: string; // Icon name or URL
  features: string[];
  benefits: string[];
  pricing?: {
    startingFrom: number;
    currency: string;
    pricingModel: 'per_person' | 'per_group' | 'per_day' | 'fixed';
    includes: string[];
    excludes: string[];
  };
  availability: {
    destinations: string[];
    duration?: string;
    groupSize?: {
      min: number;
      max: number;
    };
  };
  requirements?: string[];
  inclusions: string[];
  exclusions: string[];
  isFeatured: boolean;
  status: ServiceStatus;
  order: number;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const ServiceSchema = new Schema<IService>({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    trim: true,
    maxlength: [500, 'Short description cannot exceed 500 characters']
  },
  category: {
    type: String,
    enum: Object.values(ServiceCategory),
    required: [true, 'Service category is required']
  },
  icon: {
    type: String,
    trim: true
  },
  features: [{
    type: String,
    maxlength: [300, 'Feature cannot exceed 300 characters']
  }],
  benefits: [{
    type: String,
    maxlength: [300, 'Benefit cannot exceed 300 characters']
  }],
  pricing: {
    startingFrom: {
      type: Number,
      min: [0, 'Starting price cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD',
      enum: ['USD', 'EUR', 'GBP', 'RWF', 'UGX']
    },
    pricingModel: {
      type: String,
      enum: ['per_person', 'per_group', 'per_day', 'fixed']
    },
    includes: [{
      type: String,
      maxlength: [200, 'Include item cannot exceed 200 characters']
    }],
    excludes: [{
      type: String,
      maxlength: [200, 'Exclude item cannot exceed 200 characters']
    }]
  },
  availability: {
    destinations: [{
      type: String,
      trim: true
    }],
    duration: {
      type: String,
      trim: true
    },
    groupSize: {
      min: {
        type: Number,
        min: [1, 'Minimum group size must be at least 1']
      },
      max: {
        type: Number,
        min: [1, 'Maximum group size must be at least 1']
      }
    }
  },
  requirements: [{
    type: String,
    maxlength: [300, 'Requirement cannot exceed 300 characters']
  }],
  inclusions: [{
    type: String,
    maxlength: [300, 'Inclusion cannot exceed 300 characters']
  }],
  exclusions: [{
    type: String,
    maxlength: [300, 'Exclusion cannot exceed 300 characters']
  }],
  isFeatured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: Object.values(ServiceStatus),
    default: ServiceStatus.ACTIVE
  },
  order: {
    type: Number,
    default: 0,
    min: [0, 'Order cannot be negative']
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  seoTitle: {
    type: String,
    trim: true,
    maxlength: [60, 'SEO title cannot exceed 60 characters']
  },
  seoDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'SEO description cannot exceed 160 characters']
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
ServiceSchema.index({ category: 1, status: 1 });
ServiceSchema.index({ isFeatured: 1, status: 1 });
ServiceSchema.index({ slug: 1 });
ServiceSchema.index({ order: 1 });
ServiceSchema.index({ tags: 1 });

// Pre-save middleware to generate slug
ServiceSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

// Static methods for common queries
ServiceSchema.statics.findByCategory = function(category: ServiceCategory) {
  return this.find({ category, status: ServiceStatus.ACTIVE }).sort({ order: 1, createdAt: -1 });
};

ServiceSchema.statics.findFeatured = function() {
  return this.find({ isFeatured: true, status: ServiceStatus.ACTIVE }).sort({ order: 1, createdAt: -1 });
};

ServiceSchema.statics.findByDestination = function(destination: string) {
  return this.find({ 
    'availability.destinations': destination, 
    status: ServiceStatus.ACTIVE 
  }).sort({ order: 1, createdAt: -1 });
};

// Export the model
const Service = mongoose.model<IService>('Service', ServiceSchema);

export default Service;
