export const questions = [
    {
        text: "Who said: 'Stay hungry, stay foolish'?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correctAnswer: 0,
    },
    {
        text: "Who said: 'Innovation distinguishes between a leader and a follower'?",
        options: ["Jeff Bezos", "Steve Jobs", "Satya Nadella", "Larry Page"],
        correctAnswer: 1,
    },
    {
        text: "Who said: 'Your time is limited, so don't waste it living someone else's life'?",
        options: ["Elon Musk", "Larry Ellison", "Steve Jobs", "Jack Ma"],
        correctAnswer: 2,
    },
    {
        text: "Who said: 'The best way to predict the future is to invent it'?",
        options: [
            "Alan Kay",
            "Tim Berners-Lee",
            "Linus Torvalds",
            "Dennis Ritchie",
        ],
        correctAnswer: 0,
    },
    {
        text: "Who said: 'It's not about money. It's about the people you have, and how you're led'?",
        options: ["Satya Nadella", "Steve Wozniak", "Steve Jobs", "Bill Gates"],
        correctAnswer: 1,
    },
    {
        text: "Which programming language was created by James Gosling?",
        options: ["Python", "Java", "C++", "Ruby"],
        correctAnswer: 1,
    },
    {
        text: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Central Processor Utility",
        ],
        correctAnswer: 0,
    },
    {
        text: "Which company developed the Android operating system?",
        options: ["Apple", "Microsoft", "Google", "Samsung"],
        correctAnswer: 2,
    },
    {
        text: "Who co-founded Apple Computer with Steve Jobs?",
        options: [
            "Bill Gates",
            "Steve Wozniak",
            "Paul Allen",
            "Mark Zuckerberg",
        ],
        correctAnswer: 1,
    },
    {
        text: "Which of these is NOT a JavaScript framework?",
        options: ["React", "Angular", "Django", "Vue"],
        correctAnswer: 2,
    },
    // Add more questions to reach 40-50 total
    // This is just a starter set of 10 questions
    {
        text: "Who developed the Python programming language?",
        options: [
            "Brendan Eich",
            "James Gosling",
            "Guido van Rossum",
            "Bjarne Stroustrup",
        ],
        correctAnswer: 2,
    },
    {
        text: "Which cloud platform is developed by Google?",
        options: ["Azure", "AWS", "GCP", "IBM Cloud"],
        correctAnswer: 2,
    },
    {
        text: "What does HTTPS stand for?",
        options: [
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Security",
            "HyperTransfer Protocol System",
            "Hyperlink Transfer Secure",
        ],
        correctAnswer: 0,
    },
    {
        text: "Which company created the first graphical web browser?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correctAnswer: 1,
    },
    {
        text: "Which JavaScript framework was created by Google?",
        options: ["React", "Angular", "Vue", "Svelte"],
        correctAnswer: 1,
    },
    {
        text: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<h>"],
        correctAnswer: 1,
    },
    {
        text: "Which of these is a containerization platform?",
        options: ["Kubernetes", "Docker", "Terraform", "Ansible"],
        correctAnswer: 1,
    },
    {
        text: "Which of these is NOT a front-end JavaScript framework?",
        options: ["React", "Vue", "Node.js", "Angular"],
        correctAnswer: 2,
    },
    {
        text: "Which command is used to initialize a new Git repository?",
        options: ["git init", "git clone", "git commit", "git merge"],
        correctAnswer: 0,
    },

    //Algortihm based questions
    {
        text: "What is the time complexity of binary search in a sorted array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 2,
    },
    {
        text: "What is the best case time complexity of Quick Sort?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctAnswer: 1,
    },

    //data structure based questions
    {
        text: "Which data structure uses LIFO (Last In, First Out) order?",
        options: ["Queue", "Stack", "Linked List", "Heap"],
        correctAnswer: 1,
    },

    //im not sorting these questions anymore
    {
        text: "Which of these best describes recursion?",
        options: [
            "A function calling itself",
            "A loop with a function",
            "A function without parameters",
            "A type of array",
        ],
        correctAnswer: 0,
    },
    {
        text: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Logic",
            "Sequential Query Language",
            "Standard Query Layout",
        ],
        correctAnswer: 0,
    },
    {
        text: "Which function is used to open a file in Python?",
        options: ["open()", "read()", "write()", "file()"],
        correctAnswer: 0,
    },
    {
        text: "What does the break statement do in a loop?",
        options: [
            "Skips the next iteration",
            "Exits the loop",
            "Pauses execution",
            "Throws an error",
        ],
        correctAnswer: 1,
    },
    {
        text: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2,
    },
    {
        text: "Which programming language is primarily used for web development?",
        options: ["C++", "Python", "JavaScript", "Swift"],
        correctAnswer: 2,
    },
    {
        text: "Which of these is NOT a valid Git command?",
        options: ["git commit", "git merge", "git deploy", "git clone"],
        correctAnswer: 2,
    },
    {
        text: "Which data structure follows the FIFO (First In, First Out) principle?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        correctAnswer: 1,
    },
    {
        text: "What is the primary purpose of the try and catch blocks in programming?",
        options: [
            "Loop control",
            "Exception handling",
            "Memory management",
            "Code optimization",
        ],
        correctAnswer: 1,
    },
    {
        text: "What is the output of 2 ** 3 in Python?",
        options: ["5", "6", "8", "9"],
        correctAnswer: 2,
    },
    {
        text: "Which HTTP status code indicates that a resource was not found?",
        options: ["200", "301", "404", "500"],
        correctAnswer: 2,
    },
    {
        text: "Which concept allows a function to call itself?",
        options: ["Encapsulation", "Recursion", "Abstraction", "Polymorphism"],
        correctAnswer: 1,
    },
    {
        text: "Which of the following is a type of CPU architecture?",
        options: ["x86", "ARM", "RISC-V", "All of the above"],
        correctAnswer: 3,
    },
    {
        text: "Which cache level is the smallest but fastest cache/storage option?",
        options: ["L1", "L2", "L3", "RAM"],
        correctAnswer: 0,
    },
    {
        text: "Which of the following is a multi-core processor benefit?",
        options: [
            "Increased power consumption",
            "Better parallel processing",
            "Slower performance",
            "Higher cost only",
        ],
        correctAnswer: 1,
    },
    {
        text: "Which of the following is a key advantage of multithreading?",
        options: [
            "Higher CPU temperature",
            "Faster single-threaded performance",
            "Efficient CPU utilization",
            "More energy consumption",
        ],
        correctAnswer: 2,
    },
    {
        text: "Which type of processor is commonly used in mobile devices?",
        options: ["x86", "ARM", "RISC", "SPARC"],
        correctAnswer: 1,
    },
    {
        text: "What is the primary role of a thread scheduler?",
        options: [
            "Assign CPU time to threads",
            "Manage power supply",
            "Increase clock speed",
            "Manage user accounts",
        ],
        correctAnswer: 0,
    },
    {
        text: "Which of these can cause CPU bottlenecks?",
        options: [
            "Slow hard drive",
            "Insufficient RAM",
            "Too many background processes",
            "All of the above",
        ],
        correctAnswer: 3,
    },
    {
        text: "What is hyper-threading?",
        options: [
            "Using multiple CPU cores",
            "Dividing a core into virtual cores",
            "Increasing clock speed dynamically",
            "Adding more transistors",
        ],
        correctAnswer: 1,
    },
    {
        text: "What is the fundamental unit of information in quantum computing?",
        options: ["Bit", "Qubit", "Byte", "Neutrino"],
        correctAnswer: 1,
    },
    {
        text: "Which principle allows a qubit to be in multiple states simultaneously?",
        options: [
            "Superposition",
            "Entanglement",
            "Quantum Tunneling",
            "Interference",
        ],
        correctAnswer: 0,
    },
    {
        text: "What quantum property enables instant correlation between qubits regardless of distance?",
        options: [
            "Quantum Superposition",
            "Quantum Tunneling",
            "Quantum Entanglement",
            "Quantum Decoherence",
        ],
        correctAnswer: 2,
    },
    {
        text: "Which company built the first quantum computer that reportedly achieved 'quantum supremacy'?",
        options: ["IBM", "Google", "Microsoft", "Intel"],
        correctAnswer: 1,
    },
    {
        text: "Which of these quantum programming languages is used for quantum algorithms?",
        options: ["Q#", "Swift", "R", "Rust"],
        correctAnswer: 0,
    },
    {
        text: "What is the primary advantage of using GPUs for AI over CPUs?",
        options: [
            "Higher clock speeds",
            "Better single-threaded performance",
            "Massive parallelism",
            "Lower power consumption",
        ],
        correctAnswer: 2,
    },
    {
        text: "Which hardware accelerator is designed specifically for deep learning?",
        options: ["GPU", "TPU", "FPGA", "ASIC"],
        correctAnswer: 1,
    },
    {
        text: "What is the key advantage of RISC-V architecture?",
        options: [
            "Proprietary licensing",
            "Open-source instruction set",
            "Fixed hardware costs",
            "Low power efficiency",
        ],
        correctAnswer: 1,
    },
    {
        text: "Which of these is NOT a benefit of cloud computing?",
        options: [
            "Scalability",
            "Pay-as-you-go pricing",
            "Unlimited bandwidth",
            "Remote accessibility",
        ],
        correctAnswer: 2,
    },
    {
        text: "Which of these AI models is known for image generation?",
        options: ["BERT", "DALL-E", "GPT-4", "YOLO"],
        correctAnswer: 1,
    },
]
