const selectedRunesKey = "selectedRunes";

export function getSelectedRunes(): string[] {
  return JSON.parse(localStorage.getItem(selectedRunesKey) || "[]");
}

export function setSelectedRunes(selectedRunes: string[]) {
  setTimeout(() => {
    localStorage.setItem(selectedRunesKey, JSON.stringify(selectedRunes));
  }, 0);
}
