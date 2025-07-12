const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");

function createCard(employee) {
  const card = document.createElement("div");
  card.className = "card";

  const details = document.createElement("div");
  details.className = "card-details";

  details.innerHTML = `
    <strong>Name:</strong> ${employee.name}<br>
    <strong>Email:</strong> ${employee.email}<br>
    <strong>Department:</strong> ${employee.department}<br>
    <strong>Role:</strong> ${employee.role}
  `;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  card.appendChild(details);
  card.appendChild(editBtn);
  cardContainer.appendChild(card);
}

function displayEmployees(data) {
  cardContainer.innerHTML = "";
  data.forEach(createCard);
}

filterBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  displayEmployees(filtered);
});

window.onload = () => {
  displayEmployees(employees);
};
