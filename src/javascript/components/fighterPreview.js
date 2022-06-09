import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';

  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });

  // todo: show fighter info (image, name, health, etc.)
  const { _id, name, health, attack, defense, source } = Object.fromEntries(fighter);

  const fighterObj = { _id, name, health, attack, defense, source };

  const fighterImg = createFighterImage(fighterObj);
  const fighterName = createFighterCharacteristics('span', 'name', name);
  const fighterHealth = createFighterCharacteristics('span', 'health', health);
  const fighterAttack = createFighterCharacteristics('span', 'attack', attack);
  const fighterDefense = createFighterCharacteristics('span', 'defense', defense);
  const fighterData = [fighterName, fighterHealth, fighterAttack, fighterDefense];

  const fighterCharasteristicsContainer = createElement({ tagName: 'div', className: 'details' }); //container for span elements

  fighterData.forEach((el) => {
    fighterCharasteristicsContainer.appendChild(el);
  });

  fighterElement.appendChild(fighterImg);
  fighterElement.appendChild(fighterCharasteristicsContainer);

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes
  });

  return imgElement;
}

function createFighterCharacteristics(tagname, featureName, featureValue) {
  const fighterElement = createElement({ tagName: tagname });
  const fighterValue = createElement({ tagName: 'span', className: featureName });
  fighterValue.innerText = `${featureValue}`;
  fighterElement.innerText = `${featureName}: `;

  fighterElement.appendChild(fighterValue);

  return fighterElement;
}
