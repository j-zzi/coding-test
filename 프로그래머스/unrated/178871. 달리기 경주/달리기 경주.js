function solution(players, callings) {
  const playerRanking = new Object();
  const rankingPlayer = new Object();
  let rank = 1;
  const result = new Array(players.lnegth);

  for (const player of players) {
    playerRanking[player] = rank;
    rankingPlayer[rank] = player;
    rank++;
  }

  const switchRanking = (callings, playerRanking, rankingPlayer) => {
    for (const overtakePlayer of callings) {
      const ranking = playerRanking[overtakePlayer];
      const beOvertakedPlayer = rankingPlayer[ranking - 1];

      playerRanking[overtakePlayer] -= 1;
      playerRanking[beOvertakedPlayer] += 1;

      rankingPlayer[ranking] = beOvertakedPlayer;
      rankingPlayer[ranking - 1] = overtakePlayer;
    }
  };

  const insertArrToObj = (playerRanking) => {
    for (const player in playerRanking) {
      const ranking = playerRanking[player] - 1;

      result[ranking] = player;
    }
  };

  switchRanking(callings, playerRanking, rankingPlayer);
  insertArrToObj(playerRanking);

  return result;
}
