import {StyleSheet} from 'react-native';
import {colors} from './colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  headingWrapper: {},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    color: colors.heading,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.gray,
    marginTop: 15,
    lineHeight: 30,
  },
  timePickerWrapper: {
    backgroundColor: colors.bg,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  dayItem: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTitle: {
    fontSize: 14,
    padding: 10,
  },
  btnWrapper: {
    marginTop: 55,
  },
});