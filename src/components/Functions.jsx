// function to convert string to PascalCase
export function pascalCase(itemName) {
  // lowercase all letters in string and split into array
  let pascalCaseName = itemName?.toLowerCase().split(" ");

  for (let i = 0; i < pascalCaseName?.length; i++) {
    // capitalize first letter of word if it is a lowercase letter
    if (isLowerCaseAlpha(pascalCaseName[i].charAt(0))) {
      pascalCaseName[i] =
        pascalCaseName[i].charAt(0).toUpperCase() + pascalCaseName[i].slice(1);
      // otherwise capitalize next char
    } else if (isLowerCaseAlpha(pascalCaseName[i].charAt(1))) {
      pascalCaseName[i] =
        pascalCaseName[i].substring(0, 1) +
        pascalCaseName[i].charAt(1).toUpperCase() +
        pascalCaseName[i].substring(2);
    }
  }

  // rejoin words in array to single string with spaces
  return pascalCaseName?.join(" ");
}

// function to check if char is a lowercase letter
export function isLowerCaseAlpha(char) {
  const c = char.charCodeAt(0);

  return c >= 97 && c <= 122;
}

// Truncate item name on mobile if more than 30 characters
export function truncate(itemName) {
  let truncatedName;

  if (itemName?.length > 30 && window.innerWidth < 576) {
    // truncate to 30 characters and "..." at the end
    truncatedName = itemName.slice(0, 30) + "...";

    return truncatedName;
  }

  return itemName;
}
