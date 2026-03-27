export async function getLeetCodeStats(username) {

  try {

    const res = await fetch(
      `https://alfa-leetcode-api.onrender.com/${username}/solved`
    );

    if (!res.ok)
      throw new Error("API error");

    const data = await res.json();

    return {

      easy: data.easySolved ?? 0,

      medium: data.mediumSolved ?? 0,

      hard: data.hardSolved ?? 0,

      total: data.solvedProblem ?? 0

    };

  }

  catch (error) {

    console.warn(
      "LeetCode API fallback used"
    );

    return {

      easy: 195,
      medium: 434,
      hard: 133,
      total: 762

    };

  }

}