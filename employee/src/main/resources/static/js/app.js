const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");

// Modal Elements
const modal = document.getElementById("modal");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const closeModal = document.getElementById("closeModal");
const submitEmployee = document.getElementById("submitEmployee");

const empName = document.getElementById("empName");
const empEmail = document.getElementById("empEmail");
const empDepartment = document.getElementById("empDepartment");
const empRole = document.getElementById("empRole");

let isEditing = false;
let currentEditCard = null;

function createCard(employee) {
  const card = document.createElement("div");
  card.className = "card";

  const details = document.createElement("div");
  details.className = "card-details";

  details.innerHTML = `
    <strong>Name:</strong> <span class="emp-name">${employee.name}</span><br>
    <strong>Email:</strong> <span class="emp-email">${employee.email}</span><br>
    <strong>Department:</strong> <span class="emp-department">${employee.department}</span><br>
    <strong>Role:</strong> <span class="emp-role">${employee.role}</span>
  `;

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  editBtn.addEventListener("click", () => {
    isEditing = true;
    currentEditCard = card;

    empName.value = employee.name;
    empEmail.value = employee.email;
    empDepartment.value = employee.department;
    empRole.value = employee.role;

    submitEmployee.textContent = "Update";
    modal.style.display = "block";
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm(`Are you sure you want to delete ${employee.name}?`);
    if (confirmDelete) {
      card.remove();
    }
  });

  // Button Group
  const buttonGroup = document.createElement("div");
  buttonGroup.style.display = "flex";
  buttonGroup.style.justifyContent = "space-between";
  buttonGroup.style.marginTop = "10px";

  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);

  card.appendChild(details);
  card.appendChild(buttonGroup);
  cardContainer.appendChild(card);
}

function displayEmployees(data) {
  cardContainer.innerHTML = "";
  data.forEach(createCard);
}

// Show modal on "Add Employee"
addEmployeeBtn.addEventListener("click", () => {
  isEditing = false;
  currentEditCard = null;
  submitEmployee.textContent = "Add";
  modal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  clearModalInputs();
});

// Add or Update employee
submitEmployee.addEventListener("click", () => {
  const name = empName.value.trim();
  const email = empEmail.value.trim();
  const department = empDepartment.value.trim();
  const role = empRole.value.trim();

  if (!name || !email || !department || !role) {
    alert("Please fill in all fields.");
    return;
  }

  if (isEditing && currentEditCard) {
    currentEditCard.querySelector(".emp-name").textContent = name;
    currentEditCard.querySelector(".emp-email").textContent = email;
    currentEditCard.querySelector(".emp-department").textContent = department;
    currentEditCard.querySelector(".emp-role").textContent = role;
  } else {
    const newEmployee = { name, email, department, role };
    createCard(newEmployee);
  }

  modal.style.display = "none";
  clearModalInputs();
  isEditing = false;
  currentEditCard = null;
});

// Utility
function clearModalInputs() {
  empName.value = "";
  empEmail.value = "";
  empDepartment.value = "";
  empRole.value = "";
  submitEmployee.textContent = "Add";
}

// Filter
filterBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  displayEmployees(filtered);
});

// Initial load
window.onload = () => {
  displayEmployees(employees);
};
