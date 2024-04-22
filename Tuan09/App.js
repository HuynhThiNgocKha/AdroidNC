import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Components/screen/Home";
import Search from "./Components/screen/Search";
import MyCourses from "./Components/screen/MyCourses";
import Profile from "./Components/screen/Profile";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home-outline" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MyCourse"
          component={MyCourses}
          options={{
            tabBarLabel: "MyCourse",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="book-outline" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
