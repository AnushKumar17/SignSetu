MERN Dictionary App - README
A full-stack MERN (MongoDB, Express, React, Node.js) application for managing words with their definitions, images, and videos. Users can search, add, edit, and delete words. The app uses React Context for state management and includes responsive UI components with loading spinners.
Features
•	Home Page: Displays all words with their definition, image, and video.
•	Search Bar: Find words easily by typing in the search input.
•	Add Word: Add new words with definition, image URL, and video URL.
•	Edit/Delete: Update or remove existing words.
•	Loading Spinner: Shows during API calls.
•	Responsive Design: Works on mobile and desktop.
•	React Context API: For global state management.

Technologies Used

Frontend
•	React.js: UI library for building the interface.
•	React Context: State management across components.
•	Tailwind CSS: Utility-first CSS framework for styling.
•	Fetch API / Axios: For making HTTP requests (depending on your implementation).

Backend
•	Node.js: JavaScript runtime for server-side code.
•	Express.js: Web framework for API endpoints.
•	MongoDB: NoSQL database to store word data.
•	Mongoose: ODM for MongoDB, schema modeling and queries.

API Endpoints
• GET /words – Fetch all words
• GET /words/:query – Fetch a single word
• POST /words – Add a new word
• PUT /words/:id – Edit a word (if implemented)
• DELETE /words/:id – Delete a word

Installation & Setup

Backend
1. Clone the repo.
2. Navigate to the backend folder.
3. Install dependencies:
   npm install
4. Set up your .env file with MongoDB connection string:
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
5. Start the server:
   npm run dev
   
Frontend
1. Navigate to the frontend folder.
2. Install dependencies:
   npm install
3. Start the React app:
   npm start

   
Folder Structure

/backend
  /models
  /routes
  server.js
/frontend
  /src
    /components
    /context
    App.js
    index.js
    
Usage
• Open the frontend app on http://localhost:3000
• Use the search bar to find words.
• Add new words using the form.
• View words with images and videos.
• Edit or delete words as needed.
• Responsive on all devices.

Author
Anush Kumar - Computer Science Engineering Student

Future Improvements
•	Add user authentication.
•	Allow image/video uploads instead of URLs.
•	Add pagination to the word list.
•	Improve search with fuzzy matching.
•	Add editing functionality UI.
