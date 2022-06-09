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
  console.log('fighter: ' + JSON.stringify(fighterObj));
  const fighterImg = createFighterImage(fighterObj);
  const fighterName = createName(name);
  fighterElement.appendChild(fighterName);
  fighterElement.appendChild(fighterImg);
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

function createName(name) {
  const nameElement = createElement({ tagName: 'span', className: 'name' });
  nameElement.innerText = name;

  return nameElement;
}

function createImage(source) {
  const attributes = { src: source };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-image',
    attributes
  });

  return imgElement;
}
