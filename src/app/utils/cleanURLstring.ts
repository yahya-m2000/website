export function cleanUrlString(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[.\(\)]/g, "") // Remove dots, parentheses
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim(); // Remove trailing hyphens
}
