import axios from 'axios';

// API configuration
const API_CONFIG = {
  baseURL: 'https://gaet.trialview.in/api/school',
  apiKey: '123456',
  schoolid: 1, 
};

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_CONFIG.apiKey,
  },
});

// API endpoints
export const endpoints = {
  about: '/about',
  aboutschool: '/about-school',
  advantages: '/advantages',
  association: '/association',
  academic: '/academic',
  contactus: '/contact-us',
  faq: '/faq',
  founder: '/founder',
  governingBody: '/governing-body',
  home: '/home',
  infrastructure: '/infrastructure',
  journey: '/journey',
  menu: '/menu',
  management: '/management',
  teacherlist: '/teacher-list',
  ourSchool: '/our-school',
  photoGallery: '/photo-gallery',
  settings: '/settings',
  studentfees: '/student-fees',
  studentcare: '/student-care',
  schoolphotogallery: '/school-photo-gallery',
  schooladmission: '/school-admission',
  schoolpublication: '/school-publication',
  schoolachievement: '/school-achievement',
  schoolresultlist:'/school-result-list',
  schoolfacilitieslist:'/school-facilities-list',
  schoolwinnerlist:'/school-winner-list',
  visionMission: '/vision-mission',
};

// Generic API call function
export const apiCall = async (endpoint, method = 'POST', params = {}) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method,
      params: { school_id: API_CONFIG.schoolid, ...params }, 
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    }
    throw error;
  }
};


