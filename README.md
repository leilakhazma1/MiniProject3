# MiniProject3

Logic

Physical Diagram: 

Table: Breeds

Columns: id (Primary Key), name, description, temperament, life_span, origin, wikipedia_url
Table: Images

Columns: id (Primary Key), breed_id (Foreign Key referencing Breeds), url

Logical Diagram:

Entity: Breed

Attributes: id (Primary Key), name, description, temperament, life_span, origin, wikipedia_url
Entity: Image

Attributes: id (Primary Key), breed_id (Foreign Key referencing Breed), url

Instructions 4 Leila; 

1. Install mySQL on new terminal
2. Create MVC folder structure (routes, controllers, models)
3. Use an index.js for startup 
4. Create tables and database on MySQL
5. Install AXIOS 
6. Fetch Data from API and Insert into Database
7. Set up code with support for CRUD operations 
8. Use POSTMAN to demo 

Things to install; express, mysql and axios 