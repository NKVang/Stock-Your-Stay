// Truncate.js

// Truncate item name if more than 25 characters
function truncate(itemName) {
  let truncatedName;

  if (itemName?.length > 25) {
    // truncate to 25 characters and "..." at the end
    truncatedName = itemName.slice(0, 25) + "...";

    return truncatedName;
  }

  return itemName;
}

module.exports = truncate;
