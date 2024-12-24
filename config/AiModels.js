const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Atom and molecule for Exam and level of difficulty  will be easy with summary of course, List of Chapters along with summery  for each chapter, Topic list in each chapter and all result in  JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseTitle": "Atoms and Molecules (Easy)",\n  "courseSummary": "This course provides a foundational understanding of atoms and molecules, covering their structure, properties, and basic interactions.  It\'s designed for beginners and focuses on fundamental concepts without delving into complex mathematical treatments.",\n  "chapters": [\n    {\n      "chapterTitle": "Introduction to Matter",\n      "chapterSummary": "This chapter introduces the basic states of matter (solid, liquid, gas) and explains the concept of atoms as fundamental building blocks.  It also touches upon the differences between pure substances and mixtures.",\n      "topics": [\n        "States of matter (solid, liquid, gas)",\n        "Physical and chemical changes",\n        "Pure substances vs. mixtures",\n        "Elements and compounds"\n      ]\n    },\n    {\n      "chapterTitle": "Atomic Structure",\n      "chapterSummary": "This chapter explores the internal structure of an atom, including protons, neutrons, and electrons.  It explains the concept of atomic number and mass number, and introduces isotopes.",\n      "topics": [\n        "Subatomic particles (protons, neutrons, electrons)",\n        "Atomic number and mass number",\n        "Isotopes and their properties",\n        "Atomic mass"\n      ]\n    },\n    {\n      "chapterTitle": "The Periodic Table",\n      "chapterSummary": "This chapter introduces the periodic table and its organization, explaining how elements are arranged based on their atomic number and properties.  It highlights groups and periods and their significance.",\n      "topics": [\n        "Organization of the periodic table",\n        "Periods and groups",\n        "Alkali metals, alkaline earth metals, halogens, noble gases",\n        "Trends in periodic properties (atomic size, ionization energy)"\n      ]\n    },\n    {\n      "chapterTitle": "Chemical Bonding",\n      "chapterSummary": "This chapter explains how atoms combine to form molecules through chemical bonding.  It focuses on ionic and covalent bonds as the primary types of bonding.",\n      "topics": [\n        "Ionic bonds (transfer of electrons)",\n        "Covalent bonds (sharing of electrons)",\n        "Lewis dot structures (simple molecules)",\n        "Polar and nonpolar molecules"\n      ]\n    },\n    {\n      "chapterTitle": "Molecular Formulas and Names",\n      "chapterSummary": "This chapter introduces the basic principles of writing and interpreting chemical formulas and naming simple compounds, focusing on common ionic and covalent compounds.",\n      "topics": [\n        "Chemical formulas",\n        "Naming ionic compounds",\n        "Naming covalent compounds",\n        "Writing formulas from names"\n      ]\n    },\n    {\n      "chapterTitle": "Introduction to Chemical Reactions (Basic)",\n      "chapterSummary": "This chapter provides a very basic introduction to chemical reactions, focusing on identifying reactants and products and balancing simple chemical equations.",\n      "topics": [\n        "Reactants and products",\n        "Balancing simple chemical equations (by inspection)",\n        "Types of chemical reactions (combination, decomposition - basic examples only)"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotesAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML , Head, Body, title tag), The chapters {\n      "chapterTitle": "Advanced Object-Oriented Programming",\n      "chapterSummary": "This chapter explores sophisticated OOP concepts and design patterns crucial for building robust, maintainable, and scalable applications.",\n      "topics": [\n        "Metaclasses: Understanding and using metaclasses for class customization",\n        "Abstract Base Classes (ABCs): Defining interfaces and enforcing contracts",\n        "Design Patterns: Advanced patterns (e.g., Decorator, Facade, Command), and their implementation in Python",\n        "Dependency Injection: Implementing dependency injection for improved testability and maintainability",\n        "SOLID Principles: Applying SOLID principles for designing modular and extensible code",\n        "Testing strategies for OOP: Unit testing, integration testing, mocking"\n      ]\n    },\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```html\n<h3>Advanced Object-Oriented Programming</h3>\n<p>This chapter delves into advanced object-oriented programming (OOP) concepts and design patterns essential for creating robust, maintainable, and scalable applications.  We will cover techniques that go beyond the basics, enabling you to build more complex and sophisticated software systems.</p>\n\n<h4>Metaclasses: Understanding and using metaclasses for class customization</h4>\n<p>This section explores metaclasses, which are classes whose instances are classes. Learn how to use metaclasses to modify class behavior, customize class creation, and add functionality at the class level.  Topics include: defining metaclasses, using <code>type</code>, and advanced metaclass applications.</p>\n\n<h4>Abstract Base Classes (ABCs): Defining interfaces and enforcing contracts</h4>\n<p>Abstract Base Classes (ABCs) provide a way to define interfaces and enforce contracts between classes.  This section covers the use of the <code>abc</code> module, defining abstract methods, and implementing abstract methods in subclasses.  We will also discuss the benefits of using ABCs for improved code organization and maintainability.</p>\n\n<h4>Design Patterns: Advanced patterns (e.g., Decorator, Facade, Command), and their implementation in Python</h4>\n<p>This section focuses on implementing several advanced design patterns in Python. We will cover the Decorator pattern (adding functionality dynamically), the Facade pattern (simplifying complex systems), and the Command pattern (encapsulating requests as objects).  Each pattern's implementation will be explained with clear examples and use cases.</p>\n\n<h4>Dependency Injection: Implementing dependency injection for improved testability and maintainability</h4>\n<p>Dependency Injection is a crucial technique for improving code testability and maintainability. Learn how to decouple classes by injecting dependencies rather than creating them internally.  This section will cover various approaches to dependency injection, including constructor injection, setter injection, and interface injection.  The benefits of each approach and best practices will be discussed.</p>\n\n<h4>SOLID Principles: Applying SOLID principles for designing modular and extensible code</h4>\n<p>This section introduces the SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion) as guidelines for designing robust and maintainable object-oriented systems.  We will explore how to apply these principles in practice to create more flexible and extensible codebases.  Examples will illustrate how violating these principles can lead to problems.</p>\n\n<h4>Testing strategies for OOP: Unit testing, integration testing, mocking</h4>\n<p>Effective testing is critical for ensuring the quality of object-oriented code. This section covers different testing strategies, including unit testing (testing individual components), integration testing (testing the interaction between components), and mocking (simulating dependencies for testing).  We will examine best practices for writing effective tests and using testing frameworks such as <code>unittest</code> or <code>pytest</code>.</p>\n```\n",
        },
      ],
    },
  ],
});

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
