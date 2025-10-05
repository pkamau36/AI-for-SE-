// ----------------------
// Simulated Course Data
// ----------------------
const courses = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML structure and elements.",
    lessons: ["What is HTML?", "Basic Tags", "Links & Images", "HTML Layouts"],
    progress: 0,
  },
  {
    id: 2,
    title: "CSS for Beginners",
    description: "Master styling fundamentals to make your pages look great.",
    lessons: ["Selectors", "Box Model", "Flexbox Basics", "Responsive Design"],
    progress: 0,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Understand the core concepts of JavaScript programming.",
    lessons: ["Variables & Data Types", "Functions", "DOM Manipulation", "Events"],
    progress: 0,
  },
];

// Save or get progress from localStorage
function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function getCourses() {
  const saved = localStorage.getItem("courses");
  return saved ? JSON.parse(saved) : courses;
}

// ----------------------
// Home Page Logic
// ----------------------
if (document.title.includes("Mini E-Learning")) {
  const courseList = document.getElementById("course-list");
  const data = getCourses();

  data.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Progress:</strong> ${course.progress}%</p>
      <button onclick="viewCourse(${course.id})">View Course</button>
    `;
    courseList.appendChild(card);
  });
}

function viewCourse(id) {
  localStorage.setItem("selectedCourse", id);
  window.location.href = "course.html";
}

// ----------------------
// Course Detail Page Logic
// ----------------------
if (document.title.includes("Course Details")) {
  const courseId = localStorage.getItem("selectedCourse");
  const data = getCourses();
  const course = data.find(c => c.id == courseId);

  if (course) {
    document.getElementById("course-title").textContent = course.title;
    const lessonList = document.getElementById("lesson-list");
    course.lessons.forEach(lesson => {
      const li = document.createElement("li");
      li.textContent = lesson;
      lessonList.appendChild(li);
    });

    const progress = document.getElementById("progress");
    progress.textContent = course.progress;

    document.getElementById("complete-btn").addEventListener("click", () => {
      course.progress = 100;
      saveCourses();
      progress.textContent = course.progress;
      alert(`${course.title} marked as completed! 🎉`);
    });
  }
}
