export const formatCounts = count => {
  if (count < 1000) {
    return `${count} `;
  } else if (count < 1000000) {
    return `${_.floor(count / 1000, 1)}K `;
  } else {
    return `${_.floor(count / 1000000, 1)}M `;
  }
};
