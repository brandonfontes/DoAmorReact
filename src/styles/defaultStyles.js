import colors from './colors';
import metrics from './metrics';

const defaultStyles = {
  inputDefault: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderBottomWidth: 0,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding
  },
  inputContainer: {
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 25,
    marginBottom: 15,
    height: 45,
    margin: 0,
    padding: 0,
  },

  label: {
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin / 2
  },
  button: {
    success: {
      backgroundColor: colors.success,
      padding: metrics.basePadding,
      marginTop: metrics.baseMargin
    },
    default: {
      backgroundColor: colors.primary,
      borderRadius: 25,
      marginBottom: 15,
      height: 45,
      marginLeft: 10,
      marginRight: 10,
    },
    outline: {
      height: 45,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 25,
      marginBottom: 15,
      marginLeft: 10,
      marginRight: 10,
    }

  }
};

export default defaultStyles;