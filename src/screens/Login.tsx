import React from "react";
import { Button } from "react-native";

export type Props = {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Button
      title="Go to Register"
      onPress={() => navigation.navigate('Register')}
    />
  )
}

export default LoginScreen;
