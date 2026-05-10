// ========================
// GOVERNMENT SERVICES DATA (Extended)
// ========================
const governmentData = [
  {
    id: 1,
    title: "Passport Renewal Application",
    description: "Renew your Verdant Island passport online. Processing takes 10-15 business days. Expedited service available for an additional fee.",
    category: "Civic",
    department: "Department of Immigration & Citizenship",
    departmentId: 1,
    url: "item.html?id=1",
    keywords: ["passport", "renewal", "travel", "citizenship", "immigration", "document", "expired"],
    requirements: [
      "Completed passport renewal application form",
      "Current or expired passport",
      "Two recent passport-sized photographs (white background)",
      "Proof of address (utility bill or bank statement)",
      "Application fee payment receipt"
    ],
    process: [
      { step: 1, title: "Complete Application", description: "Fill out the online renewal form with your personal details and passport information." },
      { step: 2, title: "Upload Documents", description: "Upload scanned copies of your current passport, photographs, and proof of address." },
      { step: 3, title: "Payment", description: "Pay the renewal fee online via credit card, bank transfer, or government payment voucher." },
      { step: 4, title: "Processing", description: "Your application will be reviewed within 10-15 business days. You'll receive email updates." },
      { step: 5, title: "Collection", description: "Collect your new passport at the nearest Immigration office or opt for mail delivery." }
    ],
    fees: "Standard: $75 | Expedited (5 days): $150 | Senior (65+): $40",
    processingTime: "10-15 business days (Standard) | 5 business days (Expedited)",
    faq: [
      { q: "Can I renew my passport if it expired more than 5 years ago?", a: "Yes, but you will need to submit a new passport application instead of a renewal, which requires an in-person appointment." },
      { q: "Can I travel while my renewal is being processed?", a: "No, you must surrender your current passport during the renewal process. Consider expedited service if you have upcoming travel." },
      { q: "What if my passport is lost or damaged?", a: "You'll need to file a lost/damaged passport report and apply for a replacement, which has a different process and fee." }
    ],
    relatedIds: [2, 22, 9]
  },
  {
    id: 2,
    title: "New Passport Application",
    description: "Apply for a first-time Verdant Island passport. Requires proof of citizenship, photo ID, and two passport photos.",
    category: "Civic",
    department: "Department of Immigration & Citizenship",
    departmentId: 1,
    url: "item.html?id=2",
    keywords: ["passport", "new", "apply", "first time", "citizenship", "travel document"],
    requirements: [
      "Completed new passport application form",
      "Original birth certificate or citizenship certificate",
      "Valid government-issued photo ID",
      "Two passport-sized photographs",
      "Proof of address",
      "Application fee payment receipt",
      "In-person appointment confirmation"
    ],
    process: [
      { step: 1, title: "Book Appointment", description: "Schedule an in-person appointment at your nearest Immigration office." },
      { step: 2, title: "Prepare Documents", description: "Gather all required original documents and photocopies." },
      { step: 3, title: "Attend Appointment", description: "Present your documents, have your photo taken, and provide biometrics." },
      { step: 4, title: "Payment", description: "Pay the application fee at the office or online." },
      { step: 5, title: "Processing & Collection", description: "Processing takes 15-20 business days. Collect at the office or via mail." }
    ],
    fees: "Adult (16+): $100 | Child (under 16): $50 | Senior (65+): $50",
    processingTime: "15-20 business days",
    faq: [
      { q: "Do I need to apply in person?", a: "Yes, first-time applicants must appear in person for identity verification and biometrics." },
      { q: "What citizenship documents are accepted?", a: "Original birth certificate, citizenship certificate, or naturalization documents issued by Verdant Island." }
    ],
    relatedIds: [1, 9, 10]
  },
  {
    id: 3,
    title: "Income Tax Filing Portal",
    description: "File your annual income tax return online. The tax year deadline is April 15th. Free e-filing available for eligible residents.",
    category: "Tax",
    department: "Revenue & Taxation Bureau",
    departmentId: 2,
    url: "item.html?id=3",
    keywords: ["tax", "filing", "income tax", "tax return", "revenue", "e-filing", "deadline", "annual"],
    requirements: [
      "Verdant Island Tax Identification Number (TIN)",
      "All income statements (W-2, 1099, etc.)",
      "Deduction receipts and records",
      "Bank account details for refund deposit",
      "Previous year's tax return (if applicable)"
    ],
    process: [
      { step: 1, title: "Create Account", description: "Register or log in to the e-Filing portal with your TIN." },
      { step: 2, title: "Enter Income", description: "Input all sources of income including employment, investments, and rental income." },
      { step: 3, title: "Claim Deductions", description: "Review eligible deductions and tax credits." },
      { step: 4, title: "Review & Submit", description: "Verify all information and submit your return before April 15th." },
      { step: 5, title: "Payment or Refund", description: "Pay any amount owed or receive your refund via direct deposit." }
    ],
    fees: "Free e-filing for income under $50,000 | Standard fee: $25",
    processingTime: "Refunds: 3-6 weeks | Processing: 8-12 weeks for complex returns",
    faq: [
      { q: "What is the filing deadline?", a: "April 15th each year. Extensions can be filed for an additional 3 months." },
      { q: "What if I can't pay the full amount?", a: "Payment plans are available. Contact the Revenue Bureau to set up installment payments." }
    ],
    relatedIds: [11, 4, 14]
  },
  {
    id: 4,
    title: "Business Registration & Licensing",
    description: "Register a new business entity or renew an existing business license. Includes sole proprietorships, partnerships, and corporations.",
    category: "Business",
    department: "Ministry of Commerce & Trade",
    departmentId: 3,
    url: "item.html?id=4",
    keywords: ["business", "registration", "license", "company", "corporation", "sole proprietorship", "trade", "commerce"],
    requirements: [
      "Completed business registration form",
      "Proposed business name (3 alternatives)",
      "Business address proof",
      "Identification documents of all directors/partners",
      "Memorandum & Articles of Association (for corporations)",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Name Search", description: "Search and reserve your proposed business name." },
      { step: 2, title: "Submit Application", description: "Complete the registration form and upload all required documents." },
      { step: 3, title: "Review & Approval", description: "The Ministry reviews your application within 7-10 business days." },
      { step: 4, title: "Receive License", description: "Upon approval, receive your Business License Certificate." }
    ],
    fees: "Sole Proprietorship: $150 | Partnership: $250 | Corporation: $500 | Annual Renewal: $100",
    processingTime: "7-10 business days",
    faq: [
      { q: "Can a non-resident register a business?", a: "Yes, non-residents can register a business but must have a local registered agent." },
      { q: "Do I need to renew my license annually?", a: "Yes, all business licenses must be renewed by January 31st each year." }
    ],
    relatedIds: [27, 3, 12]
  },
  {
    id: 5,
    title: "Driver's License Application",
    description: "Apply for a new driver's license, renew an existing one, or convert an international license. Written and road tests required for new applicants.",
    category: "Transport",
    department: "Department of Motor Vehicles",
    departmentId: 4,
    url: "item.html?id=5",
    keywords: ["driver", "license", "driving", "motor vehicle", "road test", "car", "permit", "renew"],
    requirements: [
      "Proof of identity (passport or national ID)",
      "Proof of address",
      "Medical fitness certificate",
      "Two passport-sized photographs",
      "Application fee payment",
      "For new drivers: Completion of driver's education course"
    ],
    process: [
      { step: 1, title: "Learner's Permit", description: "Pass the written test to obtain a learner's permit (valid for 6 months)." },
      { step: 2, title: "Practice Driving", description: "Complete at least 40 hours of supervised driving practice." },
      { step: 3, title: "Road Test", description: "Schedule and pass the road skills test." },
      { step: 4, title: "Receive License", description: "Upon passing, your license will be issued within 5 business days." }
    ],
    fees: "Learner's Permit: $25 | Full License: $75 | Renewal: $50 | International Conversion: $100",
    processingTime: "License issued within 5 business days of passing road test",
    faq: [
      { q: "What age can I apply for a learner's permit?", a: "You must be at least 16 years old. Applicants under 18 require parental consent." },
      { q: "Can I convert my foreign license?", a: "Yes, license holders from 42 approved countries can convert without a road test." }
    ],
    relatedIds: [6, 5, 9]
  },
  {
    id: 6,
    title: "Vehicle Registration",
    description: "Register a new or used vehicle, transfer ownership, or renew your annual vehicle registration. Emissions testing required.",
    category: "Transport",
    department: "Department of Motor Vehicles",
    departmentId: 4,
    url: "item.html?id=6",
    keywords: ["vehicle", "registration", "car", "motor", "transfer", "ownership", "emissions", "renew"],
    requirements: [
      "Certificate of title or previous registration",
      "Valid driver's license",
      "Proof of insurance",
      "Emissions test certificate",
      "Vehicle inspection report",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Emissions Test", description: "Have your vehicle tested at an authorized emissions testing center." },
      { step: 2, title: "Vehicle Inspection", description: "Complete a safety inspection at an approved facility." },
      { step: 3, title: "Submit Application", description: "Bring all documents to the DMV or submit online." },
      { step: 4, title: "Receive Plates & Sticker", description: "Registration stickers and plates issued upon approval." }
    ],
    fees: "New Registration: $120 | Annual Renewal: $80 | Transfer: $60 | Duplicate: $30",
    processingTime: "Same day for in-person | 5-7 business days online",
    faq: [
      { q: "How often must I renew my registration?", a: "Vehicle registration must be renewed annually. Renewal notices are sent 60 days before expiry." },
      { q: "Are electric vehicles exempt from emissions testing?", a: "Yes, fully electric vehicles are exempt from emissions testing requirements." }
    ],
    relatedIds: [5, 6, 25]
  },
  {
    id: 7,
    title: "National Health Insurance Enrollment",
    description: "Enroll in Verdant Island's universal healthcare program. Coverage includes hospital visits, prescriptions, dental, and mental health services.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    departmentId: 5,
    url: "item.html?id=7",
    keywords: ["health", "insurance", "medical", "healthcare", "hospital", "prescription", "dental", "enrollment", "coverage"],
    requirements: [
      "Proof of Verdant Island residency",
      "Valid national ID or passport",
      "Proof of income (for premium calculation)",
      "Completed enrollment form",
      "Two passport-sized photographs"
    ],
    process: [
      { step: 1, title: "Check Eligibility", description: "Verify you meet the residency requirements for enrollment." },
      { step: 2, title: "Choose Plan", description: "Select from Basic, Standard, or Premium coverage tiers." },
      { step: 3, title: "Submit Application", description: "Complete enrollment online or at any Health Ministry office." },
      { step: 4, title: "Receive Card", description: "Your National Health Insurance card will be mailed within 10 business days." }
    ],
    fees: "Basic: Free (income under $30K) | Standard: $45/month | Premium: $120/month",
    processingTime: "Enrollment confirmed within 3 business days | Card delivery: 10 business days",
    faq: [
      { q: "Is enrollment mandatory?", a: "Yes, all residents must be enrolled in at least the Basic tier." },
      { q: "Can I upgrade my plan at any time?", a: "Plan changes can be made during the annual open enrollment period or within 30 days of a qualifying life event." }
    ],
    relatedIds: [8, 29, 24]
  },
  {
    id: 8,
    title: "Public Hospital Appointment Booking",
    description: "Schedule appointments at any of Verdant Island's 8 public hospitals. Same-day and next-day appointments available for urgent care.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    departmentId: 5,
    url: "item.html?id=8",
    keywords: ["hospital", "appointment", "doctor", "medical", "booking", "urgent care", "healthcare"],
    requirements: [
      "National Health Insurance card",
      "Valid ID",
      "Referral letter (for specialist appointments)",
      "List of current medications"
    ],
    process: [
      { step: 1, title: "Search Provider", description: "Find available doctors and time slots at your preferred hospital." },
      { step: 2, title: "Book Appointment", description: "Select your preferred date and time, and confirm your booking." },
      { step: 3, title: "Receive Confirmation", description: "Get an SMS and email confirmation with appointment details." },
      { step: 4, title: "Attend Visit", description: "Arrive 15 minutes early with your health card and ID." }
    ],
    fees: "With NHI: $5 copay | Without NHI: Full consultation fee applies",
    processingTime: "Same-day booking available for urgent care | Next-day for general consultations",
    faq: [
      { q: "Can I cancel or reschedule?", a: "Yes, please cancel at least 24 hours before your appointment to avoid a no-show fee." },
      { q: "What if I need urgent care?", a: "Same-day urgent care appointments are available at all hospitals. Walk-ins also accepted." }
    ],
    relatedIds: [7, 29, 9]
  },
  {
    id: 9,
    title: "Birth Certificate Request",
    description: "Request a certified copy of a birth certificate. Available for births registered on Verdant Island from 1962 onwards.",
    category: "Civic",
    department: "Office of the Registrar General",
    departmentId: 6,
    url: "item.html?id=9",
    keywords: ["birth", "certificate", "vital records", "registrar", "born", "identity"],
    requirements: [
      "Completed application form",
      "Valid photo ID of the applicant",
      "Proof of relationship (if requesting for someone else)",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Complete Form", description: "Fill out the birth certificate request form online or in person." },
      { step: 2, title: "Submit & Pay", description: "Submit your application and pay the fee." },
      { step: 3, title: "Verification", description: "The Registrar's office verifies the records (1-3 business days)." },
      { step: 4, title: "Collection", description: "Collect in person or receive via mail." }
    ],
    fees: "Standard: $15 | Certified Copy: $25 | Expedited: $40",
    processingTime: "Standard: 3-5 business days | Expedited: 1-2 business days",
    faq: [
      { q: "Can I request a birth certificate for someone else?", a: "Only immediate family members or legal guardians can request certificates for others with proof of relationship." },
      { q: "Are records available before 1962?", a: "Pre-1962 records require a special archives request. Contact the Registrar General for assistance." }
    ],
    relatedIds: [10, 1, 2]
  },
  {
    id: 10,
    title: "Marriage License Application",
    description: "Apply for a marriage license. Both parties must appear in person. License valid for 90 days from date of issuance.",
    category: "Civic",
    department: "Office of the Registrar General",
    departmentId: 6,
    url: "item.html?id=10",
    keywords: ["marriage", "license", "wedding", "register", "spouse", "matrimony", "certificate"],
    requirements: [
      "Both parties must appear in person",
      "Valid photo ID for each party",
      "Birth certificates",
      "Divorce decree (if previously married)",
      "Death certificate of former spouse (if widowed)",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Schedule Appointment", description: "Book an appointment at the Registrar's office for both parties." },
      { step: 2, title: "In-Person Application", description: "Both parties present their documents and complete the application." },
      { step: 3, title: "Waiting Period", description: "A mandatory 3-day waiting period applies before the license is issued." },
      { step: 4, title: "Receive License", description: "Collect your marriage license after the waiting period." }
    ],
    fees: "Marriage License: $50 | Certified Marriage Certificate: $25",
    processingTime: "3-day mandatory waiting period after application",
    faq: [
      { q: "Can we get married the same day?", a: "No, there is a mandatory 3-day waiting period after applying for the license." },
      { q: "Is a blood test required?", a: "No, Verdant Island does not require blood tests for marriage license applicants." }
    ],
    relatedIds: [9, 10, 23]
  },
  {
    id: 11,
    title: "Property Tax Payment",
    description: "Pay your annual property tax online. Payment plans available for properties valued over $500,000. Late penalties apply after June 30th.",
    category: "Tax",
    department: "Revenue & Taxation Bureau",
    departmentId: 2,
    url: "item.html?id=11",
    keywords: ["property", "tax", "payment", "real estate", "land", "assessment", "annual"],
    requirements: [
      "Property Tax Assessment Notice",
      "Property Identification Number (PIN)",
      "Payment method (credit card, bank transfer, or check)"
    ],
    process: [
      { step: 1, title: "View Assessment", description: "Review your property assessment and tax amount online." },
      { step: 2, title: "Calculate Payment", description: "Verify the amount due, including any discounts or penalties." },
      { step: 3, title: "Make Payment", description: "Pay online, by mail, or in person at the Revenue office." },
      { step: 4, title: "Receive Receipt", description: "A payment receipt and updated balance will be available in your account." }
    ],
    fees: "Early payment discount: 5% (before March 31) | Late penalty: 1.5% per month",
    processingTime: "Online payments: Instant | Mail-in: 5-7 business days",
    faq: [
      { q: "Can I set up a payment plan?", a: "Yes, payment plans are available for properties assessed over $500,000. Apply through the Revenue portal." },
      { q: "What happens if I don't pay?", a: "Late penalties of 1.5% per month apply. Properties with 2+ years of unpaid taxes may be subject to tax lien sale." }
    ],
    relatedIds: [3, 28, 12]
  },
  {
    id: 12,
    title: "Building Permit Application",
    description: "Apply for residential or commercial building permits. Plans must be certified by a licensed architect. Processing time: 20-30 business days.",
    category: "Infrastructure",
    department: "Department of Planning & Infrastructure",
    departmentId: 7,
    url: "item.html?id=12",
    keywords: ["building", "permit", "construction", "planning", "infrastructure", "architect", "renovation"],
    requirements: [
      "Completed building permit application form",
      "Certified architectural plans (3 copies)",
      "Structural engineering report",
      "Environmental clearance (if applicable)",
      "Proof of land ownership or lease",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Prepare Plans", description: "Have a licensed architect prepare and certify your building plans." },
      { step: 2, title: "Submit Application", description: "Submit your application with all required documents and fees." },
      { step: 3, title: "Plan Review", description: "The Planning Department reviews plans for compliance with building codes." },
      { step: 4, title: "Inspections", description: "Schedule required inspections during construction phases." },
      { step: 5, title: "Certificate of Occupancy", description: "Final inspection and issuance of Certificate of Occupancy upon completion." }
    ],
    fees: "Residential: $200 + $0.50/sq ft | Commercial: $500 + $1.00/sq ft",
    processingTime: "20-30 business days for initial review",
    faq: [
      { q: "Do I need a permit for minor renovations?", a: "Permits are required for structural changes, electrical, and plumbing work. Cosmetic changes like painting don't require permits." },
      { q: "Can I start construction before the permit is approved?", a: "No. Starting construction without an approved permit will result in stop-work orders and fines." }
    ],
    relatedIds: [25, 4, 15]
  },
  {
    id: 13,
    title: "Public School Enrollment",
    description: "Enroll your child in Verdant Island's public school system. Open enrollment period is January 15 - March 1 each year.",
    category: "Education",
    department: "Ministry of Education",
    departmentId: 8,
    url: "item.html?id=13",
    keywords: ["school", "enrollment", "education", "public school", "student", "children", "elementary", "secondary"],
    requirements: [
      "Child's birth certificate",
      "Immunization records",
      "Proof of address within the school district",
      "Parent/guardian ID",
      "Previous school records (if transferring)"
    ],
    process: [
      { step: 1, title: "Check Zone", description: "Determine your zoned school based on your residential address." },
      { step: 2, title: "Gather Documents", description: "Prepare all required enrollment documents." },
      { step: 3, title: "Apply Online", description: "Submit your enrollment application during the open enrollment period." },
      { step: 4, title: "Confirmation", description: "Receive school assignment and enrollment confirmation by April." }
    ],
    fees: "Free for all Verdant Island residents",
    processingTime: "Applications processed within 4-6 weeks of submission",
    faq: [
      { q: "Can I choose a school outside my zone?", a: "Out-of-zone applications are accepted during open enrollment but subject to availability." },
      { q: "What if I miss the enrollment period?", a: "Late enrollments are accepted for new residents with proof of recent move." }
    ],
    relatedIds: [14, 7, 24]
  },
  {
    id: 14,
    title: "University Scholarship Application",
    description: "Apply for the Verdant Island National Scholarship. Covers full tuition at approved institutions for qualifying students with a GPA of 3.5+.",
    category: "Education",
    department: "Ministry of Education",
    departmentId: 8,
    url: "item.html?id=14",
    keywords: ["scholarship", "university", "education", "tuition", "student", "financial aid", "grant"],
    requirements: [
      "Verdant Island citizenship or permanent residency",
      "Minimum GPA of 3.5",
      "Letter of acceptance from an accredited institution",
      "Two reference letters",
      "Personal statement (500 words)",
      "Family income verification"
    ],
    process: [
      { step: 1, title: "Check Eligibility", description: "Verify you meet the academic and residency requirements." },
      { step: 2, title: "Prepare Application", description: "Gather transcripts, references, and your personal statement." },
      { step: 3, title: "Submit by Deadline", description: "Applications close March 31st for the following academic year." },
      { step: 4, title: "Interview", description: "Shortlisted candidates are invited for an interview in May." },
      { step: 5, title: "Award Notification", description: "Successful applicants are notified by June 15th." }
    ],
    fees: "No application fee",
    processingTime: "3-4 months from application deadline to award notification",
    faq: [
      { q: "Can I apply if I'm already in university?", a: "Yes, current university students can apply for scholarships for their remaining years of study." },
      { q: "Does the scholarship cover living expenses?", a: "The National Scholarship covers tuition only. A separate bursary is available for living costs." }
    ],
    relatedIds: [13, 21, 7]
  },
  {
    id: 15,
    title: "Environmental Impact Assessment",
    description: "Submit projects for environmental review. Required for all developments exceeding 2 acres or located within protected zones.",
    category: "Environment",
    department: "Department of Environmental Conservation",
    departmentId: 9,
    url: "item.html?id=15",
    keywords: ["environment", "assessment", "impact", "conservation", "ecology", "protected", "development", "green"],
    requirements: [
      "Completed EIA application form",
      "Project description and site plan",
      "Environmental baseline study",
      "Impact assessment report",
      "Mitigation plan",
      "Public consultation records"
    ],
    process: [
      { step: 1, title: "Screening", description: "Determine if your project requires a full EIA or a simplified review." },
      { step: 2, title: "Prepare Assessment", description: "Hire a licensed environmental consultant to conduct the assessment." },
      { step: 3, title: "Public Consultation", description: "Conduct public meetings and gather community feedback." },
      { step: 4, title: "Submit Report", description: "Submit the complete EIA report for review." },
      { step: 5, title: "Decision", description: "The Department issues approval, conditional approval, or rejection within 60 days." }
    ],
    fees: "Application fee: $500 | Full EIA review: $2,500",
    processingTime: "60-90 business days for full review",
    faq: [
      { q: "What projects require an EIA?", a: "Any development over 2 acres, projects in protected zones, or activities involving hazardous materials require an EIA." },
      { q: "Can I appeal a rejection?", a: "Yes, appeals can be submitted to the Environmental Review Tribunal within 30 days." }
    ],
    relatedIds: [16, 12, 15]
  },
  {
    id: 16,
    title: "Fishing License & Permits",
    description: "Obtain recreational or commercial fishing licenses. Quota-based permits available for sustainable harvesting in island waters.",
    category: "Environment",
    department: "Department of Marine Resources",
    departmentId: 10,
    url: "item.html?id=16",
    keywords: ["fishing", "license", "marine", "permit", "ocean", "harvest", "recreational", "commercial"],
    requirements: [
      "Valid photo ID",
      "Completed application form",
      "For commercial: vessel registration and safety inspection certificate",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Choose License Type", description: "Select recreational or commercial fishing license." },
      { step: 2, title: "Submit Application", description: "Apply online or at the Marine Resources office." },
      { step: 3, title: "Receive License", description: "Licenses are issued within 3 business days." }
    ],
    fees: "Recreational (annual): $35 | Commercial: $200 | Charter: $500",
    processingTime: "3-5 business days",
    faq: [
      { q: "Do children need a fishing license?", a: "Children under 12 fish free when accompanied by a licensed adult." },
      { q: "Are there closed seasons?", a: "Yes, certain species have seasonal restrictions. Check current regulations before fishing." }
    ],
    relatedIds: [15, 22, 16]
  },
  {
    id: 17,
    title: "Social Welfare Benefits Application",
    description: "Apply for unemployment assistance, disability benefits, or elderly support programs. Means-tested benefits for qualifying residents.",
    category: "Social",
    department: "Department of Social Services",
    departmentId: 11,
    url: "item.html?id=17",
    keywords: ["welfare", "social", "benefits", "unemployment", "disability", "elderly", "assistance", "support"],
    requirements: [
      "Proof of Verdant Island residency (1+ years)",
      "Valid national ID",
      "Proof of income or lack thereof",
      "Bank statements (last 3 months)",
      "Medical certificate (for disability benefits)",
      "Employment termination letter (for unemployment)"
    ],
    process: [
      { step: 1, title: "Check Eligibility", description: "Use the online eligibility checker to determine which benefits you qualify for." },
      { step: 2, title: "Gather Documents", description: "Prepare all required supporting documents." },
      { step: 3, title: "Submit Application", description: "Apply online, by phone, or in person at a Social Services office." },
      { step: 4, title: "Assessment", description: "A caseworker will review your application within 14 business days." },
      { step: 5, title: "Receive Benefits", description: "If approved, benefits begin the month following approval." }
    ],
    fees: "No application fee",
    processingTime: "14-21 business days for assessment",
    faq: [
      { q: "How much are the monthly benefits?", a: "Amounts vary by program: Unemployment up to $800/month, Disability up to $1,200/month, Elderly Support $600/month." },
      { q: "Can I work while receiving benefits?", a: "Limited income is allowed. Report any income changes within 10 days." }
    ],
    relatedIds: [26, 18, 21]
  },
  {
    id: 18,
    title: "Public Housing Application",
    description: "Apply for government-subsidized housing. Priority given to low-income families, seniors, and persons with disabilities.",
    category: "Housing",
    department: "Housing Development Authority",
    departmentId: 12,
    url: "item.html?id=18",
    keywords: ["housing", "public", "rent", "subsidized", "apartment", "low income", "affordable", "accommodation"],
    requirements: [
      "Proof of Verdant Island residency",
      "Income verification (must be below threshold)",
      "Family composition documents",
      "Current housing situation details",
      "Medical certificate (if claiming disability priority)"
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "Verify your income falls within the eligible range." },
      { step: 2, title: "Submit Application", description: "Complete the housing application with all supporting documents." },
      { step: 3, title: "Waitlist Placement", description: "Approved applicants are placed on a prioritized waitlist." },
      { step: 4, title: "Unit Offer", description: "When a suitable unit becomes available, you'll receive an offer." },
      { step: 5, title: "Move In", description: "Sign the lease and move in within 14 days of the offer." }
    ],
    fees: "Application: Free | Security Deposit: 1 month's rent",
    processingTime: "Waitlist times vary: 6-24 months depending on unit type and priority",
    faq: [
      { q: "What is the income threshold?", a: "Household income must be below $35,000 for individuals or $50,000 for families." },
      { q: "Can I choose my unit?", a: "You can express preferences for location and unit size, but final assignment depends on availability." }
    ],
    relatedIds: [17, 28, 25]
  },
  {
    id: 19,
    title: "Police Clearance Certificate",
    description: "Request a police background check or clearance certificate. Required for employment, visa applications, and adoption proceedings.",
    category: "Safety",
    department: "Verdant Island Police Service",
    departmentId: 13,
    url: "item.html?id=19",
    keywords: ["police", "clearance", "background", "check", "certificate", "criminal record", "vetting"],
    requirements: [
      "Valid photo ID",
      "Completed application form",
      "Two passport-sized photographs",
      "Fingerprint card (available at police stations)",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Visit Police Station", description: "Go to your local police station for fingerprinting." },
      { step: 2, title: "Submit Application", description: "Submit your completed application and fingerprints." },
      { step: 3, title: "Background Check", description: "The police conduct a background check against national and international databases." },
      { step: 4, title: "Receive Certificate", description: "Collect your clearance certificate or receive it by mail." }
    ],
    fees: "Standard: $30 | Expedited (3 days): $60 | International Check: $75",
    processingTime: "Standard: 7-10 business days | Expedited: 3 business days",
    faq: [
      { q: "How long is the certificate valid?", a: "Police clearance certificates are valid for 6 months from the date of issue." },
      { q: "Can I apply on behalf of someone else?", a: "Only with a notarized authorization letter from the applicant." }
    ],
    relatedIds: [20, 23, 1]
  },
  {
    id: 20,
    title: "Emergency Services & Disaster Preparedness",
    description: "Access emergency alerts, evacuation routes, and disaster preparedness resources. Register for SMS and email emergency notifications.",
    category: "Safety",
    department: "National Emergency Management Agency",
    departmentId: 14,
    url: "item.html?id=20",
    keywords: ["emergency", "disaster", "safety", "evacuation", "alert", "hurricane", "tsunami", "preparedness"],
    requirements: [
      "For alert registration: Valid phone number and/or email",
      "For emergency assistance: Call 911 or visit nearest emergency shelter"
    ],
    process: [
      { step: 1, title: "Register for Alerts", description: "Sign up for SMS and email emergency notifications." },
      { step: 2, title: "Create Emergency Plan", description: "Use our template to create a family emergency plan." },
      { step: 3, title: "Prepare Emergency Kit", description: "Assemble a 72-hour emergency supply kit using our checklist." },
      { step: 4, title: "Stay Informed", description: "Monitor official channels during emergencies." }
    ],
    fees: "All services free of charge",
    processingTime: "Alert registration: Instant | Emergency response: Immediate",
    faq: [
      { q: "How do I receive emergency alerts?", a: "Register your phone number and email on the NEMA portal. Alerts are also broadcast on radio and TV." },
      { q: "What should I do during a hurricane warning?", a: "Follow evacuation orders immediately. Secure your property and move to the nearest designated shelter." }
    ],
    relatedIds: [19, 7, 20]
  },
  {
    id: 21,
    title: "Employment & Job Seeker Services",
    description: "Browse government job openings, career counseling, and vocational training programs. Free resume workshops available monthly.",
    category: "Employment",
    department: "Department of Labor & Employment",
    departmentId: 15,
    url: "item.html?id=21",
    keywords: ["employment", "job", "career", "work", "vacancy", "training", "vocational", "labor"],
    requirements: [
      "Valid national ID",
      "Resume/CV",
      "Relevant qualifications or certificates"
    ],
    process: [
      { step: 1, title: "Create Profile", description: "Register on the Employment Portal and create your job seeker profile." },
      { step: 2, title: "Search Jobs", description: "Browse government and private sector job listings." },
      { step: 3, title: "Apply", description: "Submit applications directly through the portal." },
      { step: 4, title: "Career Support", description: "Access free career counseling and resume workshops." }
    ],
    fees: "All services free",
    processingTime: "Job applications: varies by employer | Training enrollment: 1-2 weeks",
    faq: [
      { q: "Are there age limits for government jobs?", a: "Government positions require applicants to be 18-62 years old at the time of application." },
      { q: "Can non-citizens apply?", a: "Permanent residents can apply for most government positions except those requiring citizenship." }
    ],
    relatedIds: [17, 4, 14]
  },
  {
    id: 22,
    title: "Tourism Visitor Visa Application",
    description: "Apply for a tourist visa to visit Verdant Island. Visa-free entry for 45 countries. Processing time: 5-7 business days.",
    category: "Tourism",
    department: "Verdant Island Tourism Authority",
    departmentId: 16,
    url: "item.html?id=22",
    keywords: ["tourism", "visa", "visitor", "travel", "vacation", "holiday", "tourist", "entry"],
    requirements: [
      "Valid passport (6+ months remaining)",
      "Completed visa application form",
      "Recent passport photograph",
      "Proof of accommodation booking",
      "Return or onward flight ticket",
      "Proof of sufficient funds ($150/day)",
      "Travel insurance"
    ],
    process: [
      { step: 1, title: "Check Visa Requirement", description: "Verify if your nationality requires a visa or qualifies for visa-free entry." },
      { step: 2, title: "Apply Online", description: "Complete the e-Visa application and upload documents." },
      { step: 3, title: "Pay Fee", description: "Pay the visa fee online via credit card." },
      { step: 4, title: "Receive e-Visa", description: "Approved e-Visas are emailed within 5-7 business days." }
    ],
    fees: "Tourist e-Visa: $50 | Visa on Arrival: $75 | Extension: $40",
    processingTime: "Standard: 5-7 business days | Priority: 2 business days ($100)",
    faq: [
      { q: "Which countries are visa-free?", a: "Citizens of 45 countries including EU, US, Canada, UK, Australia, Japan, and ASEAN members enjoy visa-free stays of 30-90 days." },
      { q: "Can I extend my tourist visa?", a: "Yes, one extension of 30 days is available. Apply at least 7 days before your current visa expires." }
    ],
    relatedIds: [1, 2, 16]
  },
  {
    id: 23,
    title: "Legal Aid Services",
    description: "Free legal assistance for low-income residents in civil matters. Staff attorneys available for family law, housing disputes, and immigration cases.",
    category: "Legal",
    department: "Legal Aid Commission",
    departmentId: 17,
    url: "item.html?id=23",
    keywords: ["legal", "law", "attorney", "lawyer", "court", "justice", "legal aid", "representation"],
    requirements: [
      "Proof of income (must be below threshold)",
      "Valid national ID",
      "Details of the legal issue",
      "Any relevant court documents"
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "Call the Legal Aid hotline or visit an office to check if you qualify." },
      { step: 2, title: "Intake Interview", description: "Meet with a caseworker who will assess your case." },
      { step: 3, title: "Assignment", description: "If eligible, an attorney will be assigned to your case." },
      { step: 4, title: "Legal Representation", description: "Your attorney will represent you through the legal process." }
    ],
    fees: "Free for eligible residents (income below $25,000)",
    processingTime: "Intake: 1-3 business days | Attorney assignment: 1-2 weeks",
    faq: [
      { q: "What types of cases does Legal Aid cover?", a: "Family law, housing disputes, immigration, employment issues, and some consumer protection matters." },
      { q: "Does Legal Aid handle criminal cases?", a: "The Public Defender's Office handles criminal cases for those who cannot afford private counsel." }
    ],
    relatedIds: [19, 10, 17]
  },
  {
    id: 24,
    title: "Child Care Subsidy Program",
    description: "Apply for government subsidies for licensed child care. Available for families with children under 12 and income below $45,000.",
    category: "Family",
    department: "Department of Family Services",
    departmentId: 18,
    url: "item.html?id=24",
    keywords: ["child", "care", "daycare", "subsidy", "family", "children", "parenting", "childcare"],
    requirements: [
      "Proof of income (family income below $45,000)",
      "Child's birth certificate",
      "Proof of employment or enrollment in education program",
      "Licensed child care provider registration number"
    ],
    process: [
      { step: 1, title: "Apply Online", description: "Submit your application through the Family Services portal." },
      { step: 2, title: "Verification", description: "Income and eligibility verification takes 5-7 business days." },
      { step: 3, title: "Select Provider", description: "Choose a licensed child care provider from the approved list." },
      { step: 4, title: "Receive Subsidy", description: "Subsidy payments are made directly to your child care provider monthly." }
    ],
    fees: "No application fee | Subsidy covers 50-90% of child care costs",
    processingTime: "5-10 business days for eligibility determination",
    faq: [
      { q: "How much subsidy can I receive?", a: "Subsidies range from 50-90% of costs depending on family income and number of children." },
      { q: "Can I change child care providers?", a: "Yes, you can switch providers by notifying the Department at least 30 days in advance." }
    ],
    relatedIds: [17, 13, 7]
  },
  {
    id: 25,
    title: "Water & Utilities Connection",
    description: "Apply for water, electricity, and waste management services. Online billing and payment portal available 24/7.",
    category: "Infrastructure",
    department: "Verdant Island Utilities Corporation",
    departmentId: 19,
    url: "item.html?id=25",
    keywords: ["water", "utilities", "electricity", "connection", "billing", "payment", "power", "waste"],
    requirements: [
      "Proof of property ownership or lease agreement",
      "Valid national ID",
      "Property address and access details",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Apply Online", description: "Submit your connection request through the Utilities portal." },
      { step: 2, title: "Site Assessment", description: "A technician visits your property to assess connection requirements." },
      { step: 3, title: "Connection Work", description: "Utility connections are installed within 5-10 business days." },
      { step: 4, title: "Account Activation", description: "Your utility account is activated and billing begins." }
    ],
    fees: "Connection fee: $150 (water) + $200 (electricity) | Deposit: $100",
    processingTime: "Site assessment: 3 business days | Connection: 5-10 business days",
    faq: [
      { q: "Can I set up automatic payments?", a: "Yes, automatic bank deductions are available through the online portal." },
      { q: "What if I have trouble paying my bill?", a: "The Low-Income Assistance Program provides discounted rates for qualifying residents." }
    ],
    relatedIds: [12, 6, 18]
  },
  {
    id: 26,
    title: "Senior Citizens Discount Card",
    description: "Residents 65+ are eligible for a Senior Citizens Card providing discounts on public transport, healthcare, and government services.",
    category: "Social",
    department: "Department of Senior Citizens Affairs",
    departmentId: 20,
    url: "item.html?id=26",
    keywords: ["senior", "elderly", "discount", "card", "benefits", "aging", "retirement", "pension"],
    requirements: [
      "Age 65 or older",
      "Valid national ID showing date of birth",
      "Recent passport-sized photograph",
      "Proof of address"
    ],
    process: [
      { step: 1, title: "Apply", description: "Submit your application online or at any Senior Affairs office." },
      { step: 2, title: "Verification", description: "Age and residency are verified within 3 business days." },
      { step: 3, title: "Receive Card", description: "Your Senior Citizens Card is mailed or can be collected in person." }
    ],
    fees: "Free of charge",
    processingTime: "3-5 business days",
    faq: [
      { q: "What discounts are available?", a: "50% off public transport, 20% off prescription medications, free park entry, and reduced government service fees." },
      { q: "Does the card expire?", a: "The card is valid for 5 years and can be renewed for free." }
    ],
    relatedIds: [17, 7, 26]
  },
  {
    id: 27,
    title: "Import/Export License",
    description: "Apply for permits to import or export goods to and from Verdant Island. Custom duties and trade regulations apply.",
    category: "Business",
    department: "Customs & Border Protection Service",
    departmentId: 21,
    url: "item.html?id=27",
    keywords: ["import", "export", "customs", "trade", "license", "permit", "goods", "border"],
    requirements: [
      "Valid business registration",
      "Tax Identification Number",
      "Detailed description of goods",
      "Origin/certification documents for goods",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Register as Trader", description: "Register your business on the Trade Portal." },
      { step: 2, title: "Submit Application", description: "Apply for the specific import/export license category." },
      { step: 3, title: "Compliance Check", description: "Customs verifies compliance with trade regulations." },
      { step: 4, title: "Receive License", description: "Approved licenses are issued within 7-10 business days." }
    ],
    fees: "Import License: $200 | Export License: $150 | Combined: $300",
    processingTime: "7-10 business days",
    faq: [
      { q: "Are there restricted items?", a: "Yes, certain items require special permits: firearms, pharmaceuticals, chemicals, and endangered species products." },
      { q: "What are the customs duty rates?", a: "Duty rates range from 0-35% depending on the category of goods. Check the tariff schedule for specifics." }
    ],
    relatedIds: [4, 27, 3]
  },
  {
    id: 28,
    title: "Land Title & Registry Search",
    description: "Search official land records, verify property ownership, and request certified copies of land titles and survey plans.",
    category: "Housing",
    department: "Lands & Surveys Department",
    departmentId: 22,
    url: "item.html?id=28",
    keywords: ["land", "title", "registry", "property", "ownership", "survey", "real estate", "deed"],
    requirements: [
      "Property identification number or address",
      "Valid photo ID",
      "Application fee payment"
    ],
    process: [
      { step: 1, title: "Search Records", description: "Use the online Land Registry portal to search by PIN, address, or owner name." },
      { step: 2, title: "Request Documents", description: "Order certified copies of titles, survey plans, or encumbrance certificates." },
      { step: 3, title: "Payment", description: "Pay the document fee online or at the Lands office." },
      { step: 4, title: "Receive Documents", description: "Documents are available for pickup or mailed within 5 business days." }
    ],
    fees: "Search: Free | Certified Title Copy: $30 | Survey Plan: $50 | Encumbrance Certificate: $25",
    processingTime: "Online search: Instant | Certified copies: 3-5 business days",
    faq: [
      { q: "Can I search property records anonymously?", a: "Basic search information is public. Detailed owner information requires a valid reason and ID." },
      { q: "How do I correct an error in the land registry?", a: "File a correction request with supporting documentation. Minor corrections take 5 business days." }
    ],
    relatedIds: [11, 18, 12]
  },
  {
    id: 29,
    title: "COVID-19 & Vaccination Records",
    description: "Access your vaccination records, download certificates, and view current public health guidelines and travel requirements.",
    category: "Health",
    department: "Ministry of Health & Wellness",
    departmentId: 5,
    url: "item.html?id=29",
    keywords: ["covid", "vaccination", "vaccine", "health", "pandemic", "immunization", "certificate", "records"],
    requirements: [
      "Valid national ID or passport",
      "Date of birth"
    ],
    process: [
      { step: 1, title: "Log In", description: "Access the Health Portal with your national ID and date of birth." },
      { step: 2, title: "View Records", description: "Your complete immunization history including COVID-19 vaccinations." },
      { step: 3, title: "Download Certificate", description: "Download your vaccination certificate as a PDF for travel or employment." }
    ],
    fees: "Free of charge",
    processingTime: "Instant access to records",
    faq: [
      { q: "What if my vaccination record is missing?", a: "Contact the Health Ministry to submit records from off-island vaccination providers." },
      { q: "Is the certificate accepted internationally?", a: "Verdant Island vaccination certificates are accepted by 120+ countries under WHO verification." }
    ],
    relatedIds: [7, 8, 22]
  },
  {
    id: 30,
    title: "Election & Voter Registration",
    description: "Register to vote, find your polling station, view upcoming elections, and check your voter status online.",
    category: "Civic",
    department: "Electoral Commission of Verdant Island",
    departmentId: 23,
    url: "item.html?id=30",
    keywords: ["election", "vote", "voter", "registration", "polling", "democracy", "ballot", "candidate"],
    requirements: [
      "Verdant Island citizenship",
      "Age 18 or older",
      "Valid national ID",
      "Proof of address for district assignment"
    ],
    process: [
      { step: 1, title: "Check Status", description: "Verify if you're already registered on the Electoral Commission portal." },
      { step: 2, title: "Register", description: "Complete the online registration form with your details." },
      { step: 3, title: "Verification", description: "Your details are verified against national records (2-3 business days)." },
      { step: 4, title: "Voter Card", description: "Your voter registration card is mailed to your address." }
    ],
    fees: "Free of charge",
    processingTime: "Registration confirmed within 3-5 business days",
    faq: [
      { q: "Can I vote from overseas?", a: "Yes, overseas citizens can register for postal voting at their nearest Verdant Island embassy or consulate." },
      { q: "What if I've moved districts?", a: "Update your address on the Electoral portal. Your polling station will be reassigned accordingly." }
    ],
    relatedIds: [9, 30, 1]
  }
];

// ========================
// CATEGORIES DATA
// ========================
const categoriesData = [
  { name: "Civic", icon: "landmark", description: "Citizenship, identity, voting, and vital records services for residents and citizens.", color: "teal" },
  { name: "Tax", icon: "receipt", description: "Income tax, property tax, and other revenue-related services and filings.", color: "purple" },
  { name: "Business", icon: "briefcase", description: "Business registration, licensing, import/export, and commercial services.", color: "amber" },
  { name: "Transport", icon: "car", description: "Driver licensing, vehicle registration, and transportation services.", color: "blue" },
  { name: "Health", icon: "heart-pulse", description: "Health insurance, hospital services, vaccination, and public health programs.", color: "red" },
  { name: "Education", icon: "graduation-cap", description: "Schools, universities, scholarships, and educational programs.", color: "sky" },
  { name: "Environment", icon: "trees", description: "Environmental protection, conservation, fishing, and marine resources.", color: "green" },
  { name: "Infrastructure", icon: "building-2", description: "Building permits, utilities, and public infrastructure services.", color: "yellow" },
  { name: "Housing", icon: "home", description: "Public housing, land registry, and property-related services.", color: "pink" },
  { name: "Legal", icon: "scale", description: "Legal aid, court services, and justice system resources.", color: "gray" },
  { name: "Employment", icon: "briefcase", description: "Job seekers, career services, and labor-related programs.", color: "orange" },
  { name: "Safety", icon: "shield-check", description: "Police services, emergency management, and public safety resources.", color: "rose" },
  { name: "Family", icon: "baby", description: "Child care, family support, and parenting resources.", color: "violet" },
  { name: "Tourism", icon: "plane", description: "Visitor visas, tourism information, and travel services.", color: "cyan" },
  { name: "Social", icon: "hand-heart", description: "Welfare benefits, senior services, and social support programs.", color: "pink" }
];

// ========================
// DEPARTMENTS DATA (with nested pages)
// ========================
const departmentsData = [
  {
    id: 1,
    name: "Department of Immigration & Citizenship",
    shortName: "Immigration",
    icon: "stamp",
    description: "Managing borders, citizenship, passports, and immigration services for Verdant Island.",
    head: "Director Amara Osei",
    address: "Immigration House, 5 Harbor Road, Coral Bay, V1001",
    phone: "+1 (555) 420-1001",
    email: "immigration@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 4:00 PM",
    website: "immigration.verdantisland.gov",
    pages: [
      {
        id: "about",
        title: "About Us",
        content: `<p>The Department of Immigration & Citizenship is the primary authority for managing Verdant Island's borders, processing immigration applications, and administering citizenship services.</p><p>Established in 1962 following independence, the Department has evolved from a small border control office to a comprehensive agency handling over 50,000 passport applications and 15,000 visa requests annually.</p><p>Our mission is to facilitate legitimate travel while maintaining the security and integrity of Verdant Island's borders.</p>`
      },
      {
        id: "services",
        title: "Our Services",
        content: `<p>The Department provides a comprehensive range of immigration and citizenship services:</p><ul><li><strong>Passport Services</strong> — New applications, renewals, and emergency travel documents</li><li><strong>Citizenship</strong> — Naturalization, registration, and citizenship verification</li><li><strong>Visas</strong> — Tourist, business, work, and resident visa processing</li><li><strong>Border Control</strong> — Entry and exit processing at all ports of entry</li><li><strong>Immigration Enforcement</strong> — Compliance monitoring and deportation proceedings</li></ul>`
      },
      {
        id: "fees",
        title: "Fees & Processing Times",
        content: `<h3>Passport Fees</h3><table class="info-table"><tr><td>New Adult Passport</td><td>$100</td><td>15-20 business days</td></tr><tr><td>Passport Renewal</td><td>$75</td><td>10-15 business days</td></tr><tr><td>Expedited Service</td><td>$150</td><td>5 business days</td></tr><tr><td>Emergency Travel Document</td><td>$50</td><td>Same day</td></tr></table><h3>Visa Fees</h3><table class="info-table"><tr><td>Tourist e-Visa</td><td>$50</td><td>5-7 business days</td></tr><tr><td>Business Visa</td><td>$100</td><td>7-10 business days</td></tr><tr><td>Work Permit</td><td>$250</td><td>4-6 weeks</td></tr></table>`
      },
      {
        id: "faq",
        title: "Frequently Asked Questions",
        content: `<div class="faq-list"><div class="faq-item"><h4>How do I check my application status?</h4><p>Use the online tracking system with your application reference number, or call our hotline at 311.</p></div><div class="faq-item"><h4>Can I get a same-day passport?</h4><p>Same-day emergency travel documents are available for genuine emergencies with proof of travel. Visit our office in person.</p></div><div class="faq-item"><h4>How do I apply for citizenship?</h4><p>Residents who have lived on Verdant Island for 7+ years may apply for naturalization. See our Citizenship section for details.</p></div></div>`
      }
    ]
  },
  {
    id: 2,
    name: "Revenue & Taxation Bureau",
    shortName: "Revenue",
    icon: "calculator",
    description: "Responsible for tax collection, assessment, and revenue management for the island government.",
    head: "Commissioner Rajiv Patel",
    address: "Revenue House, 12 Financial District, Coral Bay, V1002",
    phone: "+1 (555) 420-1002",
    email: "revenue@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "revenue.verdantisland.gov",
    pages: [
      {
        id: "about",
        title: "About Us",
        content: `<p>The Revenue & Taxation Bureau is the government's primary revenue collection agency, responsible for administering the island's tax laws and ensuring fair and efficient tax compliance.</p><p>Each year, the Bureau processes over 80,000 tax returns and collects approximately $420 million in government revenue.</p>`
      },
      {
        id: "services",
        title: "Our Services",
        content: `<p>The Bureau manages all aspects of taxation on Verdant Island:</p><ul><li><strong>Income Tax</strong> — Filing, assessments, and refunds</li><li><strong>Property Tax</strong> — Assessment, billing, and collection</li><li><strong>Business Tax</strong> — Corporate tax, VAT, and excise duties</li><li><strong>Customs Duties</strong> — Import duties and trade tariffs</li></ul>`
      },
      {
        id: "rates",
        title: "Tax Rates & Brackets",
        content: `<h3>Income Tax Brackets</h3><table class="info-table"><tr><td>$0 – $15,000</td><td>0%</td></tr><tr><td>$15,001 – $35,000</td><td>10%</td></tr><tr><td>$35,001 – $75,000</td><td>20%</td></tr><tr><td>$75,001 – $150,000</td><td>30%</td></tr><tr><td>$150,001+</td><td>35%</td></tr></table><p>Property Tax Rate: 1.2% of assessed value annually</p>`
      },
      {
        id: "contact",
        title: "Contact & Office Locations",
        content: `<p><strong>Main Office:</strong> Revenue House, 12 Financial District, Coral Bay</p><p><strong>Branch Offices:</strong> Open in all 12 district towns, Mon–Fri 8AM–4PM</p><p><strong>Tax Helpline:</strong> Call 311 or email taxhelp@verdantisland.gov</p>`
      }
    ]
  },
  {
    id: 3,
    name: "Ministry of Commerce & Trade",
    shortName: "Commerce",
    icon: "store",
    description: "Promoting business development, trade, and economic growth across Verdant Island.",
    head: "Minister Lucia Fernandez",
    address: "Commerce Building, 8 Trade Street, Coral Bay, V1003",
    phone: "+1 (555) 420-1003",
    email: "commerce@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "commerce.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Ministry of Commerce & Trade drives economic development by supporting businesses, facilitating trade, and creating an enabling environment for investment on Verdant Island.</p><p>We register over 2,000 new businesses annually and manage trade relationships with 50+ partner nations.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Business Registration</strong> — New entities and annual renewals</li><li><strong>Trade Licensing</strong> — Import/export permits and certifications</li><li><strong>Investor Support</strong> — Foreign investment facilitation</li><li><strong>Consumer Protection</strong> — Business compliance and fair trade enforcement</li></ul>` },
      { id: "resources", title: "Business Resources", content: `<p>Access our business toolkit including:</p><ul><li>Business plan templates</li><li>Market research reports</li><li>Grant and funding databases</li><li>Mentorship program connections</li></ul>` }
    ]
  },
  {
    id: 4,
    name: "Department of Motor Vehicles",
    shortName: "DMV",
    icon: "car",
    description: "Managing driver licensing, vehicle registration, and road safety across Verdant Island.",
    head: "Director Marcus Chen",
    address: "DMV Central Office, 20 Transport Avenue, Coral Bay, V1004",
    phone: "+1 (555) 420-1004",
    email: "dmv@verdantisland.gov",
    hours: "Mon–Fri: 7:30 AM – 4:30 PM | Sat: 8:00 AM – 12:00 PM",
    website: "dmv.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Motor Vehicles ensures safe and efficient transportation through driver licensing, vehicle registration, and road safety programs.</p><p>We serve over 90,000 licensed drivers and 65,000 registered vehicles on Verdant Island.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Driver's Licensing</strong> — New, renewal, and conversion</li><li><strong>Vehicle Registration</strong> — New, transfer, and renewal</li><li><strong>Road Testing</strong> — Written and practical exams</li><li><strong>Traffic Records</strong> — Driving records and citations</li></ul>` },
      { id: "locations", title: "Office Locations", content: `<p><strong>Coral Bay (Main)</strong>: 20 Transport Avenue</p><p><strong>Port Emerald</strong>: 5 Marina Drive</p><p><strong>Greenfield</strong>: 12 Market Street</p><p><strong>Hilltop</strong>: 8 Summit Road</p>` },
      { id: "fees", title: "Fees Schedule", content: `<table class="info-table"><tr><td>Learner's Permit</td><td>$25</td></tr><tr><td>Full Driver's License</td><td>$75</td></tr><tr><td>License Renewal</td><td>$50</td></tr><tr><td>New Vehicle Registration</td><td>$120</td></tr><tr><td>Registration Renewal</td><td>$80</td></tr></table>` }
    ]
  },
  {
    id: 5,
    name: "Ministry of Health & Wellness",
    shortName: "Health",
    icon: "heart-pulse",
    description: "Overseeing public health, healthcare services, and wellness programs for all residents.",
    head: "Minister Dr. Sarah Kim",
    address: "Health Ministry, 15 Wellness Boulevard, Coral Bay, V1005",
    phone: "+1 (555) 420-1005",
    email: "health@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "health.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Ministry of Health & Wellness is dedicated to ensuring the highest quality of healthcare for all Verdant Island residents through our network of 8 public hospitals, 23 health centers, and numerous community clinics.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>National Health Insurance</strong> — Enrollment and coverage management</li><li><strong>Hospital Services</strong> — Public hospital administration</li><li><strong>Public Health</strong> — Disease prevention and health promotion</li><li><strong>Mental Health</strong> — Counseling and psychiatric services</li></ul>` },
      { id: "hospitals", title: "Hospital Directory", content: `<p>Verdant Island has 8 public hospitals:</p><ul><li>Coral Bay General Hospital (500 beds)</li><li>Port Emerald Regional Hospital (200 beds)</li><li>Greenfield Community Hospital (150 beds)</li><li>Hilltop District Hospital (100 beds)</li><li>Northshore Medical Center (80 beds)</li><li>Rainforest Health Center (60 beds)</li><li>Southpoint Clinic & Maternity (50 beds)</li><li>Westview Community Hospital (40 beds)</li></ul>` },
      { id: "programs", title: "Health Programs", content: `<p>Active health programs include:</p><ul><li>Child Immunization Program</li><li>Maternal Health Initiative</li><li>Diabetes Prevention Campaign</li><li>Mental Health Awareness Program</li><li>Substance Abuse Treatment Initiative</li></ul>` }
    ]
  },
  {
    id: 6,
    name: "Office of the Registrar General",
    shortName: "Registrar",
    icon: "file-text",
    description: "Maintaining vital records including births, deaths, marriages, and civil partnerships.",
    head: "Registrar General Michael Torres",
    address: "Registrar's Office, 3 Civic Square, Coral Bay, V1006",
    phone: "+1 (555) 420-1006",
    email: "registrar@verdantisland.gov",
    hours: "Mon–Fri: 8:30 AM – 4:30 PM",
    website: "registrar.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Office of the Registrar General is the custodian of all vital records on Verdant Island, maintaining records from 1962 to present.</p><p>We process approximately 5,000 birth registrations, 2,000 marriage registrations, and 1,500 death registrations annually.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Birth Registration</strong> — New registrations and certificate copies</li><li><strong>Marriage Services</strong> — License applications and registrations</li><li><strong>Death Registration</strong> — Recording and death certificates</li><li><strong>Civil Partnerships</strong> — Registration and documentation</li></ul>` },
      { id: "records", title: "Record Requests", content: `<p>Most vital record requests can be made online. Certified copies are available within 3-5 business days for standard requests.</p>` }
    ]
  },
  {
    id: 7,
    name: "Department of Planning & Infrastructure",
    shortName: "Planning",
    icon: "building-2",
    description: "Managing land use planning, building permits, and public infrastructure development.",
    head: "Director Nina Williams",
    address: "Planning Department, 10 Development Way, Coral Bay, V1007",
    phone: "+1 (555) 420-1007",
    email: "planning@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "planning.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Planning & Infrastructure oversees sustainable development across Verdant Island through comprehensive land use planning, building code enforcement, and infrastructure development.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Building Permits</strong> — New construction and renovation approvals</li><li><strong>Land Use Planning</strong> — Zoning and development regulations</li><li><strong>Infrastructure Projects</strong> — Roads, bridges, and public facilities</li></ul>` },
      { id: "codes", title: "Building Codes", content: `<p>Verdant Island Building Code 2024 Edition applies to all new construction and major renovations. All buildings must also meet hurricane resistance standards.</p>` }
    ]
  },
  {
    id: 8,
    name: "Ministry of Education",
    shortName: "Education",
    icon: "graduation-cap",
    description: "Providing quality education from early childhood through university for all residents.",
    head: "Minister Dr. James Okafor",
    address: "Education Ministry, 25 Learning Lane, Coral Bay, V1008",
    phone: "+1 (555) 420-1008",
    email: "education@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "education.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Ministry of Education manages 45 public schools, 3 community colleges, and the National University of Verdant Island, serving over 35,000 students.</p>` },
      { id: "programs", title: "Educational Programs", content: `<ul><li><strong>K-12 Education</strong> — Free public schooling for all residents</li><li><strong>National Scholarship</strong> — Full tuition coverage for qualifying students</li><li><strong>Vocational Training</strong> — Skills development and apprenticeships</li><li><strong>Adult Education</strong> — Literacy and continuing education programs</li></ul>` },
      { id: "schools", title: "School Directory", content: `<p>Our school system includes 25 primary schools, 15 secondary schools, and 5 specialized institutions.</p>` }
    ]
  },
  {
    id: 9,
    name: "Department of Environmental Conservation",
    shortName: "Environment",
    icon: "trees",
    description: "Protecting and preserving Verdant Island's natural environment and biodiversity.",
    head: "Director Elena Rivera",
    address: "Environment Office, 8 Conservation Drive, Coral Bay, V1009",
    phone: "+1 (555) 420-1009",
    email: "environment@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "environment.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Environmental Conservation protects 60% of Verdant Island's land as nature reserves, marine parks, and protected landscapes.</p>` },
      { id: "programs", title: "Conservation Programs", content: `<ul><li><strong>Protected Areas</strong> — Managing 12 nature reserves and 4 marine parks</li><li><strong>Environmental Assessment</strong> — EIA review and approval</li><li><strong>Wildlife Protection</strong> — Endangered species monitoring and protection</li></ul>` },
      { id: "permits", title: "Permits & Regulations", content: `<p>Activities in protected zones require environmental permits. Visit our office or apply online for all environmental permits and clearances.</p>` }
    ]
  },
  {
    id: 10,
    name: "Department of Marine Resources",
    shortName: "Marine Resources",
    icon: "fish",
    description: "Managing Verdant Island's ocean resources, fishing, and maritime activities sustainably.",
    head: "Director Kai Nakamura",
    address: "Marine Resources HQ, 1 Harborfront, Port Emerald, V1010",
    phone: "+1 (555) 420-1010",
    email: "marine@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 4:00 PM",
    website: "marine.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Marine Resources manages Verdant Island's 200-nautical-mile exclusive economic zone, ensuring sustainable use of ocean resources.</p>` },
      { id: "licensing", title: "Fishing Licenses", content: `<p>We issue recreational and commercial fishing licenses with quota-based permits to ensure sustainable harvesting.</p>` },
      { id: "regulations", title: "Maritime Regulations", content: `<p>All maritime activities are governed by the Verdant Island Maritime Act 2015. Key regulations include seasonal fishing restrictions and marine park zones.</p>` }
    ]
  },
  {
    id: 11,
    name: "Department of Social Services",
    shortName: "Social Services",
    icon: "hand-heart",
    description: "Providing welfare, disability support, and social assistance to vulnerable residents.",
    head: "Director Fatima Ahmed",
    address: "Social Services Center, 14 Care Street, Coral Bay, V1011",
    phone: "+1 (555) 420-1011",
    email: "socialservices@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "socialservices.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Social Services provides a safety net for Verdant Island's most vulnerable residents through means-tested benefits and support programs.</p>` },
      { id: "programs", title: "Assistance Programs", content: `<ul><li><strong>Unemployment Assistance</strong> — Up to $800/month for job seekers</li><li><strong>Disability Benefits</strong> — Up to $1,200/month for qualifying residents</li><li><strong>Elderly Support</strong> — $600/month for seniors in need</li></ul>` }
    ]
  },
  {
    id: 12,
    name: "Housing Development Authority",
    shortName: "Housing",
    icon: "home",
    description: "Developing and managing affordable housing for low and middle-income families.",
    head: "Chairman David Blackwood",
    address: "HDA Office, 22 Shelter Avenue, Coral Bay, V1012",
    phone: "+1 (555) 420-1012",
    email: "housing@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "housing.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Housing Development Authority manages over 3,000 public housing units and administers rental subsidy programs for eligible families.</p>` },
      { id: "apply", title: "How to Apply", content: `<p>Applications for public housing are accepted year-round. Priority is given to low-income families, seniors, and persons with disabilities.</p>` },
      { id: "properties", title: "Available Properties", content: `<p>Current vacancies are listed on our online portal. Unit sizes range from studios to 4-bedroom apartments.</p>` }
    ]
  },
  {
    id: 13,
    name: "Verdant Island Police Service",
    shortName: "Police",
    icon: "shield",
    description: "Maintaining law and order, crime prevention, and community policing across the island.",
    head: "Commissioner Grace Thompson",
    address: "Police Headquarters, 1 Justice Way, Coral Bay, V1013",
    phone: "+1 (555) 420-1013 | Emergency: 911",
    email: "police@verdantisland.gov",
    hours: "24/7 Emergency | Admin: Mon–Fri 8AM–5PM",
    website: "police.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Verdant Island Police Service employs 850 officers across 15 stations, providing 24/7 policing and emergency response.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Police Clearance</strong> — Background checks and certificates</li><li><strong>Crime Reporting</strong> — Online and in-person reporting</li><li><strong>Community Policing</strong> — Neighborhood watch programs</li></ul>` },
      { id: "stations", title: "Police Stations", content: `<p>15 stations across all 12 districts. Main headquarters at Justice Way, Coral Bay, open 24/7.</p>` }
    ]
  },
  {
    id: 14,
    name: "National Emergency Management Agency",
    shortName: "NEMA",
    icon: "siren",
    description: "Coordinating emergency response, disaster preparedness, and resilience programs.",
    head: "Director Robert Mason",
    address: "NEMA HQ, 6 Safety Boulevard, Coral Bay, V1014",
    phone: "+1 (555) 420-1014 | Emergency: 911",
    email: "nema@verdantisland.gov",
    hours: "24/7 Emergency Operations Center",
    website: "nema.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>NEMA coordinates all emergency preparedness, response, and recovery activities on Verdant Island, including hurricane, tsunami, and volcanic hazard management.</p>` },
      { id: "preparedness", title: "Disaster Preparedness", content: `<p>Key preparedness resources include: Emergency plan templates, shelter locations, evacuation routes, and supply checklists.</p>` },
      { id: "alerts", title: "Current Alerts", content: `<p>Register for SMS and email emergency alerts at our portal. During emergencies, monitor official radio and TV channels.</p>` }
    ]
  },
  {
    id: 15,
    name: "Department of Labor & Employment",
    shortName: "Labor",
    icon: "hard-hat",
    description: "Managing employment services, workplace safety, and labor regulations.",
    head: "Director Patricia Santos",
    address: "Labor Department, 18 Workforce Drive, Coral Bay, V1015",
    phone: "+1 (555) 420-1015",
    email: "labor@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "labor.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Labor & Employment connects job seekers with opportunities and ensures fair, safe working conditions across Verdant Island.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Job Portal</strong> — Government and private sector listings</li><li><strong>Career Counseling</strong> — Free professional guidance</li><li><strong>Vocational Training</strong> — Skills development programs</li><li><strong>Workplace Safety</strong> — Inspection and compliance</li></ul>` }
    ]
  },
  {
    id: 16,
    name: "Verdant Island Tourism Authority",
    shortName: "Tourism",
    icon: "palmtree",
    description: "Promoting Verdant Island as a world-class destination and managing visitor services.",
    head: "CEO Isabella Moreau",
    address: "Tourism Authority, 2 Sunset Boulevard, Coral Bay, V1016",
    phone: "+1 (555) 420-1016",
    email: "tourism@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM | Sat: 9AM–3PM",
    website: "visitverdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Tourism Authority markets Verdant Island globally and manages visitor services, ensuring sustainable tourism that benefits local communities.</p>` },
      { id: "destinations", title: "Top Destinations", content: `<ul><li>Coral Bay Beach — White sand and crystal waters</li><li>Rainforest Canopy Walk — Elevated nature trail</li><li>Volcanic Hot Springs — Natural therapeutic springs</li><li>Old Town Heritage District — Colonial architecture tours</li></ul>` },
      { id: "visitors", title: "Visitor Information", content: `<p>Visa requirements, customs regulations, transportation options, and local tips for tourists.</p>` }
    ]
  },
  {
    id: 17,
    name: "Legal Aid Commission",
    shortName: "Legal Aid",
    icon: "scale",
    description: "Providing free legal assistance to low-income residents in civil matters.",
    head: "Chairperson Andrea Walker",
    address: "Legal Aid Office, 9 Justice Lane, Coral Bay, V1017",
    phone: "+1 (555) 420-1017",
    email: "legalaid@verdantisland.gov",
    hours: "Mon–Fri: 8:30 AM – 4:30 PM",
    website: "legalaid.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Legal Aid Commission provides free legal representation to qualifying low-income residents in civil matters.</p>` },
      { id: "eligibility", title: "Eligibility & Application", content: `<p>To qualify, household income must be below $25,000 annually. Apply in person or call our hotline.</p>` }
    ]
  },
  {
    id: 18,
    name: "Department of Family Services",
    shortName: "Family Services",
    icon: "baby",
    description: "Supporting families through child care programs, parenting resources, and family welfare.",
    head: "Director Maria Johnson",
    address: "Family Services, 7 Community Circle, Coral Bay, V1018",
    phone: "+1 (555) 420-1018",
    email: "family@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "family.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>We support families through child care subsidies, parenting programs, and family welfare services.</p>` },
      { id: "programs", title: "Family Programs", content: `<ul><li>Child Care Subsidy Program</li><li>Parenting Skills Workshops</li><li>Family Counseling Services</li><li>Child Protection Unit</li></ul>` }
    ]
  },
  {
    id: 19,
    name: "Verdant Island Utilities Corporation",
    shortName: "Utilities",
    icon: "plug-zap",
    description: "Providing water, electricity, and waste management services island-wide.",
    head: "CEO Thomas Green",
    address: "Utilities HQ, 30 Power Station Road, Coral Bay, V1019",
    phone: "+1 (555) 420-1019",
    email: "utilities@verdantisland.gov",
    hours: "24/7 Emergency Line | Office: Mon–Fri 8AM–5PM",
    website: "utilities.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>VIUC provides reliable water, electricity, and waste management to all residents and businesses on Verdant Island.</p>` },
      { id: "services", title: "Our Services", content: `<ul><li><strong>Water Supply</strong> — Connection, billing, and quality testing</li><li><strong>Electricity</strong> — Connection, solar programs, and outage support</li><li><strong>Waste Management</strong> — Collection, recycling, and disposal</li></ul>` },
      { id: "billing", title: "Billing & Payments", content: `<p>Pay online, by bank transfer, or in person. Auto-pay available. Low-income assistance program for qualifying residents.</p>` }
    ]
  },
  {
    id: 20,
    name: "Department of Senior Citizens Affairs",
    shortName: "Senior Affairs",
    icon: "user-check",
    description: "Advocating for and serving the elderly population of Verdant Island.",
    head: "Director Helen Park",
    address: "Senior Affairs Office, 11 Golden Years Lane, Coral Bay, V1020",
    phone: "+1 (555) 420-1020",
    email: "seniors@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 4:00 PM",
    website: "seniors.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Department of Senior Citizens Affairs advocates for residents 65 and older, providing discount programs, social activities, and support services.</p>` },
      { id: "benefits", title: "Senior Benefits", content: `<ul><li>50% off public transportation</li><li>20% off prescription medications</li><li>Free entry to national parks</li><li>Reduced government service fees</li></ul>` }
    ]
  },
  {
    id: 21,
    name: "Customs & Border Protection Service",
    shortName: "Customs",
    icon: "shield-alert",
    description: "Managing customs, trade compliance, and border protection for Verdant Island.",
    head: "Commissioner Derek Howe",
    address: "Customs House, 1 Port Authority, Coral Bay, V1021",
    phone: "+1 (555) 420-1021",
    email: "customs@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM | Port: 24/7",
    website: "customs.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>CBPS manages all customs operations at Verdant Island's ports, airport, and border crossings.</p>` },
      { id: "permits", title: "Import/Export Permits", content: `<p>Apply for import and export permits through our online portal. Certain goods require special licenses.</p>` },
      { id: "duties", title: "Customs Duties", content: `<p>Duty rates range from 0-35% by category. Check the tariff schedule for specific rates.</p>` }
    ]
  },
  {
    id: 22,
    name: "Lands & Surveys Department",
    shortName: "Lands",
    icon: "map",
    description: "Managing land records, surveys, and property ownership documentation.",
    head: "Director Oscar Reyes",
    address: "Lands Office, 4 Registry Row, Coral Bay, V1022",
    phone: "+1 (555) 420-1022",
    email: "lands@verdantisland.gov",
    hours: "Mon–Fri: 8:30 AM – 4:30 PM",
    website: "lands.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Lands & Surveys Department maintains the official land registry and survey records for all property on Verdant Island.</p>` },
      { id: "search", title: "Land Records Search", content: `<p>Search property records online by PIN, address, or owner name. Certified copies available for a fee.</p>` },
      { id: "surveying", title: "Survey Services", content: `<p>Official land surveys and boundary determinations conducted by licensed surveyors.</p>` }
    ]
  },
  {
    id: 23,
    name: "Electoral Commission of Verdant Island",
    shortName: "Elections",
    icon: "vote",
    description: "Conducting free and fair elections and managing the voter registration system.",
    head: "Chief Electoral Officer Diana Brooks",
    address: "Electoral Commission, 6 Democracy Drive, Coral Bay, V1023",
    phone: "+1 (555) 420-1023",
    email: "elections@verdantisland.gov",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    website: "elections.verdantisland.gov",
    pages: [
      { id: "about", title: "About Us", content: `<p>The Electoral Commission is an independent body responsible for conducting all national and local elections on Verdant Island.</p>` },
      { id: "register", title: "Voter Registration", content: `<p>All citizens 18+ must register to vote. Online registration takes 3-5 business days to process.</p>` },
      { id: "upcoming", title: "Upcoming Elections", content: `<p>Next General Election: November 2026. Local Council Elections: March 2026.</p>` }
    ]
  }
];

// ========================
// CATEGORY BADGE COLORS
// ========================
const categoryBadgeColors = {
  "Health": { bg: "rgba(239, 68, 68, 0.15)", color: "#fca5a5", border: "rgba(239, 68, 68, 0.2)" },
  "Transport": { bg: "rgba(59, 130, 246, 0.15)", color: "#93c5fd", border: "rgba(59, 130, 246, 0.2)" },
  "Business": { bg: "rgba(245, 158, 11, 0.15)", color: "#fcd34d", border: "rgba(245, 158, 11, 0.2)" },
  "Tax": { bg: "rgba(168, 85, 247, 0.15)", color: "#d8b4fe", border: "rgba(168, 85, 247, 0.2)" },
  "Education": { bg: "rgba(14, 165, 233, 0.15)", color: "#7dd3fc", border: "rgba(14, 165, 233, 0.2)" },
  "Environment": { bg: "rgba(34, 197, 94, 0.15)", color: "#86efac", border: "rgba(34, 197, 94, 0.2)" },
  "Housing": { bg: "rgba(236, 72, 153, 0.15)", color: "#f9a8d4", border: "rgba(236, 72, 153, 0.2)" },
  "Legal": { bg: "rgba(107, 114, 128, 0.15)", color: "#d1d5db", border: "rgba(107, 114, 128, 0.2)" },
  "Employment": { bg: "rgba(249, 115, 22, 0.15)", color: "#fdba74", border: "rgba(249, 115, 22, 0.2)" },
  "Civic": { bg: "rgba(20, 184, 166, 0.15)", color: "#5eead4", border: "rgba(20, 184, 166, 0.2)" },
  "Infrastructure": { bg: "rgba(234, 179, 8, 0.15)", color: "#fde047", border: "rgba(234, 179, 8, 0.2)" },
  "Safety": { bg: "rgba(244, 63, 94, 0.15)", color: "#fda4af", border: "rgba(244, 63, 94, 0.2)" },
  "Family": { bg: "rgba(139, 92, 246, 0.15)", color: "#c4b5fd", border: "rgba(139, 92, 246, 0.2)" },
  "Tourism": { bg: "rgba(6, 182, 212, 0.15)", color: "#67e8f9", border: "rgba(6, 182, 212, 0.2)" },
  "Social": { bg: "rgba(236, 72, 153, 0.15)", color: "#f9a8d4", border: "rgba(236, 72, 153, 0.2)" }
};

// ========================
// HELPER: Get category icon
// ========================
function getCategoryIcon(category) {
  const cat = categoriesData.find(c => c.name === category);
  return cat ? cat.icon : "file-text";
}

// ========================
// HELPER: Get services by department ID
// ========================
function getServicesByDepartment(deptId) {
  return governmentData.filter(item => item.departmentId === deptId);
}

// ========================
// HELPER: Get services by category
// ========================
function getServicesByCategory(category) {
  return governmentData.filter(item => item.category === category);
}

// ========================
// HELPER: Get URL param
// ========================
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}