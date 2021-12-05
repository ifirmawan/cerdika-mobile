import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';

export type Props = {
  navigation: any;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Center flex={1} px="3">
      <VStack>
        <Heading>Login</Heading>
      </VStack>
      <FormControl>
        <Stack>
          <FormControl.Label>E-Mail</FormControl.Label>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
        </Stack>
        <Button>Submit</Button>
      </FormControl>
      <VStack p="6">
        <Text>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('Register')}>
          Register here
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
