import { component$, QwikIntrinsicElements, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from "motion";

export interface AnimatedMotionProps<C extends keyof QwikIntrinsicElements> {
  animate: MotionKeyframesDefinition
  options?: AnimationOptionsWithOverrides
  as: QwikIntrinsicElements[C]
}

export const AnimatedMotion = component$<AnimatedMotionProps<keyof QwikIntrinsicElements>>(({ animate: animateProps, options, as, ...props}) => {
  const MotionElement = as
  const ref = useSignal<Element>();

  useVisibleTask$(() => {
    if (!ref.value) return;
    animate(
      ref.value,
      animateProps,
      options
    )
  })

  return (
    // @ts-ignore
    <MotionElement ref={ref} {...props}>
      <Slot />
    </MotionElement>
  );
})

