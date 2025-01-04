# Invoice Form Project

A React-based application for managing invoice creation, uploading, and submission. This project allows users to fill out invoice details, save drafts, and submit invoices.

Live Demo:
[https://itsrahulhere.github.io/invoice-form](https://itsrahulhere.github.io/invoice-form)

## Setup and Installation

Follow the steps below to set up the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - npm comes with Node.js by default.

### 1. Clone the repository

```bash
git clone https://github.com/itsrahulhere/invoice-form.git
```

### 2. Install dependencies:

```bash
cd invoice-form
npm install
```

### 3. Run the application:

```bash
npm start
```

Visit http://localhost:3000 to view the app.

## Usage Instructions

### Login Page

1. **Username and Password:** To log into the application, enter the correct username and password (which are stored in mockCredentials.js).
2. If the credentials are correct, you will be redirected to the main invoice form page.
3. If the credentials are incorrect, an error message will appear.

### Invoice Form Page

Once logged in, you will be directed to the Create New Invoice form.

1. **Fields to Fill:** Fill out all required fields (e.g., vendor details, invoice number, total amount).
2. **Save Draft:** You can save your progress by clicking "Save as Draft". The form data will be saved in sessionStorage and can be retrieved later.
3. **Submit Invoice:** After filling out the form, click "Submit & New" to submit the form and create a new invoice.

## Technologies Used

- **React.js** - Frontend library for building user interfaces
- **Formik** - Form handling and validation
- **Yup** - Schema-based validation for forms
- **Material UI** - UI components for styling
- **React Router** - Navigation between different pages
- **Notistack** - Snackbar notifications for form status messages
- **Ant Design** - Grid system for layout

## Try the Application

Click the link below to explore the live demo:

[https://itsrahulhere.github.io/invoice-form](https://itsrahulhere.github.io/invoice-form)
