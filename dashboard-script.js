// --- Global Data Stores: All Databases ---

// 1. Patient Database (Mock Data with updated structure for Plan Saving)
let patientDatabase = [
    { 
        id: 101, 
        name: "Rohan Kapoor", 
        age: 35, 
        gender: "Male", 
        dosha: "Vata-Pitta Imbalance", 
        status: "caution", 
        notes: "Irregular digestion, low water intake.", 
        currentPlan: "Vata Pacifying",
        // NEW FIELD: Structured plan details to be displayed and updated
        currentPlanDetails: {
            duration: 7,
            targetDosha: "Vata Pacifying",
            meals: {
                Breakfast: [{name: "Oats Porridge", rasa: "Madhura", virya: "Shita", cal: 450, quantity: '1 Serving'}],
                Lunch: [{name: "Moong Dal Khichdi", rasa: "Madhura", virya: "Shita", cal: 650, quantity: '1 Serving'}],
                Dinner: [{name: "Baked Vegetables & Chapati", rasa: "Katu", virya: "Ushna", cal: 500, quantity: '1 Serving'}],
                Snacks: []
            }
        }
    },
    { id: 102, name: "Priya Singh", age: 28, gender: "Female", dosha: "Kapha Dominant", status: "stable", notes: "Weight management, sluggishness.", currentPlan: "Kapha Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 103, name: "Anil Verma", age: 55, gender: "Male", dosha: "Pitta Dominant", status: "healthy", notes: "Hyperacidity managed well.", currentPlan: "Pitta Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 104, name: "Sneha Reddy", age: 42, gender: "Female", dosha: "Vata Dominant", status: "caution", notes: "Joint pain and insomnia.", currentPlan: "Vata Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 105, name: "Kunal Jain", age: 60, gender: "Male", dosha: "Tridoshic (Balanced)", status: "healthy", notes: "Maintenance plan, good lifestyle.", currentPlan: "Tridoshic Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 106, name: "Meera Sharma", age: 31, gender: "Female", dosha: "Pitta-Kapha Imbalance", status: "stable", notes: "Seasonal allergies.", currentPlan: "Pitta-Kapha Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 107, name: "Vikram Yadav", age: 48, gender: "Male", dosha: "Vata Dominant", status: "caution", notes: "Stress-related digestive issues.", currentPlan: "Vata Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 108, name: "Aisha Khan", age: 24, gender: "Female", dosha: "Kapha Dominant", status: "stable", notes: "Mild acne, requires detox.", currentPlan: "Kapha Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 109, name: "Deepak Patel", age: 68, gender: "Male", dosha: "Vata-Kapha Imbalance", status: "healthy", notes: "Recovering from joint stiffness.", currentPlan: "Vata-Kapha Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 110, name: "Shalini Gupta", age: 39, gender: "Female", dosha: "Pitta Dominant", status: "caution", notes: "High blood pressure history.", currentPlan: "Pitta Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 111, name: "Rajesh Kumar", age: 50, gender: "Male", dosha: "Vata Dominant", status: "caution", notes: "Chronic fatigue.", currentPlan: "Vata Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 112, name: "Pooja Das", age: 22, gender: "Female", dosha: "Pitta Dominant", status: "healthy", notes: "Strict diet followed.", currentPlan: "Pitta Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 113, name: "Gaurav Soni", age: 75, gender: "Male", dosha: "Vata-Kapha Imbalance", status: "stable", notes: "Elderly care, low Agni.", currentPlan: "Vata-Kapha Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 114, name: "Isha Malhotra", age: 33, gender: "Female", dosha: "Kapha Dominant", status: "caution", notes: "Weight gain post-pregnancy.", currentPlan: "Kapha Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 115, name: "Arjun Trivedi", age: 29, gender: "Male", dosha: "Tridoshic (Balanced)", status: "healthy", notes: "Fitness focus.", currentPlan: "Tridoshic Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 116, name: "Neha Mittal", age: 44, gender: "Female", dosha: "Pitta-Vata Imbalance", status: "stable", notes: "Menopausal symptoms.", currentPlan: "Pitta-Vata Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 117, name: "Suresh Pillai", age: 58, gender: "Male", dosha: "Vata Dominant", status: "caution", notes: "Tinnitus and dry skin.", currentPlan: "Vata Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 118, name: "Kavya Rao", age: 19, gender: "Female", dosha: "Kapha Dominant", status: "stable", notes: "Student, irregular eating.", currentPlan: "Kapha Pacifying", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 119, name: "Harsh Dubey", age: 62, gender: "Male", dosha: "Pitta Dominant", status: "healthy", notes: "Regular checkups.", currentPlan: "Pitta Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 120, name: "Jia Ali", age: 37, gender: "Female", dosha: "Vata-Pitta Imbalance", status: "caution", notes: "Migraines and sensitivity.", currentPlan: "Vata-Pitta Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 121, name: "Bhuvan Sen", age: 53, gender: "Male", dosha: "Kapha-Pitta Imbalance", status: "stable", notes: "Mild hypertension.", currentPlan: "Kapha-Pitta Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}},
    { id: 122, name: "Tara Singh", age: 26, gender: "Female", dosha: "Vata Dominant", status: "healthy", notes: "Successfully managed Vata.", currentPlan: "Vata Balance", currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}}}
];

// 2. Food Database (Mock Data)
const foodDatabase = [
    { id: 1, name: "Basmati Rice (Old)", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 350, guna: "Laghu, Snigdha" },
    { id: 2, name: "Moong Dal (Split)", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 347, guna: "Laghu, Ruksha" },
    { id: 3, name: "Ghee (Cow's)", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 900, guna: "Snigdha, Sara" },
    { id: 4, name: "Ginger (Fresh)", rasa: "Katu", virya: "Ushna", vipaka: "Madhura", cal: 80, guna: "Ruksha, Tikshna" },
    { id: 5, name: "Turmeric Powder", rasa: "Tikta, Katu", virya: "Ushna", vipaka: "Katu", cal: 354, guna: "Ruksha, Laghu" },
    { id: 6, name: "Spinach (Palak)", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 23, guna: "Guru, Sara" },
    { id: 7, name: "Mustard Oil", rasa: "Katu", virya: "Ushna", vipaka: "Katu", cal: 900, guna: "Tikshna, Snigdha" },
    { id: 8, name: "Amla (Indian Gooseberry)", rasa: "Amala, Kashaya", virya: "Shita", vipaka: "Madhura", cal: 44, guna: "Laghu, Ruksha" },
    { id: 9, name: "Black Pepper", rasa: "Katu", virya: "Ushna", vipaka: "Katu", cal: 251, guna: "Tikshna, Laghu" },
    { id: 10, name: "Yogurt (Dahi)", rasa: "Amala", virya: "Ushna", vipaka: "Amala", cal: 59, guna: "Guru, Snigdha" },
    { id: 11, name: "Wheat Chapati", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 339, guna: "Guru, Snigdha" },
    { id: 12, name: "Cabbage", rasa: "Kashaya", virya: "Shita", vipaka: "Katu", cal: 25, guna: "Ruksha, Laghu" },
    { id: 13, name: "Honey", rasa: "Madhura, Kashaya", virya: "Shita", vipaka: "Katu", cal: 304, guna: "Laghu, Ruksha" },
    { id: 14, name: "Paneer (Cottage Cheese)", rasa: "Madhura", virya: "Shita", vipaka: "Madhura", cal: 321, guna: "Guru, Snigdha" },
    { id: 15, name: "Garlic", rasa: "Katu", virya: "Ushna", vipaka: "Katu", cal: 149, guna: "Tikshna, Sara" },
];


let selectedPatientId = 101; 
let currentMealPlan = []; 

// #################################################################
// ## 1. Patient List and Details Management Functions
// #################################################################

function loadPatientList(patients) {
    const listElement = document.getElementById('patientList');
    const countElement = document.getElementById('patientCount');
    const overviewCountElement = document.getElementById('overviewPatientCount');
    
    listElement.innerHTML = '';
    
    patients.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.setAttribute('onclick', `showPatientDetails(${patient.id})`);
        
        if (patient.id === selectedPatientId && patients === patientDatabase) {
             listItem.classList.add('active');
        }
        
        let statusClass = patient.status; 
        
        listItem.innerHTML = `${patient.name} <span class="status-dot ${statusClass}"></span>`;
        listElement.appendChild(listItem);
    });
    
    countElement.textContent = patients.length;
    if (overviewCountElement) {
        overviewCountElement.textContent = patients.length;
    }
}

function searchPatients(query) {
    const lowerQuery = query.toLowerCase();
    const filteredPatients = patientDatabase.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || p.dosha.toLowerCase().includes(lowerQuery)
    );
    loadPatientList(filteredPatients);
}

/**
 * Shows the detailed view for the selected patient and displays the current plan (DYNAMIC).
 */
function showPatientDetails(patientId) {
    const patient = patientDatabase.find(p => p.id === patientId);
    
    if (!patient) return;

    selectedPatientId = patientId; 

    // Switch view from Overview to Details
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('patient-details').classList.remove('hidden');
    
    // Update active class in sidebar
    document.querySelectorAll('.patient-list li').forEach(item => item.classList.remove('active'));
    const patientItems = document.getElementById('patientList').getElementsByTagName('li');
    for (let i = 0; i < patientItems.length; i++) {
        if (patientItems[i].getAttribute('onclick').includes(patientId)) {
            patientItems[i].classList.add('active');
            break;
        }
    }

    // Update Main Details Block
    document.getElementById('content-title').textContent = `Patient Details | ID: ${patient.id}`;
    document.querySelector('#patient-details h2').textContent = `Patient: ${patient.name}`;
    
    const summary = document.querySelector('#patient-details .patient-summary');
    summary.innerHTML = `
        <div><strong>Age:</strong> ${patient.age}</div>
        <div><strong>Gender:</strong> ${patient.gender}</div>
        <div><strong>Doshic Profile:</strong> ${patient.dosha}</div>
        <div><strong>Status:</strong> <span class="status-dot ${patient.status}"></span> ${patient.status.toUpperCase()}</div>
        <div><strong>Current Plan:</strong> ${patient.currentPlan}</div>
        <div><strong>Last Note:</strong> ${patient.notes}</div>
    `;
    
    // --- DYNAMIC PLAN DISPLAY (Updated Logic) ---
    const planDetails = patient.currentPlanDetails || {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}};
    const planPreviewDiv = document.querySelector('#patient-details .diet-plan-preview .diet-table tbody');
    planPreviewDiv.innerHTML = '';
    
    document.querySelector('#patient-details h3').textContent = `Current Diet Plan (${planDetails.duration} Days) - ${planDetails.targetDosha}`;

    // Loop through meals (Breakfast, Lunch, Dinner, Snacks) and display details
    for (const meal in planDetails.meals) {
        const currentMealItems = planDetails.meals[meal];
        
        if (currentMealItems && currentMealItems.length > 0) {
            const foodItems = currentMealItems.map(item => `${item.name} (${item.rasa}/${item.virya})`).join(', ');
            const totalCal = currentMealItems.reduce((sum, item) => sum + item.cal, 0).toFixed(0);

            const row = planPreviewDiv.insertRow();
            row.innerHTML = `
                <td>**${meal}**</td>
                <td>${foodItems}</td>
                <td>~${totalCal} kcal, ${planDetails.targetDosha}</td>
            `;
        } else {
             const row = planPreviewDiv.insertRow();
             row.innerHTML = `
                <td>**${meal}**</td>
                <td colspan="2" style="color: #777;">No items scheduled for this meal.</td>
            `;
        }
    }
}


// #################################################################
// ## 2. MODAL 1: Add Patient Functions
// #################################################################

function openAddPatientModal() {
    document.getElementById('addPatientModal').style.display = 'block';
    document.getElementById('addPatientForm').reset();
}

function closeAddPatientModal() {
    document.getElementById('addPatientModal').style.display = 'none';
}


// #################################################################
// ## 3. MODAL 2: Diet Plan Generation & Saving Functions
// #################################################################

function openDietPlanModal() {
    const patient = patientDatabase.find(p => p.id === selectedPatientId);
    if (!patient) { alert("Please select a patient first."); return; }
    
    document.getElementById('planPatientName').textContent = patient.name;
    document.getElementById('targetDosha').value = patient.dosha.split(' ')[0] + " Pacifying"; 
    document.getElementById('dietPlanModal').style.display = 'block';
    
    document.getElementById('planFoodSearchInput').value = ''; 
    searchPlanFood(""); 
    currentMealPlan = []; // IMPORTANT: Reset plan array when opening
    updateCurrentMealPreview();
    updateMealSummary();
}

function closeDietPlanModal() {
    document.getElementById('dietPlanModal').style.display = 'none';
}

function searchPlanFood(query) {
    const body = document.getElementById('planFoodResultsBody');
    const lowerQuery = query ? query.toLowerCase() : '';
    
    const filteredFoods = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(lowerQuery) || food.rasa.toLowerCase().includes(lowerQuery) || food.virya.toLowerCase().includes(lowerQuery)
    );
    
    body.innerHTML = '';
    
    if (filteredFoods.length === 0) {
        body.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #e74c3c;">No food items found.</td></tr>`;
        return;
    }
    
    const displayFoods = filteredFoods.slice(0, 10); 

    displayFoods.forEach(food => {
        const row = body.insertRow();
        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.rasa}</td>
            <td>${food.virya}</td>
            <td>${food.cal}</td>
            <td>
                <button class="btn btn-primary" style="padding: 5px 10px;" 
                onclick="addFoodToPlan(${food.id}, '${food.name.replace(/'/g, "\\'")}', '${food.rasa}', '${food.virya}', ${food.cal})">Add</button>
            </td>
        `;
    });
}

function addFoodToPlan(id, name, rasa, virya, cal) {
    const mealType = document.getElementById('mealType').value;
    const isDuplicate = currentMealPlan.some(item => item.id === id && item.meal === mealType);
    
    if (isDuplicate) {
        alert(`"${name}" is already added to the ${mealType} plan.`);
        return;
    }

    currentMealPlan.push({
        id: id, name: name, rasa: rasa, virya: virya, cal: cal, meal: mealType, quantity: '1 Serving (Approx)'
    });

    updateCurrentMealPreview();
    updateMealSummary();
    alert(`"${name}" added successfully for ${mealType}!`);
}

function updateCurrentMealPreview() {
    const previewDiv = document.getElementById('currentMealItems');
    const mealType = document.getElementById('mealType').value;
    document.getElementById('previewMealName').textContent = mealType;

    const itemsForCurrentMeal = currentMealPlan.filter(item => item.meal === mealType);

    if (itemsForCurrentMeal.length === 0) {
        previewDiv.innerHTML = `<p style="color: #999;">No items added yet for ${mealType}. Add items using the search above.</p>`;
        return;
    }
    
    let html = `
        <table class="diet-table" style="font-size: 0.9em; width: 100%;">
            <thead><tr><th>Food</th><th>Rasa</th><th>Virya</th><th>Calories</th><th>Qty</th></tr></thead>
            <tbody>
    `;

    itemsForCurrentMeal.forEach(item => {
        html += `
            <tr>
                <td>${item.name}</td>
                <td>${item.rasa}</td>
                <td>${item.virya}</td>
                <td>${item.cal}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    previewDiv.innerHTML = html;
}

function updateMealSummary() {
    const mealType = document.getElementById('mealType').value;
    const itemsForCurrentMeal = currentMealPlan.filter(item => item.meal === mealType);
    
    let totalCal = itemsForCurrentMeal.reduce((sum, item) => sum + item.cal, 0);
    
    let rasas = itemsForCurrentMeal.map(i => i.rasa.split(',')[0].trim());
    let dominantRasa = rasas.length > 0 ? rasas.reduce((a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b)) : 'N/A';

    let viryas = itemsForCurrentMeal.map(i => i.virya.split(',')[0].trim());
    let dominantVirya = viryas.length > 0 ? viryas.reduce((a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b)) : 'N/A';

    const summaryDiv = document.getElementById('mealSummary');
    summaryDiv.innerHTML = `
        <strong>Total Calories:</strong> ${totalCal.toFixed(0)} kcal<br>
        <strong>Dominant Rasa:</strong> ${dominantRasa}<br>
        <strong>Overall Virya:</strong> ${dominantVirya}
    `;
}

/**
 * Saves the current meal plan configuration to the selected patient's record. (NEW LOGIC)
 */
function saveDietPlan() {
    if (currentMealPlan.length === 0) {
        alert("Please add at least one food item to the plan before saving.");
        return;
    }

    const patientIndex = patientDatabase.findIndex(p => p.id === selectedPatientId);
    if (patientIndex === -1) {
        alert("Error: Patient not found.");
        return;
    }

    const duration = document.getElementById('planDuration').value;
    const targetDosha = document.getElementById('targetDosha').value;

    // 1. Group food items by meal type (Breakfast, Lunch, Dinner, Snacks)
    const newMeals = { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] };
    currentMealPlan.forEach(item => {
        if (newMeals[item.meal]) {
            newMeals[item.meal].push({
                name: item.name,
                rasa: item.rasa,
                virya: item.virya,
                cal: item.cal,
                quantity: item.quantity
            });
        }
    });

    // 2. Create the new plan object
    const newPlanDetails = {
        duration: parseInt(duration),
        targetDosha: targetDosha,
        meals: newMeals,
        dateGenerated: new Date().toLocaleDateString('en-IN')
    };
    
    // 3. Update the patient record
    patientDatabase[patientIndex].currentPlan = targetDosha;
    patientDatabase[patientIndex].currentPlanDetails = newPlanDetails;

    alert(`New ${targetDosha} plan saved successfully for ${patientDatabase[patientIndex].name} for ${duration} days!`);

    closeDietPlanModal();
    showPatientDetails(selectedPatientId); // Refresh the details view to show the new plan
}


// #################################################################
// ## 4. MODAL 3: Global Food Database Functions
// #################################################################

function openFoodDatabaseModal() {
    document.getElementById('foodDatabaseModal').style.display = 'block';
    document.getElementById('foodSearchInput').value = ''; 
    populateFoodDatabaseTable(""); 
}

function closeFoodDatabaseModal() {
    document.getElementById('foodDatabaseModal').style.display = 'none';
}

function populateFoodDatabaseTable(query) {
    const body = document.getElementById('foodDatabaseBody');
    const countElement = document.getElementById('foodCount');
    const lowerQuery = query ? query.toLowerCase() : '';
    
    const filteredFoods = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(lowerQuery) || food.rasa.toLowerCase().includes(lowerQuery) || food.virya.toLowerCase().includes(lowerQuery) || food.vipaka.toLowerCase().includes(lowerQuery) || food.guna.toLowerCase().includes(lowerQuery)
    );
    
    body.innerHTML = '';
    
    if (filteredFoods.length === 0) {
        body.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #e74c3c;">No items found matching "${query}".</td></tr>`;
        countElement.textContent = 'Showing 0 items.';
        return;
    }
    
    const displayFoods = filteredFoods.slice(0, 20); 

    displayFoods.forEach(food => {
        const row = body.insertRow();
        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.rasa}</td>
            <td>${food.virya}</td>
            <td>${food.vipaka}</td>
            <td>${food.cal}</td>
            <td>${food.guna}</td>
        `;
    });
    
    countElement.textContent = `Showing ${displayFoods.length} of ${filteredFoods.length} matching items (Total in DB: 8000+ Mock).`;
}

function searchFoodDatabase(query) {
    populateFoodDatabaseTable(query);
}


// #################################################################
// ## 5. MODAL 4: Reports Functions
// #################################################################

function openReportsModal() {
    document.getElementById('reportsModal').style.display = 'block';
}

function closeReportsModal() {
    document.getElementById('reportsModal').style.display = 'none';
}


// #################################################################
// ## 6. Initial Load and Event Listeners
// #################################################################

document.addEventListener('DOMContentLoaded', () => {
    
    // Listener for adding a new patient (Mock Save)
    document.getElementById('addPatientForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const initialDosha = document.getElementById('pDoshic').value;
        const newPatient = {
            id: Date.now(),
            name: document.getElementById('pName').value,
            age: parseInt(document.getElementById('pAge').value),
            gender: document.getElementById('pGender').value,
            dosha: initialDosha,
            status: 'caution', 
            notes: document.getElementById('pSymptoms').value || "New patient added.",
            currentPlan: initialDosha.split(' ')[0] + " Pacifying",
            currentPlanDetails: {duration: 0, targetDosha: "N/A", meals: {Breakfast: [], Lunch: [], Dinner: [], Snacks: []}} // Initialize empty plan
        };
        
        patientDatabase.unshift(newPatient); 
        loadPatientList(patientDatabase);
        
        alert(`Patient "${newPatient.name}" added successfully!`);
        
        closeAddPatientModal();
        showPatientDetails(newPatient.id); 
    });

    // Listener to update meal preview when meal type changes in Diet Plan Modal
    document.getElementById('mealType').addEventListener('change', () => {
        updateCurrentMealPreview();
        updateMealSummary();
    });

    // Initial Dashboard Load
    loadPatientList(patientDatabase);
    showPatientDetails(101); // Show Rohan Kapoor details initially
});