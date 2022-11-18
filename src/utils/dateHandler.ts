export const handleDate = (date: number) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const commentDate = new Date(date * 1000);
  const currentDate = new Date(Date.now());
  const diffInTime = currentDate.getTime() - commentDate.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  if (diffInDays === 0) return `Today, ${commentDate.toLocaleTimeString()}`;
  if (diffInDays === 0) return `Yesterday, ${commentDate.toLocaleTimeString()}`;
  return commentDate.toLocaleString();
};
