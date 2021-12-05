import {Button, Container} from 'native-base';
import React from 'react';

import {useAuth} from '../hooks/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <>
      <Container>
        <Button variant="outline" onPress={signOut}>
          Go out
        </Button>
      </Container>
    </>
  );
};

export default Dashboard;
