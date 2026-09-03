// 1. App State & Local Storage Setup
let students = JSON.parse(localStorage.getItem('eduTrackStudents')) || [];
let editStudentId = null;

// 2. DOM Elements
const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const courseInput = document.getElementById('course');
const studentContainer = document.getElementById('studentContainer');
const searchInput = document.getElementById('searchInput');
const errorMessage = document.getElementById('error-message');
const totalCount = document.getElementById('totalCount');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const formTitle = document.getElementById('formTitle');
const sortBtn = document.getElementById('sortBtn');
const themeToggle = document.getElementById('themeToggle');

// 3. Save Data to Local Storage
function saveToLocalStorage() {
    localStorage.setItem('eduTrackStudents', JSON.stringify(students));
}

// 4. Render Students & Stats
function renderStudents(studentArray) {
    studentContainer.innerHTML = '';
    
    // Update Dynamic Stats
    totalCount.innerText = studentArray.length;

    studentArray.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        
        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <div class="card-actions">
                <button class="edit-btn" onclick="startEdit(${student.id})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </div>
        `;
        studentContainer.appendChild(card);
    });
}

// 5. Add or Update Student
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameVal = nameInput.value.trim();
    const ageVal = ageInput.value;
    const courseVal = courseInput.value.trim();

    if (!nameVal || !ageVal || !courseVal) {
        errorMessage.innerText = 'Please fill out all fields.';
        return;
    }
    errorMessage.innerText = '';

    if (editStudentId) {
        // Update existing student
        students = students.map(student => {
            if (student.id === editStudentId) {
                return { ...student, name: nameVal, age: parseInt(ageVal), course: courseVal };
            }
            return student;
        });
        resetFormState();
    } else {
        // Create new student
        const newStudent = { id: Date.now(), name: nameVal, age: parseInt(ageVal), course: courseVal };
        students.push(newStudent);
    }

    saveToLocalStorage();
    renderStudents(students);
    studentForm.reset();
});

// 6. Delete Feature
function deleteStudent(id) {
    if(confirm("Are you sure you want to delete this record?")) {
        students = students.filter(student => student.id !== id);
        saveToLocalStorage();
        renderStudents(students);
    }
}

// 7. Edit Feature (Populate form)
function startEdit(id) {
    const studentToEdit = students.find(student => student.id === id);
    if (!studentToEdit) return;

    editStudentId = id;
    nameInput.value = studentToEdit.name;
    ageInput.value = studentToEdit.age;
    courseInput.value = studentToEdit.course;

    formTitle.innerText = "Edit Student";
    submitBtn.innerText = "Update Student";
    cancelBtn.classList.remove('hidden');
    window.scrollTo(0, 0); // Scroll to top
}

// Reset Form after Edit or Cancel
cancelBtn.addEventListener('click', resetFormState);

function resetFormState() {
    studentForm.reset();
    editStudentId = null;
    formTitle.innerText = "Add New Student";
    submitBtn.innerText = "Add Student";
    cancelBtn.classList.add('hidden');
    errorMessage.innerText = '';
}

// 8. Search / Filter Feature
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm)
    );
    renderStudents(filteredStudents);
});

// 9. Sorting Feature
let isSorted = false;
sortBtn.addEventListener('click', () => {
    if (!isSorted) {
        // Create a copy to sort, avoiding mutating the original array order immediately
        const sortedArray = [...students].sort((a, b) => a.name.localeCompare(b.name));
        renderStudents(sortedArray);
        sortBtn.innerText = "Unsort ❌";
    } else {
        renderStudents(students);
        sortBtn.innerText = "Sort A-Z ⬇️";
    }
    isSorted = !isSorted;
});

// 10. Dark Mode Feature
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});

// Initialize App
renderStudents(students);