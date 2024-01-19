import { QwikIntrinsicElements } from "@builder.io/qwik";
import { AnimatedMotion, AnimatedMotionProps } from "./components/AnimatedMotion";

export const motion = {
  div: (props: Omit<AnimatedMotionProps<keyof QwikIntrinsicElements>, 'as'>) => <AnimatedMotion as='div' {...props} />
}