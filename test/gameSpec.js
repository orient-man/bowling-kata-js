// Bowling Game specs

describe("Ten-Ping Bowling Kata", function () {

    describe("Gutter Game", function () {

        it("should score 0 for a gutter game, all rolls are 0", function () {
            var game = new Game(), i = 0;

            for (i; i < 20; i++) {
                game.roll(0);
            }

            expect(game.score()).toEqual(0);
        });

    });

});

