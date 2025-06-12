// Mock data for the tech training academy website

export const heroImages = [
  {
    src: "/images/Hero.jpg",
    alt: "Students learning technology",
  },
  {
    src: "/images/cyber.jpg",
    alt: "Technology workshop",
  },
  {
    src: "/images/cloud.jpg",
    alt: "Coding bootcamp",
  },
  {
    src: "/images/data.jpg",
    alt: "Tech conference",
  },
];

// Courses data
export const allCourses = [
  {
    id: "web-development",
    title: "FrontEnd Web Development Bootcamp",
    description:
      "Comprehensive training in modern web development technologies including HTML, CSS, JavaScript, React, and NextJS",
    image: "/images/fullstack.jpg",
    duration: "9 weeks",
    level: "Beginner to Junior",
    price: "₦175,000",
    startDate: "June 15, 2025",
    instructor: ["Engr. Solomon"],
    topics: ["HTML/CSS", "JavaScript", "React", "Next JS"],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Build responsive websites using HTML5 and CSS3",
      "Understand the principles of web design and user experience",
      "Create interactive web applications with JavaScript, React and Next JS",
      "Implement RESTful APIs and work with databases",
      "Deploy full-stack applications to the cloud",
    ],
    format:
      "Full-time, in-person or online, with live instruction, hands-on projects, and career support.",
    modules: [
      {
        title: "Web Fundamentals",
        description: "Introduction to the core technologies of the web",
        topics: [
          "HTML5 Semantics",
          "CSS3 Layouts",
          "Responsive Design",
          "CSS Frameworks",
          "Git Version Control",
        ],
      },
      {
        title: "JavaScript Essentials",
        description: "Core concepts of JavaScript programming",
        topics: [
          "JavaScript Syntax",
          "DOM Manipulation",
          "Event Handling",
          "Asynchronous JavaScript",
          "ES6+ Features",
        ],
      },
      {
        title: "Frontend Development with React",
        description: "Building modern user interfaces with React",
        topics: [
          "React Components",
          "State Management",
          "Hooks",
          "Context API",
          "React Router",
        ],
      },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis and Visualization",
    description:
      "Gain practical skills in analyzing, interpreting, and visualizing data using Python, Excel, and leading visualization tools. Learn to turn raw data into actionable insights for business and research.",
    image: "/images/data.jpg",
    duration: "9 weeks",
    level: "Beginner to Intermediate",
    price: "₦175,000",
    startDate: "July 10, 2025",
    instructor: "Glory Ijiobor",
    topics: [
      "Excel",
      "Python",
      "Data Cleaning",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Reporting",
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Clean, organize, and analyze data using Excel and Python",
      "Create interactive dashboards and reports with Power BI and Tableau",
      "Visualize data to communicate insights effectively",
      "Apply statistical techniques to interpret data",
      "Automate data workflows for efficiency",
    ],
    format:
      "Part-time, in-person or online, with live instruction, hands-on projects, and mentorship.",
    modules: [
      {
        title: "Introduction to Data Analysis",
        description: "Fundamentals of data analysis and the data lifecycle",
        topics: [
          "Data Types",
          "Data Collection",
          "Data Quality",
          "Data Ethics",
          "Project Scoping",
        ],
      },
      {
        title: "Excel for Data Analysis",
        description: "Using Excel for data cleaning, analysis, and reporting",
        topics: [
          "Formulas & Functions",
          "Pivot Tables",
          "Data Cleaning",
          "Conditional Formatting",
          "Charts & Graphs",
        ],
      },
      {
        title: "Python for Data Analysis",
        description: "Leveraging Python and pandas for data manipulation",
        topics: [
          "Python Basics",
          "pandas",
          "NumPy",
          "Data Import/Export",
          "Data Transformation",
        ],
      },
      {
        title: "Data Visualization with Power BI & Tableau",
        description: "Building interactive dashboards and visualizations",
        topics: [
          "Power BI Basics",
          "Tableau Basics",
          "Data Connections",
          "Visual Best Practices",
          "Dashboard Design",
        ],
      },
      {
        title: "Statistical Analysis",
        description: "Applying statistics to extract insights from data",
        topics: [
          "Descriptive Statistics",
          "Data Aggregation",
          "Correlation Analysis",
          "Trend Analysis",
          "Reporting",
        ],
      },
      {
        title: "Capstone Project",
        description: "End-to-end data analysis and visualization project",
        topics: [
          "Project Planning",
          "Data Sourcing",
          "Analysis & Visualization",
          "Presentation Skills",
          "Storytelling with Data",
        ],
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science and Machine Learning",
    description:
      "Learn to analyze data, build predictive models, and extract insights using Python, statistical methods, and machine learning algorithms.",
    image: "/images/Data-analysis.jpg",
    duration: "9 weeks",
    level: "Intermediate",
    price: "₦175,000",
    startDate: "July 10, 2025",
    instructor: "Engineer Solomon",
    topics: [
      "Python",
      "Statistics",
      "Machine Learning",
      "Data Visualization",
      "Big Data",
      "AI",
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of algebra and statistics",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Analyze and manipulate data using Python and pandas",
      "Create insightful data visualizations",
      "Apply statistical methods to extract insights from data",
      "Build and evaluate machine learning models",
      "Implement deep learning algorithms for complex problems",
    ],
    format:
      "Part-time, in-person or online, with live instruction, hands-on projects, and mentorship.",
    modules: [
      {
        title: "Python for Data Science",
        description: "Essential Python programming for data analysis",
        topics: [
          "Python Basics",
          "NumPy",
          "Pandas",
          "Data Cleaning",
          "Jupyter Notebooks",
        ],
      },
      {
        title: "Data Visualization",
        description: "Creating effective visual representations of data",
        topics: [
          "Matplotlib",
          "Seaborn",
          "Plotly",
          "Dashboard Creation",
          "Storytelling with Data",
        ],
      },
      {
        title: "Statistical Analysis",
        description: "Applying statistical methods to understand data",
        topics: [
          "Descriptive Statistics",
          "Probability Distributions",
          "Hypothesis Testing",
          "Regression Analysis",
          "ANOVA",
        ],
      },
      {
        title: "Machine Learning Fundamentals",
        description: "Introduction to core machine learning concepts",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering",
          "Cross-Validation",
        ],
      },
      {
        title: "Advanced Machine Learning",
        description: "Exploring complex machine learning algorithms",
        topics: [
          "Ensemble Methods",
          "Neural Networks",
          "Deep Learning",
          "Natural Language Processing",
          "Computer Vision",
        ],
      },
      {
        title: "Big Data and Deployment",
        description: "Working with large datasets and deploying models",
        topics: [
          "Spark Basics",
          "Cloud Computing",
          "Model Deployment",
          "MLOps",
          "Ethical Considerations",
        ],
      },
    ],
  },
  {
    id: "ux-design",
    title: "UX/UI Design Fundamentals",
    description:
      "Master the principles of user experience and interface design to create intuitive, accessible, and visually appealing digital products.",
    image: "/images/ux.jpg",
    duration: "9 weeks",
    level: "Beginner",
    price: "₦175,000",
    startDate: "May 20, 2025",
    instructor: "Blessing Praise",
    topics: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    prerequisites: [
      "No prior design experience required",
      "Interest in digital design",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Conduct effective user research and create user personas",
      "Design wireframes and prototypes using industry-standard tools",
      "Apply visual design principles to create appealing interfaces",
      "Conduct usability testing and iterate based on feedback",
      "Create a professional UX/UI design portfolio",
    ],
    format:
      "Part-time, in-person or online, with live instruction, hands-on projects, and portfolio reviews.",
    modules: [
      {
        title: "Introduction to UX Design",
        description: "Understanding the fundamentals of user experience design",
        topics: [
          "UX Principles",
          "Design Thinking",
          "User-Centered Design",
          "UX Research Methods",
          "Information Architecture",
        ],
      },
      {
        title: "User Research",
        description: "Methods for understanding user needs and behaviors",
        topics: [
          "User Interviews",
          "Surveys",
          "Personas",
          "User Journeys",
          "Empathy Mapping",
        ],
      },
      {
        title: "Wireframing and Prototyping",
        description:
          "Creating low and high-fidelity representations of digital products",
        topics: [
          "Sketching",
          "Wireframing Tools",
          "Interactive Prototypes",
          "User Flows",
          "Design Systems",
        ],
      },
      {
        title: "UI Design Principles",
        description:
          "Visual design fundamentals for creating appealing interfaces",
        topics: [
          "Color Theory",
          "Typography",
          "Layout Principles",
          "Visual Hierarchy",
          "Responsive Design",
        ],
      },
      {
        title: "Usability Testing",
        description: "Evaluating designs through user testing",
        topics: [
          "Test Planning",
          "Moderated Testing",
          "Remote Testing",
          "Analyzing Results",
          "Iterative Design",
        ],
      },
      {
        title: "Portfolio Development",
        description: "Creating a professional UX/UI design portfolio",
        topics: [
          "Case Studies",
          "Portfolio Websites",
          "Presentation Skills",
          "Design Critique",
          "Interview Preparation",
        ],
      },
    ],
  },
  {
    id: "ict-fundamentals",
    title: "ICT Fundamentals",
    description:
      "Build a strong foundation in Information and Communication Technology (ICT), covering essential computer skills, digital literacy, and basic networking concepts for beginners.",
    image: "/images/ICT.jpg",
    duration: "9 weeks",
    level: "Beginner",
    price: "₦175,000",
    startDate: "May 5, 2025",
    instructor: "Akpan Michael",
    topics: [
      "Computer Basics",
      "Digital Literacy",
      "Internet & Email",
      "Office Productivity Tools",
      "Basic Networking",
    ],
    prerequisites: [
      "No prior ICT experience required",
      "Interest in technology",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Understand the fundamentals of computers and operating systems",
      "Use common office productivity tools (Word, Excel, PowerPoint)",
      "Navigate the internet safely and use email effectively",
      "Recognize basic networking concepts and terminology",
      "Apply digital literacy skills in everyday scenarios",
    ],
    format:
      "Full-time or part-time, in-person or online, with live instruction, hands-on exercises, and practical assignments.",
    modules: [
      {
        title: "Introduction to ICT",
        description:
          "Overview of ICT concepts and their importance in modern society",
        topics: [
          "What is ICT?",
          "History of Computing",
          "Applications of ICT",
          "Digital Transformation",
          "Careers in ICT",
        ],
      },
      {
        title: "Computer Basics",
        description:
          "Understanding computer hardware, software, and operating systems",
        topics: [
          "Computer Components",
          "Operating Systems",
          "File Management",
          "Peripheral Devices",
          "Basic Troubleshooting",
        ],
      },
      {
        title: "Digital Literacy",
        description:
          "Developing essential digital skills for the workplace and daily life",
        topics: [
          "Typing Skills",
          "Internet Safety",
          "Online Communication",
          "Social Media Basics",
          "Digital Etiquette",
        ],
      },
      {
        title: "Office Productivity Tools",
        description:
          "Hands-on training with Microsoft Office and Google Workspace",
        topics: [
          "Word Processing",
          "Spreadsheets",
          "Presentations",
          "Cloud Storage",
          "Collaboration Tools",
        ],
      },
      {
        title: "Internet and Email",
        description: "Navigating the web and managing email communications",
        topics: [
          "Web Browsers",
          "Search Engines",
          "Email Setup",
          "Email Etiquette",
          "Avoiding Scams",
        ],
      },
      {
        title: "Basic Networking",
        description:
          "Introduction to networking concepts and safe internet practices",
        topics: [
          "What is a Network?",
          "Types of Networks",
          "Wi-Fi Setup",
          "Network Security Basics",
          "Troubleshooting Connectivity",
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    description:
      "Learn to protect systems, networks, and programs from digital attacks with comprehensive training in cybersecurity principles and practices.",
    image: "/images/cyber.jpg",
    duration: "9 weeks",
    level: "Intermediate",
    price: "₦175,000",
    startDate: "August 5, 2025",
    instructor: "Mrs Claire Amuka",
    topics: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Security Auditing",
      "Incident Response",
    ],
    prerequisites: [
      "Basic understanding of computer networks",
      "Familiarity with operating systems",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Identify and mitigate common security vulnerabilities",
      "Implement security measures to protect digital assets",
      "Conduct security audits and risk assessments",
      "Respond effectively to security incidents",
      "Apply ethical hacking techniques to test system security",
    ],
    format:
      "Part-time, in-person or online, with live instruction, hands-on labs, and certification preparation.",
    modules: [
      {
        title: "Cybersecurity Fundamentals",
        description: "Introduction to core cybersecurity concepts",
        topics: [
          "Security Principles",
          "Threat Landscape",
          "Security Controls",
          "Risk Management",
          "Security Frameworks",
        ],
      },
      {
        title: "Network Security",
        description: "Protecting network infrastructure and communications",
        topics: [
          "Network Protocols",
          "Firewalls",
          "VPNs",
          "Intrusion Detection",
          "Network Monitoring",
        ],
      },
      {
        title: "System Security",
        description: "Securing operating systems and applications",
        topics: [
          "OS Hardening",
          "Access Controls",
          "Patch Management",
          "Endpoint Protection",
          "Secure Configuration",
        ],
      },
      {
        title: "Ethical Hacking",
        description:
          "Techniques for identifying and exploiting vulnerabilities",
        topics: [
          "Reconnaissance",
          "Vulnerability Scanning",
          "Exploitation",
          "Web Application Security",
          "Social Engineering",
        ],
      },
      {
        title: "Cryptography",
        description: "Principles and applications of cryptographic techniques",
        topics: [
          "Encryption Algorithms",
          "Public Key Infrastructure",
          "Hash Functions",
          "Digital Signatures",
          "Secure Communications",
        ],
      },
      {
        title: "Incident Response",
        description: "Preparing for and responding to security incidents",
        topics: [
          "Incident Handling",
          "Digital Forensics",
          "Malware Analysis",
          "Disaster Recovery",
          "Business Continuity",
        ],
      },
    ],
  },
  {
    id: "project-management",
    title: "Project Management Essentials",
    description:
      "Learn the fundamentals of project management, including planning, execution, monitoring, and closing projects using industry-standard methodologies such as Agile and Waterfall.",
    image: "/images/project.jpeg",
    duration: "9 weeks",
    level: "Beginner to Intermediate",
    price: "₦175,000",
    startDate: "September 2, 2025",
    instructor: "Mrs Claire Amuka",
    topics: [
      "Project Planning",
      "Agile Methodology",
      "Waterfall Model",
      "Risk Management",
      "Team Leadership",
      "Project Tools",
    ],
    prerequisites: [
      "Basic computer skills",
      "Interest in management or leadership",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Understand project management frameworks and methodologies",
      "Develop project plans, schedules, and budgets",
      "Manage project risks and stakeholders",
      "Use project management tools (e.g., Trello, MS Project)",
      "Lead teams and communicate effectively",
    ],
    format:
      "Part-time, in-person or online, with live instruction, group projects, and practical assignments.",
    modules: [
      {
        title: "Introduction to Project Management",
        description: "Overview of project management principles and roles",
        topics: [
          "What is Project Management?",
          "Project Life Cycle",
          "Roles & Responsibilities",
          "Project Constraints",
          "Success Factors",
        ],
      },
      {
        title: "Project Planning",
        description: "Developing project plans, schedules, and budgets",
        topics: [
          "Work Breakdown Structure",
          "Gantt Charts",
          "Resource Allocation",
          "Budgeting",
          "Milestones",
        ],
      },
      {
        title: "Agile and Waterfall Methodologies",
        description: "Comparing and applying Agile and Waterfall approaches",
        topics: [
          "Agile Principles",
          "Scrum Framework",
          "Waterfall Model",
          "Choosing the Right Methodology",
          "Hybrid Approaches",
        ],
      },
      {
        title: "Risk and Stakeholder Management",
        description: "Identifying and managing risks and stakeholders",
        topics: [
          "Risk Identification",
          "Risk Mitigation",
          "Stakeholder Analysis",
          "Communication Plans",
          "Issue Tracking",
        ],
      },
      {
        title: "Project Execution and Monitoring",
        description: "Executing, tracking, and controlling project progress",
        topics: [
          "Task Assignment",
          "Progress Tracking",
          "Change Management",
          "Quality Assurance",
          "Reporting",
        ],
      },
      {
        title: "Project Closing and Review",
        description: "Closing projects and capturing lessons learned",
        topics: [
          "Project Handover",
          "Documentation",
          "Post-Implementation Review",
          "Celebrating Success",
          "Continuous Improvement",
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design and Visual Communication",
    description:
      "Develop creative skills in graphic design, branding, and visual storytelling using industry-standard tools like Adobe Photoshop, Illustrator, and Canva.",
    image: "/images/graphics.jpeg",
    duration: "9 weeks",
    level: "Beginner to Intermediate",
    price: "₦175,000",
    startDate: "September 16, 2025",
    instructor: "Kingsley Olise",
    topics: [
      "Design Principles",
      "Branding",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Typography",
      "Color Theory",
      "Portfolio Development",
    ],
    prerequisites: [
      "No prior design experience required",
      "Interest in creativity and visual arts",
      "Own laptop with internet access",
    ],
    learningOutcomes: [
      "Apply design principles to create visually appealing graphics",
      "Use Adobe Photoshop, Illustrator, and Canva for design projects",
      "Develop branding materials and visual identities",
      "Create digital and print-ready assets",
      "Build a professional graphic design portfolio",
    ],
    format:
      "Part-time, in-person or online, with live instruction, hands-on projects, and portfolio reviews.",
    modules: [
      {
        title: "Introduction to Graphic Design",
        description: "Fundamentals of graphic design and visual communication",
        topics: [
          "History of Graphic Design",
          "Design Process",
          "Visual Communication",
          "Design Thinking",
          "Design Trends",
        ],
      },
      {
        title: "Design Principles and Elements",
        description: "Core principles and elements of effective design",
        topics: [
          "Balance & Alignment",
          "Contrast & Emphasis",
          "Repetition & Consistency",
          "Proximity & Space",
          "Hierarchy",
        ],
      },
      {
        title: "Typography and Color Theory",
        description: "Exploring typography and color for impactful designs",
        topics: [
          "Font Selection",
          "Type Pairing",
          "Color Schemes",
          "Color Psychology",
          "Accessibility",
        ],
      },
      {
        title: "Adobe Photoshop and Illustrator",
        description: "Hands-on training with Adobe design tools",
        topics: [
          "Photoshop Basics",
          "Photo Editing",
          "Illustrator Basics",
          "Vector Graphics",
          "Logo Design",
        ],
      },
      {
        title: "Branding and Visual Identity",
        description: "Creating brand assets and visual identities",
        topics: [
          "Logo Creation",
          "Brand Guidelines",
          "Business Cards",
          "Social Media Graphics",
          "Presentation Design",
        ],
      },
      {
        title: "Portfolio Development",
        description: "Building a professional graphic design portfolio",
        topics: [
          "Case Studies",
          "Portfolio Websites",
          "Presentation Skills",
          "Client Communication",
          "Freelancing Tips",
        ],
      },
    ],
  },
];

export const featuredCourses = allCourses.slice(0, 3);

// Team members data
export const teamMembers = [
  {
    id: 1,
    name: "Dr. Charles ",
    role: "Founder & CEO",
    image: "",
    bio: "Dr. Charles has over 15 years of experience in the tech industry and academia. He founded Birotojob Academy with a mission to make quality tech education accessible to everyone.",
  },
  {
    id: 2,
    name: "Mrs Claire Amuka",
    role: "Head of Training & Cybersecurity Tutor",
    image: "",
    bio: "With a PhD in Computer Science and 10 years of experience at leading tech companies, Claire is an AWS Certified Solutions Architect with extensive experience in cloud infrastructure and DevOps practices at scale.",
  },
  {
    id: 3,
    name: "Mrs Jane Roberts",
    role: "Human Resource Manager",
    image: "",
    bio: "Jane is a HR professional passionate about supporting employee growth and fostering a positive workplace culture. She assists with recruitment, onboarding, and day-to-day HR operations at Birotojob Academy.",
  },
  {
    id: 4,
    name: "Engr. Solomon",
    role: "Lead Instructor",
    image: "",
    bio: "Solomon has designed user experiences for Fortune 500 companies and startups alike. He brings real-world design challenges into the classroom.",
  },
  {
    id: 5,
    name: "Akpan Michael",
    role: "ICT Instructor",
    image: "",
    bio: "Michael is a certified Frorntend Developer with experience in web and mobile sector security. He ensures our cybersecurity curriculum meets industry standards.",
  },
  {
    id: 6,
    name: "Kingsley Olise",
    role: "Head of Design",
    image: "",
    bio: "Kingsley is a creative designer with a passion for visual storytelling. He has worked on numerous projects, from branding to video production, and is dedicated to helping students develop their design skills.",
  },
  {
    id: 7,
    name: "Glory Ijiobor",
    role: "Data Analyst Instructor",
    image: "",
    bio: "Glory is a data analyst with a strong background in statistics and data visualization. She has worked with various organizations to help them make data-driven decisions.",
  },
];

export const partners = [
  {
    id: 1,
    name: "ACTD-USA",
    logo: "/images/ACTD-Logo.jpg",
    website: "https://www.actd.us/",
  },
  {
    id: 2,
    name: "ITF",
    logo: "/images/ITF.jpeg",
    website: "https://www.itf.gov.ng/",
  },
];
