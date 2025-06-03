# 🛠️ Backend - CRM Xeno

## 🌟 Overview

The backend of CRM Xeno is built using **Node.js** and **Express**. It provides RESTful APIs for the frontend to interact with the database. The backend handles business logic, database operations, and API routing.

[🔗 Back to Top](#-backend---crm-xeno)

---

## ✨ Features

- 📢 Campaign management
- 📝 Communication log tracking
- 👤 Customer creation and management
- 📦 Order creation and tracking
- 📊 Segment creation and management
- 📈 Analytics processing

[🔗 Back to Top](#-backend---crm-xeno)

---

## 🏗️ Architecture

Below is the architecture diagram for the backend:

```plaintext
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

[🔗 Back to Top](#-backend---crm-xeno)

---

## 🧠 Theoretical Explanation of Architecture

The backend architecture is designed to handle **business logic**, **database operations**, and **API routing** efficiently. It consists of the following layers:

1. **Routes**: Define the endpoints for different modules, such as `aiRoutes`, `analyticsRoutes`, and `customerRoutes`.
2. **Controllers**: Contain logic for handling incoming requests and sending responses.
3. **Services**: Encapsulate business logic and interact with models.
4. **Models**: Define database schemas and methods for interacting with the database.
5. **Utils**: Provide reusable logic across multiple modules.

[🔗 Back to Top](#-backend---crm-xeno)

---

## 🔄 Workflow Diagram

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

### Explanation

The workflow diagram illustrates the backend's process for handling API requests. It begins with an **API Request** received by **Routes**, which map the request to specific **Controllers**. The controllers process the request and call **Services** to execute business logic. Services interact with **Models** to perform database operations, and the **Database** returns the required data. This structured flow ensures efficient handling of requests and responses.

[🔗 Back to Top](#backend---crm-xeno)

---

## 🛠️ Steps to Run the Backend

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

[🔗 Back to Top](#-backend---crm-xeno)

---

## 🧩 Explanation of Logic

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

[🔗 Back to Top](#-backend---crm-xeno)

---

## ⚠️ Limitations

- The backend does not support WebSocket-based real-time communication.
- Limited scalability for handling high volumes of concurrent requests.
- No built-in support for advanced logging or monitoring.
- Database schema is basic and may require optimization for large datasets.
- Lack of automated testing for API endpoints.

[🔗 Back to Top](#-backend---crm-xeno)