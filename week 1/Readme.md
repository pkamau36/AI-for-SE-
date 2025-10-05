A simple, front-end prototype of an e-learning web application built using HTML, CSS, and JavaScript. This project demonstrates how to dynamically display courses, manage progress, and handle basic interactivity — all without a backend.

🌟 Features

🏠 Home Page: Displays a list of all available courses

📘 Course Detail Page: Shows lessons and progress for a specific course

✅ Mark as Completed: Update and store progress locally using localStorage

🎨 Clean UI: Minimal, responsive design with hover effects

💾 Persistent Data: User progress is saved in the browser even after refresh

🧱 Folder Structure
mini-elearning/
│
├── index.html        # Home page - course listing
├── course.html       # Course detail view
├── style.css         # All styles and hover effects
├── script.js         # App logic and data handling
└── README.md         # Project documentation

⚙️ How It Works

The home page (index.html) lists all courses stored in a JavaScript array.

When a user clicks “View Course”, the app saves the course ID to localStorage and redirects to course.html.

The course page loads that course’s data, displays its lessons, and shows completion progress.

Clicking “Mark as Completed” updates progress to 100% and saves it locally.

  THE PROGRAM CAN BE ACCESSED BY CLICKING ON THE FOLLOWING LINK:
  https://ai-for-se-6nka.vercel.app/
  


