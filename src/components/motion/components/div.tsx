import { component$, HTMLAttributes, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from "motion";

export interface divProps extends HTMLAttributes<HTMLDivElement> {
  animate: MotionKeyframesDefinition
  options?: AnimationOptionsWithOverrides
}


export const div = component$<divProps>(({ animate: animateProps, options, ...attributes }) => {
  const ref = useSignal<HTMLDivElement>();

  useVisibleTask$(() => {
    if (!ref.value) return;
    animate(
      ref.value,
      animateProps,
      options
    )
  })
  return (
    <div {...attributes} ref={ref}>
      <Slot />
    </div>
  );
})