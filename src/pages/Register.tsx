import {Box, Button, FormControl, Heading, Input, Stack} from 'native-base';
import React from 'react';

export type Props = {
  navigation: any;
};

const RegisterScreen: React.FC<Props> = () => {
  return (
    <Box>
      <Heading mb="5">Register</Heading>
      <FormControl>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              type="email"
              variant="underlined"
              p={2}
              placeholder="Your E-mail"
            />
          </Stack>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              variant="underlined"
              p={2}
              placeholder="Password"
            />
          </Stack>
          <Stack>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password_confirmation"
              variant="underlined"
              p={2}
              placeholder="Password"
            />
          </Stack>
          <Stack>
            <Button variant="solid">SUBMIT</Button>
          </Stack>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default RegisterScreen;
