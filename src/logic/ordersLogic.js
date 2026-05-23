import player from "../entities/player.js";
import { activeOrders } from "../data/orders.js";
import { GAME_STATES, setGameState } from "../core/gameState.js";

export function updateOrders(timeStep) {
  for (let i = activeOrders.length - 1; i >= 0; i--) {
    const order = activeOrders[i];

    order.timeRemaining -= timeStep;

    if (order.timeRemaining <= 0) {
      activeOrders.splice(i, 1);

      player.lives--;

      if (player.lives <= 0) {
        setGameState(GAME_STATES.GAME_OVER);
      }
    }
  }
}
