# TaskManagementApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.


TaskManagementApp is a feature-based Angular application that allows users to:

- View a list of users
- Navigate to a selected user’s task list
- View user details on the task page
- Add new tasks using a modal form
- Manage UI state using standalone components

The project demonstrates modern Angular architecture using standalone components and clean component communication.

## How to Run the Application

1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-management-app.git
cd task-management-app
```

2.  Install Dependencies

```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Application Structure

The application follows a feature-based architecture:

```bash
src/app/
│
├── features/
│   ├── user-list/
│   │
│   └── task-list/
│
├── components/
│   ├── task-form/
│   │
│
├── state/
│   ├── user-tasks/
│   │
│   └── users/
└── app.routes.ts
```

## Architectural Decisions

- Uses Standalone Components instead of NgModules.
- Organized by feature folders (users, tasks).
- Uses Angular Router for navigation between:Users page, Task list page per user

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.


## What I Would Improve With More Time

If more time were available, I would:

- Implement Reactive Forms with validation
- Persist tasks using a local storage
- Add loading and error states
- Implement a reusable ModalService
- Improve accessibility (ARIA roles for modal and accordion)
- Add task filtering and editing functionality
- Improve the UI to be more modern

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

