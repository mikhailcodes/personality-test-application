const Questions = () => [
    {
        id: Math.random(),
        type: "multiple_choice",
        question: "Do you prefer spending time alone or with others?",
        answers: [
            {
                id: Math.random(),
                answer: "Alone",
                details: "You might prefer solo activities, such as reading, writing, or going for a walk, over group activities.",
                value: 1
            },
            {
                id: Math.random(),
                answer: "With others",
                details: "You might prefer group activities, such as parties, theme parks, or going for a to concerts, over solo activities.",
                value: 2
            }
        ]
    },
    {
        id: Math.random(),
        type: "multiple_choice",
        question: "Do you find it easy to strike up conversations with new people?",
        answers: [
            {
                id: Math.random(),
                answer: "Yes, I enjoy it!",
                details: "You might enjoy starting interesting conversations with new people.",
                value: 2
            },
            {
                id: Math.random(),
                answer: "Nope, not my cup of tea",
                details: "You might prefer to observe and listen before jumping into social interactions.",
                value: 1
            }
        ]
    },
    {
        id: Math.random(),
        type: "multiple_choice",
        question: "Do you feel drained after spending time in social situations?",
        answers: [
            {
                id: Math.random(),
                answer: "Yes, it makes me tired and irritable.",
                details: "You might find that being around others for an extended period of time is mentally and emotionally taxing.",
                value: 1
            },
            {
                id: Math.random(),
                answer: "Nope, I feel happy and joyful!",
                details: "You might find that being around others is energizing and rejuvenating",
                value: 2
            }
        ]

    },
    {
        id: Math.random(),
        type: "multiple_choice",
        question: "Do you enjoy being the center of attention?",
        answers: [
            {
                id: Math.random(),
                answer: "Yes I do!",
                details: "You might feel confident and comfortbale being in the spotlight.",
                value: 2
            },
            {
                id: Math.random(),
                answer: "No",
                details: "You might find it scary and intimidating",
                value: 1
            }
        ]
    },
    {
        id: Math.random(),
        type: "short_answer",
        question: "Just one last question",
    }
]

export default Questions