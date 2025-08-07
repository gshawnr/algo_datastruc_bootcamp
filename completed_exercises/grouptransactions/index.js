function groupTransactions(transactions) {
  const transactionMap = new Map();

  // Count transactions
  for (let transaction of transactions) {
    transactionMap.set(transaction, (transactionMap.get(transaction) || 0) + 1);
  }

  // Convert to array and sort by count desc, name asc
  const sorted = Array.from(transactionMap.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1]; // sort by count descending
    return a[0].localeCompare(b[0]); // if equal, sort by name ascending
  });

  // Format output
  return sorted.map(([name, count]) => `${name} ${count}`);
}

module.exports = groupTransactions;
