import React from 'react';

import Chip from '@material-ui/core/Chip';

export default function Markets({ label, selected, onClick, index }) {
  return (
    <Chip
      color={selected ? 'default' : 'primary'}
      label={label}
      variant={selected ? undefined : 'outlined'}
      onClick={onClick(index)}
    />
  );
}
