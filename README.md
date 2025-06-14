# Opintorekisteri REST API
This project is a REST API for managering a student system that named "Opintorekisteri" using MySQL,Node.js and Express,following the MVC architecture.
## Technologies used
* Backend: Node.js and Express  
* Databese: MySQL includes MySQL Stored Procedure  
* Architecture: MVC
* Test: Postman 
* CORS middleware  
* Version control:Git and Github
## Database
The project uses a MySQL relational database that includs three tables:  
### tables
#### opiskelija` (Student)
- `id_opiskelija` (PK)
- `etunimi`
- `sukunimi`
- `puoli`
- `sähköposti`
- `puhelinnumero`
#### `opintojakso` (Course)
- `id_opintojakso` (PK)
- `nimi`
- `laajuus`  
- `laajuus` 
#### `arviointi` (Grade)
- `id_arviointi` (PK)
- `arvosana` 
- `päivämäärä` 
- `id_opiskelija` (FK)
- `id_opintojakso` (FK)
### Entity-Relationship Diagram
![ER Diagram](./er_diagram.png)
### create MySQL user
user name:alex  
password:Alex@123456  
database:opintorekisteri  
privileges:all
### Features
- **Create** new records to the database
- **Read** data from all tables
- **Update** existing records
- **Delete** records by ID
### Store procedure  
This project includes a stored procedure written in MySQL to retrieve all grades of a specific student.
You can call it in SQL like this:
```
# for example, get student's grade whose ID is 1
CALL hae_opiskelija_arvosana(1);
```
This procedure retrieves a list of etunimi, sukunimi, opintojaksonimi, arvosana and three tables to display the full information.  
## How to request?
### Installation and Setup(Git Bash)

```bash
git clone https://github.com/your-username/opintorekisteri-api.git    
```  
```bash
cd opintorekisteri-api  
```  
```bash
npm install 
```    
set up database"db_opintorekist"
```bash
npm install 
```  



The API will run at `http://localhost:3002/`
### API endpoints  
 for example:Opiskelija
- `GET /api/opiskelija` — Get all students
- `GET /api/opiskelija/:id` — Get a specific student
- `POST /api/opiskelija` — Add a new student
- `PUT /api/opiskelija/:id` — Update student info
- `DELETE /api/opiskelija/:id` — Delete student  
Arviointi and opintojakso are the same as opiskelija.   

### video presetation  
A full walkthrough video is available here:
[▶️ Watch on YouTube](https://youtu.be/your-video-link)