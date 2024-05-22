const validate = ({ name, email, birthdate, nDni, username, password }) => {
  const errors = {};
  
  const nameRegex = /^[a-zA-Z]{4,15}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const nDniRegex =/^(?!(0{4}|1{4}|2{4}|3{4}|4{4}|5{4}|6{4}|7{4}|8{4}|9{4}))\d{7,8}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


  if (!nameRegex.test(name))errors.name = "Solo se admiten letras (minimo 4, maximo 15 letras)";
  if (!emailRegex.test(email)) errors.email = "Correo invalido";
  if (!birthdateRegex.test(birthdate)) errors.birthdate = "Fecha de nacimiento invalida";
  if (!nDniRegex.test(nDni)) errors.nDni = "numero de DNI invalido";
  if(!usernameRegex.test(username)) errors.username = "Solo letras , numeros, '-', '_' (Maximos 15 caracteres)"
  if(!passwordRegex.test(password)) errors.password = "Minimo 8 y maximos 10 characters, una mayuscula, una minuscula,un numero y un caracter especial"
  return errors;
};

export default validate;
