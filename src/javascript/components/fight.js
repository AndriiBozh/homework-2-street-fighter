import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  // get initial health
  let firstFighterRemainingHealth = getRemainingHealth(firstFighter, 0);
  let secondFighterRemainingHealth = getRemainingHealth(secondFighter, 0);

  let winner;

  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over

    window.addEventListener('keydown', function (event) {
      if (event.code === 'KeyA') {
        let damageToSecondFighter = getDamage(firstFighter, secondFighter);
        secondFighterRemainingHealth = getRemainingHealth(secondFighter, damageToSecondFighter);
        healthBarIndicatorDamage(right, secondFighterRemainingHealth);
        secondFighterRemainingHealth -= 1;
      } else if (event.code === 'KeyJ') {
        let damageToFirstFighter = getDamage(secondFighter, firstFighter);
        firstFighterRemainingHealth = getRemainingHealth(firstFighter, damageToFirstFighter);
        healthBarIndicatorDamage(left, firstFighterRemainingHealth);
      }
      if (firstFighterRemainingHealth <= 0) {
        winner = secondFighter;
        return;
      }
      if (secondFighterRemainingHealth <= 0) {
        winner = firstFighter;
        return;
      }
    });

    resolve(winner);
  });
}

export function getDamage(attacker, defender) {
  // return damage
  const hitPower = getHitPower(attacker);
  const blockPower = getBlockPower(defender);
  const damage = blockPower > hitPower ? 0 : hitPower - blockPower;
  return damage;
}

export function getHitPower(fighter) {
  // return hit power
  const { attack } = fighter;
  const criticalHitChance = Math.random() + 1; //random number (not rounded), between 1 and 2
  const hitPower = attack * criticalHitChance;
  return hitPower;
}

export function getBlockPower(fighter) {
  // return block power
  const { defense } = fighter;
  const dodgeChance = Math.random() + 1;
  const blockPower = defense * dodgeChance;
  return blockPower;
}

export function healthBarIndicatorDamage(position, remainingHealth) {
  const healthBarIndicator = document.getElementById(`${position}-fighter-indicator`);
  const healthBarWidth = 100 * remainingHealth; //convert width to percent
  healthBarIndicator.style.width = `${healthBarWidth}%`;
}

export function getRemainingHealth(health, damage) {
  const remainingHealth = health - damage;
  return remainingHealth;
}
