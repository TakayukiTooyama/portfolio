/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { DarkModeBox, FormButton, SectionTitle, Wave } from 'components/atoms';
import { Container } from 'components/templates';
import { Formik } from 'formik';
import { InputControl, TextareaControl } from 'formik-chakra-ui';
import useFormSubmit from 'hooks/useFormSubmit';
import React, { FC } from 'react';
import { Element } from 'react-scroll';
import * as yup from 'yup';

export type Values = {
  name: string;
  email: string;
  comment: string;
};

const initialValues: Values = {
  name: '',
  email: '',
  comment: '',
};

const Contact: FC = () => {
  const { onSubmit } = useFormSubmit(initialValues);

  return (
    <DarkModeBox bglight="#384464" bgdark="gray.800" colorlight="white">
      <Container>
        <Element name="contact">
          <SectionTitle title="Contact me" color="white" mb={6} />
          <Box w="100%" mb={12}>
            <Text maxW="400px" mx="auto" fontSize={['sm', 'md', 'md']}>
              最後までご覧いただきありがとうございました。
              このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
              もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
            </Text>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={yup.object({
              name: yup.string().required('必須項目です🙏'),
              email: yup.string().required('必須項目です🙏'),
              comment: yup.string().required('必須項目です🙏'),
            })}
            onSubmit={(values, action) => onSubmit(values, action)}
          >
            {({ handleSubmit, isValid, dirty, isSubmitting }) => (
              <Stack
                as="form"
                onSubmit={handleSubmit as any}
                spacing={4}
                alignItems="center"
              >
                <Flex direction={['column', 'row', 'row']} w="100%">
                  <InputControl
                    isRequired
                    name="name"
                    label="Name"
                    mb={4}
                    mr={[0, 2, 2]}
                  />
                  <InputControl isRequired name="email" label="Email" />
                </Flex>
                <TextareaControl
                  isRequired
                  name="comment"
                  label="Comment"
                  mb={8}
                />

                <FormButton
                  w="100%"
                  maxW="sm"
                  type="submit"
                  label="Send"
                  isLoading={isSubmitting}
                  isDisabled={!isValid || !dirty}
                />
              </Stack>
            )}
          </Formik>
        </Element>
      </Container>
      <Wave bglight="gray.100" filllight="#384464" filldark="gray.800" />
    </DarkModeBox>
  );
};

export default Contact;
