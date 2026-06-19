// 1. Full 60-Question Database
const questions = [
    // --- Table 1: E vs I ---
    { id: 1, text: "In a finance class, I feel comfortable sharing my opinion during a group discussion.", trait: "E", direction: 1 },
    { id: 2, text: "I usually understand a finance topic better after studying it quietly by myself first.", trait: "E", direction: -1 },
    { id: 3, text: "I would be comfortable explaining a simple banking product to a classmate.", trait: "E", direction: 1 },
    { id: 4, text: "I prefer reviewing numbers or notes alone before discussing them with a group.", trait: "E", direction: -1 },
    { id: 5, text: "In a group finance assignment, I can naturally help organize communication among members.", trait: "E", direction: 1 },

    // --- Table 2: S vs N ---
    { id: 6, text: "When learning a finance concept, I prefer clear examples with numbers before discussing the theory behind it.", trait: "S", direction: 1 },
    { id: 7, text: "I enjoy thinking about how banking, fintech, or investing may change in the future.", trait: "S", direction: -1 },
    { id: 8, text: "When reading about a company, I prefer starting with basic facts such as revenue, costs, and products.", trait: "S", direction: 1 },
    { id: 9, text: "I often wonder what larger trend may be behind a piece of financial news.", trait: "S", direction: -1 },
    { id: 10, text: "I feel more confident when a finance task has clear instructions and specific data.", trait: "S", direction: 1 },

    // --- Table 3: T vs F ---
    { id: 11, text: "When comparing two finance options, I prefer using clear criteria such as cost, risk, and benefit.", trait: "T", direction: 1 },
    { id: 12, text: "When discussing money-related decisions, I think people’s feelings and comfort level should be considered.", trait: "T", direction: -1 },
    { id: 13, text: "If the numbers do not support an idea, I am comfortable saying that the idea may not be suitable.", trait: "T", direction: 1 },
    { id: 14, text: "I try to avoid making others feel embarrassed when correcting a mistake in group work.", trait: "T", direction: -1 },
    { id: 15, text: "When reviewing a simple business case, I first ask whether the reasoning is logical.", trait: "T", direction: 1 },
    
    // --- Table 4: J vs P ---
    { id: 16, text: "Before starting a finance assignment, I prefer making a simple plan or checklist.", trait: "J", direction: 1 },
    { id: 17, text: "I can work comfortably when a group project changes direction after new information appears.", trait: "J", direction: -1 },
    { id: 18, text: "I like setting deadlines for each part of a report, presentation, or calculation task.", trait: "J", direction: 1 },
    { id: 19, text: "I prefer keeping several possible approaches open before choosing one final answer.", trait: "J", direction: -1 },
    { id: 20, text: "I feel more confident when I know exactly what needs to be submitted.", trait: "J", direction: 1 },
];

// 2. Comical Survey Options Mappings (Expressive Colors)
const options = [
    { label: "Nope!", value: -2, hoverBg: "#f87171", icon: "🙅‍♂️" },
    { label: "Kinda Disagree", value: -1, hoverBg: "#fca5a5", icon: "🤔" },
    { label: "Neutral", value: 0, hoverBg: "#cbd5e1", icon: "😐" },
    { label: "Kinda Agree", value: 1, hoverBg: "#86efac", icon: "🙂" },
    { label: "Absolutely!", value: 2, hoverBg: "#4ade80", icon: "🙌" }
];

// 3. Career Path Mapping
const careerMap = {
    "ISTJ": "Audit & Assurance", "ISFJ": "Banking Operations",
    "INFJ": "Finance Research", "INTJ": "Investment Research",
    "ISTP": "Fintech", "ISFP": "Client Support",
    "INFP": "Financial Education", "INTP": "Quantitative Analysis",
    "ESTP": "Brokerage", "ESFP": "Retail Banking",
    "ENFP": "Wealth Advisory", "ENTP": "Consulting",
    "ESTJ": "Corporate Finance", "ESFJ": "Retail Banking Support",
    "ENFJ": "Management Trainee", "ENTJ": "Investment Banking"
};

// 4. Personalized Career Descriptions
const careerDescriptions = {
    "ISTJ": "You demonstrate a strong preference for structured environments and logical decision-making. Careers in Audit, Tax, Accounting, and Compliance reward these traits because success relies heavily on accuracy, consistency, and professional standards.",
    "ISFJ": "You demonstrate a strong preference for reliability and supporting others through consistent execution. Banking Operations rewards these traits because success depends on attention to detail and ensuring transactions are completed correctly behind the scenes.",
    "INFJ": "You demonstrate a strong preference for thoughtful analysis and understanding the broader impact of decisions. Finance Research rewards this because success depends on curiosity, critical thinking, and the ability to turn information into meaningful insights.",
    "INTJ": "You demonstrate a strong preference for strategic thinking, independent analysis, and solving complex problems. Investment Research rewards this because success depends on identifying trends, evaluating risks, and forming evidence-based conclusions.",
    "ISTP": "You demonstrate a strong preference for practical problem-solving and adaptability. Fintech rewards these traits because success depends on curiosity and combining finance, technology, and business innovation to create new products.",
    "ISFP": "You demonstrate a strong preference for empathy, flexibility, and helping others. Client Support rewards these traits because success depends on building relationships, clear communication, and creating positive customer experiences.",
    "INFP": "You demonstrate a strong preference for understanding different perspectives and creating positive impact. Financial Education rewards this because success depends on empathy and empowering individuals to make better financial decisions.",
    "INTP": "You demonstrate a strong preference for logical reasoning and intellectual curiosity. Quantitative Analysis rewards these traits because success depends on mathematics, technology, data analytics, and modeling complex systems.",
    "ESTP": "You demonstrate a strong preference for action, adaptability, and learning through real-world experience. Brokerage rewards these traits because success depends on quick thinking, interacting with clients, and navigating fast-paced financial markets.",
    "ESFP": "You demonstrate a strong preference for energy, enthusiasm, and engaging with people in fast-paced environments. Retail Banking rewards these traits because success depends on communication, relationship-building, and providing excellent customer service.",
    "ENFP": "You demonstrate a strong preference for exploring ideas and finding creative ways to help others. Wealth Advisory rewards these traits because success depends on relationship management, strategic planning, and deeply understanding client needs.",
    "ENTP": "You demonstrate a strong preference for innovation, curiosity, and exploring new possibilities. Consulting rewards these traits because success depends on analytical thinking, adaptability, and generating practical business solutions for clients.",
    "ESTJ": "You demonstrate a strong preference for organization, leadership, and achieving tangible results. Corporate Finance rewards these traits because success depends on structured planning, financial control, and driving long-term business performance.",
    "ESFJ": "You demonstrate a strong preference for harmony, responsibility, and organizing people. Retail Banking Support rewards these traits because success depends on teamwork, clear communication, and ensuring smooth customer operations.",
    "ENFJ": "You demonstrate a strong preference for inspiring others and driving positive change. Management Trainee programs reward these traits because success depends on initiative, leadership potential, and working effectively with diverse groups.",
    "ENTJ": "You demonstrate a strong preference for leadership, strategic thinking, and achieving challenging goals. Investment Banking rewards these traits because success depends on analytical ability, resilience, and performing under high pressure."
};

// --- NEW DATA ADDITIONS FROM REPORT DATABASE (INTEGRATED WITH SAPP LINKS & SOURCES) ---
const careerDetailedReport = {
    "ISTJ": {
        looksLike: "Reviewing financial files, assessing organizational workflows, examining internal controls, testing statements for compliance, and identifying anomalies.",
        strengths: ["Dependable & responsible under strict deadlines", "Systematic approach to logical data verification", "Exceptional focus on granular structural details"],
        challenges: ["Working within highly ambiguous instructions", "Presenting financial details storytelling-style to non-finance teams"],
        skills: ["Advanced Excel & Power BI", "Financial Statement Analysis", "Internal Controls & Risk Audit Frameworks"],
        certifications: [
            `<a href="https://sapp.edu.vn/bai-viet-acca/acca-la-gi-co-hoi-nghe-nghiep-tu-viec-hoc-acca/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">ACCA (Association of Chartered Certified Accountants)</a>`,
            `<a href="https://sapp.edu.vn/certifr-la-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CertIFRS (International Financial Reporting Standards)</a>`,
            "CPA Vietnam & MOS Excel Foundation"
        ],
        roadmap: ["Years 1-2: Master accounting fundamentals & Excel metrics.", "Years 2-3: Complete foundational ACCA modules; network at career fairs.", `Years 3-4: Boost performance with the <a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">SAPP Big 4 Fast-Track Preparation Course</a> to secure top-tier roles.`],
        employers: [`<a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">Big Four Firms (Deloitte, EY, PwC, KPMG)</a>`, "Mid-Tier (Grant Thornton, Mazars, RSM)", "Corporate Finance Departments (Vinamilk, Masan, Vingroup)"],
        sources: [
            { text: "O*NET Online: Accountants and Auditors", link: "https://www.onetonline.org/link/summary/13-2011.00" },
            { text: "U.S. Bureau of Labor Statistics: Accountants and Auditors", link: "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm" },
            { text: "ACCA Global: Qualification Structure", link: "https://www.accaglobal.com/" },
            { text: "Deloitte: Audit & Assurance Careers", link: "https://www.deloitte.com/" }
        ]
    },
    "ISFJ": {
        looksLike: "Processing secure customer transactions behind the scenes, tracking clear settlement operations, processing loans, and monitoring banking operational risks.",
        strengths: ["Highly process-oriented with transaction records", "Patient & methodical with critical daily workflows", "Collaborative mindset focused on operational stability"],
        challenges: ["Coping with sudden software configuration updates", "Taking rapid risks with zero data validation"],
        skills: ["Payment Clearing Systems", "Operational Risk Management", "Workflow Mapping & Process Verification"],
        certifications: ["Banking Operations Specialized Credentials", "Internal Risk & AML Control Frameworks", "MOS Excel Mastery (Note: No direct SAPP course match for branch operational frameworks)"],
        roadmap: ["Years 1-2: Learn commercial banking services and core workflows.", "Years 2-3: Participate in local financial compliance workshops.", "Years 3-4: Complete an operational back-office or branch support internship."],
        employers: ["State-Owned Banks (Vietcombank, BIDV, VietinBank)", "Commercial Banks (Techcombank, MB Bank, ACB)", "Fintech Infrastructure (MoMo, VNPay, ZaloPay)"],
        sources: [
            { text: "O*NET Online: Banking and Financial Operations", link: "https://www.onetonline.org" },
            { text: "Basel Committee: Sound Management of Operational Risk", link: "https://www.bis.org" },
            { text: "State Bank of Vietnam (SBV): Operations Guidance", link: "https://www.sbv.gov.vn" },
            { text: "U.S. Bureau of Labor Statistics: Financial Clerks", link: "https://www.bls.gov/ooh" }
        ]
    },
    "INFJ": {
        looksLike: "Synthesizing market data patterns, reading long policy regulations, tracking macroeconomics, and predicting system-wide financial inclusion trends.",
        strengths: ["Deep intellectual curiosity regarding system interactions", "Recognizing complex structural trends early", "Communicating tricky context topics clearly"],
        challenges: ["Suffering from analysis paralysis due to perfectionism", "Over-focusing on long-term vision over short-term actions"],
        skills: ["Industry and Macroeconomic Analysis", "Market Research Analytics", "Data Storytelling & Synthesis"],
        certifications: [
            `<a href="https://sapp.edu.vn/cfa-la-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CFA (Chartered Financial Analyst) Level 1 Track</a>`,
            "Market Intelligence Accreditations"
        ],
        roadmap: ["Years 1-2: Join economics debate/research clubs and build vocabulary.", "Years 2-3: Draft practice market briefs and learn data visualization.", `Years 3-4: Prepare via the <a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">SAPP Big 4 Prep Program</a> to pivot into global corporate strategy roles.`],
        employers: ["Research Divisions (SSI Research, Vietcap Research, FiinGroup)", `Global Strategy Advisories & <a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">Big 4 Advisory Arms</a>`, "Regulators & Think Tanks (State Bank of Vietnam)"],
        sources: [
            { text: "CFA Institute: Career Resources for Research Analysts", link: "https://www.cfainstitute.org" },
            { text: "World Economic Forum: Future of Jobs Report", link: "https://www.weforum.org" },
            { text: "O*NET Online: Market Research Analysts", link: "https://www.onetonline.org" },
            { text: "U.S. Bureau of Labor Statistics: Market Research Analysts", link: "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm" }
        ]
    },
    "INTJ": {
        looksLike: "Evaluating corporate valuations, monitoring portfolio risks, analyzing balance sheet mechanics, and publishing actionable buy/sell equity reports.",
        strengths: ["Highly strategic, independent investment logic", "Objective, metrics-driven trend forecasting", "Comfortable processing complex risk frameworks"],
        challenges: ["Navigating collaborative tasks packed with groupthink", "Compromising analytical accuracy for speed"],
        skills: ["Financial Modeling & Valuation", "Equity Research Report Writing", "Quantitative Industry Matrixing"],
        certifications: [`<a href="https://sapp.edu.vn/cfa-la-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CFA (Chartered Financial Analyst) Program</a>`, "Advanced Valuation & Financial Modeling Accreditations"],
        roadmap: ["Years 1-2: Target financial modeling mastery & global news tracking.", "Years 2-3: Enter student valuation hackathons and clear CFA Level 1.", "Years 3-4: Intern at an asset management or investment research desk."],
        employers: ["Fund Managers (Dragon Capital, VinaCapital)", "Securities Desks (SSI, Vietcap, VNDirect Securities)", "Boutique Investment Advisory Firms"],
        sources: [
            { text: "CFA Institute: Research Analyst Career Guide", link: "https://www.cfainstitute.org" },
            { text: "Corporate Finance Institute (CFI): Equity Research", link: "https://corporatefinanceinstitute.com" },
            { text: "O*NET Online: Financial Analysts", link: "https://www.onetonline.org/link/summary/13-2051.00" },
            { text: "U.S. Bureau of Labor Statistics: Financial Analysts", link: "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm" }
        ]
    },
    "ISTP": {
        looksLike: "Designing customized payment APIs, verifying automated algorithmic processes, tracking alternative metrics data, and building business fintech products.",
        strengths: ["Adaptive problem-solving during code/logic failures", "Combines accounting logic with technical tools", "Highly independent project developer"],
        challenges: ["Handling corporate red tape and slow-moving processes", "Drafting massive blocks of theoretical reports"],
        skills: ["SQL Data Architecture", "Python or R scripting basics", "Fintech Product Logic & Pipelines"],
        certifications: ["Google Data Analytics Professional Cert", "SQL Masterclasses (Note: No direct SAPP course match for tech/software engineering stacks)"],
        roadmap: ["Years 1-2: Study technical database setups alongside basic finance.", "Years 2-3: Join hackathons or design alternative-lending case projects.", "Years 3-4: Secure internships at dynamic tech hubs or sandbox departments."],
        employers: ["Top-Tier Fintechs (MoMo, ZaloPay, VNPay)", "Digital Bank Hubs (Timo, TPBank Digital Innovation)", "Tech Consulting Tech-Labs"],
        sources: [
            { text: "World Economic Forum: Future of Jobs Report", link: "https://www.weforum.org" },
            { text: "Vietnam Fintech Association (VFCA): Industry Reports", link: "https://fintech.org.vn" },
            { text: "LinkedIn Workforce & Fintech Job Market Reports", link: "https://www.linkedin.com" },
            { text: "Google Data Analytics Professional Certificate", link: "https://grow.google" }
        ]
    },
    "ISFP": {
        looksLike: "Managing customer accounts, troubleshooting priority relationship challenges, interpreting specialized service requests, and onboarding premium bank partners.",
        strengths: ["Natural empathetic listening style", "Highly flexible and responsive under stressful client queries", "Builds enduring personal trust and loyalty"],
        challenges: ["Enforcing strict technical corporate contracts", "Working inside cold, isolated back-office environments"],
        skills: ["Client Relationship Optimization", "Escalation Resolution Strategies", "Core Bank Product Mechanics"],
        certifications: ["Wealth Management Basics Tracks", "Customer Service Excellence Accreditations (Note: No direct SAPP course match for frontline hospitality/CS tracks)"],
        roadmap: ["Years 1-2: Improve presentation warmth and public speaking skills.", "Years 2-3: Volunteer for student hospitality or club partnership leads.", "Years 3-4: Intern in Retail Client relations, Onboarding, or Sales Supp."],
        employers: ["Commercial Bank Priority Lounges (Techcombank Priority, MB Private)", "Foreign Banks (HSBC, Standard Chartered)", "Fintech Client Success Divisions"],
        sources: [
            { text: "O*NET Online: Customer Service Representatives", link: "https://www.onetonline.org" },
            { text: "U.S. Bureau of Labor Statistics: Customer Service Reps", link: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" },
            { text: "Customer Experience Professionals Association (CXPA)", link: "https://www.cxpa.org" },
            { text: "LinkedIn Workforce Reports: Customer Success Skills", link: "https://www.linkedin.com" }
        ]
    },
    "INFP": {
        looksLike: "Developing personal finance modules, creating accessible budgeting tools, teaching financial literacy workshops, and managing ESG sustainability programs.",
        strengths: ["Deep motivation to drive real-world socioeconomic value", "Empathetic, clear communication of complicated money topics", "Creative alternative program development"],
        challenges: ["Coping with hyper-competitive corporate sales environments", "Making purely cut-throat financial decisions"],
        skills: ["Curriculum & Educational Planning", "Financial Literacy Campaign Strategy", "Public Workshop Presentation"],
        certifications: ["Personal Wealth Advisor Credentials", "ESG & Sustainability Impact Accreditations (Note: No direct SAPP course match for non-profit/social literacy advocacy)"],
        roadmap: ["Years 1-2: Design simple budgeting infographics for student clubs.", "Years 2-3: Lead educational charity initiatives or run literacy webinars.", "Years 3-4: Intern at non-profit funds, personal apps, or corporate ESG desks."],
        employers: ["Educational Apps (Simplize, Vietstock Media)", "Impact Desks (Fintech Literacy Frameworks, MoMo, Timo)", "Socioeconomic NGOs & Sustainable Micro-finance Desks"],
        sources: [
            { text: "OECD: International Network on Financial Education", link: "https://www.oecd.org/financial/education" },
            { text: "National Financial Educators Council", link: "https://www.financialeducatorscouncil.org" }
        ]
    },
    "INTP": {
        looksLike: "Writing complex pricing scripts, calculating historical volatility indices, processing vast alternative data lakes, and engineering mathematical trading models.",
        strengths: ["Flawless mathematical reasoning and logic", "Deeply enjoys processing highly experimental datasets", "Spots systemic anomalies that others overlook"],
        challenges: ["Explaining complex code structures to non-technical boards", "Adhering to repetitive administrative check-ins"],
        skills: ["Quantitative Data Engineering (Python / R)", "Statistical Volatility Analysis", "Algorithmic Architecture Concepts"],
        certifications: [`<a href="https://sapp.edu.vn/cfa-la-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CFA (Chartered Financial Analyst) Level 1</a>`, "FRM (Financial Risk Manager) Starter Track"],
        roadmap: ["Years 1-2: Master advanced statistics, calculus, and programming.", "Years 2-3: Build custom trading scripts and clean public datasets.", "Years 3-4: Intern inside automated trading houses or central risk labs."],
        employers: ["Quantitative Hedge Funds & Proprietary Trading Hubs", "Risk Modeling Desks (Techcombank, VPBank)", "Data Science Consultancies (McKinsey Analytics)"],
        sources: [
            { text: "CFA Institute: Quantitative Methods & Research Careers", link: "https://www.cfainstitute.org" },
            { text: "GARP: FRM Program Info", link: "https://www.garp.org" },
            { text: "World Economic Forum: Future of Jobs Report", link: "https://www.weforum.org" },
            { text: "O*NET Online: Financial Analysts & Quant Occupations", link: "https://www.onetonline.org" }
        ]
    },
    "ESTP": {
        looksLike: "Executing rapid market trades, analyzing immediate charting signals, pitching market views to active traders, and navigating volatile trading floors.",
        strengths: ["Instant decision-making under fast, changing market pressures", "High confidence during high-stakes corporate negotiation", "Exceptional commercial intuition and street-smarts"],
        challenges: ["Sitting through extended multi-month strategy timelines", "Writing long-winded technical report text documents"],
        skills: ["Technical Analysis & Chart Dynamics", "Client Sales & Negotiation Tactics", "Real-Time Securities Compliance"],
        certifications: ["State Securities Commission (SSC) Licensing", "Advanced Financial Trading Accreditations (Note: No direct SAPP course match for retail stock charting or technical trading)"],
        roadmap: ["Years 1-2: Track live market updates and manage a paper portfolio.", "Years 2-3: Join mock stock trading contents and hone pitching skills.", "Years 3-4: Secure an internship at a highly active stock brokerage desk."],
        employers: ["Top Securities Brokerages (SSI, VNDirect, HSC Securities)", "Commodities & FX Trading Desks", "Independent Proprietary Trading Shops"],
        sources: [
            { text: "FINRA Career Resources", link: "https://www.finra.org" },
            { text: "O*NET Online: Securities and Financial Products Sales Agents", link: "https://www.onetonline.org" }
        ]
    },
    "ESFP": {
        looksLike: "Onboarding new personal accounts, explaining mortgage rates to retail clients, leading community sales campaigns, and driving branch deposits.",
        strengths: ["Radiant enthusiasm that immediately engages prospects", "Phenomenal verbal presentation skills", "Thrives in active, relationship-heavy settings"],
        challenges: ["Sitting for hours auditing static backend error logs", "Adhering strictly to isolated spreadsheet duties"],
        skills: ["Consumer Product Structuring", "High-Conversion Sales Conversion", "Interpersonal Communication Mastery"],
        certifications: ["Retail Banking Professional Tracks", "Relationship Management Certifications (Note: No direct SAPP course match for high-volume retail branch sales)"],
        roadmap: ["Years 1-2: Excel in front-facing customer service roleplays or club sales.", "Years 2-3: Master retail product insights (cards, insurance, loans).", "Years 3-4: Intern at a high-volume retail branch as a Client Associate."],
        employers: ["Retail Heavy Commercial Banks (VPBank, Techcombank, ACB)", "Consumer Finance Entities (FE Credit, Home Credit)", "State Bank Retail Networks"],
        sources: [
            { text: "FINRA Career Resources", link: "https://www.finra.org" },
            { text: "CFA Institute Career Resources", link: "https://www.cfainstitute.org" },
            { text: "O*NET Online: Financial Services Sales Agents", link: "https://www.onetonline.org" },
            { text: "U.S. Bureau of Labor Statistics: Sales Agents", link: "https://www.bls.gov/ooh" }
        ]
    },
    "ENFP": {
        looksLike: "Drafting holistic multi-generation wealth plans, tracking bespoke global funds, advising high-net-worth families, and presenting alternative asset ideas.",
        strengths: ["Creative problem-solver for complex family legacy issues", "Master of relationship management and personal alignment", "Enthusiastic and persuasive long-term strategist"],
        challenges: ["Managing highly repetitive transactional paperwork details", "Coping with brief, volatile down-market quarters without stress"],
        skills: ["High-Net-Worth Portfolio Asset Allocation", "Holistic Financial Planning", "Tax & Trust Structure Strategy"],
        certifications: ["Certified Financial Planner (CFP) Track", "ChFC / Wealth Management Designations (Note: No direct SAPP course match for family trust layout planning)"],
        roadmap: ["Years 1-2: Build foundations in tax rules, insurance, and equities.", "Years 2-3: Intern at priority banking sales support and build a LinkedIn presence.", "Years 3-4: Secure a front-facing advisory role path under an elite Private Banker."],
        employers: ["Priority Units (Techcombank Priority, MB Private, VPBank Diamond)", "Foreign Wealth Offices (HSBC Premier, UOB Privilege)", "Boutique Multi-Family Wealth Advisories"],
        sources: [
            { text: "OECD: International Network on Financial Education (INFE)", link: "https://www.oecd.org/financial/education" },
            { text: "World Economic Forum: Future of Jobs Report", link: "https://www.weforum.org" },
            { text: "CFP Board: Financial Planning Career Resources", link: "https://www.cfp.net" },
            { text: "National Financial Educators Council", link: "https://www.financialeducatorscouncil.org" }
        ]
    },
    "ENTP": {
        looksLike: "Deconstructing failed commercial strategies, pitching growth frameworks to client executives, modeling synergy projections, and resolving operational crises.",
        strengths: ["Genius level conceptual solution generation", "Quick adaptability across multiple client industries", "Thrives when building creative alternative options"],
        challenges: ["Polishing highly standardized formatting requirements", "Sticking around for long-term project operational rollouts"],
        skills: ["Corporate Strategy Architecture", "Business Model Innovation Analysis", "Executive PowerPoint Presenting"],
        certifications: ["Management Consultant Professional Badges", "Agile / Scrum Project Certification Tracks"],
        roadmap: ["Years 1-2: Enter prestigious national corporate case competitions.", "Years 2-3: Lead strategic club turns and clear advanced presentation courses.", `Years 3-4: Prepare with the <a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">SAPP Big 4 Preparation Program</a> to master case interviews.`],
        employers: ["Strategy Consultancies (McKinsey, BCG, Bain & Company)", `Deal Advisory Teams (<a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">PwC Deals, EY Strategy, KPMG Deal Advisory</a>)`, "Internal Corporate Strategy Groups"],
        sources: [
            { text: "McKinsey Careers", link: "https://www.mckinsey.com/careers" },
            { text: "BCG Careers", link: "https://careers.bcg.com" },
            { text: "Bain Careers", link: "https://www.bain.com/careers" },
            { text: "O*NET Online: Management Analysts", link: "https://www.onetonline.org/link/summary/13-1111.00" }
        ]
    },
    "ESTJ": {
        looksLike: "Enforcing internal corporate budgets, preparing performance variance updates, optimizing business capital allocation, and driving departmental targets.",
        strengths: ["Exceptional structural planning and execution leadership", "Enforces clear accountability metrics cleanly", "Highly practical and result-oriented operational tracking"],
        challenges: ["Managing radical strategy pivots lacking clear data", "Navigating highly creative, unstructured creative spaces"],
        skills: ["Corporate Budgeting & Forecasting", "FP&A Variance Analysis", "Strategic Resource Planning"],
        certifications: [
            `<a href="https://sapp.edu.vn/cma-la-chung-chi-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CMA (Certified Management Accountant)</a>`,
            `<a href="https://sapp.edu.vn/gia-tri-danh-vi-cgma/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CGMA Designation Track</a>`,
            `<a href="https://sapp.edu.vn/bai-viet-acca/acca-la-gi-co-hoi-nghe-nghiep-tu-viec-hoc-acca/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">ACCA Strategy Modules</a>`
        ],
        roadmap: ["Years 1-2: Master data aggregation, corporate taxation rules, and Excel.", "Years 2-3: Apply for student treasury roles or manage large club accounts.", "Years 3-4: Intern inside Corporate Treasury or FP&A departments."],
        employers: ["MNC Corporate Hubs (Unilever Vietnam, FPT Corporation)", "FMCG Giants (Vinamilk, Masan Group, Sabeco)", "Heavy Industry Corporate Desks"],
        sources: [
            { text: "Association for Financial Professionals (AFP)", link: "https://www.afponline.org" },
            { text: "Corporate Finance Institute (CFI): Career Map", link: "https://corporatefinanceinstitute.com" },
            { text: "O*NET Online: Financial Analysts", link: "https://www.onetonline.org" },
            { text: "U.S. Bureau of Labor Statistics: Financial Analysts", link: "https://www.bls.gov/ooh" }
        ]
    },
    "ESFJ": {
        looksLike: "Coordinating inter-departmental training programs, optimizing service quality workflows, auditing customer complaints, and supporting operational compliance.",
        strengths: ["Creates incredible alignment and structural team harmony", "Deep sense of professional duty and execution care", "Flawless interpersonal organization style"],
        challenges: ["Executing strict, harsh cost-cutting recommendations", "Working inside completely isolated quantitative positions"],
        skills: ["Service Quality Metrics Optimization", "Cross-Functional Collaboration Management", "Operations Staff Coaching"],
        certifications: ["Service Operations Management Track", "Project Management Basics (CAPM) (Note: No direct SAPP course match for corporate customer care/HR administration metrics)"],
        roadmap: ["Years 1-2: Take coordination roles in student committees.", "Years 2-3: Host networking events and analyze banking support paths.", "Years 3-4: Intern in Customer Experience or Quality Management tracks."],
        employers: ["Commercial Bank Service Centers", "Corporate Operations Management Units", "Fintech Customer Quality Oversight Tracks"],
        sources: [
            { text: "O*NET Online: Personal Financial Advisors & Banking", link: "https://www.onetonline.org" },
            { text: "American Bankers Association Career Resources", link: "https://www.aba.com" },
            { text: "U.S. Bureau of Labor Statistics: Personal Financial Advisors", link: "https://www.bls.gov/ooh" },
            { text: "State Bank of Vietnam: Banking Sector Publications", link: "https://www.sbv.gov.vn" }
        ]
    },
    "ENFJ": {
        looksLike: "Rotating across multiple enterprise divisions, leading high-visibility cross-functional teams, driving strategic change management projects, and presenting to executives.",
        strengths: ["Inspirational leadership profile that builds group consensus", "Fast operational adaptability across varied job desks", "Clear structural strategic planning paired with empathy"],
        challenges: ["Taking purely objective data choices that upset team members", "Handling heavy, non-communicative solo analytics duties"],
        skills: ["Enterprise Project Management", "Executive Stakeholder Storytelling", "Strategic Innovation Planning"],
        certifications: ["PMP (Project Management Professional) Starter Track", "Agile/Scrum Frameworks (Note: No direct SAPP course match for generalized cross-departmental HR rotation paths)"],
        roadmap: ["Years 1-2: Run for high-level student government or club president posts.", "Years 2-3: Crack elite corporate case competitions and polish English.", "Years 3-4: Dominate elite Management Trainee assessment selections."],
        employers: ["Elite Management Trainee Pipelines (Unilever, Nestlé, FPT, Masan)", "Bank Leadership Tracks (Techcombank Future Leaders, Vietcombank MT)", "Conglomerate Rotation Hubs"],
        sources: [
            { text: "CFP Board: Career Center", link: "https://www.cfp.net" },
            { text: "CFA Institute Career Resources", link: "https://www.cfainstitute.org" },
            { text: "O*NET Online: Personal Financial Advisors", link: "https://www.onetonline.org/link/summary/13-2052.00" },
            { text: "U.S. Bureau of Labor Statistics: Personal Financial Advisors", link: "https://www.bls.gov/ooh/business-and-financial/personal-financial-advisors.htm" }
        ]
    },
    "ENTJ": {
        looksLike: "Building dynamic M&A deal valuation structures, pitching capital raises to corporate board executives, executing intense deal diligence, and managing transaction roadmaps.",
        strengths: ["Unrivaled ambition and resilience under extreme corporate stress", "Powerful analytical modeling paired with executive command", "Laser focused on closing major strategic operations targets"],
        challenges: ["Patience with sluggish internal compliance workflows", "Balancing brutal professional logic with team interpersonal feelings"],
        skills: ["Advanced M&A DCF Financial Valuation", "Deal Pitchbook Storytelling Architecture", "Strategic Transaction Due Diligence"],
        certifications: [
            `<a href="https://sapp.edu.vn/cfa-la-gi/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">CFA (Chartered Financial Analyst) Designation</a>`,
            "Investment Banking Corporate Valuation Badges"
        ],
        roadmap: ["Years 1-2: Maintain a near-perfect GPA while averaging 80-hour work weeks.", "Years 2-3: Master complex corporate modeling and build a boutique deal network.", `Years 3-4: Secure internships at top M&A desks; prepare via the <a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">SAPP Big 4 Prep Program</a> to clear advisory technical rounds.`],
        employers: ["Investment Banking Units (SSI, Vietcap, Techcombank IB, MB Bank IB)", `Global Deal Advisories (<a href="https://sapp.edu.vn/khoa-hoc-luyen-thi-big4-cap-toc/" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">PwC Deals, KPMG Deal Advisory</a>)`, "Private Capital Networks (Mekong Capital, VinaCapital)"],
        sources: [
            { text: "CFA Institute: Investment Banking Career Resources", link: "https://www.cfainstitute.org" },
            { text: "Corporate Finance Institute (CFI): Investment Banking", link: "https://corporatefinanceinstitute.com" },
            { text: "Mergers & Inquisitions: Career Guide", link: "https://mergersandinquisitions.com" },
            { text: "Unilever Future Leaders Programme", link: "https://careers.unilever.com" },
            { text: "Nestlé Management Trainee Programs", link: "https://www.nestle.com/careers" },
            { text: "World Economic Forum: Future of Jobs Report", link: "https://www.weforum.org" },
            { text: "O*NET Online: General and Operations Managers", link: "https://www.onetonline.org/link/summary/11-1021.00" }
        ]
    }
};

// 5. Outcome Icons & Avatars Setup
const resultAssets = {
    "ISTJ": { avatar: "MBTI/istj-avatar.png", careerIcon: "🔍" }, 
    "ISFJ": { avatar: "MBTI/isfj-avatar.png", careerIcon: "🏛️" },
    "INFJ": { avatar: "MBTI/infj-avatar.png", careerIcon: "💡" }, 
    "INTJ": { avatar: "MBTI/intj-avatar.png", careerIcon: "🧩" },
    "ISTP": { avatar: "MBTI/istp-avatar.png", careerIcon: "💻" }, 
    "ISFP": { avatar: "MBTI/isfp-avatar.png", careerIcon: "🤝" },
    "INFP": { avatar: "MBTI/infp-avatar.png", careerIcon: "📚" }, 
    "INTP": { avatar: "MBTI/intp-avatar.png", careerIcon: "📊" },
    "ESTP": { avatar: "MBTI/estp-avatar.png", careerIcon: "📈" }, 
    "ESFP": { avatar: "MBTI/esfp-avatar.png", careerIcon: "🏦" },
    "ENFP": { avatar: "MBTI/enfp-avatar.png", careerIcon: "💼" }, 
    "ENTP": { avatar: "MBTI/entp-avatar.png", careerIcon: "🗣️" },
    "ESTJ": { avatar: "MBTI/estj-avatar.png", careerIcon: "🏢" }, 
    "ESFJ": { avatar: "MBTI/esfj-avatar.png", careerIcon: "💸" },
    "ENFJ": { avatar: "MBTI/enfj-avatar.png", careerIcon: "🧑‍🏫" }, 
    "ENTJ": { avatar: "MBTI/entj-avatar.png", careerIcon: "🚀" }
};

// 6. System States
let currentIndex = 0;
let answers = {};
const container = document.getElementById("quiz-container");
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");

// 7. Transition View State
startBtn.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    setTimeout(() => {
        welcomeScreen.classList.add("display-none");
        quizScreen.classList.remove("display-none");
        renderQuiz();
        setTimeout(() => quizScreen.classList.add("active"), 50);
    }, 300); 
});

// --- NEW: History Logging Function ---
function saveToHistoryFile(mbtiType, traitScores, userAnswers, verificationSources) {
    let historyFile = JSON.parse(localStorage.getItem("FinGuide_History")) || [];
    
    const newEntry = {
        date: new Date().toLocaleString(),
        resultType: mbtiType,
        scores: traitScores,
        answers: userAnswers,
        evidenceBase: verificationSources
    };
    
    historyFile.push(newEntry);
    localStorage.setItem("FinGuide_History", JSON.stringify(historyFile));
    
    console.log("✅ Success: Quiz results and citations logged to History file!");
}

// 8. Phase 2: Render Comic Style Quiz Card
function renderQuiz() {
    const currentQ = questions[currentIndex];
    const progressPercent = (currentIndex / questions.length) * 100;

    let html = `
        <div class="progress-header">
            <span>Quiz Progress</span>
            <span>${currentIndex + 1}/${questions.length}</span>
        </div>
        <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
        </div>
        
        <div class="question-container">
            <h2 class="question-text">${currentQ.text}</h2>
        </div>
        
        <div class="options-container">
    `;

    options.forEach(opt => {
        html += `
            <button class="option-btn" 
                data-value="${opt.value}" 
                data-hoverbg="${opt.hoverBg}">
                ${opt.icon ? `<span>${opt.icon}</span>` : ''} ${opt.label}
            </button>
        `;
    });

    html += `
        </div>
        <div class="quiz-footer">
            ${currentIndex > 0 ? `<button class="back-btn" id="back-btn">⬅️ Back</button>` : `<div></div>`}
            <div class="footer-text">Let's find your corporate superpower! 🌟</div>
        </div>
    `;
    container.innerHTML = html;

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", (e) => {
            const hoverBg = e.target.getAttribute("data-hoverbg");
            e.target.style.backgroundColor = hoverBg;
        });

        btn.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "#ffffff";
        });

        btn.addEventListener("click", (e) => {
            const targetBtn = e.target.closest('.option-btn');
            const val = parseInt(targetBtn.getAttribute("data-value"));
            handleAnswer(val);
        });
    });

    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--; 
                renderQuiz();   
            }
        });
    }
}

// 9. Math Engine Matrix Sorting
function handleAnswer(value) {
    const currentQ = questions[currentIndex];
    const score = value * currentQ.direction;
    
    answers[currentQ.id] = { trait: currentQ.trait, score: score };

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuiz();
    } else {
        renderResults();
    }
}

// 10. Phase 3: Display Score Results & Interactive Accordion Report
function renderResults() {
    const totals = { E: 0, S: 0, T: 0, J: 0 };
    
    // --- UPDATED: Answer Frequency & History Threshold Checks ---
    const scoreCounts = {};
    const totalQuestions = questions.length;
    const warningThreshold = totalQuestions * 0.70; // 70% triggers warning banner
    const blockHistoryThreshold = totalQuestions * 0.85; // 85% blocks history saving
    
    let maxSameAnswerCount = 0;

    Object.values(answers).forEach(ans => {
        totals[ans.trait] += ans.score;
        
        scoreCounts[ans.score] = (scoreCounts[ans.score] || 0) + 1;
        
        if (scoreCounts[ans.score] > maxSameAnswerCount) {
            maxSameAnswerCount = scoreCounts[ans.score];
        }
    });

    let warningBannerHTML = "";
    for (const [scoreStr, count] of Object.entries(scoreCounts)) {
        if (count >= warningThreshold) {
            const scoreVal = parseInt(scoreStr);
            const overusedOption = options.find(opt => opt.value === scoreVal);
            const percentage = Math.round((count / totalQuestions) * 100);
            
            warningBannerHTML = `
                <div class="warning-banner">
                    <span class="warning-icon">🚨</span>
                    <div>
                        <strong>Whoa there, speedrunner!</strong><br>
                        You answered <em>"${overusedOption.label}"</em> for ${percentage}% of the quiz. 
                        Your career match might not be super accurate. Next time, try to be a bit more decisive!
                    </div>
                </div>
            `;
            break; 
        }
    }

    let type = "";
    type += totals.E >= 0 ? "E" : "I";
    type += totals.S >= 0 ? "S" : "N";
    type += totals.T >= 0 ? "T" : "F";
    type += totals.J >= 0 ? "J" : "P";

    const career = careerMap[type];
    const description = careerDescriptions[type]; 
    const detail = careerDetailedReport[type];
    const assets = resultAssets[type];

    // --- NEW: 85% Spam Check for History Logging ---
    if (maxSameAnswerCount < blockHistoryThreshold) {
        saveToHistoryFile(type, totals, answers, detail.sources || []);
    } else {
        console.warn("🛑 History Blocked: User answered the same option for >= 85% of the quiz.");
    }

    // Expand the layout width for the detailed data report
    const cardComic = container.closest('.card-comic');
    if (cardComic) {
        cardComic.style.maxWidth = "750px";
    }

    const isHTMLIcon = assets.careerIcon.includes("<img");
    const iconRenderLayout = isHTMLIcon 
        ? assets.careerIcon 
        : `<span class="career-icon-emoji">${assets.careerIcon}</span>`;

    container.innerHTML = `
        <div class="results-page">
            ${warningBannerHTML}
            
            <img src="${assets.avatar}" alt="${type} Avatar" class="avatar-result-img" onerror="this.src='https://api.api-ninjas.com/v1/randomimage?category=abstract'" />
            
            <p class="small-text">Wow! You are an</p>
            <h2 class="type-result">${type}</h2>
            
            <h1 class="career-title">Your ultimate career match:</h1>
            <div class="career-icon-container">
                ${iconRenderLayout}
            </div>
            <h2 class="career-result">${career}</h2>
            
            <p class="recommendation-text">${description}</p>
            
            ${calculatePercentages(totals)}
            
            <div class="comic-accordion">
                
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>🎯 What This Career Looks Like</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <p>${detail.looksLike}</p>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>💪 Strengths & Challenges</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <strong>Your Potential Strengths:</strong>
                        <ul class="comic-list">
                            ${detail.strengths.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                        <strong style="display:block; margin-top:12px;">Growth & Development Challenges:</strong>
                        <ul class="comic-list">
                            ${detail.challenges.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>🛠️ Core Skills & Certifications</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <strong>Skills to Prioritize:</strong>
                        <ul class="comic-list">
                            ${detail.skills.map(sk => `<li>${sk}</li>`).join('')}
                        </ul>
                        <strong style="display:block; margin-top:12px;">Recommended Certifications & Course Tracks:</strong>
                        <ul class="comic-list">
                            ${detail.certifications.map(crt => `<li>${crt}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>🗺️ Your Suggested Student Roadmap</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <ul class="comic-list-numbered">
                            ${detail.roadmap.map(rm => `<li>${rm}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>🏢 Target Employers in Vietnam</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <ul class="comic-list">
                            ${detail.employers.map(emp => `<li>${emp}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>📚 Evidence Base & Research Sources</span>
                        <span class="accordion-icon">➕</span>
                    </div>
                    <div class="accordion-content">
                        <p style="margin-bottom: 10px; font-size: 14px; color: #64748b;">
                            This career matching structure was built utilizing standardized curriculum paths and occupational profiles from the following systems:
                        </p>
                        <ul class="comic-list">
                            ${detail.sources ? detail.sources.map(src => `
                                <li style="margin-bottom: 8px;">
                                    <a href="${src.link}" target="_blank" rel="noopener noreferrer" class="comic-link-source">
                                        ${src.text} 🌐
                                    </a>
                                </li>
                            `).join('') : '<li>General Financial Career Profiles</li>'}
                        </ul>
                    </div>
                </div>

            </div>
            
            <button class="action-btn" style="margin-top:25px;" onclick="window.location.reload()">Do it again! 🔄</button>
        </div>
    `;
}

// Global Accordion Handler (Bulletproof Binding)
window.toggleAccordion = function(headerElement) {
    const content = headerElement.nextElementSibling;
    const icon = headerElement.querySelector('.accordion-icon');
    
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.innerText = "➕";
        headerElement.style.backgroundColor = "";
    } else {
        content.style.display = "block";
        icon.innerText = "➖";
        headerElement.style.backgroundColor = "#ffedd5";
    }
}

// 11. Core Mathematical Multi-Trait Percentage Matrix 
function calculatePercentages(totals) {
    const countE = questions.filter(q => q.trait === "E").length || 5;
    const countS = questions.filter(q => q.trait === "S").length || 5;
    const countT = questions.filter(q => q.trait === "T").length || 5;
    const countJ = questions.filter(q => q.trait === "J").length || 5;

    const pctE = Math.round(((totals.E + (countE * 2)) / (countE * 4)) * 100);
    const pctI = 100 - pctE;

    const pctS = Math.round(((totals.S + (countS * 2)) / (countS * 4)) * 100);
    const pctN = 100 - pctS;

    const pctT = Math.round(((totals.T + (countT * 2)) / (countT * 4)) * 100);
    const pctF = 100 - pctT;

    const pctJ = Math.round(((totals.J + (countJ * 2)) / (countJ * 4)) * 100);
    const pctP = 100 - pctJ;

    return `
        <div class="trait-breakdown-container">
            <h3 class="trait-breakdown-title">Your Trait Breakdown</h3>
            
            <div class="trait-row">
                <div class="trait-label ${pctE >= 50 ? 'dominant' : ''}">Extravert (E)</div>
                <div class="trait-bar-wrapper">
                    <div class="bar-left" style="width: ${pctE}%">${pctE}%</div>
                    <div class="bar-right" style="width: ${pctI}%">${pctI}%</div>
                </div>
                <div class="trait-label ${pctI > 50 ? 'dominant' : ''}" style="text-align: right;">(I) Introvert</div>
            </div>

            <div class="trait-row">
                <div class="trait-label ${pctS >= 50 ? 'dominant' : ''}">Sensing (S)</div>
                <div class="trait-bar-wrapper">
                    <div class="bar-left" style="width: ${pctS}%">${pctS}%</div>
                    <div class="bar-right" style="width: ${pctN}%">${pctN}%</div>
                </div>
                <div class="trait-label ${pctN > 50 ? 'dominant' : ''}" style="text-align: right;">(N) Intuition</div>
            </div>

            <div class="trait-row">
                <div class="trait-label ${pctT >= 50 ? 'dominant' : ''}">Thinking (T)</div>
                <div class="trait-bar-wrapper">
                    <div class="bar-left" style="width: ${pctT}%">${pctT}%</div>
                    <div class="bar-right" style="width: ${pctF}%">${pctF}%</div>
                </div>
                <div class="trait-label ${pctF > 50 ? 'dominant' : ''}" style="text-align: right;">(F) Feeling</div>
            </div>

            <div class="trait-row">
                <div class="trait-label ${pctJ >= 50 ? 'dominant' : ''}">Judging (J)</div>
                <div class="trait-bar-wrapper">
                    <div class="bar-left" style="width: ${pctJ}%">${pctJ}%</div>
                    <div class="bar-right" style="width: ${pctP}%">${pctP}%</div>
                </div>
                <div class="trait-label ${pctP > 50 ? 'dominant' : ''}" style="text-align: right;">(P) Prospecting</div>
            </div>
        </div>
    `;
}
