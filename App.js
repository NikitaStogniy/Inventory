import React from 'react';
import { userAuthentication } from './utils/hooks/userAuthentication';
import UserStack from './screens/navigation/userStack';
import AuthStack from './screens/navigation/authStack';

export default function RootNavigation() {
  const { user } = userAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}