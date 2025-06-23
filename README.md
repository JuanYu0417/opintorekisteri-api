# Opintorekisteri REST API
This project is a REST API for managering a student record system that named "Opintorekisteri" using **MySQL**,**Node.js** and **Express**,following the **MVC** architecture.
## Technologies used
- **Backend:** Node.js & Express  
- **Database:** MySQL (includes a stored procedure)  
- **Architecture:** MVC (Model-View-Controller)  
- **Testing Tool:** Postman  
- **Middleware:** CORS  
- **Version Control:** Git & GitHub  
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
- **Username:** `alex`  
- **Password:** `Alex@123456`  
- **Database:** `opintorekisteri`  
- **Privileges:** ALL
### Features
- **Create** new records to the database
- **Read** data from all tables
- **Update** existing records
- **Delete** records by ID  
- Uses foreign key constraints between tables  
- Includes one stored procedure  
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
git clone https://github.com/JuanYu0417/opintorekisteri-api  
```  
```bash
cd opintorekisteri-api  
```  
```bash
npm install 
```    
### set up database"db_opintorekist"  from 
📂 https://github.com/JuanYu0417/opintorekisteri-api/tree/master/db_opintorekisteri

### Run the project  
start the server:
```bash
npm start
```    
The API will run at `http://localhost:3002/`
### API Endpoints and Testing (with Postman)
 for example:Opiskelija
- `GET /api/opiskelija` — Get all students
- `GET /api/opiskelija/:id` — Get a specific student
- `POST /api/opiskelija` — Add a new student
- `PUT /api/opiskelija/:id` — Update student info
- `DELETE /api/opiskelija/:id` — Delete student    
Table "Arviointi" and "opintojakso" are the same as "opiskelija".     

All endpoints have been tested using **Postman**.

### video presetation  
A video is available here:
https://unioulu-my.sharepoint.com/:v:/g/personal/juyu24_students_oamk_fi/EbyLSPdte3NOmJrHxYWIlO0B2_9NXWsqvS1iS88T6XWxrA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=todFY8