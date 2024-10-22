export const buildquestionnaire = [
    {
        id: "s1",
        parent: null,
        section: true,
        display_text: "Company Overview",
        type: null,
        options: null,
        sample_answer: null,
        subQuestions: []
    },
    {
        id: "q1",
        parent: "s1",
        section: false,
        display_text: "What is your current rating by A.M. Best, Standard & Poor’s, and Weiss?",
        type: "short answer",
        options: null,
        sample_answer: "A.M. Best: A+, Standard & Poor’s: AA-, Weiss: B+",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        messages: [],
        subQuestions: []
    },
    {
        id: "q2",
        parent: "s1",
        section: false,
        display_text: "What is the policy's conversion option?",
        type: "short answer",
        options: null,
        sample_answer: "Option to convert to individual policy within 31 days of leaving the group",
        answer_source: "AI-Assisted",
        confidence_interval: "80%",
        source_content: "Overview Document",
        messages: [],
        subQuestions: []
    },
    {
        id: "s2",
        parent: null,
        section: true,
        display_text: "Premium Details",
        type: null,
        options: null,
        sample_answer: null,
        subQuestions: []
    },
    {
        id: "q3",
        parent: "s2",
        section: false,
        display_text: "Is there a grace period for premium payments?",
        type: "yes/no",
        options: ["Yes", "No"],
        sample_answer: "Yes",
        answer_source: "Retrieved from Library",
        confidence_interval: "97%",
        source_content: "2024 Benefits Summary Brochure",
        messages: [],
        subQuestions: []
    },
    {
        id: "q4",
        parent: "s2",
        section: false,
        display_text: "If yes, what is the duration of the grace period?",
        type: "multiple choice",
        options: ["30 days", "60 days", "90 days"],
        sample_answer: "30 days",
        answer_source: "AI-Assisted",
        confidence_interval: "25%",
        source_content: "2022 Life Sales Brochure",
        messages: [],
        subQuestions: []
    }
];