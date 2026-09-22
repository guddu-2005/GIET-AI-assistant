import { Department, FAQItem, GalleryItem, Notice, PlacementContact, Program, EventItem } from '../types';

export const GIET_INFO = {
  fullName: "Gandhi Institute for Education and Technology",
  shortName: "GIET Bhubaneswar",
  established: "2009",
  campusImageUrl: "https://giet.edu.in/wp-content/uploads/2022/11/campus.jpg",
  location: "Baniatangi, Bajapur, Bhubaneswar, Khordha, Odisha – 752060",
  management: "Satya Panda Basanta Manjari Foundation Trust / SPBM Foundation",
  institutionType: "Private, self-financed, non-minority, co-educational institution",
  principal: "Prof. (Dr.) Jibanananda Jena",
  officeHours: "9:00 AM – 5:00 PM (Monday – Saturday)",
  accreditationText: "GIET's programs and institutional activities are supported by relevant approvals, affiliations and accreditations including AICTE, BPUT, SCTE&VT, NAAC, NBA for specified branches, and ISO certification.",
  admissionPortal: "https://admission.giet.edu.in/",
  officialWebsite: "https://giet.edu.in/",
  canteenCapacity: "1800+ students and staff daily",
  
  mainCampus: {
    address: "Baniatangi, Bhubaneswar, Khordha, Odisha – 752060",
    phones: ["06755-243600", "+91-9937860139"],
    email: "info@giet.edu.in"
  },
  
  adminOffice: {
    address: "Plot No. 635, Behera Sahi, Back side of Kasturba School, Bhubaneswar – 751017",
    phones: ["0674-2912242", "+91-9437092059"]
  },

  admissionContacts: [
    { name: "Dean Admission", phones: ["+91-9437117259", "+91-9337217151"], email: "admission@giet.edu.in" }
  ],

  placementContacts: [
    {
      role: "Training & Placement Officer",
      name: "Monalisha Das",
      email: "monalishadas@giet.edu.in",
      phone: "+91-9937623862"
    },
    {
      role: "Placement Coordinator",
      name: "Priyashree Priyambada",
      email: "priyashree@giet.edu.in",
      phone: "+91-6372652355"
    },
    {
      role: "Career Developer Trainer",
      name: "Ashish Kumar Dash",
      email: "ashishkumardash@giet.edu.in",
      phone: "+91-8328899655"
    }
  ] as PlacementContact[],

  placementEmail: "placement@giet.edu.in",

  recruitersList: [
    "Infosys",
    "IBM",
    "Cognizant",
    "Wipro",
    "Tech Mahindra",
    "Reliance",
    "TCS",
    "XL Dynamics",
    "Cavisson Systems",
    "Persistent Systems"
  ]
};

export const HIGHLIGHTS = [
  { title: "Established 2009", desc: "Over 15+ years of academic excellence & technical innovation", icon: "GraduationCap" },
  { title: "Autonomous Status", desc: "Curriculum designed for modern industry requirements", icon: "Award" },
  { title: "AICTE Approved", desc: "Recognized by All India Council for Technical Education", icon: "CheckCircle2" },
  { title: "BPUT Affiliated", desc: "Affiliated with Biju Patnaik University of Technology", icon: "Building2" },
  { title: "NAAC Accredited", desc: "Quality assurance in higher education standards", icon: "ShieldCheck" },
  { title: "Industry-Oriented", desc: "Hands-on project based learning & IIPC collaboration", icon: "Briefcase" }
];

export const PROGRAMS: Program[] = [
  // B.Tech
  {
    id: "btech-cse",
    name: "Computer Science & Engineering",
    code: "CSE",
    degree: "B.Tech",
    intake: 240,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "cse",
    description: "Covers core computing, algorithms, software engineering, databases, OS, full-stack development, and modern cloud technologies.",
    eligibility: "10+2 with Physics & Mathematics as compulsory subjects along with Chemistry/CS/IT with minimum eligibility marks as per BPUT/JEE guidelines."
  },
  {
    id: "btech-aiml",
    name: "Artificial Intelligence & Machine Learning",
    code: "AI & ML",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "aiml",
    description: "Specialized study in deep learning, neural networks, natural language processing, computer vision, and cognitive computing.",
    eligibility: "10+2 with Physics & Mathematics as compulsory subjects as per JEE/BPUT norms."
  },
  {
    id: "btech-cse-ai",
    name: "Computer Science & Engineering (AI)",
    code: "CSE (AI)",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "cse-ai",
    description: "Integrates core CSE fundamentals with targeted artificial intelligence modeling, algorithmic decision systems, and data analytics.",
    eligibility: "10+2 with Physics & Mathematics along with Chemistry/CS as per BPUT norms."
  },
  {
    id: "btech-ece",
    name: "Electronics & Communication Engineering",
    code: "ECE",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "ece",
    description: "Focuses on microelectronics, embedded systems, signal processing, VLSI design, wireless communication, and IoT systems.",
    eligibility: "10+2 with Physics, Mathematics and Chemistry/Biology/Biotechnology."
  },
  {
    id: "btech-ee",
    name: "Electrical Engineering",
    code: "EE",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "ee",
    description: "Comprehensive training in power systems, electrical machines, control engineering, renewable energy, and smart grids.",
    eligibility: "10+2 Science with PCM as per state JEE/BPUT norms."
  },
  {
    id: "btech-ece-comp",
    name: "Electrical & Computer Engineering",
    code: "ECE/EE-Comp",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "ece-comp",
    description: "Interdisciplinary program combining electrical hardware systems, microcontrollers, embedded coding, and computer systems.",
    eligibility: "10+2 Science with PCM as per JEE/BPUT norms."
  },
  {
    id: "btech-civil",
    name: "Civil Engineering",
    code: "CIVIL",
    degree: "B.Tech",
    intake: 60,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "civil",
    description: "Covers structural design, surveying, geotechnical engineering, transportation, environmental planning, and CAD simulation.",
    eligibility: "10+2 Science with Physics & Mathematics."
  },
  {
    id: "btech-mech",
    name: "Mechanical Engineering",
    code: "MECH",
    degree: "B.Tech",
    intake: 120,
    duration: "4 Years",
    category: "UG",
    departmentSlug: "mech",
    description: "Emphasizes thermodynamics, fluid dynamics, CAD/CAM, robotics, manufacturing systems, and automotive design.",
    eligibility: "10+2 Science with Physics & Mathematics."
  },

  // M.Tech
  {
    id: "mtech-mech-sys",
    name: "Mechanical System Design",
    code: "M.Tech MSD",
    degree: "M.Tech",
    intake: 18,
    duration: "2 Years",
    category: "PG",
    departmentSlug: "mech",
    description: "Advanced study in mechanical system dynamics, finite element analysis, simulation, and computer-aided engineering.",
    eligibility: "B.Tech/B.E. in relevant branch with valid OJEE/GATE performance."
  },
  {
    id: "mtech-structural",
    name: "Structural Engineering",
    code: "M.Tech SE",
    degree: "M.Tech",
    intake: 30,
    duration: "2 Years",
    category: "PG",
    departmentSlug: "civil",
    description: "Specialized postgraduate program in concrete technologies, earthquake design, dynamics, and structural stability.",
    eligibility: "B.Tech in Civil Engineering with valid OJEE/GATE score."
  },
  {
    id: "mtech-power-elec",
    name: "Power Electronics & Drives",
    code: "M.Tech PED",
    degree: "M.Tech",
    intake: 9,
    duration: "2 Years",
    category: "PG",
    departmentSlug: "ee",
    description: "Focuses on solid-state power conversion, electric drive automation, renewable power grids, and digital control.",
    eligibility: "B.Tech in EE / EEE / ECE with valid OJEE/GATE score."
  },
  {
    id: "mtech-cse",
    name: "Computer Science & Engineering (M.Tech)",
    code: "M.Tech CSE",
    degree: "M.Tech",
    intake: 18,
    duration: "2 Years",
    category: "PG",
    departmentSlug: "cse",
    description: "Advanced research-oriented coursework in distributed systems, machine intelligence, cyber security, and network architecture.",
    eligibility: "B.Tech in CSE / IT or MCA / M.Sc CS with valid OJEE/GATE score."
  },

  // Management & Computer Applications
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    code: "BBA",
    degree: "BBA",
    intake: 60,
    duration: "3 Years",
    category: "Management",
    departmentSlug: "mba",
    description: "Foundational business degree covering marketing, finance, human resource management, business communication, and analytics.",
    eligibility: "10+2 in any stream from recognized board."
  },
  {
    id: "mba",
    name: "Master of Business Administration",
    code: "MBA",
    degree: "MBA",
    intake: 120,
    duration: "2 Years",
    category: "Management",
    departmentSlug: "mba",
    description: "Postgraduate leadership training in corporate strategy, finance, digital marketing, operations, and organizational behavior.",
    eligibility: "Bachelor degree in any discipline with valid OJEE / CAT / MAT / XAT score."
  },
  {
    id: "mba-agri",
    name: "MBA Agri Business",
    code: "MBA-ABM",
    degree: "MBA",
    intake: 60,
    duration: "2 Years",
    category: "Management",
    departmentSlug: "mba",
    description: "Specialized management program tailored for agriculture supply chains, rural marketing, agribusiness finance, and food processing.",
    eligibility: "Bachelor degree in Agriculture, Science, Commerce, or relevant streams."
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    code: "BCA",
    degree: "BCA",
    intake: 60,
    duration: "3 Years",
    category: "Computer Applications",
    departmentSlug: "mca",
    description: "Undergraduate degree focusing on programming languages, web technology, database systems, and software engineering.",
    eligibility: "10+2 with Mathematics/Computer Science/IT/Stats or equivalent."
  },
  {
    id: "mca",
    name: "Master of Computer Applications",
    code: "MCA",
    degree: "MCA",
    intake: 180,
    duration: "2 Years",
    category: "Computer Applications",
    departmentSlug: "mca",
    description: "Professional master's program emphasizing enterprise software development, system design, cloud computing, and mobile app architecture.",
    eligibility: "BCA / B.Sc CS/IT or Bachelor degree with Mathematics at 10+2 or Graduation level with valid OJEE score."
  }
];

export const DEPARTMENTS: Record<string, Department> = {
  cse: {
    slug: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    degreeType: 'B.Tech & M.Tech',
    overview: 'The Department of Computer Science & Engineering at GIET is committed to delivering world-class computing education. With modern networking environments, project-based learning labs, and qualified faculty, students gain expertise in soft computing, full-stack development, cyber security, and enterprise architectures.',
    intakeText: 'B.Tech Intake: 240 seats | M.Tech Intake: 18 seats',
    laboratories: [
      'Advanced Programming Lab (C, C++, Java, Python)',
      'Data Structures & Algorithms Research Lab',
      'Database Management Systems & SQL Lab',
      'Operating Systems & Networking Lab',
      'Web Engineering & Full-Stack Development Center',
      'Cloud Computing & Big Data Simulation Lab'
    ],
    softwareEnvironments: [
      'Microsoft Windows Workstations',
      'Ubuntu Linux Systems & Bash Environment',
      'Red Hat Enterprise Linux Server Lab',
      'GCC / JDK / Python / Node.js Toolchains',
      'Oracle / PostgreSQL / MySQL Databases',
      'VS Code / Eclipse / Android Studio IDEs'
    ],
    highlights: [
      'State-of-the-art computer labs with high-speed internet',
      'Industry guest lectures & hands-on workshops',
      'Active student coding clubs and hackathon culture',
      'Strong placement track record in top IT companies',
      'Focus on technical, leadership and management skills'
    ],
    careerOpportunities: [
      'Software Development Engineer (SDE)',
      'Cloud Solutions Architect',
      'Full Stack Web Developer',
      'Cyber Security Analyst',
      'Database Administrator & DevOps Engineer'
    ],
    studentClubs: ['GIET CodeChef Chapter', 'CyberSec Guild', 'WebDev Innovators Club'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  aiml: {
    slug: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    shortName: 'AI & ML',
    degreeType: 'B.Tech',
    overview: 'The AI & ML Department prepares students for the artificial intelligence era. Students learn mathematical foundations, statistical modeling, neural networks, computer vision, and natural language processing with high-performance computing setups.',
    intakeText: 'B.Tech Intake: 60 seats',
    laboratories: [
      'AI Simulation & Deep Learning Lab',
      'Machine Learning Systems Studio',
      'Computer Vision & Image Processing Lab',
      'Natural Language Processing Lab'
    ],
    softwareEnvironments: [
      'Python Data Science Stack (NumPy, Pandas, Scikit-Learn)',
      'TensorFlow, PyTorch & Keras Frameworks',
      'JupyterLab & Google Colab Pro Environments',
      'OpenCV & NLTK Toolkits'
    ],
    highlights: [
      'Project-focused AI curriculum aligned with industry demand',
      'Research opportunities in computer vision and NLP',
      'Interdisciplinary hackathons and Kaggle challenges'
    ],
    careerOpportunities: [
      'AI Research Engineer',
      'Machine Learning Engineer',
      'Data Scientist',
      'Computer Vision Specialist',
      'NLP Engineer'
    ],
    studentClubs: ['GIET AI Circle', 'Data Science & ML Guild'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  'cse-ai': {
    slug: 'cse-ai',
    name: 'Computer Science & Engineering (AI)',
    shortName: 'CSE (AI)',
    degreeType: 'B.Tech',
    overview: 'Combines standard Computer Science core fundamentals with specialized AI engineering techniques. Students build solid expertise in algorithm design alongside deep learning and intelligent automated systems.',
    intakeText: 'B.Tech Intake: 60 seats',
    laboratories: [
      'Core Computer Science Lab',
      'Intelligent Systems & Neural Net Studio',
      'Data Engineering & AI Analytics Lab'
    ],
    softwareEnvironments: ['Linux/Windows Dual-Boot', 'Python, Java, C++', 'Scikit-Learn, PyTorch, SQL'],
    highlights: ['Comprehensive dual exposure to CSE core and AI specializations', 'Industry-aligned project work'],
    careerOpportunities: ['Software Engineer (AI)', 'Machine Learning Specialist', 'Backend Systems Developer'],
    studentClubs: ['AI-Code Club'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  ece: {
    slug: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    degreeType: 'B.Tech',
    overview: 'Delivers rigorous education in electronic circuit design, VLSI, microprocessors, digital signal processing, optical communication, wireless technologies, and IoT embedded systems.',
    intakeText: 'B.Tech Intake: 60 seats',
    laboratories: ['Analog & Digital Electronics Lab', 'VLSI Design & EDA Tools Lab', 'Microprocessor & Embedded Systems Lab', 'Communication Systems Lab', 'DSP Simulation Lab'],
    softwareEnvironments: ['MATLAB / Simulink', 'Xilinx Vivado & Cadence Tools', 'Keil Microvision & Arduino IDE', 'Multisim & Proteus'],
    highlights: ['Hands-on micro-controller prototyping', 'Robotics and IoT student projects', 'Industry training cell assistance'],
    careerOpportunities: ['Embedded Software Engineer', 'VLSI Design Engineer', 'Telecom Systems Engineer', 'Robotics Specialist'],
    studentClubs: ['GIET Robotics & Electronics Club'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  ee: {
    slug: 'ee',
    name: 'Electrical Engineering',
    shortName: 'EE',
    degreeType: 'B.Tech & M.Tech',
    overview: 'Trains students in electrical machinery, power electronics, high-voltage systems, smart grids, control engineering, and renewable energy technologies.',
    intakeText: 'B.Tech Intake: 60 seats | M.Tech (Power Electronics) Intake: 9 seats',
    laboratories: ['Electrical Machines Lab', 'Power Electronics & Drives Lab', 'Control Systems Lab', 'Power Systems Simulation Lab', 'Basic Electrical Engineering Lab'],
    softwareEnvironments: ['MATLAB / Power World Simulator', 'ETAP Electrical Analysis', 'LabVIEW'],
    highlights: ['High-voltage testing facilities', 'Focus on green energy & smart grid technologies'],
    careerOpportunities: ['Power Systems Engineer', 'Electrical Design Engineer', 'Renewable Energy Analyst', 'Automation Engineer'],
    studentClubs: ['Electrical Innovators Guild'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  'ece-comp': {
    slug: 'ece-comp',
    name: 'Electrical & Computer Engineering',
    shortName: 'Electrical & Computer',
    degreeType: 'B.Tech',
    overview: 'An interdisciplinary domain bridging electrical power hardware with embedded computing software, edge computing, and smart computer architecture.',
    intakeText: 'B.Tech Intake: 60 seats',
    laboratories: ['Embedded Hardware & Computing Lab', 'Digital Systems Design Lab', 'Microcontroller Interfacing Studio'],
    softwareEnvironments: ['Embedded C/C++', 'Python', 'MATLAB', 'Keil IDE'],
    highlights: ['Bridges hardware and software engineering skills', 'Versatile career paths in tech & hardware sectors'],
    careerOpportunities: ['Embedded Systems Architect', 'Hardware Design Engineer', 'IoT Firmware Engineer'],
    studentClubs: ['Hardware-Software Synergy Club'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  civil: {
    slug: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    degreeType: 'B.Tech & M.Tech',
    overview: 'Provides comprehensive education in structural design, surveying, geotechnical engineering, hydraulic structures, environmental engineering, and computer-aided civil drafting.',
    intakeText: 'B.Tech Intake: 60 seats | M.Tech (Structural Engg) Intake: 30 seats',
    laboratories: ['Surveying & Total Station Lab', 'Concrete Technology & Testing Lab', 'Soil Mechanics & Geotechnical Lab', 'Transportation Engineering Lab', 'Environmental Engineering Lab', 'Civil CAD & Structural Modeling Center'],
    softwareEnvironments: ['AutoCAD Civil 3D', 'STAAD.Pro Structural Analysis', 'ETABS Building Design'],
    highlights: ['Field surveying with modern Total Station instruments', 'Structural material testing facilities', 'Industrial site visits'],
    careerOpportunities: ['Structural Design Engineer', 'Site Planning Manager', 'Geotechnical Consultant', 'Urban Infrastructure Engineer'],
    studentClubs: ['GIET Civil Constructors Forum'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  mech: {
    slug: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    degreeType: 'B.Tech & M.Tech',
    overview: 'Focuses on thermo-fluid sciences, mechanical design, CAD/CAM manufacturing, IC engines, materials testing, robotics, and industrial production engineering.',
    intakeText: 'B.Tech Intake: 120 seats | M.Tech (Mechanical System Design) Intake: 18 seats',
    laboratories: ['Thermal Engineering & IC Engine Lab', 'Fluid Mechanics & Hydraulic Machines Lab', 'Strength of Materials Testing Lab', 'CAD / CAM & Robotics Workshop', 'Heat Transfer Simulation Lab', 'Central Machine Shop'],
    softwareEnvironments: ['SolidWorks / Creo Parametric', 'ANSYS Workbench FEA/CFD', 'AutoCAD Mechanical', 'CNC Programming Tools'],
    highlights: ['Well-equipped machine shop with CNC machining', 'Active BAJA / Go-Kart student vehicle teams', 'Thermal & material testing labs'],
    careerOpportunities: ['Mechanical Design Engineer', 'Automotive Development Engineer', 'Production & Plant Engineer', 'HVAC Specialist'],
    studentClubs: ['GIET Mechanical Innovators & Motorsports'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  mba: {
    slug: 'mba',
    name: 'Department of Management Studies (MBA & BBA)',
    shortName: 'Management',
    degreeType: 'MBA, BBA, MBA Agri Business',
    overview: 'Prepares future business leaders with comprehensive training in corporate strategy, digital marketing, business communication, financial analysis, HR management, and agribusiness supply chains.',
    intakeText: 'MBA: 120 seats | MBA Agri Business: 60 seats | BBA: 60 seats',
    laboratories: ['Management Simulation Center', 'Digital Marketing & Analytics Lab', 'Soft Skills & Business Communication Studio'],
    softwareEnvironments: ['SPSS Statistical Software', 'Advanced MS Excel & Power BI', 'ERP Business Process Software'],
    highlights: ['Case-study methodology & corporate seminars', 'Specialized agribusiness management option', 'Personality development & mock interviews'],
    careerOpportunities: ['Business Analyst', 'Marketing Executive', 'HR Specialist', 'Financial Analyst', 'Agribusiness Manager'],
    studentClubs: ['GIET Management Club', 'Entrepreneurship Cell'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  },
  mca: {
    slug: 'mca',
    name: 'Department of Computer Applications (MCA & BCA)',
    shortName: 'Computer Applications',
    degreeType: 'MCA & BCA',
    overview: 'Dedicated to software development and computer applications expertise. Students master core programming, mobile application development, database design, software engineering, and web development.',
    intakeText: 'MCA: 180 seats | BCA: 60 seats',
    laboratories: ['Computer Applications Main Lab', 'Web Technology Studio', 'Mobile Application Development Center', 'Database Systems Lab'],
    softwareEnvironments: ['Java, Python, C#, PHP', 'Android Studio, Flutter', 'MySQL, Oracle, MongoDB', 'HTML5/CSS3/JavaScript'],
    highlights: ['Project-intensive curriculum with live software builds', 'Pre-placement aptitude & coding bootcamps', 'High placement rate in software firms'],
    careerOpportunities: ['Software Developer', 'Mobile App Developer', 'Web Application Architect', 'Database Specialist', 'System Analyst'],
    studentClubs: ['App Developers Guild', 'TechBytes Forum'],
    facultyNote: 'Faculty information will be updated from the official department data.'
  }
};

export const NOTICES: Notice[] = [
  {
    id: "notice-001",
    title: "B.Tech & PG Admissions 2026-27 Counseling & Registration Open",
    category: "Admission",
    date: "2026-09-15",
    description: "Online application submission for B.Tech, M.Tech, MBA, and MCA programs for the academic session 2026-27 is currently active on the official admission portal. Eligible candidates should submit documents for verification.",
    isImportant: true,
    pdfUrl: "#",
    isDemoContent: true
  },
  {
    id: "notice-002",
    title: "BPUT Semester End Examination Schedule & Admit Card Notice",
    category: "Examination",
    date: "2026-09-10",
    description: "Students enrolled in B.Tech, MCA, and MBA programs are requested to download their examination admit cards from the BPUT student portal and verify subject registration details.",
    isImportant: true,
    pdfUrl: "#",
    isDemoContent: true
  },
  {
    id: "notice-003",
    title: "Upcoming Campus Placement Drive 2026 - Training & Registration",
    category: "Placement",
    date: "2026-09-08",
    description: "The Training & Placement Cell announces pre-placement mock interviews and technical aptitude sessions for final-year B.Tech and MCA candidates.",
    isImportant: false,
    pdfUrl: "#",
    isDemoContent: true
  },
  {
    id: "notice-004",
    title: "State Scholarship Scheme (Medhabruti / Prerana) Application Guidelines",
    category: "Scholarships",
    date: "2026-08-28",
    description: "Eligible students applying for Medhabruti, Prerana, or Minority Community Scholarships are instructed to verify required income and domicile documents at the GIET student services counter.",
    isImportant: false,
    pdfUrl: "#",
    isDemoContent: true
  },
  {
    id: "notice-005",
    title: "National Level AI & Robotics Workshop Registration",
    category: "Events",
    date: "2026-08-20",
    description: "GIET Idea Lab and IIPC are organizing a 3-day hands-on workshop on AI, IoT, and Embedded Robotics. All engineering branches are welcome to participate.",
    isImportant: false,
    pdfUrl: "#",
    isDemoContent: true
  },
  {
    id: "notice-006",
    title: "Hostel Committee Review Meeting & Mess Safety Notice",
    category: "General",
    date: "2026-08-12",
    description: "The quarterly hostel review meeting will take place with resident superintendents and student council representatives to review hygiene, canteen food quality, and facility upkeep.",
    isImportant: false,
    pdfUrl: "#",
    isDemoContent: true
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "event-001",
    title: "GIET TechFest 2026 - National Technical Symposium",
    date: "2026-10-15",
    time: "09:30 AM - 05:00 PM",
    location: "GIET Main Auditorium & Computer Center",
    category: "Technical",
    description: "Annual technical extravaganza featuring Code Wars, AI Model Showcases, CAD Design Competitions, Paper Presentations, and Robo-Races.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    organizer: "GIET Student Technical Council & Idea Lab"
  },
  {
    id: "event-002",
    title: "24-Hour AI & IoT Hackathon: Smart Bhubaneswar",
    date: "2026-11-02",
    time: "10:00 AM Onwards",
    location: "Idea Lab & Advanced Software Complex",
    category: "Hackathon",
    description: "Inter-college hackathon focusing on AI solutions for urban mobility, energy conservation, and automated smart campus infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    organizer: "Department of CSE & AI/ML"
  },
  {
    id: "event-003",
    title: "Industry Institute Partnership Cell (IIPC) Guest Seminar",
    date: "2026-10-22",
    time: "02:00 PM - 04:30 PM",
    location: "Seminar Hall - Block B",
    category: "Seminar",
    description: "Expert talk by senior software architects on Industry 4.0 trends, cloud infrastructure, and career roadmaps for engineering graduates.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    organizer: "Training & Placement Cell"
  },
  {
    id: "event-004",
    title: "Annual Sports Meet & Inter-Department Tournament",
    date: "2026-11-20",
    time: "08:00 AM - 06:00 PM",
    location: "GIET Sports Complex & Cricket Ground",
    category: "Sports",
    description: "Inter-departmental cricket, football, volleyball, badminton, chess, and track athletic competitions.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=800",
    organizer: "Department of Physical Education"
  },
  {
    id: "event-005",
    title: "Sanskriti - Annual Cultural Extravaganza",
    date: "2026-12-10",
    time: "05:00 PM Onwards",
    location: "GIET Open Air Theater",
    category: "Cultural",
    description: "Celebration of Odia heritage, music, classical and modern dance performances, drama, and musical band performances.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    organizer: "GIET Cultural Committee"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "GIET Academic Main Block",
    category: "Campus",
    imageUrl: "https://giet.edu.in/wp-content/uploads/2022/11/campus.jpg",
    caption: "Spacious administrative & academic campus building at Baniatangi, Bhubaneswar."
  },
  {
    id: "gal-2",
    title: "Advanced Software & Computer Center",
    category: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    caption: "State-of-the-art computer labs with high-speed internet and Linux/Windows environments."
  },
  {
    id: "gal-3",
    title: "AI & Idea Lab Prototyping Facility",
    category: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    caption: "Hands-on engineering prototyping and IoT research laboratory."
  },
  {
    id: "gal-4",
    title: "Central Library & Digital E-Resource Room",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000",
    caption: "Comprehensive repository of technical books, journals, e-books, and quiet study bays."
  },
  {
    id: "gal-5",
    title: "National Technical Symposium Hackathon",
    category: "Workshops",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    caption: "Students collaborating during 24-hour innovation hackathons."
  },
  {
    id: "gal-6",
    title: "Annual Sports Meet Track & Ground",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    caption: "Multi-sport outdoor grounds for cricket, football, and athletics."
  },
  {
    id: "gal-7",
    title: "Annual Cultural Fest Performances",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    caption: "Dynamic musical and dance performances during campus celebrations."
  },
  {
    id: "gal-8",
    title: "Mechanical Workshop & CNC Machine Studio",
    category: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
    caption: "Central manufacturing workshop equipped with CNC machines and lathes."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is GIET?",
    answer: "Gandhi Institute for Education and Technology (GIET) is an autonomous, AICTE-approved, BPUT-affiliated engineering and technology institution located in Baniatangi, Bhubaneswar, Khordha, Odisha. Established in 2009 under the Satya Panda Basanta Manjari Foundation Trust (SPBM Foundation), GIET offers undergraduate (B.Tech, BBA, BCA) and postgraduate (M.Tech, MBA, MCA) programs.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is GIET located?",
    answer: "The main campus is located at Baniatangi, Bajapur, Bhubaneswar, Khordha, Odisha – 752060. GIET also maintains an Administrative Office at Plot No. 635, Behera Sahi, Back side of Kasturba School, Bhubaneswar – 751017.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What B.Tech programs are available and what are their intake capacities?",
    answer: "GIET offers B.Tech degrees in 8 branches: Computer Science & Engineering (Intake: 240), Artificial Intelligence & Machine Learning (Intake: 60), CSE-AI (Intake: 60), Civil Engineering (Intake: 60), Electrical & Computer Engineering (Intake: 60), Electrical Engineering (Intake: 60), Electronics & Communication Engineering (Intake: 60), and Mechanical Engineering (Intake: 120).",
    category: "Academics"
  },
  {
    id: "faq-4",
    question: "How can I apply for admissions at GIET?",
    answer: "Candidates can apply online through the official GIET admission portal at https://admission.giet.edu.in/. You can also contact the Dean Admission office directly via phone (+91-9437117259 / +91-9337217151) or email info@giet.edu.in.",
    category: "Admissions"
  },
  {
    id: "faq-5",
    question: "Does GIET provide hostel facilities?",
    answer: "Yes. GIET provides separate, secure hostels for boys and girls with residential supervision, Resident Superintendents, caretakers, welfare officers, and regular committee review meetings. Please confirm current fee structures directly with the admission or hostel office.",
    category: "Hostel"
  },
  {
    id: "faq-6",
    question: "What scholarships are accessible for GIET students?",
    answer: "Eligible students can apply for state and national schemes including Medhabruti, Prerana, Minority Community Scholarships, and Tuition Fee Waiver (TFW) seats. Disclaimer: Scholarship eligibility, documentation requirements, and deadlines are subject to government guidelines and institutional verification.",
    category: "Scholarships"
  },
  {
    id: "faq-7",
    question: "How can I contact the Training & Placement Cell?",
    answer: "You can reach the Placement Cell team via email at placement@giet.edu.in, or contact TPO Monalisha Das (+91-9937623862), Placement Coordinator Priyashree Priyambada (+91-6372652355), or Career Trainer Ashish Kumar Dash (+91-8328899655).",
    category: "Placements"
  },
  {
    id: "faq-8",
    question: "How can I contact GIET administrative office?",
    answer: "Main Campus Phone: 06755-243600 / +91-9937860139. Admin Office Phone: 0674-2912242 / +91-9437092059. Official Email: info@giet.edu.in. Official Website: https://giet.edu.in/.",
    category: "General"
  }
];

export const SCHOLARSHIPS_INFO = [
  {
    name: "Medhabruti Scholarship",
    authority: "Government of Odisha",
    description: "Merit-based scholarship awarded by the Higher Education Department to meritorious undergraduate engineering students in Odisha."
  },
  {
    name: "Prerana Post-Matric Scholarship",
    authority: "ST & SC Development Dept, Odisha",
    description: "Financial assistance provided to eligible SC, ST, and OBC/SEBC category students pursuing technical and professional higher education."
  },
  {
    name: "Minority Community Scholarship",
    authority: "Ministry of Minority Affairs",
    description: "Merit-cum-means scholarship for eligible students belonging to notified minority communities."
  },
  {
    name: "Tuition Fee Waiver (TFW)",
    authority: "AICTE / State Government",
    description: "Tuition fee exemption awarded to meritorious candidates with family income within prescribed AICTE statutory limits."
  }
];

export const WHY_GIET_REASONS = [
  {
    title: "Technology-Focused Curriculum",
    desc: "Autonomous syllabus updated with modern industry frameworks, AI simulation tools, and practical project builds.",
    icon: "Cpu"
  },
  {
    title: "Industry Institute Partnership (IIPC)",
    desc: "Active collaboration for industrial internships, expert seminars, technology bootcamps, and technical skill enhancement.",
    icon: "Handshake"
  },
  {
    title: "Idea Lab & Research Hub",
    desc: "Dedicated incubation facilities empowering students to prototype real-world hardware and software innovations.",
    icon: "Lightbulb"
  },
  {
    title: "Dedicated Career Training",
    desc: "In-house career development trainers providing quantitative aptitude, soft skills, mock interviews, and coding sessions.",
    icon: "Target"
  },
  {
    title: "Academic Mentoring System",
    desc: "Structured faculty mentorship guidance supporting individual student growth, project supervision, and well-being.",
    icon: "Users"
  },
  {
    title: "Modern Campus Facilities",
    desc: "Equipped with 1800+ daily canteen capacity, SBI ATM, central digital library, high-speed ICT network, and separate hostels.",
    icon: "Compass"
  }
];
