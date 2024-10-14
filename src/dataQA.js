export const questionnaire = [
    {
        question:
            "What is your current rating by A.M. Best, Standard & Poor’s, and Weiss?",
        type: "short answer",
        options: null,
        sample_answer: "A.M. Best: A+, Standard & Poor’s: AA-, Weiss: B+",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        messages: [
            { user: 'JD', text: 'Can we verify this rating again?', timestamp: '2024-07-05T14:48:00Z' },
            { user: 'AP', text: 'Yes, we checked last month.', timestamp: '2024-07-06T09:23:00Z' }
        ]
    },
    {
        question:
            "Provide a copy of your most recent financial statement or annual report reflecting financial performance.",
        type: "short answer",
        options: null,
        sample_answer: "Available upon request from ACME Insurance.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "What customer service office will be responsible for this account? Provide the days and hours of operation.",
        type: "short answer",
        options: null,
        sample_answer:
            "ACME Insurance Customer Service Office, Mon-Fri 8am-6pm EST",
        answer_source: "Retrieved from Library",
        confidence_interval: "99%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Provide the primary day-to-day account manager name and location. Provide the name and location of the backup team that provides back up support in the account manager’s absence.",
        type: "short answer",
        options: null,
        sample_answer:
            "Primary: John Doe, NYC Office. Backup: Jane Smith, LA Office.",
        answer_source: "AI-Assisted",
        confidence_interval: "75%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Some City employees may not be actively at work on July 1, 2021. Do you have an “Actively at Work” requirement for those employees who are not out on disability? If so, then can you waive this requirement?",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we have an 'Actively at Work' requirement. However, waivers are possible upon review.",
        answer_source: "Retrieved from Library",
        confidence_interval: "98%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Confirm that you will accept the City’s self-administered billing for all coverages.",
        type: "short answer",
        options: null,
        sample_answer: "Confirmed.",
        answer_source: "AI-Assisted",
        confidence_interval: "90%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Confirm that you will accept rollover enrollment of all currently enrolled benefits, including any previously approved EOI in excess of guaranteed issue, for the July 1, 2021 effective date.",
        type: "short answer",
        options: null,
        sample_answer: "Confirmed.",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Will you offer a true open enrollment effective July 1, 2021 for all non-grandfathered employee paid coverages up to guaranteed issue and regardless of current enrollment?",
        type: "short answer",
        options: null,
        sample_answer: "Yes, we will offer a true open enrollment.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Do you have an online EOI process for voluntary life and AD&D, STD, and LTD that employees self-complete? Please describe the process and how an employee uses it.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, employees can complete EOI online through our secure portal. The process is user-friendly and provides instant decisions in most cases.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Briefly indicate the main attributes that differentiate your company from your competitors.",
        type: "short answer",
        options: null,
        sample_answer:
            "Customer service excellence, comprehensive coverage options, and competitive pricing.",
        answer_source: "AI-Assisted",
        confidence_interval: "75%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Provide a reference list of three accounts including name, address, phone number, and email address of the contact person from the account. Public sector referrals with 1,000 or more employees are preferred.",
        type: "short answer",
        options: null,
        sample_answer: "References available upon request.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Complete the attached Proposal Summary Excel spreadsheet.",
        type: "short answer",
        options: null,
        sample_answer: "Will be completed and returned.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "What kinds of employee communication materials will you provide? Can these materials be customized? Provide samples of these materials. Provide a sample certificate and claim form.",
        type: "short answer",
        options: null,
        sample_answer:
            "We provide brochures, online resources, and email updates. Customization is available upon request.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Provide a sample group contract.",
        type: "short answer",
        options: null,
        sample_answer: "Sample group contract is available upon request.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "What is the maximum issue amount for this account?",
        type: "short answer",
        options: null,
        sample_answer: "$500,000",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "What is your maximum guarantee issue amount for the following: a. Employee basic life and AD&D b. Supplemental life and AD&D for employee, spouse, and dependent children",
        type: "short answer",
        options: null,
        sample_answer:
            "a. $200,000 b. $100,000 for employee, $50,000 for spouse, $10,000 for dependent children",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Identify which of your coverages are portable. Provide your portability rates. Identify eligibility requirements for portability.",
        type: "short answer",
        options: null,
        sample_answer:
            "Basic and supplemental life coverages are portable. Rates vary by age and coverage amount. Eligibility: Must be under 70 and have had coverage for at least one year.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Does your plan include a waiver of premium? If so, provide details.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, waiver of premium is included for total disability until age 65.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "For how many years are your rates guaranteed?",
        type: "short answer",
        options: null,
        sample_answer: "Rates are guaranteed for 3 years.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Provide a flow chart and explanation of your adjudication process.",
        type: "short answer",
        options: null,
        sample_answer:
            "Flow chart available upon request. Adjudication involves initial review, medical evaluation, and final decision within 2 weeks.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Where are the STD claims processed?",
        type: "short answer",
        options: null,
        sample_answer: "STD claims are processed at our headquarters in NYC.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "What is your turnaround time on claims?",
        type: "short answer",
        options: null,
        sample_answer: "Average turnaround time is 5 business days.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Provide a sample copy of your group contract, benefit book/certificate, and claim form.",
        type: "short answer",
        options: null,
        sample_answer: "Sample documents available upon request.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Describe your minimum participation requirements for a contributory plan.",
        type: "short answer",
        options: null,
        sample_answer: "Minimum participation is 75% of eligible employees.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Describe your preexisting condition clause(s) for current enrolled employees, for new hires, and for late enrollees.",
        type: "short answer",
        options: null,
        sample_answer:
            "Current: 12 months exclusion. New hires: No exclusion. Late enrollees: 12 months exclusion.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Is there a waiver of premium?",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, waiver of premium is included for total disability.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Describe your medical management procedure once an employee goes out on disability.",
        type: "short answer",
        options: null,
        sample_answer:
            "Initial assessment, ongoing medical reviews, and return-to-work planning.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "For how many years are your rates guaranteed?",
        type: "short answer",
        options: null,
        sample_answer: "Rates are guaranteed for 3 years.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "The account would prefer composite rates without age bands for all eligible employees. If possible, provide composite rates.",
        type: "short answer",
        options: null,
        sample_answer: "Composite rates can be provided upon request.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Describe how you calculate renewals. Do you calculate renewals on group specific experience or on pools?",
        type: "short answer",
        options: null,
        sample_answer:
            "Renewals are calculated based on group specific experience.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Provide a flow chart and explanation of your adjudication process.",
        type: "short answer",
        options: null,
        sample_answer:
            "Flow chart available upon request. Adjudication involves initial review, medical evaluation, and final decision within 2 weeks.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Where are the LTD claims processed?",
        type: "short answer",
        options: null,
        sample_answer: "LTD claims are processed at our headquarters in NYC.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "What is your turnaround time on claims?",
        type: "short answer",
        options: null,
        sample_answer: "Average turnaround time is 5 business days.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Provide a sample copy of your group contract, benefit book/certificate, and claim form.",
        type: "short answer",
        options: null,
        sample_answer: "Sample documents available upon request.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Describe your minimum participation requirements for a contributory plan.",
        type: "short answer",
        options: null,
        sample_answer: "Minimum participation is 75% of eligible employees.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Describe your preexisting condition clause(s) for current enrolled employees, for new hires, and for late enrollees.",
        type: "short answer",
        options: null,
        sample_answer:
            "Current: 12 months exclusion. New hires: No exclusion. Late enrollees: 12 months exclusion.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Is there a waiver of premium?",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, waiver of premium is included for total disability.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Describe your medical management procedure once an employee goes out on disability.",
        type: "short answer",
        options: null,
        sample_answer:
            "Initial assessment, ongoing medical reviews, and return-to-work planning.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "For how many years are your rates guaranteed?",
        type: "short answer",
        options: null,
        sample_answer: "Rates are guaranteed for 3 years.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Describe your definition of disability: a. Employee’s Own Occupation b. Any Occupation",
        type: "short answer",
        options: null,
        sample_answer:
            "a. Unable to perform own occupation for 24 months. b. Unable to perform any occupation for which they are reasonably qualified by education, training, or experience.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Describe how you calculate renewals. Do you calculate renewals on group specific experience or pools?",
        type: "short answer",
        options: null,
        sample_answer:
            "Renewals are calculated based on group specific experience.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Describe the coordination/offset with other sources of income: a. Sick Leave b. Workers Compensation c. Other Sources of Income",
        type: "short answer",
        options: null,
        sample_answer:
            "a. Sick leave is offset. b. Workers' Compensation is offset. c. Other sources of income are offset as applicable.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Indicate your ability to provide benefit summaries and other promotional materials for the July 1, 2021 effective date.",
        type: "short answer",
        options: null,
        sample_answer:
            "We can provide benefit summaries and promotional materials by the specified date.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Assuming Open Enrollment is April 1st through April 14th, provide an implementation plan outlining tasks necessary, the timetable for the July 1, 2021 effective date, and the parties responsible.",
        type: "short answer",
        options: null,
        sample_answer:
            "Implementation plan includes task assignment, timelines, and responsible parties. Detailed plan available upon request.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Do the management and professional positions within your company include women and minorities? If yes, please provide number of women and the number of minorities.",
        type: "short answer",
        options: null,
        sample_answer: "Yes. Women: 45, Minorities: 30",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Do you believe your company, including all employees, has a diverse workforce? If you do not believe your company has a diverse workforce, what are the reasons it may not be diverse?",
        type: "short answer",
        options: null,
        sample_answer: "Yes, we believe our company has a diverse workforce.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Please list the efforts your company makes to promote and embrace diversity in its workforce culture.",
        type: "short answer",
        options: null,
        sample_answer:
            "Diversity training programs, recruitment from diverse colleges, and partnerships with minority-focused organizations.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Do you focus any recruitment efforts to the local Durham area? If, yes, please provide examples.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we attend local job fairs and collaborate with Durham-based recruitment agencies.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Do you utilize LinkedIn groups and/or other professional groups that focus on women and/or minorities? If yes, please provide examples.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we participate in LinkedIn groups like Women in Insurance and Minorities in Finance.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "Do you regularly recruit from Historically Black Colleges and Universities (HBCUs) and other minority-focused colleges and universities? If, yes, please provide names of the schools.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we recruit from Howard University, Spelman College, and Morehouse College.",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question:
            "Do you attend minority-focused career fairs? If yes, please provide names of the career fairs and the history of attendance.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we attend the National Black MBA Association Career Fair and the Hispanic Alliance for Career Enhancement Fair.",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question:
            "Do you participate in youth internship programs? If yes, please provide names of the programs and descriptions.",
        type: "short answer",
        options: null,
        sample_answer:
            "Yes, we participate in the Urban League Summer Internship Program and the Junior Achievement Program.",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question:
            "What other efforts does your company make to create a more diverse workforce that may not be listed previously in this RFP section?",
        type: "short answer",
        options: null,
        sample_answer:
            "We have a mentorship program for minority employees and support Employee Resource Groups.",
        answer_source: "Retrieved from Library",
        confidence_interval: "90%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "What is the minimum number of employees required for group life insurance coverage?",
        type: "short answer",
        options: null,
        sample_answer: "10 employees",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "What are the coverage amounts available for group life insurance?",
        type: "multiple choice",
        options: ["$50,000", "$100,000", "$250,000", "Custom"],
        sample_answer: "$100,000",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Is there a waiting period before new employees are eligible for coverage?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "If yes, what is the waiting period?",
        type: "multiple choice",
        options: ["30 days", "60 days", "90 days", "Other"],
        sample_answer: "60 days",
        answer_source: "AI-Assisted",
        confidence_interval: "75%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Are part-time employees eligible for coverage?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "No",
        answer_source: "Retrieved from Library",
        confidence_interval: "98%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Can coverage be extended to retirees?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Are dependents eligible for coverage under the group policy?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "96%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "If yes, what is the coverage limit for dependents?",
        type: "multiple choice",
        options: ["$10,000", "$20,000", "$30,000", "Other"],
        sample_answer: "$20,000",
        answer_source: "AI-Assisted",
        confidence_interval: "88%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Is the group life insurance policy renewable annually?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "99%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "What are the premium payment options available?",
        type: "multiple choice",
        options: ["Monthly", "Quarterly", "Semi-Annually", "Annually"],
        sample_answer: "Monthly",
        answer_source: "AI-Assisted",
        confidence_interval: "70%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Is medical underwriting required for all employees?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "No",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Are there any age restrictions for coverage?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "AI-Assisted",
        confidence_interval: "65%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "If yes, what are the age restrictions?",
        type: "short answer",
        options: null,
        sample_answer: "Coverage ceases at age 70",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Does the policy include any accidental death and dismemberment (AD&D) benefits?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Are there any exclusions to the coverage?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "96%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "If yes, what are the main exclusions?",
        type: "short answer",
        options: null,
        sample_answer: "Suicide within the first two years",
        answer_source: "AI-Assisted",
        confidence_interval: "70%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Can employees increase their coverage amount after the initial enrollment?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "Are there any additional benefits included in the policy?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "AI-Assisted",
        confidence_interval: "75%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "If yes, what are the additional benefits?",
        type: "short answer",
        options: null,
        sample_answer: "Grief counseling and will preparation services",
        answer_source: "Retrieved from Library",
        confidence_interval: "95%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "What is the maximum coverage amount available per employee?",
        type: "short answer",
        options: null,
        sample_answer: "$500,000",
        answer_source: "AI-Assisted",
        confidence_interval: "85%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Is coverage portable if an employee leaves the company?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "96%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "What is the cost per $1,000 of coverage?",
        type: "short answer",
        options: null,
        sample_answer: "$0.15 per $1,000",
        answer_source: "AI-Assisted",
        confidence_interval: "70%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    },
    {
        question: "Are there any discounts available for large groups?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "98%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "What is the policy's conversion option?",
        type: "short answer",
        options: null,
        sample_answer: "Option to convert to individual policy within 31 days of leaving the group",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "Overview Document",
        messages: []
    },
    {
        question: "Is there a grace period for premium payments?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: []
    },
    {
        question: "If yes, what is the duration of the grace period?",
        type: "multiple choice",
        options: ["30 days", "60 days", "90 days"],
        sample_answer: "30 days",
        answer_source: "AI-Assisted",
        confidence_interval: "25%",
        source_content: "2022 Life Sales Brochure",
        messages: []
    }
];
