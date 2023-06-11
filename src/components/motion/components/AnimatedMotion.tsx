import { component$, HTMLAttributes, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from "motion";
import { GetElement } from "./GetElement";

export interface AnimatedMotionProps extends HTMLAttributes<HTMLElement> {
  animate: MotionKeyframesDefinition
  options?: AnimationOptionsWithOverrides
  element: keyof HTMLElementTagNameMap | "svg"
}


export const AnimatedMotion = component$<AnimatedMotionProps>(({element, animate: animateProps, options, ...attributes }) => {
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
    <GetElement element={element} ref={ref} props={attributes}>
      <Slot />
    </GetElement>
  );
})
