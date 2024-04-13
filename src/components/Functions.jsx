// function to convert string to PascalCase
export function pascalCase(itemName) {
  // lowercase all letters in string and split into array
  let pascalCaseName = itemName?.toLowerCase().split(" ");

  for (let i = 0; i < pascalCaseName?.length; i++) {
    // capitalize first letter of word if it is a lowercase letter
    if (isLowerCaseAlpha(pascalCaseName[i].charAt(0))) {
      pascalCaseName[i] =
        pascalCaseName[i].charAt(0).toUpperCase() + pascalCaseName[i].slice(1);
      // otherwise capitalize next char if it is a lowercase letter
    } else if (isLowerCaseAlpha(pascalCaseName[i].charAt(1))) {
      pascalCaseName[i] =
        pascalCaseName[i].substring(0, 1) +
        pascalCaseName[i].charAt(1).toUpperCase() +
        pascalCaseName[i].substring(2);
    } else {
      let j = 2;

      while (
        !isLowerCaseAlpha(pascalCaseName[i].charAt(j)) &&
        j < pascalCaseName[i].length
      ) {
        j += 1;
      }

      pascalCaseName[i] =
        pascalCaseName[i].substring(0, j) +
        pascalCaseName[i].charAt(j).toUpperCase() +
        pascalCaseName[i].substring(j + 1, pascalCaseName[i].length);
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

// Truncate item name if more than 30 characters
export function truncate(itemName) {
  let truncatedName;

  if (itemName?.length > 25) {
    // truncate to 25 characters and "..." at the end
    truncatedName = itemName.slice(0, 25) + "...";

    return truncatedName;
  }

  return itemName;
}
