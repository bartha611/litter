export const getTime = ({ updated_at }) => {
  const date = new Date(updated_at);
  let hours = date.getHours();
  const minutes =
    date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  const meridian = hours > 12 ? 'PM' : 'AM';
  hours = hours % 12 === 0 ? 12 : hours % 12;

  return `${hours}:${minutes} ${meridian}`;
};
