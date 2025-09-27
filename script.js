// --- Modal Functionality ---
const dietPlanModal = document.getElementById('dietPlanModal');

function openDietPlanModal() {
    dietPlanModal.style.display = "block";
}

function closeDietPlanModal() {
    dietPlanModal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
    if (event.target == dietPlanModal) {
        closeDietPlanModal();
    }
}


// --- Sidebar / Content Switching ---
const dashboardView = document.getElementById('dashboard-view');
const patientDetails = document.getElementById('patient-details');
const contentTitle = document.getElementById('content-title');

/**
 * Simulates loading patient data and switching the view.
 * In a real application, this would fetch data from the server.
 * @param {number} patientId - The ID of the patient to show.
 */
function showPatientDetails(patientId) {
    // 1. Update Active State in Sidebar
    document.querySelectorAll('.patient-list li').forEach(li => {
        li.classList.remove('active');
    });
    // Find the clicked element (in a real app, you might use an event listener)
    const patientListItem = document.querySelector(`.patient-list li:nth-child(${patientId})`);
    if (patientListItem) {
        patientListItem.classList.add('active');
    }

    // 2. Update Content Area
    dashboardView.classList.add('hidden');
    patientDetails.classList.remove('hidden');

    // 3. Mock Data Update (Replace with real data binding)
    const patientName = patientListItem ? patientListItem.innerText.split(' ')[0] + ' ' + patientListItem.innerText.split(' ')[1] : 'Patient';
    patientDetails.querySelector('h2').innerText = `Patient: ${patientName}`;
    contentTitle.innerText = `Patient Profile & Care - ${patientName}`;

    // Note: If patientId is 1, it's Rohan Kapoor. If 2, Priya Singh, etc.
    // The details view would be populated based on the fetched patient data.
}

// Initial state check - if no patient is selected, show dashboard.
if (document.querySelector('.patient-list li.active')) {
    // Show patient 1 details on load (Rohan Kapoor)
    showPatientDetails(1);
} else {
    // Show dashboard
    // dashboardView.classList.remove('hidden');
    patientDetails.classList.add('hidden');
}


// --- Mock Food Search Feature ---
const mockFoods = [
    'Moong Dal Khichdi (Vata Pacifying)', 'Brown Rice Poha', 'Ayurvedic Vegetable Soup',
    'Spiced Ginger Tea', 'Rajma Masala (Difficulty Digest)', 'Quinoa Upma',
    'Amla (Indian Gooseberry)', 'Turmeric Milk (Haldi Doodh)'
];

function simulateFoodSearch(query) {
    const suggestionsDiv = document.getElementById('food-suggestions');
    suggestionsDiv.innerHTML = '';

    if (query.length < 2) {
        return;
    }

    const filtered = mockFoods.filter(food =>
        food.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length > 0) {
        filtered.forEach(food => {
            const suggestion = document.createElement('div');
            suggestion.className = 'suggestion-item';
            suggestion.innerText = food;
            suggestion.onclick = () => {
                alert(`Added "${food}" for detailed analysis (In a real app, this would populate the form).`);
                suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
            };
            suggestionsDiv.appendChild(suggestion);
        });
    } else {
        suggestionsDiv.innerHTML = '<div>No matches found.</div>';
    }
}
// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// script.js mein
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // .active class jodega ya hatayega
    navLinks.classList.toggle('active');
}

// --- Simple Greeting/Console Log for Developers ---
console.log("VedaNova: Where Ancient Wisdom Meets Modern Nutrition. (Page Loaded)");

// Note: In a real application, you might use JavaScript to dynamically load
// feature statistics or trigger scroll-based animations (Intersection Observer API)
// for an even more interactive experience.

// Basic CSS for suggestion list (you would add this to styles.css)
// .suggestions { border: 1px solid #ddd; border-top: none; max-height: 150px; overflow-y: auto; position: absolute; width: 90%; background: white; z-index: 10; }
// .suggestion-item { padding: 8px; cursor: pointer; }

// .suggestion-item:hover { background-color: #f0f0f0; }
