var Game = function () {
    this._score = 0;
};

Game.prototype = {
    // TODO design is wrong, responsibilities are missplaced...
    // TODO roll should not calculate score
    roll: function (pins) {
        if (typeof pins !== 'number') {
            throw new Error('Game.role() expects `pins` argument to be a number');
        }

        this._score += pins;
    },

    // TODO score is not actually calculating value
    score: function () {
        return this._score;
    }
};
