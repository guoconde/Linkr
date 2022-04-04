export function findHashtags(description) {
  const hashtagFormat = /^#/;
  const validateHashtags = /^[#][a-zA-Z0-9]{1,}$/;
  const hashtagsSent = description
    .split(" ")
    .filter((str) => hashtagFormat.test(str.trim()));
  const validHashtags = description
  .split(" ")
  .filter((str) => validateHashtags.test(str.trim()));
  return hashtagsSent.length === validHashtags.length;
}