import React from "react";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Project Documentation</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            <p className="text-gray-600">
              This project is a Car Management Application built using the MERN stack. The app allows users to manage car listings with various features including adding, updating, and deleting cars. The frontend is built with React, and Redux is used for state management. The backend is built using Express and MongoDB for data storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>View car listings</li>
              <li>Add new cars with details like title, description, and images</li>
              <li>Edit car details</li>
              <li>Delete cars</li>
              <li>Authentication (Login/Register)</li>
              <li>Admin dashboard for car management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Technologies Used</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>MERN stack (MongoDB, Express, React, Node.js)</li>
              <li>Redux for state management</li>
              <li>Tailwind CSS for styling</li>
              <li>Cloudinary for image storage</li>
              <li>React Router for navigation</li>
              <li>Axios for API calls</li>
              <li>React Toastify for notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Installation</h2>
            <p className="text-gray-600">
              To run this project locally, follow these steps:
            </p>
            <ul className="list-decimal pl-6 text-gray-600">
              <li>Clone the repository: <code>git clone <strong>repo-url</strong></code></li>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Set up environment variables (e.g., MongoDB URI, Cloudinary credentials)</li>
              <li>Start the backend server: <code>npm run server</code></li>
              <li>Start the frontend: <code>npm start</code></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">API Endpoints</h2>
            <p className="text-gray-600">The following API endpoints are available:</p>
            <ul className="list-decimal pl-6 text-gray-600">
              <li><strong>GET /api/cars</strong> - Get all car listings</li>
              <li><strong>GET /api/cars/:id</strong> - Get car details by ID</li>
              <li><strong>POST /api/cars</strong> - Add a new car</li>
              <li><strong>PUT /api/cars/:id</strong> - Update car details</li>
              <li><strong>DELETE /api/cars/:id</strong> - Delete a car</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
