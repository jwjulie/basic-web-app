export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "juliewu";
  }

  if (query.toLowerCase().includes("name")) {
    return "julie";
  }

  if (query.toLowerCase().includes("numbers is the largest")) {
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
      const largest = Math.max(...numbers);
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/\d+/g);
    if (match) {
      const sum = match.map(Number).reduce((acc, num) => acc + num, 0);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const match = query.match(/\d+/g);
    if (match) {
      const prod = match.map(Number).reduce((acc, num) => acc * num, 1);
      return prod.toString();
    }
  }

  return "";
}
