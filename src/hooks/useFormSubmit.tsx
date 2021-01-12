/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Box, Flex, Icon, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Values } from 'components/templates/Home/Contact';
import { FormikHelpers } from 'formik';
import { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';

const useFormSubmit = (initialValues: Values) => {
  // ChakraUI
  const toast = useToast();

  // Local State
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    actions.setSubmitting(true);
    axios
      .post('https://formspree.io/f/mvovdzzr', values)
      .then(() => {
        actions.setSubmitting(false);
        toast({
          duration: 9000,
          isClosable: true,
          render: () => (
            <Flex
              color="white"
              p={4}
              bg="blue.600"
              borderRadius="10px"
              justify="flex-start"
              align="center"
            >
              <Icon as={SiMinutemailer} w={6} h={6} mr={4} />
              <Box>
                <Text>お問い合わせありがとうございます。</Text>
                <Text>後ほどご連絡させていただきます。</Text>
              </Box>
            </Flex>
          ),
        });
        actions.setValues(initialValues);
      })
      .catch(() => {
        actions.setSubmitting(false);
        setErrorMessage('送信エラー。もう一度入力の確認をお願いします。');
      });
  };
  return { errorMessage, setErrorMessage, onSubmit };
};

export default useFormSubmit;
