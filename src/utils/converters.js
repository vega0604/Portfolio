
const stringToHex = (str) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour;
}

export const stackToConicGradient = (stack) => {
  const turn = 1 / stack.length;

  let totalPercentage = 0;
  let currentString = ""

  for (let i=0;i<stack.length;i++){
    totalPercentage += turn;
    currentString += `${stringToHex(stack[i])} 0turn ${totalPercentage}turn, `;
  }
  return currentString.slice(0, currentString.length-2);
}

export const stackToString = (stack) => {
  if (stack.length < 1) return "";
  let string = "";
  for (let i=0; i < stack.length-1; i++){
    string += stack[i] + ", ";
  }
 
  string += stack[stack.length-1] + ".";
  return string;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dateToString = (date) => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}