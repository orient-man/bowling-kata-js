// Bowling Game specs

describe("Ten-Ping Bowling Kata", function () {

    function rollMany(rolls, pins) {
        var i = 0;
        for (i; i < rolls; i++) {
            this.roll(pins);
        }
    }

    function rollSpare() {
        this.roll(5);
        this.roll(5);
    }

    function rollStrike() {
        this.roll(10);
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

    describe("Score a game with only a spare", function () {

        it("should score 20 given the first 3 rolls hit 5 pins", function () {
            rollSpare.call(this.game);
            this.game.roll(5);
            rollMany.call(this.game, 17, 0);
            expect(this.game.score()).toEqual(20);
        });

    });

    describe("Score a game with only a strike", function () {

        it("should score 20 given a strike followed by a two rolls hitting 2 & 3 pins", function () {
            rollStrike.call(this.game);
            this.game.roll(2);
            this.game.roll(3);
            rollMany.call(this.game, 17, 0);
            expect(this.game.score()).toEqual(20);
        });

    });

    describe("Score a perfect game of 300 points", function () {

        it("should score 300 for 12 strikes in a row", function () {
            rollMany.call(this.game, 12, 10);
            expect(this.game.score()).toEqual(300);
        });

    });
});

