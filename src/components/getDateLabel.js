export const getDateLabel = (isoString) => {
     const taskDate = new Date(isoString);
  const today = new Date();

  // Strip time for accurate day comparison
  taskDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - taskDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
};