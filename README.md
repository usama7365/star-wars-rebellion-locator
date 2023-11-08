## Star Wars Entity Map
Star Wars Entity Map is a web application that allows users to explore locations from the Star Wars universe and view details
about the entities associated with those locations.

## Usage
The Star Wars Entity Map application displays a map with marked locations from the Star Wars universe. Clicking on a location marker will show details about the associated entity.

React/Node.js and npm (Node Package Manager)
Backend server running (See API Endpoints section for more details)

Installation
Clone the repository:

git clone https://github.com/usama7365/star-wars-entity-map.git
## Navigate to the project directory:

cd star-wars-rebellion-locator
Install the dependencies: 

npm install
Start the development server:

npm run server


##After running your server start your Frontend

cd Client-side

npm install (If needed)

npm start 

## API Endpoints
GET /api/secret: Fetches the list of locations with their coordinates.
GET /api/entities/:id: Fetches details about an entity based on its ID.
Open your browser and navigate to http://localhost:3000 to view the application.

## License
This project is licensed under the ISC License.
