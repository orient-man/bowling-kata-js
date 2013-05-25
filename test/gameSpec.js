// Bowling Game specs

describe("Ten-Ping Bowling Kata", function () {

    function rollMany(rolls, pins) {
        var i = 0;
        for (i; i < rolls; i++) {
            this.roll(pins);
        }
    }

    beforeEach(function () {
        this.game = new Game();
    });

    describe("Gutter Game", function () {

        it("should score 0 for a gutter game, all rolls are 0", function () {
            rollMany.call(this.game, 20, 0);
            expect(this.game.score()).toEqual(0);
        });

    });

    describe("Score game given all rolls hit only one pin", function () {

        it("should score 20", function () {
            rollMany.call(this.game, 20, 1);
            expect(this.game.score()).toEqual(20);
        });

    });

});

