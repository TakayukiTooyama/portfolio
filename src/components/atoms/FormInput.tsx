/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import type { FieldProps } from 'formik';
import { Field } from 'formik';
import type { Dispatch, SetStateAction } from 'react';
import React, { VFC } from 'react';

type Props = {
  label: string;
  name: string;
  type?: 'text' | 'email';
  textArea?: boolean;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

const FormInput: VFC<Props> = ({
  label,
  name,
  type = 'text',
  textArea = false,
  setErrorMessage,
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
            type={type}
            onFocus={() => setErrorMessage('')}
          />
        )}
        <FormErrorMessage color="red.400">{form.errors[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

export default FormInput;
