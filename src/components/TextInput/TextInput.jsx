import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function TextInput({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  ...props
}) {
  return (
    <Controller
      control = {control}
      name = {name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          inputRef={ref}
          helperText={error ? error.message : null}
          {...props}
        />
      ))}
    />
  );
}
