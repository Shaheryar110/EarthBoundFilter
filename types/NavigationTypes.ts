import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamListAPP = {
  BottomTab: NavigatorScreenParams<RootBottomTabParams>;
  FlatHvacFilter: undefined;
  VentFilter: undefined;
  cart: undefined;
  accounts: undefined;
};
export type RootBottomTabParams = {
  Home: undefined;
  Menu: undefined;
  Profile: undefined;
  Heart: undefined;
};
export type RootGuideStackParamList = {
  MainGuide: undefined;
  GuideSecond: undefined;
  GuideThird: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParams, 'Home'>,
  NativeStackScreenProps<RootStackParamListAPP>
>;
export interface CustomHeaderProps {
  navigation: StackNavigationProp<RootStackParamListAPP, 'FlatHvacFilter'>;
}
export interface HeaderProps {
  navigation: StackNavigationProp<RootStackParamListAPP>;
}
export type RootAuthtackParamList = {
  LoginTypes: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
export type LoginTypesList = {
  navigation: StackNavigationProp<RootAuthtackParamList, 'LoginTypes'>;
};
export type signinList = {
  navigation: StackNavigationProp<RootAuthtackParamList, 'SignIn'>;
};
export type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamListAPP, 'accounts'>;
};
export type AccountsProps = {
  navigation: StackNavigationProp<RootStackParamListAPP, 'BottomTab'>;
};
export type SignUpScreenProps = {
  navigation: StackNavigationProp<RootAuthtackParamList, 'SignUp'>;
};
