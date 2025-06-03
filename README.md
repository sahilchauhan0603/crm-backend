# Backend - CRM Xeno

## Overview
The backend of CRM Xeno is built using Node.js and Express. It provides RESTful APIs for the frontend to interact with the database. The backend handles business logic, database operations, and API routing.

## Features
- Campaign management
- Communication log tracking
- Customer creation and management
- Order creation and tracking
- Segment creation and management
- Analytics processing


## Explanation of Logic

### Routes
The `routes` directory contains route definitions for different modules, such as `aiRoutes`, `analyticsRoutes`, and `customerRoutes`. These routes map HTTP requests to specific controllers.

### Controllers
The `controllers` directory contains logic for handling incoming requests and sending responses. For example, `customerController.js` handles customer-related operations.

### Services
The `services` directory contains business logic and interacts with the models. For example, `customerService.js` contains methods for creating and retrieving customer data.

### Models
The `models` directory contains database schemas and methods for interacting with the database. For example, `customerModel.js` defines the schema for customer data.

### Utils
The `utils` directory contains helper functions, such as `campaignDispatcher.js`, which are used across multiple modules.


## Architecture
Below is the architecture diagram for the backend:

```
+-------------------+
|                   |
|   Routes          |
|                   |
+-------------------+
         |
         v
+-------------------+
|                   |
|   Controllers     |
|                   |
+-------------------+
         |
         v
+-------------------+
|                   |
|   Services        |
|                   |
+-------------------+
         |
         v
+-------------------+
|                   |
|   Models          |
|                   |
+-------------------+
         |
         v
+-------------------+
|                   |
|   Utils           |
|                   |
+-------------------+
```
## Theoretical Explanation of Architecture

The backend architecture is designed to handle business logic, database operations, and API routing efficiently. It consists of the following layers:

1. **Routes**: These define the endpoints for different modules, such as `aiRoutes`, `analyticsRoutes`, and `customerRoutes`. Each route maps HTTP requests to specific controllers.

2. **Controllers**: Controllers contain logic for handling incoming requests and sending responses. For example, `customerController.js` processes customer-related operations.

3. **Services**: Services encapsulate business logic and interact with models. For instance, `customerService.js` contains methods for creating and retrieving customer data.

4. **Models**: Models define database schemas and methods for interacting with the database. For example, `customerModel.js` specifies the schema for customer data.

5. **Utils**: Utility functions like `campaignDispatcher.js` provide reusable logic across multiple modules.


## Workflow Diagram

Below is the workflow diagram for the backend:

```plaintext
API Request
       |
       v
+-------------------+
|                   |
|   Routes          |
|                   |
+-------------------+
       |
       v
+-------------------+
|                   |
|   Controllers     |
|                   |
+-------------------+
       |
       v
+-------------------+
|                   |
|   Services        |
|                   |
+-------------------+
       |
       v
+-------------------+
|                   |
|   Models          |
|                   |
+-------------------+
       |
       v
+-------------------+
|                   |
|   Database        |
|                   |
+-------------------+
```
## Theoretical Explanation of Workflow

The workflow begins with an API request from the frontend. For example, when a user submits a form:

1. **Routes**: The API request is received by a route, such as `customerRoutes`.
2. **Controllers**: The route forwards the request to a controller, such as `customerController.js`, which processes the request.
3. **Services**: The controller calls a service, such as `customerService.js`, to execute business logic.
4. **Models**: The service interacts with a model, such as `customerModel.js`, to perform database operations.
5. **Database**: The model queries the database and returns the result to the service.

This workflow ensures efficient handling of requests and responses, maintaining the integrity of business logic and data.


## Steps to Run the Backend

1. Navigate to the `backend` directory:
   ```powershell
   cd backend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the server:
   ```powershell
   npm run dev
   ```

4. The server will run on `http://localhost:5000`.