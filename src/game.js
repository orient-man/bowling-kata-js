var Game = function () {
    this._score = 0;
    this._currentRoll = 0;
    this._rolls = [];
};

Game.prototype = {
    roll: function (pins) {
        if (typeof pins !== 'number') {
            throw new Error('Game.role() expects `pins` argument to be a number');
        }

        this._rolls[this._currentRoll++] = pins;
    },

    score: function () {
        var score = 0, i = 0,
            rollsToScore = this._rolls.length;

        for (i; i < rollsToScore; i++) {
            if (this._isSpare(i)) {
                score += 10 + this._rolls[i + 2];
                i++;
            } else {
                score += this._rolls[i];
            }
        }
        return score;
    },

    _isSpare: function (rollIdx) {
        return (this._rolls[rollIdx] + this._rolls[rollIdx + 1] === 10);
    }
};
