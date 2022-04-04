export default function handleMessage(likeNames, userName) {
  let arr;

  if (likeNames.length === 0) return [];

  const yourName = likeNames.indexOf(userName);

  if (yourName === 0 && likeNames.length === 1) return "You liked the message";
  if (yourName === -1 && likeNames.length === 1) return `${likeNames[0]} liked the message`;

  arr = changePosition(likeNames, yourName, 0);

  if (yourName !== -1 && likeNames.length === 2) return `You and ${arr[1]} liked the message`;
  if (yourName === -1 && likeNames.length === 2) return `${likeNames[0]} and ${likeNames[1]} liked the message`;

  if (yourName !== -1 && likeNames.length === 3) return `You, ${arr[1]} and outher people liked the message`;
  if (yourName === -1 && likeNames.length === 3) return `${likeNames[0]}, ${likeNames[1]} and outher people liked the message`;

  if (yourName !== -1 && likeNames.length > 3) return `You, ${arr[1]} and outhers ${likeNames.length - 2} people liked the message`;
  if (yourName === -1 && likeNames.length > 3) return `${likeNames[0]}, ${likeNames[1]} and outhers ${likeNames.length - 2} people liked the message`;
}

function changePosition(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}