const selectedRunesKey = "selectedRunes";

export const LocalStore = {
  getSelectedRunes(): string[] {
    return JSON.parse(localStorage.getItem(selectedRunesKey) || "[]");
  },

  setSelectedRunes(selectedRunes: string[]) {
    setTimeout(() => {
      localStorage.setItem(selectedRunesKey, JSON.stringify(selectedRunes));
    }, 0);
  },
};
