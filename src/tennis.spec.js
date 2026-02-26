import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  //it("jugador 1 anota jugador dos en cero", () => {
  //   let tennis = Tennis.new
//tennis.player1Scores();
  //  expect(tennis.score()).toEqual("Love - Love");
  //});

});



