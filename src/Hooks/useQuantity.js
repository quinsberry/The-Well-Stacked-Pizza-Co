import { useState } from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  function onChange(e) {
    if (!(+e.target.value >= 0)) {
      // if (this.value)
      setValue(1);
      return;
    }
    if (e.target.value.length <= 3) {
      return setValue(+e.target.value);
    }
  }

  return {
    value,
    setValue,
    onChange
  };
}