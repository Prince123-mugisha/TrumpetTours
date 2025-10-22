import mongoose, { Document, Schema } from 'mongoose';

// Define tour categories based on your frontend
export enum TourCategory {
  WILDLIFE_SAFARI = 'wildlife_safari',
  ADVENTURE_TOUR = 'adventure_tour',
  CULTURAL_TOUR = 'cultural_tour',
  GORILLA_TREKKING = 'gorilla_trekking',
  CHIMPANZEE_TRACKING = 'chimpanzee_tracking',
  GAME_DRIVE = 'game_drive',
  CANOPY_WALK = 'canopy_walk',
  LAKE_TOUR = 'lake_tour',
  NATIONAL_PARK = 'national_park',
  CITY_TOUR = 'city_tour',
  KIVU_LAKE_TOUR = 'kivu_lake_tour',
  AKAGERA_TOUR = 'akagera_tour',
  FAZENDER_TOUR = 'fazender_tour',
  OTHER = 'other'
}

// Define destinations
export enum Destination {
  RWANDA = 'rwanda',
  UGANDA = 'uganda',
  BOTH = 'both'
}

// Define tour difficulty levels
export enum DifficultyLevel {
  EASY = 'easy',
  MODERATE = 'moderate',
  CHALLENGING = 'challenging',
  EXPERT = 'expert'
}

// Define tour status
export enum TourStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  COMING_SOON = 'coming_soon',
  SOLD_OUT = 'sold_out'
}

// Interface for the Tour document
export interface ITour extends Document {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: TourCategory;
  destination: Destination;
  difficulty: DifficultyLevel;
  duration: string; // e.g., "8 Days / 7 Nights"
  durationDays: number;
  durationNights: number;
  price: number;
  currency: string;
  imageUrl: string;
  imagePublicId: string;
  galleryImages?: {
    url: string;
    publicId: string;
    altText: string;
  }[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
    meals?: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  requirements: string[];
  bestTimeToVisit: string[];
  groupSize: {
    min: number;
    max: number;
  };
  ageRestrictions?: {
    minAge?: number;
    maxAge?: number;
    note?: string;
  };
  physicalFitness: string;
  isFeatured: boolean;
  status: TourStatus;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  slug: string;
  rating?: {
    average: number;
    count: number;
  };
  bookingInfo: {
    advanceBookingDays: number;
    cancellationPolicy: string;
    refundPolicy: string;
  };
  location: {
    country: string;
    region?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const TourSchema = new Schema<ITour>({
  title: {
    type: String,
    required: [true, 'Tour title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Tour description is required'],
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
    enum: Object.values(TourCategory),
    required: [true, 'Tour category is required']
  },
  destination: {
    type: String,
    enum: Object.values(Destination),
    required: [true, 'Destination is required']
  },
  difficulty: {
    type: String,
    enum: Object.values(DifficultyLevel),
    default: DifficultyLevel.MODERATE
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  durationDays: {
    type: Number,
    required: [true, 'Duration in days is required'],
    min: [1, 'Duration must be at least 1 day']
  },
  durationNights: {
    type: Number,
    required: [true, 'Duration in nights is required'],
    min: [0, 'Duration nights cannot be negative']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  currency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'RWF', 'UGX']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: function(v: string) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: 'Image URL must be a valid image URL'
    }
  },
  imagePublicId: {
    type: String,
    required: [true, 'Cloudinary public ID is required']
  },
  galleryImages: [{
    url: {
      type: String,
      required: true
    },
    publicId: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true,
      maxlength: [200, 'Alt text cannot exceed 200 characters']
    }
  }],
  itinerary: [{
    day: {
      type: Number,
      required: true,
      min: [1, 'Day must be at least 1']
    },
    title: {
      type: String,
      required: true,
      maxlength: [200, 'Day title cannot exceed 200 characters']
    },
    description: {
      type: String,
      required: true,
      maxlength: [1000, 'Day description cannot exceed 1000 characters']
    },
    activities: [{
      type: String,
      maxlength: [200, 'Activity cannot exceed 200 characters']
    }],
    accommodation: {
      type: String,
      maxlength: [200, 'Accommodation cannot exceed 200 characters']
    },
    meals: [{
      type: String,
      enum: ['breakfast', 'lunch', 'dinner', 'snacks']
    }]
  }],
  inclusions: [{
    type: String,
    maxlength: [300, 'Inclusion cannot exceed 300 characters']
  }],
  exclusions: [{
    type: String,
    maxlength: [300, 'Exclusion cannot exceed 300 characters']
  }],
  highlights: [{
    type: String,
    maxlength: [200, 'Highlight cannot exceed 200 characters']
  }],
  requirements: [{
    type: String,
    maxlength: [300, 'Requirement cannot exceed 300 characters']
  }],
  bestTimeToVisit: [{
    type: String,
    enum: ['january', 'february', 'march', 'april', 'may', 'june', 
           'july', 'august', 'september', 'october', 'november', 'december']
  }],
  groupSize: {
    min: {
      type: Number,
      required: true,
      min: [1, 'Minimum group size must be at least 1']
    },
    max: {
      type: Number,
      required: true,
      min: [1, 'Maximum group size must be at least 1']
    }
  },
  ageRestrictions: {
    minAge: {
      type: Number,
      min: [0, 'Minimum age cannot be negative']
    },
    maxAge: {
      type: Number,
      min: [0, 'Maximum age cannot be negative']
    },
    note: {
      type: String,
      maxlength: [200, 'Age restriction note cannot exceed 200 characters']
    }
  },
  physicalFitness: {
    type: String,
    required: [true, 'Physical fitness requirement is required'],
    maxlength: [500, 'Physical fitness description cannot exceed 500 characters']
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: Object.values(TourStatus),
    default: TourStatus.ACTIVE
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
  },
  rating: {
    average: {
      type: Number,
      min: [0, 'Rating cannot be negative'],
      max: [5, 'Rating cannot exceed 5']
    },
    count: {
      type: Number,
      min: [0, 'Rating count cannot be negative']
    }
  },
  bookingInfo: {
    advanceBookingDays: {
      type: Number,
      default: 30,
      min: [1, 'Advance booking days must be at least 1']
    },
    cancellationPolicy: {
      type: String,
      required: [true, 'Cancellation policy is required'],
      maxlength: [1000, 'Cancellation policy cannot exceed 1000 characters']
    },
    refundPolicy: {
      type: String,
      required: [true, 'Refund policy is required'],
      maxlength: [1000, 'Refund policy cannot exceed 1000 characters']
    }
  },
  location: {
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true
    },
    region: {
      type: String,
      trim: true
    },
    coordinates: {
      lat: {
        type: Number,
        min: [-90, 'Latitude must be between -90 and 90'],
        max: [90, 'Latitude must be between -90 and 90']
      },
      lng: {
        type: Number,
        min: [-180, 'Longitude must be between -180 and 180'],
        max: [180, 'Longitude must be between -180 and 180']
      }
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
TourSchema.index({ category: 1, destination: 1 });
TourSchema.index({ isFeatured: 1, status: 1 });
TourSchema.index({ destination: 1, status: 1 });
TourSchema.index({ slug: 1 });
TourSchema.index({ price: 1 });
TourSchema.index({ durationDays: 1 });
TourSchema.index({ tags: 1 });

// Virtual for full image path
TourSchema.virtual('fullImagePath').get(function() {
  return this.imageUrl;
});

// Pre-save middleware to generate slug
TourSchema.pre('save', function(next) {
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
TourSchema.statics.findByCategory = function(category: TourCategory) {
  return this.find({ category, status: TourStatus.ACTIVE }).sort({ isFeatured: -1, createdAt: -1 });
};

TourSchema.statics.findByDestination = function(destination: Destination) {
  return this.find({ destination, status: TourStatus.ACTIVE }).sort({ isFeatured: -1, createdAt: -1 });
};

TourSchema.statics.findFeatured = function() {
  return this.find({ isFeatured: true, status: TourStatus.ACTIVE }).sort({ createdAt: -1 });
};

TourSchema.statics.findByPriceRange = function(minPrice: number, maxPrice: number) {
  return this.find({ 
    price: { $gte: minPrice, $lte: maxPrice }, 
    status: TourStatus.ACTIVE 
  }).sort({ price: 1 });
};

TourSchema.statics.findByDuration = function(minDays: number, maxDays: number) {
  return this.find({ 
    durationDays: { $gte: minDays, $lte: maxDays }, 
    status: TourStatus.ACTIVE 
  }).sort({ durationDays: 1 });
};

TourSchema.statics.searchTours = function(query: string) {
  return this.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { tags: { $in: [new RegExp(query, 'i')] } }
    ],
    status: TourStatus.ACTIVE
  }).sort({ isFeatured: -1, createdAt: -1 });
};

// Export the model
const Tour = mongoose.model<ITour>('Tour', TourSchema);

export default Tour;
