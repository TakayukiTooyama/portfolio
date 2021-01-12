import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import {
  DarkModeBox,
  FormButton,
  FormInput,
  SectionTitle,
  Wave,
} from 'components/atoms';
import { Container } from 'components/templates';
import { Form, Formik, FormikProps } from 'formik';
import useFormSubmit from 'hooks/useFormSubmit';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';
import * as yup from 'yup';

export type Values = {
  name: string;
  email: string;
  comment: string;
};

const Contact: VFC = () => {
  const initialValues: Values = {
    name: '',
    email: '',
    comment: '',
  };
  const { errorMessage, setErrorMessage, onSubmit } = useFormSubmit(
    initialValues
  );

  return (
    <DarkModeBox bglight="#384464" bgdark="gray.800" colorlight="white">
      <Container>
        <Element name="contact">
          <SectionTitle title="Contact me" color="white" mb={6} />
          <Box w="100%">
            <Text maxW="400px" mx="auto" fontSize={['sm', 'md', 'md']}>
              最後までご覧いただきありがとうございました。
              このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
              もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
            </Text>
          </Box>
          <Box mb={12} />
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object({
              name: yup.string().required('必須項目'),
              email: yup.string().required('必須項目'),
              comment: yup.string().required('必須項目'),
            })}
            onSubmit={(values, actions) => onSubmit(values, actions)}
          >
            {({ isValid, dirty, isSubmitting }: FormikProps<Values>) => (
              <Form>
                <Stack spacing={4}>
                  <Flex direction={['column', 'row', 'row']}>
                    <FormInput
                      label="Name"
                      name="name"
                      setErrorMessage={setErrorMessage}
                    />
                    <Box mb={4} mr={[0, 2, 2]} />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      setErrorMessage={setErrorMessage}
                    />
                  </Flex>
                  <FormInput
                    label="Comment"
                    name="comment"
                    textArea
                    setErrorMessage={setErrorMessage}
                  />
                </Stack>
                <Box pb={4} />
                <Center>
                  <FormButton
                    type="submit"
                    label="Send"
                    isLoading={isSubmitting}
                    disabled={!isValid || !dirty}
                  />
                </Center>
                <Box pb={4} />
                <Text textAlign="center" color="red.400">
                  {errorMessage}
                </Text>
              </Form>
            )}
          </Formik>
        </Element>
      </Container>
      <Wave bglight="gray.100" filllight="#384464" filldark="gray.800" />
    </DarkModeBox>
  );
};

export default Contact;
