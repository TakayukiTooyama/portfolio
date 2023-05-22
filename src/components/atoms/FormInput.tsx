/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Textarea,
} from '@chakra-ui/react';
import type { FieldProps } from 'formik';
import { Field } from 'formik';
import type { Dispatch, SetStateAction } from 'react';
import React, { FC } from 'react';

type Props = InputProps & {
  label: string;
  name: string;
  type?: 'text' | 'email';
  textArea?: boolean;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

const FormInput: FC<Props> = ({
  label,
  name,
  textArea = false,
  setErrorMessage,
  ...props
}) => (
  <Field name={name}>
    {({ field, form }: FieldProps<any>) => (
      <FormControl isInvalid={!form.errors && !form.touched} isRequired>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        {textArea ? (
          <Textarea {...field} id={name} onFocus={() => setErrorMessage('')} />
        ) : (
          <Input
            {...field}
            id={name}
            onFocus={() => setErrorMessage('')}
            {...props}
          />
        )}
        <FormErrorMessage color="red.400">{form.errors[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

export default FormInput;
