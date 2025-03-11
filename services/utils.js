export const getScoreColor = (score) => {
  if (score > 80) {
    return '#2C9049'; // Green
  } else if (score >= 50 && score <= 80) {
    return '#E4A10D'; // Yellow
  } else {
    return '#AC1717'; // Red
  }
};