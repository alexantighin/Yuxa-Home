import * as React from 'react';
import BottomBarNavigation from './navigation/BottomBarNavigationContainerRooms';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return(
    <SafeAreaProvider>
      <BottomBarNavigation/>
    </SafeAreaProvider>    
  );
}

export default App;