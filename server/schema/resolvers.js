export const resolvers = {
  Query: {
    navContent: () => ({
      linkedin: "https://www.linkedin.com/in/panchenko91/",
      navLinks: [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Portfolio", to: "portfolio" },
        { name: "Experience", to: "experience" },
        { name: "Education", to: "education" },
      ],
    }),
    heroContent: () => ({
      name: "Ihor Panchenko",
      bio: "Passionate Junior Frontend Developer skilled in building responsive, user-focused web applications using modern JavaScript frameworks. With a foundation in React, CSS, and responsive design, I aim to create seamless and visually appealing digital experiences. Eager to learn and contribute to impactful projects, I bring a fresh perspective and a commitment to continuous growth in frontend development.",
      titles: ["Frontend Developer", "Web Developer", "UI Engineer"],
      socialLinks: {
        github: "https://github.com/IhorPanchenko",
        linkedin: "https://www.linkedin.com/in/panchenko91/",
        email: "ipanchenko91@gmail.com",
      },
    }),
    aboutContent: () => ({
      languages: [
        { level: "C1", label: "English" },
        { level: "B2", label: "German" },
      ],
      description:
        "I am a passionate junior frontend developer with expertise in building responsive web applications using modern JavaScript frameworks like React.js. I focus on creating seamless, user-centered experiences with clean and efficient code. Always eager to learn and adapt, I aim to deliver high-quality solutions that meet both user and business needs.",
    }),
    portfolio: () => [
      {
        title: "Portfolio Website",
        img: "src/assets/images/porfolio.jpg",
        description:
          "A personal portfolio website showcasing projects, education, and experience.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/portfolio",
        },
        technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
      },
      {
        title: "Movie Watchlist",
        img: "src/assets/images/watchlist.jpg",
        description:
          "Search and save movies to a personal watchlist with an intuitive and responsive interface.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/movie-watchlist",
        },
        technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
      },
      {
        title: "Weather-Forecast",
        img: "src/assets/images/forecast.jpg",
        description:
          "Utilizes an API key to fetch and display current weather details.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/weather-forecast",
        },
        technologies: ["React.js", "Redux", "API", "HTML/CSS"],
      },
      {
        title: "Portfolio Website #2",
        img: "src/assets/images/porfolio.jpg",
        description:
          "A personal portfolio website showcasing projects, education, and experience.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/portfolio",
        },
        technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
      },
      {
        title: "Movie Watchlist #2",
        img: "src/assets/images/watchlist.jpg",
        description:
          "Search and save movies to a personal watchlist with an intuitive and responsive interface.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/movie-watchlist",
        },
        technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
      },
      {
        title: "Weather-Forecast #2",
        img: "src/assets/images/forecast.jpg",
        description:
          "Utilizes an API key to fetch and display current weather details.",
        projectLinks: {
          site: "#",
          github: "https://github.com/IhorPanchenko/weather-forecast",
        },
        technologies: ["React.js", "Redux", "API", "HTML/CSS"],
      },
    ],
    experience: () => [
      {
        company: "APEX Global Solutions LLC",
        period: "02/2020 - 02/2023",
        role: "Senior Accounts Payable Representative",
        technologies: [
          "Microsoft Dynamics",
          "Problem Solving",
          "Accounts Reconciliation",
          "Team/Vendor Communication",
        ],
        description:
          "Training and supporting new team members in onboarding processes and tools. Planning and executing supplier payments, handling inquiries regarding outstanding amounts. Managing supplier accounts and reconciling costs and balances.",
      },
      {
        company: "APEX Global Solutions LLC",
        period: "07/2019 - 02/2020",
        role: "Accounts Payable Representative",
        technologies: [
          "Microsoft Dynamics",
          "Invoice Processing",
          "Financial Reporting",
          "Attention to Detail",
        ],
        description:
          "Monitoring all payments and expenses, including invoices and bank statements. Creating account analyses and monthly reports. Preparing and compiling invoices for payment.",
      },
      {
        company: "NTC | Nationwide Title Clearing",
        period: "06/2018- 03/2019",
        role: "Junior Frontend Developer",
        technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
        description:
          "Developing responsive web applications using React.js and JavaScript. Styling components with Sass and creating custom themes using Tailwind CSS to enhance user experience.",
      },
    ],
    education: () => [
      {
        degree: "Associate in Science Degree",
        period: "2016 - 2018",
        faculty: "Computer Programming",
        institution: "Hillsborough Community College",
        location: "Tampa, FL, US",
      },
      {
        degree: "Specialist's Degree",
        period: "2012 - 2013",
        faculty: "Information Management Systems and Technologies",
        institution: "Odesa National Academy",
        location: "Odesa, Ukraine",
      },
      {
        degree: "Bachelor's Degree",
        period: "2008 - 2012",
        faculty: "Information Technology",
        institution: "Odesa National Academy",
        location: "Odesa, Ukraine",
      },
    ],
  },
};
