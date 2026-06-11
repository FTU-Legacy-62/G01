## Product Name

FinGuide

## Code

G01

## Link repo

(https://github.com/FTU-Legacy-62/G01)

## Link demo

(https://ftu-legacy-62.github.io/G01/)

## Problem statement

University students majoring in or interested in Finance have little to no knowledge about career opportunities in Finance, difficulty in finding information and what suits them.

Financial education center have difficulties connect with people with no experience or knowledge about Finance, Banking, Auditing.

Feeling lost or uncertain about choosing an academic major, their first job or planning a long-term study roadmap students are major concerns for university freshers.

## Target users

University freshers interested in Finance.

## When will they use FinGuide:

When feeling lost or uncertain about choosing an academic major or their first job.

When planning a long-term study roadmap (deciding which professional certification to pursue).

During career orientation events, industry workshops, or job fairs hosted by SAPP Academy or universities.

## What the Product Currently Does

Personality Assessment:
Allows users to take a 60-question situational test tailored to finance/accounting contexts to calculate trait scores across four spectrums (E/I, S/N, T/F, J/P) and aggregates scores to classify the user into one of the 16 MBTI personality types.

Customized Career Report:
Matches the user with the most suitable finance career path (e.g., INTJ matches with Investment Research, ESFP matches with Retail Banking).
Provides specific breakdowns including "What the job looks like", "Strengths", and "Challenges".

Roadmap & Educational Recommendations (SAPP Integration):
Directly links the suggested career paths to specific SAPP courses and certifications (CFA, ACCA, CGMA, CMA, Big 4 Fast-Track) along with a 4-year student roadmap and target employers in Vietnam.

## User flow

1. Open Product: The user accesses the FinGuide web app, views the engaging title, and clicks the "Start" button on the Welcome Screen.
2. Take the Quiz: The user reads through financial/accounting situational questions sequentially, clicking 1 of 5 expressive option buttons. The top progress bar advances from 0% to 100%.
3. Background Processing: The user clicks the option for the 20th question, JavaScript processes the math models (aggregating scores, classifying codes, calculating percentages, and building HTML strings) instantly in the background without reloading the page.
4. View Results: The dashboard automatically unveil the comprehensive report: the 4-letter MBTI code, a comic-style avatar, the ultimate matching finance title, and chunky side-by-side horizontal Trait Breakdown charts (Blue/Pink).
5. Deep Exploration: The user expands interactive drop-down Accordions to digest the "4-Year Student Roadmap", "Strengths & Challenges", explores embedded SAPP course hyperlinks, or clicks "Do it again!" to reset the state and restart.

## Input

Quiz Interactions: User selections on a 5-point Likert scale (ranging from "Nope" [-2] to "Absolutely" [+2]) for each of the 20 questions.
UI Flow Data: User clicks to toggle and expand detailed report sections (Accordions) to read specific career insights.

## Process

Scoring Matrix: Each question in the 20-item database is assigned to a specific personality spectrum (E/I, S/N, T/F, J/P) and carries a predetermined weight direction (direction: 1 or -1). When a user selects an option (-2 to +2), the dynamic score calculated is: Selection * Direction.

MBTI Classification: The system aggregates total scores for each trait group. If the cumulative score is >= 0, the dominant positive trait (E, S, T, or J) is assigned. If the score is < 0, the negative trait (I, N, F, or P) is selected instead. These four final letters concatenate into a unified MBTI code (e.g., ISTJ, ENTJ).

Percentage Normalization Algorithm (Trait Breakdown): To feed the horizontal progress bars, linear raw scores are converted into a readable 0% - 100% scale using a mathematical proportion formula based on the maximum possible score per trait.

SAPP Education Data Mapping: The system automatically injects HTML hyperlinks pointing directly to corresponding professional training tracks at SAPP Academy (ACCA, CFA, CMA, CGMA, Big 4 Fast-Track). If a career path lacks a matching course, it seamlessly skips the link with an explicit note.

## Output

Personality Classifier:
Pinpoints exactly 1 of the 16 MBTI personality groups paired with an exclusive illustrative visual avatar.

Finance Career Profile:
Comprehensive textual insights mapping out a realistic "day-in-the-life" job overview, clean bullet points detailing Strengths & Development Challenges, and priority professional skills.

Actionable Student Roadmap:
A step-by-step 4-year strategic timeline (Freshman-Sophomore, Junior, Senior phases) tailored for university students.

Educational Hyperlinks: Bold, highly visible color-coded links seamlessly embedded in text components, channeling users to official SAPP Academy course/certification landing pages.

## Key Design Decision

Why choose this problem and target audience?
Economics and Finance students in Vietnam often choose their majors based on generalized hype or peer trends, leaving them confused about actual corporate duties post-graduation. This tool mitigates early career mismatch right from the university level.

Why choose an MBTI-like quiz combined with a Comic Book interface?
Traditional corporate assessments and career tests are often dry, rigid, and overly academic, which can easily intimidate younger audiences or make them disengaged.
Pairing a highly recognizable, relatable framework like MBTI with a vibrant, comic-book look (thick black strokes, high-contrast palettes, and expressive emojis) transforms a serious career evaluation into a fun, gamified journey. This dynamic approach effectively lowers the psychological barrier to entry, making the self-discovery process feel welcoming, fun, and significantly more friendly and approachable for freshers who are just starting to navigate the corporate world.

Why directly integrate SAPP course tracks?
Orientation is hollow without actionable next steps. Integrating world-class certifications (ACCA, CFA, etc.) alongside official SAPP informational articles instantly delivers a practical, highly credible "next step" to the user's educational journey.

## Highlights

Logical Processing & Accurate MBTI-to-Career Mapping: successfully built a logical matrix that accurately connects the 16 MBTI personality types to highly specific, real-world roles within the finance industry. This deep logical bridging ensures the career recommendations are highly personalized, convincing, and practically valuable to the user.

Fluid Single-Page App Performance: Handling question transitions and report generations exclusively via raw client-side JavaScript creates a highly polished, snappy experience with zero server lag.

Smart Layout Organization: Relying on interactive Accordion components to present deep-dive reports keeps text blocks hidden until requested. This prevents information overload upon first arriving at the results page while conserving vertical screen space.

## Limitations

Strictly limited to 16 MBTI profiles: relies on the standard framework of 2 traits per category. Scaling up the personality resolution (e.g., expanding to 3 traits per category, create 81 distinct combinations) demands an impractical volume of unique content and is completely unfeasible for a Minimum Viable Product (MVP).

No Persistent Data Storage: Since the engine relies entirely on client-side JS memory variables, hitting F5 (Refresh) or closing the tab completely erases report data. There is currently no built-in mechanism to download results as PDFs or cache progress in LocalStorage.

Course Inventory Gaps:
Profiles matching retail banking branch tracks (ESFP, ESFJ, ISFJ) or tech-heavy Fintech engineering pipelines (ISTP), the system leaves an empty note because some finance education center lacks direct training programs for those specific back-office/technical operational niches.

## What the Team Learned

User Behavior Analysis and Problem Resolution: We identified that presenting highly specialized content (such as complex Finance and Accounting frameworks) via traditional academic methods poses a significant barrier to engagement for younger demographics (Gen Z). Implementing gamification techniques through vibrant, visually stimulating interfaces and intuitive icons proved highly effective in mitigating these barriers and maximizing user retention.

Logical Architecture and Data Processing: The team acquired proficiency in engineering a linear scoring matrix and an MBTI classification algorithm utilizing strictly Vanilla JavaScript. By applying directional weighting (1 or -1) to individual variables, we significantly optimized the codebase, bypassing the need for redundant conditional statements. Furthermore, we recognized the strategic necessity of strict scope management—limiting the framework to 16 personality prototypes to ensure the MVP remained viable and deliverable.

UI/UX Design and Optimization: We substantially advanced our capabilities in dynamic data visualization. The systematic debugging of the Trait Breakdown component enabled the team to master advanced CSS methodologies (Flexbox, Grid), ensuring the interface maintains structural integrity, responsiveness, and visual sharpness across all screen dimensions and device types.

Product Demonstration and Communication: We concluded that a premium software product requires an uninterrupted experiential flow. Utilizing a Single-Page Application (SPA) architecture eliminated latency and page reloads, ensuring a seamless user journey. This instantaneous data transition significantly elevated the professional impact of our live product demonstrations.

## Recommendations for Future Cohorts

Scope Management and Feature Creep Avoidance: It is imperative to maintain focus on perfecting the core functional loop. We caution against hyper-expanding the personality matrix into unmanageable permutations (e.g., 81 or 256 types). The exponential increase in customized content generation would severely strain resource allocation for an academic project.

Empirical Data Acquisition and Expansion: To elevate the authenticity and practical value of the career reports, future cohorts should conduct primary market research by interviewing active industry professionals. Integrating empirical data, such as real-world industry quotes and contemporary entry-level salary ranges, will significantly enhance the platform's credibility. Furthermore, the educational database should be expanded to encompass comprehensive professional development areas currently outside the scope of the existing curriculum framework.
