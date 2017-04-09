import {
  Dimensions,
  Platform
} from 'react-native';

const { width } = Dimensions.get('window');

export const ITEM_SQUARE = width / 2;
export const NAV_BAR = Platform.OS ==='ios' ? 64 : 56;