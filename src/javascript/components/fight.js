import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
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

export function healthBarIndicatorDamage(position, damage) {
  const healthBarIndicator = document.getElementById(`${position}-fighter-indicator`);
  const healthBarWidth = 100 - damage;
  healthBarIndicator.style.width = `${healthBarWidth}%`;
  return healthBarWidth;
}
