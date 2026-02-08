import { Yatzy, Dice } from '../src/Yatzy';

import 'jest-extended-snapshot';

describe('Given a Yatzy game', () => {
  describe('When a number of five dice are assigned to simple categories', () => {
    it('Then the score should be calculated correctly', () => {
      const diceCombinations: Dice[] = [1, 2, 3, 4, 5, 6];

      expect(Yatzy.ones).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.twos).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.threes).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.noCategory).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );
    });

    it('Then the score should be calculated correctly II', () => {
      const diceCombinations: Dice[] = [1, 2, 3, 4, 5, 6];

      expect(Yatzy.fours).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.fives).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.sixes).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );
    });
  });

  describe('When a number five dice are assigned to more complex categories', () => {
    it('Then the score should be calculated correctly', () => {
      const diceCombinations = [1, 2, 3, 4, 5, 6];

      expect(Yatzy.score_pair).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.two_pair).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.three_of_a_kind).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.four_of_a_kind).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.smallStraight).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.largeStraight).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.fullHouse).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );

      expect(Yatzy.yatzy).toVerifyAllCombinations(
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
        diceCombinations,
      );
    });
  });
});
