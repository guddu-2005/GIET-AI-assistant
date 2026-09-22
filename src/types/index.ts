export type PageRoute = 
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'campus-life'
  | 'placements'
  | 'research'
  | 'student-services'
  | 'notices'
  | 'events'
  | 'gallery'
  | 'contact'
  | 'faq'
  | 'department';

export type DepartmentSlug = 
  | 'cse'
  | 'aiml'
  | 'cse-ai'
  | 'ece'
  | 'ee'
  | 'ece-comp'
  | 'civil'
  | 'mech'
  | 'mba'
  | 'mca';

export interface Program {
  id: string;
  name: string;
  code: string;
  degree: 'B.Tech' | 'M.Tech' | 'MBA' | 'MCA' | 'BBA' | 'BCA';
  intake?: number;
  duration: string;
  category: 'UG' | 'PG' | 'Management' | 'Computer Applications';
  departmentSlug: DepartmentSlug;
  description: string;
  eligibility: string;
}

export interface Department {
  slug: DepartmentSlug;
  name: string;
  shortName: string;
  degreeType: string;
  hodName?: string;
  overview: string;
  intakeText: string;
  laboratories: string[];
  softwareEnvironments: string[];
  highlights: string[];
  careerOpportunities: string[];
  studentClubs: string[];
  facultyNote: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'Admission' | 'Examination' | 'Placement' | 'Academic' | 'Events' | 'Scholarships' | 'General';
  date: string;
  description: string;
  isImportant?: boolean;
  pdfUrl?: string;
  isDemoContent?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Workshop' | 'Seminar' | 'Hackathon' | 'Placement';
  description: string;
  imageUrl?: string;
  organizer?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Events' | 'Sports' | 'Cultural' | 'Workshops' | 'Student Activities';
  imageUrl: string;
  caption?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Admissions' | 'Academics' | 'Placements' | 'Hostel' | 'Scholarships';
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  snippet: string;
  route: PageRoute;
  departmentSlug?: DepartmentSlug;
}

export interface PlacementContact {
  role: string;
  name: string;
  email: string;
  phone: string;
}
