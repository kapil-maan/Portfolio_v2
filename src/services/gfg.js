export async function getGFGStats(username) {

  return {
    platform: "GeeksforGeeks",
    username: username,
    profile: `https://www.geeksforgeeks.org/profile/${username}`,

    stats: {
      codingScore: 2391,
      problemsSolved: 640,
      instituteRank: 56,
      currentStreak: 0,
      longestStreak: 729,
      potdsSolved: 168
    },

    problemBreakdown: {
      school: 0,
      basic: 8,
      easy: 177,
      medium: 374,
      hard: 81,
      total: 650
    }

  };

}