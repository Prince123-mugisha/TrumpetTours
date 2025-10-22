import mongoose, {Document, Schema} from "mongoose";

// Hero  Section and  other  section images 
export enum ImageSection {
  HERO = 'hero',
  RWANDA_DESTINATIONS = 'rwanda_destinations',
  UGANDA_DESTINATIONS = 'uganda_destinations',
  KIGALI_MEMORIAL = 'kigali_memorial',
  AKAGERA_SAFARI = 'akagera_safari',
  NYUNGWE_FOREST = 'nyungwe_forest',
  VOLCANOES_PARK = 'volcanoes_park',
  LAKE_KIVU = 'lake_kivu',
  FEATURED_TOURS = 'featured_tours',
  WILDLIFE_TOURS = 'wildlife_tours',
  CULTURAL_TOURS = 'cultural_tours',
  ABOUT_US = 'about_us',
  SERVICES = 'services',
  GALLERY = 'gallery'

}

// Location  Types 
export enum LocationType {
  NATIONAL_PARK = 'national_park',
  MEMORIAL = 'memorial',
  CITY = 'city',
  LAKE = 'lake',
  FOREST = 'forest',
  MOUNTAIN = 'mountain'
}

// Interface for type checking
export interface IHomePageImage extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  imagePublicId: string;
  section: ImageSection;
  locationType?: LocationType;
  order: number;
  isActive: boolean;
  isFeatured: boolean;
  altText: string;
  metadata: {
    width?: number;
    height?: number;
    fileSize?: number;
    format?: string;
    location?: {
      country: string;
      region?: string;
      coordinates?: {
        latitude: number;
        longitude: number;
      }
    }
  };
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const HomePageImageSchema = new Schema<IHomePageImage>({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String,
    trim: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  imagePublicId: { 
    type: String, 
    required: true 
  },
  section: { 
    type: String,
    enum: Object.values(ImageSection),
    required: true 
  },
  locationType: { 
    type: String,
    enum: Object.values(LocationType)
  },
  order: { 
    type: Number, 
    default: 0 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  isFeatured: { 
    type: Boolean, 
    default: false 
  },
  altText: { 
    type: String, 
    required: true 
  },
  metadata: {
    width: { type: Number },
    height: { type: Number },
    fileSize: { type: Number },
    format: { type: String },
    location: {
      country: { type: String },
      region: { type: String },
      coordinates: {
        latitude: { type: Number },
        longitude: { type: Number }
      }
    }
  },
  seo: {
    title: { type: String },
    description: { type: String },
    keywords: [{ type: String }]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
HomePageImageSchema.index({ section: 1, order: 1 });
HomePageImageSchema.index({ isActive: 1 });
HomePageImageSchema.index({ isFeatured: 1 });

// Create and export the model
export const HomePageImage = mongoose.model<IHomePageImage>('HomePageImage', HomePageImageSchema);

// Export default as well for flexibility
export default HomePageImage;