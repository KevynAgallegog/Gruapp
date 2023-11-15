const mysql = require("mysql2");
const User = require("../models/user");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1091205488Kg",
    database: "Gruapp"
});

db.connect();

class UserRepository{
    static addUser(name, email , password){
        const query=
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(query,[name,email,password],(err,result)=>{
            if (err) {
                console.error("Error al registrar usuario"+ err.message);
            }else{
                console.log("usuario registrado correctamente");
                return true;
            }
        });

        
    }
}

module.exports ={

    UserRepository,
    

}