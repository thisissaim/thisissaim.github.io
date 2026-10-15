// ============================================================
//  WHATS NEW DATA
//  Edit this file to update the timeline on the homepage.
//  Each entry becomes a timeline card + a photo viewer page.
// ============================================================

const whatsNewData = [

    {
        id: 'pg-ra-2026',
        date: 'Aug 2026',
        title: 'Work Update!',
        showPolaroid: false,
        content:
            'Started as a Research Assistant at the <strong>P&amp;G Digital Accelerator Program</strong>.'
    },

    {
        id: 'emnlp-2026',
        date: 'Aug 2026',
        title: 'Two Papers Accepted!',
        showPolaroid: true,
        content:
            'Two papers were accepted into EMNLP\'26:' +
            '<ul class="tl-list">' +
            '<li><a href="https://arxiv.org/abs/2609.00310" class="paper-link" target="_blank">' +
            'Emotional Labor Strategy Preferences in LLM Personas</a> (Findings)</li>' +
            '<li><a href="https://arxiv.org/abs/2609.03394" class="paper-link" target="_blank">' +
            'Chiaroscuro for Emotions: A Contrastive Emotion Benchmark Grounded in Appraisal Theory</a> (Main)</li>' +
            '</ul>',
        image: './photos/emotion_labor.png',
        images: ['./photos/emotion_labor.png'],
        imageCaption: "Papers Accepted \u2014 EMNLP\u201926",
        imageLabel: 'EMNLP\u201926',
        imageDescription:
            'Emotional Labor Strategy Preferences in LLM Personas (Findings) and ' +
            'Chiaroscuro for Emotions: A Contrastive Emotion Benchmark Grounded in Appraisal Theory (Main) ' +
            'were accepted into EMNLP 2026.',
        rotation: 2
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
        image: './photos/moral.png',           // thumbnail on the homepage
        images: ['./photos/moral.png', './photos/acl_poster.jpg'],
        imageCaption: "Paper Accepted \u2014 ACL\u201926",
        imageLabel: 'ACL\u201926',
        imageDescription:
            'Do Emotions Influence Moral Judgment in Large Language Models? ' +
            'was accepted into Findings of ACL 2026 and presented as a poster in San Diego.',
        rotation: -3
    },

    {
        id: 'bsa-2026',
        date: 'Apr 2026',
        title: 'Best CS PhD Student Award!',
        showPolaroid: true,
        content:
            'Received the Best PhD Student Award in Computer Science for the session 2025-26!',
        image: './photos/csaward.jpg',
        images: ['./photos/csaward.jpg'],
        imageCaption: "Best CS PhD Student Award \u201926!",
        imageLabel: 'CS\u201926',
        imageDescription:
            'Received the Best PhD Student Award in Computer Science for the session 2025-26.',
        rotation: 2
    },

    {
        id: 'ta-2024-2026',
        date: 'Fall \u201924 \u2013 Spring \u201926',
        title: 'Teaching Assistant',
        showPolaroid: false,
        content:
            '<ul class="tl-list">' +
            '<li>Spring \u201926 \u2014 Theory of Formal Languages and Automata</li>' +
            '<li>Fall \u201925 \u2014 Operating Systems</li>' +
            '<li>Spring \u201925 \u2014 Intelligent Data Analysis</li>' +
            '<li>Fall \u201924 \u2014 Intro to Machine Learning</li>' +
            '</ul>'
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
        image: './photos/elena.png',
        images: ['./photos/elena.png'],
        imageCaption: "Paper Accepted \u2014 EMNLP\u201925",
        imageLabel: 'EMNLP\u201925',
        imageDescription:
            'Anatomy of a Feeling: Narrating Embodied Emotions via Large Vision-Language Models ' +
            'was accepted into Findings of EMNLP 2025. ',
        rotation: -3
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
        images: ['./photos/nus.png'],
        imageLabel: 'NUS\n2024',
        imageCaption: 'Asian Undergraduate Symposium \u2014 NUS Singapore',
        imageDescription:
            "Attending the Asian Undergraduate Symposium at the National University of Singapore. ",
        rotation: 2
    }
];
