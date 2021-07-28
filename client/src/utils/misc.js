export const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, '$& ').trim();

export const formatDate = (s) => {
  const date = new Date(s);

  return `${date.toLocaleDateString(undefined, {
    dateStyle: 'long',
    timeZone: 'UTC'
  })} ${date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC'
  })}`;
};
