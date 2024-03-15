import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import Settings from '../screens/Settings';
//import {Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen
        name="Chats"
        component={MainScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Ionicons name="settings-outline" size={size} color={color} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

const ChatSectionNavigation = () => {
    return (
        // <NavigationContainer independent = {true}>
            <Stack.Navigator>
                <Stack.Screen name = "Root" component = {RootNavigation} options={{ headerShown: false, headerTitle: "Chats" }}/>
                <Stack.Screen name = "Chat" component = {ChatScreen} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}
export default ChatSectionNavigation;
