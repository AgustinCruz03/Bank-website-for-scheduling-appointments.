const validateTurn = ({ fecha, horario, descripcion }) => {
  const errors = {};
  let fechaActual = new Date();
  fecha = new Date(fecha);
  if (fecha < fechaActual) {
    errors.fecha = "La fecha del turno debe ser mayor a la del dia de hoy";
  }
  if (fecha.getDay() === 5 || fecha.getDay() === 6) {
    errors.fecha = "La fecha del turno no puede ser ni sabado ni domingo";
  }
  let hora = new Date("2000-01-01T" + horario);
  let horaDelDia = hora.getHours();
  if (!(horaDelDia >= 8 && horaDelDia <= 18)) {
    errors.horario = "La hora del turno tiene que estar entre las 8 y las 18";
  }
  if (!/^[a-zA-Z\s]{1,50}$/.test(descripcion)) {
    errors.descripcion = "la descripcion es solo letras(maximo 50)";
  }
  return errors;
};

export default validateTurn;
