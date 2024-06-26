# Angular User Dashboard

## Overview

The Angular User Dashboard is an interactive web application built with Angular (7+), showcasing the use of advanced Angular features such as state management with NgRx, observables, and Angular Material for UI components. The project demonstrates efficient state handling and, dynamic user interface updates.

## Features

- **User List:** Paginated list of users fetched from an API.
- **User Details:** Detailed information view for each user.
- **Search Functionality:** Instant search by user ID with dynamic results.
- **State Management:** Efficient state handling using NgRx.
- **Loading Indicators:** Smooth user experience with loading bars during data retrieval.
- **Responsive Design:** Proper styling and animations for enhanced user interface.

## Technologies Used

- **Angular (7+)**
- **NgRx for State Management**
- **RxJS for Observables**
- **Angular Material for UI Components**
- **CSS for Styling**

## Getting Started

### Prerequisites

- Node.js (>= 10.x)
- Angular CLI (>= 7.x)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Omar-Wael/Angular-User-Dashboard.git
   cd angular-user-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   ng serve
   ```
   Open your browser and navigate to http://localhost:4200/.

## Implementation Details

### State Management

- Actions: Defines actions for loading users, handling success, and failure.
- Reducer: Manages state transitions based on dispatched actions.
- Selectors: Provides convenient ways to select slices of the state.
- Effects: Handles side effects, such as HTTP requests.

### Components

- **Header Component:** Contains the search bar and handles search input. success, and failure.
- **User List Component:** Displays a paginated list of users.
- **User Details Component:** Shows detailed information for a selected user.

### Services

- **User Service:** Handles API calls to fetch user data.

### Future Improvements

- Enhance the user interface with more sophisticated animations.
- Add unit tests and end-to-end tests for robust testing.
- Implement more advanced caching strategies.

### Contributing

Contributions are welcome! Please fork this repository and open a pull request to add new features, improve code quality, or fix bugs.

### Contact

For any questions or feedback, please contact omarwael1994@yahoo.com.
