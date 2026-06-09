// ============================================================
//  WHATS NEW DATA
//  Edit this file to update the timeline on the homepage.
//  Each entry becomes a timeline card + a photo viewer page.
// ============================================================

const whatsNewData = [


    {
        id: 'bsa-2026',
        date: 'April 2026',
        title: 'Best CS PhD Student Award!',
        showPolaroid: true,
        content:
            'Received the Best PhD Student Award in Computer Science for the session 2025-26!',
        image: './photos/csaward.jpg',           // Replace with './photos/emnlp.jpg' when available
        imageCaption: "Best CS PhD Student Award '26!",
        imageLabel: 'CS\u201926',
        rotation: -3
    },



    {
        id: 'acl-2026',
        date: 'Jul 2026',
        title: 'Paper Accepted!',
        showPolaroid: true,

        content:
            '<a href="https://arxiv.org/abs/2604.19125v1" class="paper-link" target="_blank">' +
            'Do Emotions Influence Moral Judgment in Large Language Models?' +
            '</a> was accepted into ACL\'26 Findings.',
        image: './photos/moral.png',           // Replace with './photos/emnlp.jpg' when available
        imageCaption: "Paper Accepted — ACL\u201926",
        imageLabel: 'ACL\u201926',

        imageDescription:
            'Do Emotions Influence Moral Judgment in Large Language Models? ' +
            'was accepted into Findings of ACL 2026. See you in San Diego!',
        rotation: -3
    },

    {
        id: 'emnlp-2025',
        date: 'Aug 2025',
        title: 'Paper Accepted!',
        showPolaroid: true,
        content:
            '<a href="https://arxiv.org/abs/2509.19595" class="paper-link" target="_blank">' +
            'Anatomy of a Feeling: Narrating Embodied Emotions via Large Vision-Language Models' +
            '</a> was accepted into EMNLP\'25 Findings.',
        image: './photos/elena.png',           // Replace with './photos/emnlp.jpg' when available
        imageCaption: "Paper Accepted — EMNLP\u201925",
        imageLabel: 'EMNLP\u201925',

        imageDescription:
            'Anatomy of a Feeling: Narrating Embodied Emotions via Large Vision-Language Models ' +
            'was accepted into Findings of EMNLP 2025. ',
        rotation: -3
    },
    {
        id: 'ta-aum-2026',
        date: 'Jan 2026',
        title: 'Teaching Assistant',
        showPolaroid: false,
        content:
            "I\u2019ll be TA\u2019ing for <strong>Theory of Formal Language and Automata</strong> by Dr. Chaoewen Guan this spring \uD83C\uDF43"
    },
    {
        id: 'ta-os-2025',
        date: 'Aug 2025',
        title: 'Teaching Assistant',
        content:
            "I\u2019ll be TA\u2019ing for <strong>Operating Systems</strong> by Prof. John C. Gallagher this fall \uD83C\uDF42",
        showPolaroid: false,
    },

    {
        id: 'ta-ida-2025',
        date: 'Jan 2025',
        title: 'Teaching Assistant',
        showPolaroid: false,
        content:
            "I\u2019ll be TA\u2019ing for <strong>Intelligent Data Analysis</strong> by Dr. Gowtham Atluri this spring \uD83C\uDF43"
    },
    {
        id: 'ta-ml-2024',
        date: 'Sep 2024',
        title: 'Teaching Assistant',
        showPolaroid: false,
        content: 'Started as a TA for Intro to Machine Learning by Prof. Anca Ralescu this Fall \uD83C\uDF42'
    },
    {
        id: 'phd-start-2024',
        date: 'Aug 2024',
        showPolaroid: false,
        title: 'Edu Update!',
        content:
            "I\u2019ll be starting my PhD from Fall 2024 at the University of Cincinnati. Go Bearcats!"
    },
    {
        id: 'nus-2024',
        showPolaroid: true,
        date: 'Jul 2024',
        title: 'Asian Undergraduate Symposium',
        content:
            "I\u2019ll be attending the Asian Undergraduate Symposium at the National University of Singapore! \uD83C\uDDF8\uD83C\uDDEC",
        image: './photos/nus.png',
        imageLabel: 'NUS\n2024',
        imageCaption: 'Asian Undergraduate Symposium \u2014 NUS Singapore',
        imageDescription:
            "Attending the Asian Undergraduate Symposium at the National University of Singapore. ",
        rotation: 2
    }
];