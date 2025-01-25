import { colors } from '@/styles/default'
import { Tabs } from 'expo-router'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { View } from 'react-native'

export default function TabsLayoutRoot() {
  return (
    <View className="flex-1 bg-gray-50">
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: colors["primary-violet-900"],
          tabBarInactiveTintColor: colors["gray-200"],
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 88,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: colors.white,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            overflow: "hidden",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="shop"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="bag" color={color} size={24} />,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" color={color} size={21} />,
          }}
        />
      </Tabs>
    </View>

  )
}