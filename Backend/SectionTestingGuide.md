# Complete Section-by-Section Testing Guide

## 🚀 Server Status Check
Your server is running on port 5000! ✅

## 📋 Testing Every Section

### 1. **HERO SECTION** - Background slider images

#### Upload Hero Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/hero-image.jpg" \
  -F "title=Safari Landscape" \
  -F "section=hero" \
  -F "altText=Beautiful African safari landscape" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Get Hero Images:
```bash
curl http://localhost:5000/api/homepage-images/section/hero
```

#### Example Hero Image Data:
```json
{
  "title": "Rwanda Hills Sunset",
  "section": "hero",
  "altText": "Beautiful sunset over Rwanda's rolling hills",
  "isFeatured": true,
  "order": 1
}
```

---

### 2. **DESTINATIONS SECTION** - Country-specific images

#### Upload Rwanda Destination Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/rwanda-image.jpg" \
  -F "title=Akagera National Park" \
  -F "section=destinations" \
  -F "destination=rwanda" \
  -F "altText=Akagera National Park wildlife safari" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Upload Uganda Destination Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/uganda-image.jpg" \
  -F "title=Bwindi Impenetrable Forest" \
  -F "section=destinations" \
  -F "destination=uganda" \
  -F "altText=Bwindi Impenetrable Forest gorilla habitat" \
  -F "isFeatured=true" \
  -F "order=2"
```

#### Get Destination Images:
```bash
# Get all destination images
curl http://localhost:5000/api/homepage-images/section/destinations

# Get only Rwanda images
curl http://localhost:5000/api/homepage-images/destination/rwanda

# Get only Uganda images
curl http://localhost:5000/api/homepage-images/destination/uganda
```

---

### 3. **FEATURED TOURS SECTION** - Tour-specific images with categories

#### Upload Gorilla Trekking Tour Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/gorilla-image.jpg" \
  -F "title=Mountain Gorilla Trekking" \
  -F "section=featured_tours" \
  -F "destination=rwanda" \
  -F "tourCategory=gorilla_trekking" \
  -F "altText=Mountain gorilla in Volcanoes National Park" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Upload Wildlife Safari Tour Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/safari-image.jpg" \
  -F "title=Akagera Wildlife Safari" \
  -F "section=featured_tours" \
  -F "destination=rwanda" \
  -F "tourCategory=wildlife_safari" \
  -F "altText=Elephant in Akagera National Park" \
  -F "isFeatured=true" \
  -F "order=2"
```

#### Upload Chimpanzee Tracking Tour Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/chimp-image.jpg" \
  -F "title=Nyungwe Chimpanzee Tracking" \
  -F "section=featured_tours" \
  -F "destination=rwanda" \
  -F "tourCategory=chimpanzee_tracking" \
  -F "altText=Chimpanzee in Nyungwe Forest" \
  -F "isFeatured=true" \
  -F "order=3"
```

#### Get Featured Tour Images:
```bash
# Get all featured tour images
curl http://localhost:5000/api/homepage-images/section/featured_tours

# Get gorilla trekking images from Rwanda
curl "http://localhost:5000/api/homepage-images/section/featured_tours?destination=rwanda&tourCategory=gorilla_trekking"

# Get wildlife safari images from Uganda
curl "http://localhost:5000/api/homepage-images/section/featured_tours?destination=uganda&tourCategory=wildlife_safari"
```

---

### 4. **SERVICES SECTION** - Service-related images

#### Upload Service Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/service-image.jpg" \
  -F "title=Guided Safari Tours" \
  -F "section=services" \
  -F "altText=Professional safari guide with tourists" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Get Service Images:
```bash
curl http://localhost:5000/api/homepage-images/section/services
```

---

### 5. **TESTIMONIALS SECTION** - Customer testimonial images

#### Upload Testimonial Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/testimonial-image.jpg" \
  -F "title=Happy Tourist Family" \
  -F "section=testimonials" \
  -F "altText=Happy family after gorilla trekking experience" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Get Testimonial Images:
```bash
curl http://localhost:5000/api/homepage-images/section/testimonials
```

---

### 6. **ABOUT US SECTION** - Company information images

#### Upload About Us Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/about-image.jpg" \
  -F "title=Our Team" \
  -F "section=about_us" \
  -F "altText=Trumpet Tours team members" \
  -F "isFeatured=true" \
  -F "order=1"
```

#### Get About Us Images:
```bash
curl http://localhost:5000/api/homepage-images/section/about_us
```

---

### 7. **GALLERY SECTION** - General gallery images

#### Upload Gallery Image:
```bash
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/gallery-image.jpg" \
  -F "title=Rwanda Cultural Dance" \
  -F "section=gallery" \
  -F "altText=Traditional Rwandan cultural dance performance" \
  -F "isFeatured=false" \
  -F "order=1"
```

#### Get Gallery Images:
```bash
curl http://localhost:5000/api/homepage-images/section/gallery
```

---

## 🔍 **Complete Testing Workflow**

### Step 1: Get Admin Token
```bash
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@trumpettours.com",
    "password": "your_admin_password"
  }'
```

### Step 2: Test All Sections (Replace YOUR_TOKEN)

#### Test Hero Section:
```bash
# Upload
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Hero Image" \
  -F "section=hero" \
  -F "altText=Hero section image" \
  -F "isFeatured=true"

# Retrieve
curl http://localhost:5000/api/homepage-images/section/hero
```

#### Test Destinations Section:
```bash
# Upload Rwanda
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Rwanda Destination" \
  -F "section=destinations" \
  -F "destination=rwanda" \
  -F "altText=Rwanda destination image" \
  -F "isFeatured=true"

# Upload Uganda
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Uganda Destination" \
  -F "section=destinations" \
  -F "destination=uganda" \
  -F "altText=Uganda destination image" \
  -F "isFeatured=true"

# Retrieve
curl http://localhost:5000/api/homepage-images/section/destinations
curl http://localhost:5000/api/homepage-images/destination/rwanda
curl http://localhost:5000/api/homepage-images/destination/uganda
```

#### Test Featured Tours Section:
```bash
# Upload Gorilla Trekking
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Gorilla Trekking" \
  -F "section=featured_tours" \
  -F "destination=rwanda" \
  -F "tourCategory=gorilla_trekking" \
  -F "altText=Gorilla trekking tour" \
  -F "isFeatured=true"

# Upload Wildlife Safari
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Wildlife Safari" \
  -F "section=featured_tours" \
  -F "destination=uganda" \
  -F "tourCategory=wildlife_safari" \
  -F "altText=Wildlife safari tour" \
  -F "isFeatured=true"

# Retrieve
curl http://localhost:5000/api/homepage-images/section/featured_tours
curl "http://localhost:5000/api/homepage-images/section/featured_tours?destination=rwanda&tourCategory=gorilla_trekking"
```

#### Test Other Sections:
```bash
# Services
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Our Services" \
  -F "section=services" \
  -F "altText=Services image" \
  -F "isFeatured=true"

curl http://localhost:5000/api/homepage-images/section/services

# Testimonials
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Customer Testimonial" \
  -F "section=testimonials" \
  -F "altText=Testimonial image" \
  -F "isFeatured=true"

curl http://localhost:5000/api/homepage-images/section/testimonials

# About Us
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=About Our Company" \
  -F "section=about_us" \
  -F "altText=About us image" \
  -F "isFeatured=true"

curl http://localhost:5000/api/homepage-images/section/about_us

# Gallery
curl -X POST http://localhost:5000/api/homepage-images \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Gallery Image" \
  -F "section=gallery" \
  -F "altText=Gallery image" \
  -F "isFeatured=false"

curl http://localhost:5000/api/homepage-images/section/gallery
```

---

## 🎯 **Quick Test Commands**

### Test All Public Endpoints:
```bash
# Test all sections
curl http://localhost:5000/api/homepage-images/section/hero
curl http://localhost:5000/api/homepage-images/section/destinations
curl http://localhost:5000/api/homepage-images/section/featured_tours
curl http://localhost:5000/api/homepage-images/section/services
curl http://localhost:5000/api/homepage-images/section/testimonials
curl http://localhost:5000/api/homepage-images/section/about_us
curl http://localhost:5000/api/homepage-images/section/gallery

# Test destinations
curl http://localhost:5000/api/homepage-images/destination/rwanda
curl http://localhost:5000/api/homepage-images/destination/uganda

# Test featured images
curl http://localhost:5000/api/homepage-images/featured
```

### Test Admin Endpoints (Need Token):
```bash
# Get all images with pagination
curl "http://localhost:5000/api/homepage-images?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Filter by section
curl "http://localhost:5000/api/homepage-images?section=destinations" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Filter by destination
curl "http://localhost:5000/api/homepage-images?destination=rwanda" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Filter by featured status
curl "http://localhost:5000/api/homepage-images?isFeatured=true" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 📊 **Expected Results**

### Success Response Example:
```json
{
  "success": true,
  "message": "Homepage image created successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Rwanda Gorilla Trekking",
    "imageUrl": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/homepage-images/destinations/image.jpg",
    "imagePublicId": "homepage-images/destinations/image",
    "section": "destinations",
    "destination": "rwanda",
    "altText": "Mountain gorilla in Rwanda",
    "isFeatured": true,
    "isActive": true,
    "order": 1,
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

### Error Response Example:
```json
{
  "success": false,
  "message": "Destination is required for images in destinations section",
  "error": "ValidationError: destination: Path `destination` is required."
}
```

---

## 🚨 **Important Notes**

1. **Required Fields by Section:**
   - `hero`: title, section, altText
   - `destinations`: title, section, destination, altText
   - `featured_tours`: title, section, destination, tourCategory, altText
   - `services`: title, section, altText
   - `testimonials`: title, section, altText
   - `about_us`: title, section, altText
   - `gallery`: title, section, altText

2. **File Requirements:**
   - Only image files (jpg, jpeg, png, webp, gif)
   - Maximum size: 5MB
   - Images are automatically optimized

3. **Authentication:**
   - Public endpoints: No authentication needed
   - Admin endpoints: Require Bearer token with admin role

Now you can test every section of your HomePageImage API! 🚀

