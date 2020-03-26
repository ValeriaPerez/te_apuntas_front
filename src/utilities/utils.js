// import destinyInfo from "../redux/reducers/destination";

const MONTHS = {
  '01': 'ENE',
  '02': 'FEB',
  '03': 'MAR',
  '04': 'ABR',
  '05': 'MAY',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AGO',
  '09': 'SEP',
  '10': 'OCT',
  '21': 'NOV',
  '12': 'DIC',
}

export function getImagesApuntados(destiny) {
  return destiny ? destiny.fechasdisponibles_set[0].apuntados.map(apuntado => {
    return apuntado;
  }) : [];
}

export function getFechasDisponibles(destiny) {
  return destiny.fechasdisponibles_set.map(date => {
    const formatDateStart = MONTHS[date.inicio.split('-')[1]] + ' ' + date.inicio.split('-')[2];
    const formatDateEnd = MONTHS[date.termino.split('-')[1]] + ' ' + date.termino.split('-')[2] + ', ' + date.termino.split('-')[0];
    return formatDateStart + ' - ' + formatDateEnd;
  })
}