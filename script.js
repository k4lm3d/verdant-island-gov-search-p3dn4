======= ========================
======= MOCK DATA - Government Services Database
// ========================
const governmentData = [
  {
    id: 1,
    title: "Passport Renewal Application",
    description: "Renew your Verdant Island passport online. Processing takes 10-15 business days. Expedited service available for an additional fee.",
    category: "Civic",
    department: "Department of Immigration & Citizenship",
    url: "#",
    keywords: ["passport", "renewal", "travel", "citizenship", "immigration", "document", "expired"]
  },
  {
    id: 2,
    title: "New Passport Application",
    description: "Apply for a first-time Verdant Island passport. Requires proof of citizenship, photo ID, and two passport photos.",
    category: "Civic",
    department: "Department of Immigration & Citizenship",
    url: "#",
    keywords: ["passport", "new", "apply", "first time", "citizenship", "travel document"]
  },
  {
    id: 3,
    title: "Income Tax Filing Portal",
    description: "File your annual income tax return online. The tax year deadline is April 15th. Free e-filing available for eligible residents.",
    category: "Tax",
    department: "Revenue & Taxation Bureau",
    url: "#",
    keywords: ["tax", "filing", "income tax", "tax return", "revenue", "e-filing", "deadline", "annual"]
  },
  {
    id: 4,
    title: "Business Registration & Licensing",
    description: "Register a new business entity or renew an existing business license. Includes sole proprietorships, partnerships, and corporations.",
    category: "Business",
    department: "Ministry of Commerce & Trade",
    url: "#",
    keywords: ["business", "registration", "license", "company", "corporation", "sole proprietorship", "trade", "commerce"]
  },
  {
    id: 5,
    title: "Driver's License Application",
    description: "Apply for a new driver's license, renew an existing one, or convert an international license. Written and road tests required for new applicants.",
    category: "Transport",
    department: "Department of Motor Vehicles",
    url: "#",
    keywords: ["driver", "license", "driving", "motor vehicle", "road test", "car", "permit", "renew"]
  },
  {
    id: 6,
    title: "Vehicle Registration",
    description: "Register a new or used vehicle, transfer ownership, or renew your annual vehicle registration. Emissions testing required.",
    category: "Transport",
    department: "Department of Motor Vehicles",
    url: "#",
    keywords: ["vehicle", "registration", "car", "motor", "transfer", "ownership", "emissions", "renew"]
  },
  {
    id: 7,
    title: "National Health Insurance Enrollment",
    description: "Enroll in Verdant Island's universal healthcare program. Coverage includes hospital visits, prescriptions, dental, and mental health services.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    url: "#",
    keywords: ["health", "insurance", "medical", "healthcare", "hospital", "prescription", "dental", "enrollment", "coverage"]
  },
  {
    id: 8,
    title: "Public Hospital Appointment Booking",
    description: "Schedule appointments at any of Verdant Island's 8 public hospitals. Same-day and next-day appointments available for urgent care.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    url: "#",
    keywords: ["hospital", "appointment", "doctor", "medical", "booking", "urgent care", "healthcare"]
  },
  {
    id: 9,
    title: "Birth Certificate Request",
    description: "Request a certified copy of a birth certificate. Available for births registered on Verdant Island from 1962 onwards.",
    category: "Civic",
    department: "Office of the Registrar General",
    url: "#",
    keywords: ["birth", "certificate", "vital records", "registrar", "born", "identity"]
  },
  {
    id: 10,
    title: "Marriage License Application",
    description: "Apply for a marriage license. Both parties must appear in person. License valid for 90 days from date of issuance.",
    category: "Civic",
    department: "Office of the Registrar General",
    url: "#",
    keywords: ["marriage", "license", "wedding", "register", "spouse", "matrimony", "certificate"]
  },
  {
    id: 11,
    title: "Property Tax Payment",
    description: "Pay your annual property tax online. Payment plans available for properties valued over $500,000. Late penalties apply after June 30th.",
    category: "Tax",
    department: "Revenue & Taxation Bureau",
    url: "#",
    keywords: ["property", "tax", "payment", "real estate", "land", "assessment", "annual"]
  },
  {
    id: 12,
    title: "Building Permit Application",
    description: "Apply for residential or commercial building permits. Plans must be certified by a licensed architect. Processing time: 20-30 business days.",
    category: "Infrastructure",
    department: "Department of Planning & Infrastructure",
    url: "#",
    keywords: ["building", "permit", "construction", "planning", "infrastructure", "architect", "renovation"]
  },
  {
    id: 13,
    title: "Public School Enrollment",
    description: "Enroll your child in Verdant Island's public school system. Open enrollment period is January 15 - March 1 each year.",
    category: "Education",
    department: "Ministry of Education",
    url: "#",
    keywords: ["school", "enrollment", "education", "public school", "student", "children", "elementary", "secondary"]
  },
  {
    id: 14,
    title: "University Scholarship Application",
    description: "Apply for the Verdant Island National Scholarship. Covers full tuition at approved institutions for qualifying students with a GPA of 3.5+.",
    category: "Education",
    department: "Ministry of Education",
    url: "#",
    keywords: ["scholarship", "university", "education", "tuition", "student", "financial aid", "grant"]
  },
  {
    id: 15,
    title: "Environmental Impact Assessment",
    description: "Submit projects for environmental review. Required for all developments exceeding 2 acres or located within protected zones.",
    category: "Environment",
    department: "Department of Environmental Conservation",
    url: "#",
    keywords: ["environment", "assessment", "impact", "conservation", "ecology", "protected", "development", "green"]
  },
  {
    id: 16,
    title: "Fishing License & Permits",
    description: "Obtain recreational or commercial fishing licenses. Quota-based permits available for sustainable harvesting in island waters.",
    category: "Environment",
    department: "Department of Marine Resources",
    url: "#",
    keywords: ["fishing", "license", "marine", "permit", "ocean", "harvest", "recreational", "commercial"]
  },
  {
    id: 17,
    title: "Social Welfare Benefits Application",
    description: "Apply for unemployment assistance, disability benefits, or elderly support programs. Means-tested benefits for qualifying residents.",
    category: "Social",
    department: "Department of Social Services",
    url: "#",
    keywords: ["welfare", "social", "benefits", "unemployment", "disability", "elderly", "assistance", "support"]
  },
  {
    id: 18,
    title: "Public Housing Application",
    description: "Apply for government-subsidized housing. Priority given to low-income families, seniors, and persons with disabilities.",
    category: "Housing",
    department: "Housing Development Authority",
    url: "#",
    keywords: ["housing", "public", "rent", "subsidized", "apartment", "low income", "affordable", "accommodation"]
  },
  {
    id: 19,
    title: "Police Clearance Certificate",
    description: "Request a police background check or clearance certificate. Required for employment, visa applications, and adoption proceedings.",
    category: "Safety",
    department: "Verdant Island Police Service",
    url: "#",
    keywords: ["police", "clearance", "background", "check", "certificate", "criminal record", "vetting"]
  },
  {
    id: 20,
    title: "Emergency Services & Disaster Preparedness",
    description: "Access emergency alerts, evacuation routes, and disaster preparedness resources. Register for SMS and email emergency notifications.",
    category: "Safety",
    department: "National Emergency Management Agency",
    url: "#",
    keywords: ["emergency", "disaster", "safety", "evacuation", "alert", "hurricane", "tsunami", "preparedness"]
  },
  {
    id: 21,
    title: "Employment & Job Seeker Services",
    description: "Browse government job openings, career counseling, and vocational training programs. Free resume workshops available monthly.",
    category: "Employment",
    department: "Department of Labor & Employment",
    url: "#",
    keywords: ["employment", "job", "career", "work", "vacancy", "training", "vocational", "labor"]
  },
  {
    id: 22,
    title: "Tourism Visitor Visa Application",
    description: "Apply for a tourist visa to visit Verdant Island. Visa-free entry for 45 countries. Processing time: 5-7 business days.",
    category: "Tourism",
    department: "Verdant Island Tourism Authority",
    url: "#",
    keywords: ["tourism", "visa", "visitor", "travel", "vacation", "holiday", "tourist", "entry"]
  },
  {
    id: 23,
    title: "Legal Aid Services",
    description: "Free legal assistance for low-income residents in civil matters. Staff attorneys available for family law, housing disputes, and immigration cases.",
    category: "Legal",
    department: "Legal Aid Commission",
    url: "#",
    keywords: ["legal", "law", "attorney", "lawyer", "court", "justice", "legal aid", "representation"]
  },
  {
    id: 24,
    title: "Child Care Subsidy Program",
    description: "Apply for government subsidies for licensed child care. Available for families with children under 12 and income below $45,000.",
    category: "Family",
    department: "Department of Family Services",
    url: "#",
    keywords: ["child", "care", "daycare", "subsidy", "family", "children", "parenting", "childcare"]
  },
  {
    id: 25,
    title: "Water & Utilities Connection",
    description: "Apply for water, electricity, and waste management services. Online billing and payment portal available 24/7.",
    category: "Infrastructure",
    department: "Verdant Island Utilities Corporation",
    url: "#",
    keywords: ["water", "utilities", "electricity", "connection", "billing", "payment", "power", "waste"]
  },
  {
    id: 26,
    title: "Senior Citizens Discount Card",
    description: "Residents 65+ are eligible for a Senior Citizens Card providing discounts on public transport, healthcare, and government services.",
    category: "Social",
    department: "Department of Senior Citizens Affairs",
    url: "#",
    keywords: ["senior", "elderly", "discount", "card", "benefits", "aging", "retirement", "pension"]
  },
  {
    id: 27,
    title: "Import/Export License",
    description: "Apply for permits to import or export goods to and from Verdant Island. Custom duties and trade regulations apply.",
    category: "Business",
    department: "Customs & Border Protection Service",
    url: "#",
    keywords: ["import", "export", "customs", "trade", "license", "permit", "goods", "border"]
  },
  {
    id: 28,
    title: "Land Title & Registry Search",
    description: "Search official land records, verify property ownership, and request certified copies of land titles and survey plans.",
    category: "Housing",
    department: "Lands & Surveys Department",
    url: "#",
    keywords: ["land", "title", "registry", "property", "ownership", "survey", "real estate", "deed"]
  },
  {
    id: 29,
    title: "COVID-19 & Vaccination Records",
    description: "Access your vaccination records, download certificates, and view current public health guidelines and travel requirements.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    url: "#",
    keywords: ["covid", "vaccination", "vaccine", "health", "pandemic", "immunization", "certificate", "records"]
  },
  {
    id: 30,
    title: "Election & Voter Registration",
    description: "Register to vote, find your polling station, view upcoming elections, and check your voter status online.",
    category: "Civic",
    department: "Electoral Commission of Verdant Island",
    url: "#",
    keywords: ["election", "vote", "voter", "registration", "polling", "democracy", "ballot", "candidate"]
  }
];

// ========================
// CATEGORY ICON MAPPING
// ========================
const categoryIcons = {
  "Health": "heart-pulse",
  "Transport": "car",
  "Business": "briefcase",
  "Tax": "receipt",
  "Education": "graduation-cap",
  "Environment": "trees",
  "Housing": "home",
  "Legal": "scale",
  "Employment": "briefcase",
  "Civic": "landmark",
  "Infrastructure": "building-2",
  "Safety": "shield-check",
  "Family": "baby",
  "Tourism": "plane",
  "Social": "hand-heart"
};

const categoryBadge = {
  "Health": "badge-health",
  "Transport": "badge-transport",
  "Business": "badge-business",
  "Tax": "badge-tax",
  "Education": "badge-education",
  "Environment": "badge-environment",
  "Housing": "badge-housing",
  "Legal": "badge-legal",
  "Employment": "badge-employment",
  "Civic": "badge-civic",
  "Infrastructure": "badge-infrastructure",
  "Safety": "badge-safety",
  "Family": "badge-family",
  "Tourism": "badge-tourism",
  "Social": "badge-social"
};

// ========================
// STATE
// ========================
let mobileMenuOpen = false;
let currentView = 'home';

// ========================
// NAVBAR SCROLL EFFECT
// ========================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ========================
// MOBILE MENU
// ========================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  
  mobileMenuOpen = !mobileMenuOpen;
  
  if (mobileMenuOpen) {
    menu.classList.remove('hidden');
    requestAnimationFrame(() => {
      menu.classList.add('active');
    });
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menu.classList.remove('active');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 300);
  }
}

// ========================
// SEARCH FUNCTIONALITY
// ========================
function performSearch(query) {
  query = query.trim().toLowerCase();
  if (!query) return [];
  
  const terms = query.split(/\s+/).filter(t => t.length > 0);
  
  const results = governmentData.map(item => {
    let score = 0;
    
    // Check title match (highest weight)
    const titleLower = item.title.toLowerCase();
    terms.forEach(term => {
      if (titleLower.includes(term)) score += 10;
      // Exact title match bonus
      if (titleLower === query) score += 50;
    });
    
    // Check keywords match
    terms.forEach(term => {
      item.keywords.forEach(keyword => {
        if (keyword.includes(term)) score += 5;
        if (keyword === term) score += 8;
      });
    });
    
    // Check category
    terms.forEach(term => {
      if (item.category.toLowerCase().includes(term)) score += 6;
    });
    
    // Check description
    const descLower = item.description.toLowerCase();
    terms.forEach(term => {
      if (descLower.includes(term)) score += 3;
    });
    
    // Check department
    const deptLower = item.department.toLowerCase();
    terms.forEach(term => {
      if (deptLower.includes(term)) score += 2;
    });
    
    return { ...item, score };
  }).filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
  
  return results;
}

function highlightText(text, query) {
  if (!query) return text;
  const terms = query.trim().split(/\s+/).filter(t => t.length > 0);
  let result = text;
  terms.forEach(term => {
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    result = result.replace(regex, '<mark class="bg-verdant-500/30 text-white rounded px-0.5">$1</mark>');
  });
  return result;
}

function renderResults(results, query) {
  const resultsList = document.getElementById('results-list');
  const noResults = document.getElementById('no-results');
  const resultsCount = document.getElementById('results-count');
  const resultsTitle = document.getElementById('results-title');
  
  resultsTitle.textContent = `Results for "${query}"`;
  
  if (results.length === 0) {
    resultsList.innerHTML = '';
    noResults.classList.remove('hidden');
    resultsCount.textContent = 'No results found';
    return;
  }
  
  noResults.classList.add('hidden');
  const plural = results.length === 1 ? 'service' : 'services';
  resultsCount.textContent = `${results.length} ${plural} found`;
  
  resultsList.innerHTML = results.map((item, index) => {
    const icon = (typeof getCategoryIcon === 'function') ? getCategoryIcon(item.category) : (categoryIcons[item.category] || 'file-text');
    const badge = categoryBadge[item.category] || 'badge-civic';
    const itemUrl = item.url || `item.html?id=${item.id}`;
    
    return `
      <a href="${itemUrl}" class="result-card group relative block bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-5 hover:bg-white/[0.06] hover:border-verdant-500/20 transition-all duration-300 cursor-pointer" style="animation-delay: ${index * 60}ms">
        <div class="flex items-start gap-3 sm:gap-4">
          <div class="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-verdant-500/20 transition-colors duration-300">
            <i data-lucide="${icon}" class="w-5 h-5 text-white/40 group-hover:text-verdant-400 transition-colors duration-300"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1.5">
              <h3 class="text-sm sm:text-base font-semibold text-white group-hover:text-verdant-300 transition-colors duration-200 leading-snug">
                ${highlightText(item.title, query)}
              </h3>
              <span class="inline-flex items-center ${badge} text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full border">
                ${item.category}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-white/35 leading-relaxed mb-2 line-clamp-2">
              ${highlightText(item.description, query)}
            </p>
            <div class="flex items-center gap-1.5 text-white/25">
              <i data-lucide="building-2" class="w-3 h-3"></i>
              <span class="text-[11px] sm:text-xs">${item.department}</span>
            </div>
          </div>
          <div class="flex-shrink-0 self-center text-white/20 group-hover:text-verdant-400 transition-colors duration-200">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </div>
        </div>
      </a>
    `;
  }).join('');
  
  // Re-init Lucide icons for dynamically added elements
  lucide.createIcons();
}

// ========================
// VIEW SWITCHING
// ========================
function showHome() {
  currentView = 'home';
  const homeView = document.getElementById('home-view');
  const resultsView = document.getElementById('results-view');
  
  homeView.classList.remove('hidden');
  homeView.style.opacity = '0';
  resultsView.style.opacity = '0';
  
  setTimeout(() => {
    resultsView.classList.add('hidden');
    homeView.style.opacity = '1';
  }, 150);
}

function showResults(query) {
  currentView = 'results';
  const homeView = document.getElementById('home-view');
  const resultsView = document.getElementById('results-view');
  const searchInputResults = document.getElementById('search-input-results');
  
  searchInputResults.value = query;
  
  const results = performSearch(query);
  renderResults(results, query);
  
  homeView.style.opacity = '0';
  
  setTimeout(() => {
    homeView.classList.add('hidden');
    resultsView.classList.remove('hidden');
    resultsView.style.opacity = '0';
    
    requestAnimationFrame(() => {
      resultsView.style.opacity = '1';
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 150);
}

function handleSearch(event) {
  event.preventDefault();
  
  let input;
  if (currentView === 'home') {
    input = document.getElementById('search-input');
  } else {
    input = document.getElementById('search-input-results');
  }
  
  const query = input.value.trim();
  if (query) {
    showResults(query);
  }
}

function quickSearch(query) {
  document.getElementById('search-input').value = query;
  showResults(query);
}

function goHome(event) {
  event.preventDefault();
  document.getElementById('search-input').value = '';
  showHome();
}

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    // If on results view, go home first
    if (currentView === 'results') {
      showHome();
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ========================
// KEYBOARD SHORTCUTS
// ========================
document.addEventListener('keydown', (e) => {
  // Press '/' to focus search
  if (e.key === '/' && currentView === 'home' && !e.ctrlKey && !e.metaKey) {
    const activeEl = document.activeElement;
    if (activeEl.tagName !== 'INPUT' && activeEl.tagName !== 'TEXTAREA') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
  }
  
  // Escape to go home
  if (e.key === 'Escape' && currentView === 'results') {
    goHome(e);
  }
});

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  handleNavbarScroll();
});