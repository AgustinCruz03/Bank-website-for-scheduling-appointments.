
const validateLogin = ({username,password})=> {
    const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/
    const errors = {}

    if(!passwordRegex.test(password)) errors.password = 'Hay un error en la contraseña'
    if(!usernameRegex.test(username)) errors.username = 'Hay un error en el username'

    return errors
}

export default validateLogin