const validation = (userData)=>{
    const errors = {};
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userData.email)){
        errors.email= "not email";
    }
    if(!userData.email){
        errors.email="el email no puede estar vacio pelotudo"
    }
    if(userData.email.length > 35){
        errors.email= "Maximo de caracteres: 35"
    }
    if(!userData.password){
        errors.password="la password no puede estar vacia pelotudo"
    }
    if(userData.password.length > 10 || userData.password.length < 6){
        errors.password="la password debe tener entre: 6 y 10 caracteres"
    }

    return errors;
}

export default validation;