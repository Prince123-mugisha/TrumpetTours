#!/usr/bin/env node

/**
 * HomePage Image API Test Script
 * Run this script to test the HomePageImage API endpoints
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:5000';
const ADMIN_EMAIL = 'admin@trumpettours.com';
const ADMIN_PASSWORD = 'admin123'; // Change this to your actual admin password

let authToken = '';

// Helper function to make HTTP requests
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error('Request failed:', error.message);
    return { status: 0, data: { error: error.message } };
  }
}

// Test 1: Login as admin
async function testLogin() {
  console.log('\n🔐 Testing Admin Login...');
  
  const result = await makeRequest(`${BASE_URL}/api/admin/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    })
  });
  
  if (result.status === 200 && result.data.success) {
    authToken = result.data.token;
    console.log('✅ Login successful!');
    console.log(`Token: ${authToken.substring(0, 20)}...`);
    return true;
  } else {
    console.log('❌ Login failed:', result.data.message);
    return false;
  }
}

// Test 2: Test public endpoints
async function testPublicEndpoints() {
  console.log('\n🌐 Testing Public Endpoints...');
  
  // Test get images by section
  const sectionResult = await makeRequest(`${BASE_URL}/api/homepage-images/section/destinations`);
  console.log(`GET /section/destinations: ${sectionResult.status === 200 ? '✅' : '❌'} (${sectionResult.status})`);
  
  // Test get images by destination
  const destinationResult = await makeRequest(`${BASE_URL}/api/homepage-images/destination/rwanda`);
  console.log(`GET /destination/rwanda: ${destinationResult.status === 200 ? '✅' : '❌'} (${destinationResult.status})`);
  
  // Test get featured images
  const featuredResult = await makeRequest(`${BASE_URL}/api/homepage-images/featured`);
  console.log(`GET /featured: ${featuredResult.status === 200 ? '✅' : '❌'} (${featuredResult.status})`);
}

// Test 3: Test protected endpoints (requires authentication)
async function testProtectedEndpoints() {
  if (!authToken) {
    console.log('❌ No auth token available. Skipping protected endpoint tests.');
    return;
  }
  
  console.log('\n🔒 Testing Protected Endpoints...');
  
  // Test get all images (admin)
  const allImagesResult = await makeRequest(`${BASE_URL}/api/homepage-images`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  console.log(`GET / (admin): ${allImagesResult.status === 200 ? '✅' : '❌'} (${allImagesResult.status})`);
  
  // Test create image (this will fail without actual image file, but we can test the endpoint)
  const createResult = await makeRequest(`${BASE_URL}/api/homepage-images`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Test Image',
      section: 'hero',
      altText: 'Test alt text'
    })
  });
  console.log(`POST / (create): ${createResult.status === 400 ? '✅' : '❌'} (${createResult.status}) - Expected 400 (no image file)`);
}

// Test 4: Test validation
async function testValidation() {
  if (!authToken) {
    console.log('❌ No auth token available. Skipping validation tests.');
    return;
  }
  
  console.log('\n✅ Testing Validation...');
  
  // Test missing required fields
  const validationResult = await makeRequest(`${BASE_URL}/api/homepage-images`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Test Image',
      section: 'destinations'
      // Missing destination and altText
    })
  });
  
  const isValidationError = validationResult.status === 400 && 
    validationResult.data.message && 
    validationResult.data.message.includes('required');
  
  console.log(`Validation test: ${isValidationError ? '✅' : '❌'} (${validationResult.status})`);
  if (isValidationError) {
    console.log(`   Error message: ${validationResult.data.message}`);
  }
}

// Test 5: Test unauthorized access
async function testUnauthorizedAccess() {
  console.log('\n🚫 Testing Unauthorized Access...');
  
  // Test protected endpoint without token
  const unauthorizedResult = await makeRequest(`${BASE_URL}/api/homepage-images`);
  console.log(`GET / (no token): ${unauthorizedResult.status === 401 ? '✅' : '❌'} (${unauthorizedResult.status})`);
  
  // Test with invalid token
  const invalidTokenResult = await makeRequest(`${BASE_URL}/api/homepage-images`, {
    headers: {
      'Authorization': 'Bearer invalid_token'
    }
  });
  console.log(`GET / (invalid token): ${invalidTokenResult.status === 401 ? '✅' : '❌'} (${invalidTokenResult.status})`);
}

// Main test function
async function runTests() {
  console.log('🚀 Starting HomePage Image API Tests...');
  console.log(`Base URL: ${BASE_URL}`);
  
  // Check if server is running
  try {
    const response = await fetch(`${BASE_URL}/`);
    if (response.ok) {
      console.log('✅ Server is running!');
    } else {
      console.log('❌ Server is not running or not accessible.');
      console.log('Please start the server with: npm run dev');
      return;
    }
  } catch (error) {
    console.log('❌ Server is not running or not accessible.');
    console.log('Please start the server with: npm run dev');
    return;
  }
  
  // Run all tests
  const loginSuccess = await testLogin();
  await testPublicEndpoints();
  
  if (loginSuccess) {
    await testProtectedEndpoints();
    await testValidation();
  }
  
  await testUnauthorizedAccess();
  
  console.log('\n🎉 Tests completed!');
  console.log('\nNext steps:');
  console.log('1. Use Postman/Insomnia for more detailed testing');
  console.log('2. Test image uploads with actual image files');
  console.log('3. Test all CRUD operations');
  console.log('4. Check the testing guide: HomePageImageTesting.md');
}

// Run the tests
runTests().catch(console.error);
