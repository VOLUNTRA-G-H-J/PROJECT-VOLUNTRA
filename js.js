// Event Class (OOP - Encapsulation)
class Event {
  constructor(title, desc, date) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.students = []; 
  }
}

// Load events from localStorage
function loadEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

// Save events
function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

const events = loadEvents();

// Render events for student registration
function renderEvents() {
  const list = document.getElementById("eventList");
  if (!list) return;

  list.innerHTML = "";
  events.forEach((event, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.desc}</p>
      <p><strong>Date:</strong> ${event.date}</p>
      <button onclick="registerStudent(${index})">Register</button>
    `;
    list.appendChild(div);
  });
}

// Student registration
function registerStudent(index) {
  const name = prompt("Enter your full name:");
  if (!name) return;

  events[index].students.push(name);
  saveEvents(events);
  alert(`Thank you, ${name}! Registered successfully.`);
  renderEvents();
  
  // Ask if user wants to view campus map
  const viewMap = confirm("Registration complete! Would you like to view the Campus Map?");
  if (viewMap) {
    window.location.href = "campus-map.html";
  }
}

// Add event form listener (Event-Driven Programming)
const form = document.getElementById("eventForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("eventTitle").value;
    const desc = document.getElementById("eventDesc").value;
    const date = document.getElementById("eventDate").value;

    events.push(new Event(title, desc, date));
    saveEvents(events);
    alert("Event Added!");
    form.reset();
    renderEvents();
    
    // Ask if user wants to view campus map
    const viewMap = confirm("Event created! Would you like to view the Campus Map?");
    if (viewMap) {
      window.location.href = "campus-map.html";
    }
  });
}

// Initial render
renderEvents();