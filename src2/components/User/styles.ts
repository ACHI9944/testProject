import {StyleSheet} from 'react-native';
import {ITEM_HEIGHT} from './User';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    height: ITEM_HEIGHT,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
