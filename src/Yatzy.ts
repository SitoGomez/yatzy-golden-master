export type Dice = 1 | 2 | 3 | 4 | 5 | 6;

export class Yatzy {
  private dice: [Dice, Dice, Dice, Dice, Dice];

  constructor(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice) {
    this.dice = [d1, d2, d3, d4, d5];
  }

  static noCategory(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    return d1 + d2 + d3 + d4 + d5;
  }

  static yatzy(...dices: [Dice, Dice, Dice, Dice, Dice]): number {
    const YATZY_SCORE = 50;
    const NO_YATZY_SCORE = 0;
    const NUMBER_OF_DICES = 5;

    var counts = [0, 0, 0, 0, 0, 0, 0, 0];

    for (var currentDicePosition = 0; currentDicePosition != dices.length; currentDicePosition++) {
      var dice = dices[currentDicePosition];
      counts[dice - 1]++;
    }

    for (currentDicePosition = 0; currentDicePosition <= NUMBER_OF_DICES; currentDicePosition++) {
      if (counts[currentDicePosition] == 5) {
        return YATZY_SCORE;
      }
    }

    return NO_YATZY_SCORE;
  }

  static ones(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    const DICE_VALUE_ONE = 1;

    return [d1, d2, d3, d4, d5].reduce(
      (acc, currentDice) => acc + (currentDice === DICE_VALUE_ONE ? DICE_VALUE_ONE : 0),
      0,
    );
  }

  static twos(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    const DICE_VALUE_TWO = 2;

    return [d1, d2, d3, d4, d5].reduce(
      (acc, currentDice) => acc + (currentDice === DICE_VALUE_TWO ? DICE_VALUE_TWO : 0),
      0,
    );
  }

  static threes(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    const DICE_VALUE_THREE = 3;

    return [d1, d2, d3, d4, d5].reduce(
      (acc, currentDice) => acc + (currentDice === DICE_VALUE_THREE ? DICE_VALUE_THREE : 0),
      0,
    );
  }

  static score_pair(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;

    let at;

    for (at = 0; at != 6; at++) {
      if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    }

    return 0;
  }

  static two_pair(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;

    let n = 0;
    let score = 0;

    for (let i = 0; i < 6; i += 1) {
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    }

    if (n == 2) {
      return score * 2;
    } else {
      return 0;
    }
  }

  static four_of_a_kind(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let tallies;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1]++;
    tallies[d2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;

    for (let i = 0; i < 6; i++) {
      if (tallies[i] >= 4) {
        return (i + 1) * 4;
      }
    }

    return 0;
  }

  static three_of_a_kind(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    var t;

    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;

    for (let i = 0; i < 6; i++) {
      if (t[i] >= 3) {
        return (i + 1) * 3;
      }
    }

    return 0;
  }

  static smallStraight(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let tallies;

    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    if (
      tallies[0] == 1 &&
      tallies[1] == 1 &&
      tallies[2] == 1 &&
      tallies[3] == 1 &&
      tallies[4] == 1
    ) {
      return 15;
    }

    return 0;
  }

  static largeStraight(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let tallies;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];

    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    if (
      tallies[1] == 1 &&
      tallies[2] == 1 &&
      tallies[3] == 1 &&
      tallies[4] == 1 &&
      tallies[5] == 1
    ) {
      return 20;
    }

    return 0;
  }

  static fullHouse(d1: Dice, d2: Dice, d3: Dice, d4: Dice, d5: Dice): number {
    let tallies;
    let _2 = false;
    let i;
    let _2_at = 0;
    let _3 = false;
    let _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];

    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1) {
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }
    }

    for (i = 0; i != 6; i += 1) {
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }
    }
    if (_2 && _3) {
      return _2_at * 2 + _3_at * 3;
    } else {
      return 0;
    }
  }

  fours(): number {
    const DICE_FOUR_VALUE = 4;

    return this.dice.reduce((sum, die) => sum + (die === DICE_FOUR_VALUE ? DICE_FOUR_VALUE : 0), 0);
  }

  fives(): number {
    const DICE_FIVE_VALUE = 5;

    return this.dice.reduce((sum, die) => sum + (die === DICE_FIVE_VALUE ? DICE_FIVE_VALUE : 0), 0);
  }

  sixes(): number {
    const DICE_SIX_VALUE = 6;

    return this.dice.reduce((sum, die) => sum + (die === DICE_SIX_VALUE ? DICE_SIX_VALUE : 0), 0);
  }
}
