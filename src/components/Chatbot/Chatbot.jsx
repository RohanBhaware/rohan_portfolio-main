import React, { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";

const PROFILE = {
  fullName: "Rohan Bhaware",
  shortName: "Rohan",
  role: "B.Tech CSE Student & Full-Stack Web Developer",
  year: "3rd year",
  branch: "Computer Science and Engineering",
  college: "Deogiri College of Engineering, Chh. Sambhajinagar",
  degreeDuration: "2022 - 2026",
  cgpa: "6.5",
  location: "Chh. Sambhajinagar, India",
  email: "bhawarerohan24@gmail.com",
  phone: "+91 8010835155",
  // TODO: replace these with your real URLs
  github: "https://github.com/your-github-username",
  linkedin: "https://www.linkedin.com/in/your-linkedin-username",
  portfolio: "https://your-portfolio-link.com",

  languages: "C, Python, JavaScript, SQL",
  databases: "MongoDB, MySQL, Supabase",
  frontend:
    "React.js, HTML5, CSS, Bootstrap, Tailwind CSS, responsive web design, UI/UX basics",
  backend: "Node.js, REST APIs, basic Express, Spring Boot (used in Exam Portal)",
  tools: "Git, GitHub, Figma, Windows, VS Code",
  coursework:
    "Data Structures & Algorithms, Web Development, Operating Systems, DBMS, OOP, API Integration, Machine Learning Basics",

  school12: "Shree Swami Ramdas Higher Secondary School, Chh. Sambhajinagar",
  hscPercentage: "72.67%",
  // You can add dateOfBirth and hobbies if you want, once you’re comfortable:
  // dateOfBirth: "DD/MM/YYYY",
  hobbies:
    "building side projects, participating in hackathons, learning new tech, designing UIs, and sometimes stand-up comedy about college life",

  interests:
    "full-stack development, problem solving, hackathons, UI/UX, blockchain, and building practical web apps that solve real problems",
};

const EXPERIENCE = {
  internships: [
    "Front-End Development Intern at Campus Credentials (Remote, May 2025 - July 2025) – worked on an online learning platform using React.js, Tailwind CSS, Node.js and GitHub, building responsive, student-friendly pages.",
  ],
  hackathons: [
    "Selected for the International Smart India Hackathon (SIH).",
    "Worked on a Google Solution Challenge 2025 idea focused on empowering small and marginal farmers with AI-driven agricultural solutions.",
  ],
};

const PROJECT_HIGHLIGHTS = [
  "Exam Portal – a web-based platform for conducting online exams with separate logins for Admin, Teacher, and Student. Teachers can create and manage exams, students take exams online, and results are evaluated and shown automatically. Built using React, Spring Boot, and Tailwind CSS.",
  "Farmer-to-Customer Direct Food Supply Chain – a platform that connects farmers directly with consumers and local institutions like schools, hostels, hospitals, and college messes so farmers can sell at fair prices. Built using HTML, CSS, JavaScript, and PHP.",
  "Travel Assistant Booking App – helps elderly, disabled, and solo travellers in India book a human travel assistant for safe journeys. The idea aligns with UN SDG 10 (Reduced Inequalities) and SDG 11 (Sustainable Cities and Communities).",
  "Arogyapath – a health management platform for vaccination tracking, doctor-verified records, government health schemes, secure verification for authorities, and personalized health profiles.",
  "Blockchain-based Voting System – a secure voting system built using React, Node.js, Ethereum smart contracts and Web3.js with MetaMask integration for transparent and tamper-resistant elections.",
  "Productivity App – helps users focus on one task at a time to reduce distraction and improve deep work.",
  "Doubt Solver Chatbot – a chatbot where students can ask doubts and get instant answers using programmed logic/AI APIs.",
  "Weather Forecast Web App, Uber UI Clone, Photo of the Day competition website, vocabulary app, and other mini projects.",
];

const INITIAL_BOT_MESSAGE =
  "Hey! I'm Rohan's assistant 🤖. You can ask me about his skills, projects, education, hackathons, internship, or how to contact him.";

// Helper to format project list
function formatProjectsList() {
  return PROJECT_HIGHLIGHTS.map((p, i) => `${i + 1}. ${p}`).join("\n\n");
}

// Brain: rule-based responses about YOU
function getBotResponse(rawMessage) {
  const message = rawMessage.toLowerCase().trim();
  if (!message) {
    return "I didn’t catch that. Try asking about Rohan’s skills, projects, education, or how to contact him 🙂";
  }

  // Greetings
  if (/(hello|hi|hey|hola|namaste|hii|yo|sup)/.test(message)) {
    return `Hey! 👋 I'm ${PROFILE.shortName}'s assistant. How can I help you today?\n\nYou can ask about his skills, projects, education, hackathons, internship or availability.`;
  }

  // Who is Rohan / about him
  if (
    message.includes("who are you") ||
    message.includes("who is rohan") ||
    message.includes("tell me about yourself") ||
    message.includes("tell me about rohan") ||
    message.includes("about rohan") ||
    message.includes("introduce yourself")
  ) {
    return `${PROFILE.fullName} is a ${PROFILE.year} ${PROFILE.branch} student at ${PROFILE.college} (${PROFILE.degreeDuration}), based in ${PROFILE.location}. He is a ${PROFILE.role} who enjoys ${PROFILE.interests}.`;
  }

  // Education / branch / year
  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("studies") ||
    message.includes("which year") ||
    message.includes("year") ||
    message.includes("branch") ||
    message.includes("degree") ||
    message.includes("college")
  ) {
    return `Education details:\n\n• B.Tech in ${PROFILE.branch} at ${PROFILE.college} (${PROFILE.degreeDuration}) – current CGPA: ${PROFILE.cgpa}.\n• HSC (Science) from ${PROFILE.school12} with ${PROFILE.hscPercentage}.\n\nHe is currently in his ${PROFILE.year} and balances academics with multiple real projects and hackathons.`;
  }

  // Date of birth or age (only if you later add it)
  if (
    message.includes("dob") ||
    message.includes("date of birth") ||
    message.includes("birthday") ||
    message.includes("age")
  ) {
    return `Rohan hasn’t publicly added his date of birth here yet 😊. For professional purposes, you can focus on his skills, projects and experience.`;
  }

  // Skills / tech stack
  if (
    message.includes("skills") ||
    message.includes("skill") ||
    message.includes("tech stack") ||
    message.includes("stack") ||
    message.includes("technologies") ||
    message.includes("what do you know") ||
    message.includes("what rohan knows") ||
    message.includes("what are your skills")
  ) {
    return `Here are some of ${PROFILE.shortName}'s main skills:\n\nLanguages: ${PROFILE.languages}\nFrontend: ${PROFILE.frontend}\nBackend: ${PROFILE.backend}\nDatabases: ${PROFILE.databases}\nTools: ${PROFILE.tools}\n\nHe is comfortable with both frontend and backend and likes connecting React frontends with APIs and databases.`;
  }

  // Frontend specific
  if (message.includes("frontend")) {
    return `${PROFILE.shortName} does frontend using React.js, HTML5, CSS, Bootstrap, Tailwind CSS, and UI/UX fundamentals. He has built exam portals, travel apps, health dashboards, competition websites and more with modern responsive design.`;
  }

  // Backend specific
  if (message.includes("backend")) {
    return `${PROFILE.shortName} has backend experience with Node.js, REST APIs, basic Express and Spring Boot (especially in the Exam Portal project). He also works with databases like MongoDB, MySQL and Supabase.`;
  }

  // Coursework / subjects
  if (
    message.includes("coursework") ||
    message.includes("subject") ||
    message.includes("subjects") ||
    message.includes("what are you studying") ||
    message.includes("what do you study")
  ) {
    return `Some of the key subjects ${PROFILE.shortName} has studied are:\n\n${PROFILE.coursework}.\n\nHe also explores Machine Learning basics and Internet of Things (IoT) as part of his broader learning.`;
  }

  // Projects
  if (
    message.includes("project") ||
    message.includes("projects") ||
    message.includes("portfolio")
  ) {
    return `Here are some of ${PROFILE.shortName}'s notable projects:\n\n${formatProjectsList()}\n\nYou can also scroll to the "Projects" section on this portfolio to see them with demos and source code.`;
  }

  // Specific project: Exam Portal
  if (
    message.includes("exam portal") ||
    message.includes("online exam") ||
    message.includes("exam website")
  ) {
    return `The Exam Portal is a web-based platform for conducting online exams with separate logins for Admin, Teacher, and Student. Teachers create and manage exams, students take them online, and results are evaluated and displayed. It is built using React, Tailwind CSS, and Spring Boot for a secure and user-friendly experience.`;
  }

  // Farmers marketplace
  if (
    message.includes("farmer") ||
    message.includes("farmers") ||
    message.includes("agriculture") ||
    message.includes("food supply") ||
    message.includes("farmer-to-customer")
  ) {
    return `${PROFILE.shortName}'s Farmer-to-Customer Direct Food Supply Chain project connects farmers directly with consumers and local institutions like schools, hostels, hospitals, and college messes. Farmers can upload product details and customers can see images, prices and quality information before buying.`;
  }

  // Travel assistant app
  if (
    message.includes("travel assistant") ||
    message.includes("travel app") ||
    message.includes("booking assistant") ||
    message.includes("traveling assistant")
  ) {
    return `The Travel Assistant Booking app helps elderly, disabled, and solo travellers book a human assistant who travels with them and ensures a safe journey in India. The project aligns with UN SDG 10 (Reduced Inequalities) and SDG 11 (Sustainable Cities and Communities).`;
  }

  // Arogyapath
  if (
    message.includes("arogyapath") ||
    message.includes("health platform") ||
    message.includes("health app") ||
    message.includes("vaccination")
  ) {
    return `Arogyapath is a health management platform that ${PROFILE.shortName} created. It helps users manage vaccination schedules, store health records, view government health schemes, use a healthcare chatbot, and allows secure verification for authorities.`;
  }

  // Blockchain voting
  if (
    message.includes("blockchain") ||
    message.includes("voting system") ||
    message.includes("web3") ||
    message.includes("ethereum")
  ) {
    return `${PROFILE.shortName} built a secure blockchain-based voting system using React, Node.js, Ethereum smart contracts and Web3.js. It includes MetaMask integration and real-time updates, focusing on transparency and security.`;
  }

  // Internship
  if (
    message.includes("internship") ||
    message.includes("intern") ||
    message.includes("work experience") ||
    message.includes("experience")
  ) {
    return `Internship & experience:\n\n• ${EXPERIENCE.internships[0]}\n\nHe has also worked on many personal and academic projects which give him hands-on experience in full-stack development.`;
  }

  // Hackathons / achievements
  if (
    message.includes("hackathon") ||
    message.includes("sih") ||
    message.includes("smart india") ||
    message.includes("google solution") ||
    message.includes("achievement") ||
    message.includes("achievements") ||
    message.includes("competition")
  ) {
    return `Hackathons & achievements:\n\n• ${EXPERIENCE.hackathons[0]}\n• ${EXPERIENCE.hackathons[1]}\n\nHe also participates in college competitions, tech events, and project-based challenges.`;
  }

  // Hobbies / interests / soft side
  if (
    message.includes("hobby") ||
    message.includes("hobbies") ||
    message.includes("interest") ||
    message.includes("interests") ||
    message.includes("what do you like") ||
    message.includes("what does rohan like")
  ) {
    return `${PROFILE.shortName} enjoys ${PROFILE.hobbies}. He also likes exploring new tools, learning from real projects, and sometimes doing stand-up comedy related to college life and exams.`;
  }

  // Soft skills / personality
  if (
    message.includes("soft skills") ||
    message.includes("personality") ||
    message.includes("how is rohan") ||
    message.includes("describe rohan") ||
    message.includes("strengths")
  ) {
    return `${PROFILE.shortName} is curious, consistent, and likes explaining concepts clearly. He works on communication, teamwork, presentation skills, and problem-solving, along with his technical skills. He enjoys collaborating on meaningful projects.`;
  }

  // Availability / hiring
  if (
    message.includes("available") ||
    message.includes("availability") ||
    message.includes("hire") ||
    message.includes("job") ||
    message.includes("open to work") ||
    message.includes("open for work") ||
    message.includes("work with") ||
    message.includes("join our") ||
    message.includes("open to internship")
  ) {
    return `${PROFILE.shortName} is open to good opportunities in full-stack development, frontend roles, and internships where he can use React, JavaScript, Node.js, Spring Boot, and related technologies. You can contact him via email or LinkedIn to discuss further.`;
  }

  // Contact info
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach") ||
    message.includes("linkedin") ||
    message.includes("github") ||
    message.includes("connect")
  ) {
    return `You can contact ${PROFILE.shortName} here:\n\n📧 Email: ${PROFILE.email}\n📱 Phone: ${PROFILE.phone}\n🐙 GitHub: ${PROFILE.github}\n💼 LinkedIn: ${PROFILE.linkedin}\n🌐 Portfolio: ${PROFILE.portfolio}\n\nHe usually replies as soon as he can.`;
  }

  // Default / fallback
  return `Nice question! I might not have a perfect answer for that yet, but I can help you with details about ${PROFILE.shortName}'s skills, projects, education, internship, hackathons, or how to contact him.\n\nTry asking something like:\n• "What are Rohan's main skills?"\n• "Tell me about his projects."\n• "Where does he study?"\n• "How can I contact Rohan?"`;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: INITIAL_BOT_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botMessage = { from: "bot", text: getBotResponse(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div>
              <div className={styles.headerTitle}>
                {PROFILE.shortName}'s Assistant
              </div>
              <div className={styles.headerSubtitle}>
                Ask about skills, projects & more
              </div>
            </div>
            <button
              className={styles.headerClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.from === "user" ? styles.messageUser : styles.messageBot
                }
              >
                <div className={styles.messageBubble}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask something about Rohan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.sendBtn}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
