import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
export default value => {
  const moveText = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };
  return {onFocusHandler, onBlurHandler, animStyle,moveText};
};
