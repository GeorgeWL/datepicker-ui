export function handleToggleArrayItem(id, currentItems) {
  const newItems = new Set(currentItems);
  if (newItems.has(id)) {
    newItems.delete(id);
  } else {
    newItems.add(id);
  }
  return Array.from(newItems);
}
