var Game = function () {
    this._score = 0;
};

Game.prototype = {
    roll: function (pins) {
        if (typeof pins !== 'number') {
            throw new Error('Game.role() expects `pins` argument to be a number');
        }
    },

    score: function () {
        return this._score;
    }
};
