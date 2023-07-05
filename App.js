import { HomeStack, PTHH, BTH, BTT } from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'PTHH') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Tìm Kiếm') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Bảng Tuần Hoàn') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Bảng Tính Tan') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="PTHH" component={PTHH} />
        <Tab.Screen name="Tìm Kiếm" component={HomeStack} />

        <Tab.Screen name="Bảng Tuần Hoàn" component={BTH} />
        <Tab.Screen name="Bảng Tính Tan" component={BTT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
