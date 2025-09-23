import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:"#ffd33d",

    }}>
      <Tabs.Screen name="index" options={{ title: 'Home' , 
        tabBarIcon: ({focused, color}) => <Ionicons name='home' size={30} />
      }} />
      
      <Tabs.Screen name="about" options={{ title: 'About',
        tabBarIcon: ({focused, color}) => <Ionicons name='information' size={30} />

       }} />
    </Tabs>
  );
}
