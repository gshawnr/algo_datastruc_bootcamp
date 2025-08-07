function logAnalysis(logs, maxSpan) {
  const signInMap = new Map();
  const signOutMap = new Map();

  for (const log of logs) {
    const [userId, timestampStr, action] = log.split(" ");
    const timestamp = parseInt(timestampStr, 10);

    if (action === "sign-in") {
      signInMap.set(userId, timestamp);
    } else if (action === "sign-out") {
      signOutMap.set(userId, timestamp);
    }
  }

  const result = [];

  for (const [userId, signInTime] of signInMap.entries()) {
    if (signOutMap.has(userId)) {
      const signOutTime = signOutMap.get(userId);
      const duration = signOutTime - signInTime;
      if (duration <= maxSpan) {
        result.push(userId);
      }
    }
  }

  // Sort numerically
  result.sort((a, b) => Number(a) - Number(b));
  return result;
}

module.exports = logAnalysis;
