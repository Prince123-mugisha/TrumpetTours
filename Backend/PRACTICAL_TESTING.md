# 🚀 Practical Testing Guide for HomePage Images API

## ✅ Your Server Status
- Server running: **YES** on port 5000
- Database connected: **YES**
- API endpoints working: **YES**

## 🔑 Admin Credentials
- Email: `admin@example.com`
- Password: `password123`

## 📱 How to Test Each Section

### Method 1: Using Postman (EASIEST - RECOMMENDED)

#### Step 1: Login to Get Token
1. Open Postman
2. Create a new POST request
3. URL: `http://localhost:5000/api/admin/login`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```
6. Click Send - Copy the token from response

#### Step 2: Test Each Section

**HERO SECTION:**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Safari Landscape"
  - `section`: "hero"
  - `altText`: "Beautiful African landscape"
  - `isFeatured`: "true"

**DESTINATIONS SECTION (Rwanda):**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Akagera National Park"
  - `section`: "destinations"
  - `destination`: "rwanda"
  - `altText`: "Akagera National Park"
  - `isFeatured`: "true"

**DESTINATIONS SECTION (Uganda):**
- Same as above but change:
  - `destination`: "uganda"
  - `title`: "Bwindi Impenetrable Forest"

**FEATURED TOURS SECTION (Gorilla Trekking):**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Mountain Gorilla Trekking"
  - `section`: "featured_tours"
  - `destination`: "rwanda"
  - `tourCategory`: "gorilla_trekking"
  - `altText`: "Gorilla trekking experience"
  - `isFeatured`: "true"

**FEATURED TOURS SECTION (Wildlife Safari):**
- Same as above but change:
  - `tourCategory`: "wildlife_safari"
  - `title`: "Wildlife Safari Adventure"

**SERVICES SECTION:**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Guided Tours"
  - `section`: "services"
  - `altText`: "Professional tour guides"
  - `isFeatured`: "true"

**TESTIMONIALS SECTION:**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Happy Customer"
  - `section`: "testimonials"
  - `altText`: "Happy tourist testimonial"
  - `isFeatured`: "true"

**ABOUT US SECTION:**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Our Team"
  - `section`: "about_us"
  - `altText`: "Trumpet Tours team"
  - `isFeatured`: "true"

**GALLERY SECTION:**
- Method: POST
- URL: `http://localhost:5000/api/homepage-images`
- Headers: 
  - `Authorization: Bearer YOUR_TOKEN`
- Body (form-data):
  - `image`: [Select file]
  - `title`: "Rwanda Culture"
  - `section`: "gallery"
  - `altText`: "Cultural experience"
  - `isFeatured`: "false"

#### Step 3: Retrieve Images (PUBLIC - No Token Needed)

**Get Hero Images:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/section/hero`

**Get Destination Images:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/section/destinations`

**Get Rwanda Images Only:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/destination/rwanda`

**Get Uganda Images Only:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/destination/uganda`

**Get Featured Tour Images:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/section/featured_tours`

**Get Gorilla Trekking Images:**
- Method: GET
- URL: `http://localhost:5000/api/homepage-images/section/featured_tours?destination=rwanda&tourCategory=gorilla_trekking`

---

### Method 2: Using Browser DevTools Console

1. Open your browser console (F12)
2. Run this code:

```javascript
// Step 1: Login
const login = await fetch('http://localhost:5000/api/admin/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@example.com',
    password: 'password123'
  })
});
const loginData = await login.json();
const token = loginData.token;
console.log('Token:', token);

// Step 2: Test public endpoints
const heroImages = await fetch('http://localhost:5000/api/homepage-images/section/hero')
  .then(r => r.json());
console.log('Hero images:', heroImages);

const rwandaImages = await fetch('http://localhost:5000/api/homepage-images/destination/rwanda')
  .then(r => r.json());
console.log('Rwanda images:', rwandaImages);

const featuredImages = await fetch('http://localhost:5000/api/homepage-images/featured')
  .then(r => r.json());
console.log('Featured images:', featuredImages);
```

---

## 📊 Section Summary

| Section | Required Fields | Example |
|---------|----------------|---------|
| **hero** | title, section, altText | Background images |
| **destinations** | title, section, **destination**, altText | Rwanda/Uganda images |
| **featured_tours** | title, section, **destination**, **tourCategory**, altText | Tour images with category |
| **services** | title, section, altText | Service images |
| **testimonials** | title, section, altText | Customer photos |
| **about_us** | title, section, altText | Team/company images |
| **gallery** | title, section, altText | General gallery |

## 🎯 Tour Categories Available

- `gorilla_trekking`
- `wildlife_safari`
- `adventure_tour`
- `cultural_tour`
- `chimpanzee_tracking`
- `game_drive`
- `canopy_walk`
- `lake_tour`
- `national_park`
- `city_tour`
- `other`

## ✅ Testing Checklist

- [ ] Login works and returns token
- [ ] Upload hero image
- [ ] Upload Rwanda destination image
- [ ] Upload Uganda destination image
- [ ] Upload gorilla trekking tour image
- [ ] Upload wildlife safari tour image
- [ ] Upload service image
- [ ] Upload testimonial image
- [ ] Upload about us image
- [ ] Upload gallery image
- [ ] Retrieve hero images (public)
- [ ] Retrieve Rwanda images (public)
- [ ] Retrieve Uganda images (public)
- [ ] Retrieve featured images (public)
- [ ] Update an image
- [ ] Delete an image
- [ ] Test validation (missing required fields)

## 🔍 Common Issues

**"Image file is required"**: Make sure you're using form-data and selecting a file

**"Destination is required"**: This happens if you upload to `destinations` or `featured_tours` section without specifying destination

**"Tour category is required"**: This happens if you upload to `featured_tours` section without specifying tourCategory

**"Invalid token"**: Get a fresh token by logging in again

## 📚 Additional Resources

- Full API documentation: `HomePageImageAPI.md`
- Complete testing guide: `HomePageImageTesting.md`
- Section-specific examples: `SectionTestingGuide.md`


