import type { windowPropsInterface } from "./Github";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";

const Cli = ({windowName, setWindowState}:windowPropsInterface) => {
  const commands = {
    about: {
      description: 'Display personal information',
      fn: () => {
        return `
╔═══════════════════════════════════════════╗
║            SOURAV SANJAY                  ║
║        Full-Stack Developer               ║
╚═══════════════════════════════════════════╝

👨‍💻 Passionate full-stack developer with expertise in modern web technologies
🚀 Specialized in React, Node.js, and scalable web applications
🌟 Always learning and building innovative solutions
📍 Location: India
🎯 Currently open to new opportunities

"Code is poetry written in logic."
        `;
      }
    },
    
    skills: {
      description: 'Show technical skills',
      fn: () => {
        return `
💻 TECHNICAL SKILLS
==================
Frontend:
  ⚛️  React.js / Next.js     [████████████] 90%
  🎨  TypeScript             [███████████ ] 85%
  🎭  TailwindCSS            [████████████] 90%
  ⚡  JavaScript ES6+        [████████████] 95%

Backend:
  🟢  Node.js                [██████████  ] 80%
  🐘  PostgreSQL             [████████    ] 70%
  🔥  Express.js             [█████████   ] 75%
  🐳  Docker                 [██████      ] 60%

Tools & Others:
  📚  Git/GitHub             [████████████] 95%
  ☁️  AWS                    [██████      ] 60%
  🎯  VS Code                [████████████] 100%
  🐧  Linux                  [████████    ] 70%
        `;
      }
    },
    
    projects: {
      description: 'List featured projects',
      fn: () => {
        return `
🚀 FEATURED PROJECTS
===================
1. DevOS Portfolio
   └─ Tech: React, TypeScript, TailwindCSS
   └─ Desc: Interactive macOS-inspired portfolio website
   └─ Status: Active Development

2. Task Management App
   └─ Tech: Next.js, PostgreSQL, Prisma
   └─ Desc: Full-stack productivity application
   └─ Status: Completed

3. E-commerce Platform
   └─ Tech: React, Node.js, MongoDB
   └─ Desc: Modern online shopping platform
   └─ Status: In Progress

4. Weather Dashboard
   └─ Tech: React, OpenWeather API
   └─ Desc: Real-time weather monitoring app
   └─ Status: Completed

Type 'open projects' to view in browser window!
        `;
      }
    },
    
    experience: {
      description: 'View work experience',
      fn: () => {
        return `
💼 WORK EXPERIENCE
=================
🏢 Senior Full-Stack Developer
   TechFlow Systems | 2023 - Present
   ├─ Led team of 3 developers
   ├─ Improved app performance by 40%
   ├─ Migrated from monolith to microservices
   └─ Technologies: React, Node.js, AWS

🏢 Frontend Developer
   PixelPerfect Studios | 2021 - 2023
   ├─ Developed 15+ client websites
   ├─ Improved Lighthouse scores 65→98
   ├─ Implemented GSAP animations
   └─ Technologies: React, GSAP, Figma

🏢 Junior Developer
   StartupXYZ | 2020 - 2021
   ├─ Built responsive web applications
   ├─ Collaborated with design team
   └─ Technologies: HTML, CSS, JavaScript
        `;
      }
    },
    
    education: {
      description: 'Show educational background',
      fn: () => {
        return `
🎓 EDUCATION
===========
🏛️  Stanford University
    Master of Science - Computer Science
    GPA: 3.9/4.0 | 2022-2024
    Focus: Full-Stack Development & AI

🏛️  MIT World Peace University
    Bachelor of Technology - Information Technology
    CGPA: 8.8/10.0 | 2018-2022
    Focus: Software Engineering

📜 CERTIFICATIONS
=================
✅ AWS Certified Developer Associate
✅ React Developer Certification
✅ Google Cloud Platform Fundamentals
        `;
      }
    },
    
    contact: {
      description: 'Get contact information',
      fn: () => {
        return `
📞 CONTACT INFORMATION
=====================
📧 Email: sourav.dev@example.com
🐙 GitHub: github.com/souravsanjay
💼 LinkedIn: linkedin.com/in/souravsanjay
🌐 Portfolio: souravsanjay.dev
📱 Phone: +91 98765 43210

📍 Location: Mumbai, India
🕒 Timezone: IST (UTC +5:30)
💬 Available for: Full-time opportunities, freelance projects

"Let's build something amazing together!"
        `;
      }
    },
    
    whoami: {
      description: 'Display current user',
      fn: () => 'souravsanjay'
    },
    
    date: {
      description: 'Show current date and time',
      fn: () => new Date().toString()
    },
    
    uname: {
      description: 'System information',
      fn: () => 'DevOS 1.0.0 (Darwin Kernel) - Portfolio Terminal'
    },
    
    ls: {
      description: 'List directory contents',
      fn: () => {
        return `
📁 projects/
📁 skills/
📁 experience/
📄 resume.pdf
📄 about.txt
📄 contact.txt
🔧 config.json
        `;
      }
    },
    
    pwd: {
      description: 'Print working directory',
      fn: () => '/Users/souravsanjay/portfolio'
    },
    
    fortune: {
      description: 'Get a random quote',
      fn: () => {
        const quotes = [
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"The best error message is the one that never shows up." - Thomas Fuchs',
          '"Programming isn\'t about what you know; it\'s about what you can figure out." - Chris Pine',
          '"Clean code always looks like it was written by someone who cares." - Robert C. Martin'
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
    },

  };

  const welcomeMessage = `
╔═══════════════════════════════════════════════════════════════╗                                         
║                       Welcome to My Portfolio CLI             ║
╚═══════════════════════════════════════════════════════════════╝

🚀 Portfolio Terminal v1.0.0
📅 ${new Date().toLocaleDateString()} | ⏰ ${new Date().toLocaleTimeString()}

Type 'help' to see all available commands.
Type 'about' to learn more about me.
Type 'projects' to view my featured work.

Ready to explore? Let's get started! 💻
  `;

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} >
      <div className="h-full">
        <Terminal 
          className="h-full"
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"souravsanjay:~$"}
          style={{
            backgroundColor: '#222',
            color: '#00ff00'
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
