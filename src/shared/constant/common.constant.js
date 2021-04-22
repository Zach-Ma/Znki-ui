export const COMMON_CONST = {
  ADD_DECK: { key: "ADD_DECK", label: 'add deck', color: '' },
  ADD_CARD: { key: "ADD_CARD", label: 'add card', color: '' },
};

export const mapConstLabel = (val) => {
  const o = Object.keys(COMMON_CONST).find(item => item === val)
  if (o) {
    return COMMON_CONST[o].label
  }
  return "missing properties";
};