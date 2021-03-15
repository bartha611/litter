export const getDate = ({ updated_at }) => {
  console.log(updated_at);
  const newDate = new Date(updated_at).toDateString();
  return newDate
    .split(' ')
    .slice(1, 4)
    .join(' ');
};
