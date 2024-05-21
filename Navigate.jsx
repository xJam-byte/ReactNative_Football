import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./pages/MainPage";
import LeaguePage from "./pages/LeaguePage";
import TeamsPage from "./pages/TeamsPage";
import Footer from "./components/Footer";
import TopScorersPage from "./pages/TopScoresPage";

export default function Navigate() {
    const Stack = createNativeStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
  
          <Stack.Screen
            options={{
              title: "Главная страница",
            }}
            name="Main"
            component={MainPage}
          />
  
          <Stack.Screen
            options={{
              title: "Команды",
            }}
            name="Teams"
            component={TeamsPage}
          />
  
          <Stack.Screen
            options={{
              title: "Лига",
            }}
            name="League"
            component={LeaguePage}
          />
          <Stack.Screen
            options={{
              title: "Лучшие голы",
            }}
            name="TopScores"
            component={TopScorersPage}
          />
        </Stack.Navigator>
        <Footer />
  
      </NavigationContainer>
    );
  }
  