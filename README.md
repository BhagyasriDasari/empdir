This project implements a responsive web-based employee directory, showcasing fundamental front-end development skills using HTML, CSS, and JavaScript, with a conceptual understanding of Freemarker templates for initial data rendering. The application allows users to view, add, edit, delete, search, filter, and sort employee data directly within the browser, with all data managed in-memory.

## Table of Contents

1.  [Features](#features)
2.  [Technologies Used](#technologies-used)
3.  [Project Structure](#project-structure)
4.  [Setup and Run Instructions](#setup-and-run-instructions)

## Features

The application provides the following core functionalities:

* **Employee Dashboard:** Displays a list/grid of employees with essential details.
* **Add New Employee:** A dedicated form to add new employee records.
* **Edit Employee:** Ability to modify existing employee details via the form, pre-filled with current data.
* **Delete Employee:** Option to remove employee records with a confirmation prompt.
* **Search:** Real-time search functionality by employee first name, last name, or email.
* **Filter:** Ability to filter employees by first name, department, and role using a dedicated filter panel.
* **Sort:** Sort employees by First Name or Department.
* **Pagination:** Displays employees in paginated sets, with controls for navigating pages and adjusting items per page.
* **Responsive Design:** Optimized layout and styling for various screen sizes (desktop, tablet, mobile).
* **Client-Side Form Validation:** Ensures data integrity for required fields and email format.
* **In-Memory Data:** All employee data is managed using a local JavaScript array, simulating a client-side database.

## Technologies Used

* **HTML5:** For structuring the web content.
* **CSS3:** For styling the user interface, including responsive design using Media Queries and Flexbox/Grid principles.
* **avaScript:** For all dynamic functionalities, DOM manipulation, data management, search, filter, sort, and pagination logic.

employee-directory/
├── src/main/resources/templates/
│   └── index.html     # Main template for the employee dashboard and form.
├── src/main/resources/static/
│   ├── css/
│   │   └── style.css       # All global and component-specific CSS styles.
│   └── js/
│       ├── data.js         # Contains the mock employee data array.
│       └── app.js          # Main JavaScript file containing all application logic.
└── README.md               # This documentation file.