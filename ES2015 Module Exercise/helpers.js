function choice(items) {
  let pick = Math.floor(Math.random() * items.length());
  return items[pick];
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    } else {
      return undefined;
    }
  }
}
