import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {Colors} from '../../themes';
import {mix} from 'react-native-redash';
const SIZE = Dimensions.get('window').width;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedPath2 = Animated.createAnimatedComponent(Path);
import styles from './styles';
const FluidAnimation = () => {
  const progress = useSharedValue(0.1);
  const progress2 = useSharedValue(0.2);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {duration: 3200, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
  }, [progress]);

  useEffect(() => {
    progress2.value = withRepeat(
      withTiming(1, {duration: 3200, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
  }, [progress2]);
  const data = useDerivedValue(() => {
    return {
      from: {x: mix(progress.value, 0, -1), y: mix(progress.value, 0, -2)},
      c1: {x: 0.2, y: 0.9},
      c2: {x: 0.7, y: 0.9},
      to: {x: mix(progress.value, 1, 2), y: mix(progress.value, 1, 1)},
    };
  });
  const data2 = useDerivedValue(() => {
    return {
      from: {x: mix(progress2.value, 0, -1), y: mix(progress2.value, 0, 0.3)},
      c1: {x: 0.2, y: 0.9},
      c2: {x: 0.7, y: 0.9},
      to: {x: mix(progress2.value, 1, 2), y: mix(progress2.value, 1, 0.7)},
    };
  });
  const path = useAnimatedProps(() => {
    const {from, c1, c2, to} = data.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  const path2 = useAnimatedProps(() => {
    const {from, c1, c2, to} = data2.value;
    return {
      opacity: 0.4,
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.pathStyle}>
        <Svg
          width={SIZE}
          height={SIZE}
          viewBox="0 0 1 1"
          style={{transform: [{rotateY: '180deg'}]}}>
          <AnimatedPath
            fill={Colors.themeColors.destructive}
            animatedProps={path}
          />
        </Svg>
      </View>
      <View style={styles.pathStyle}>
        <Svg
          width={SIZE}
          height={SIZE}
          viewBox="0 0 1 1"
          style={{transform: [{rotateY: '180deg'}]}}>
          <AnimatedPath2 fill={Colors.black} animatedProps={path2} />
        </Svg>
      </View>
    </View>
  );
};
export default FluidAnimation;
