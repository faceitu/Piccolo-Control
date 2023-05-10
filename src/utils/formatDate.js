
export const getDateFormat  = (dateProps) => {
  console.log('ver si es string',dateProps)
  const fecha = dateProps.split('M')[0];
  const fechaLegible = fecha.split('-').reverse().join('/');
  return  dateProps.toLocaleDateString()
}
