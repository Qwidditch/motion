import { component$, Slot } from "@builder.io/qwik"
import { AnimatedMotionProps, AnimatedMotion } from "./AnimatedMotion"

export const createMotionDiv = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"div"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})
export const createMotionP = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"p"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSpan = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"span"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionA = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"a"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionH1 = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"h1"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionButton = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"button"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionInput = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"input"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionImg = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"img"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionUl = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"ul"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionLi = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"li"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionLabel = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"label"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionForm = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"form"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSelect = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"select"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionOption = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"option"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTextarea = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"textarea"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSvg = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"svg"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTable = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"table"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTr = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"tr"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTd = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"td"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTh = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"th"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionThead = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"thead"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTbody = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"tbody"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTfoot = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"tfoot"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionFieldset = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"fieldset"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionLegend = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"legend"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionStrong = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"strong"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionEm = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"em"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionBlockquote = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"blockquote"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionCite = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"cite"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionCode = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"code"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionPre = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"pre"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSub = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"sub"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSup = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"sup"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionNav = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"nav"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionHeader = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"header"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionFooter = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"footer"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSection = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"section"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionArticle = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"article"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionAside = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"aside"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionVideo = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"video"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionAudio = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"audio"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionCanvas = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"canvas"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionProgress = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"progress"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionMeter = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"meter"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionDetails = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"details"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSummary = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"summary"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionMenu = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"menu"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

// export const createMotionMenuitem = component$<Omit<AnimatedMotionProps, "element">>((props) => {
//   return (
//     <AnimatedMotion element={"menuitem"} {...props}>
//       <Slot />
//     </AnimatedMotion>
//   )
// })

export const createMotionDialog = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"dialog"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionIframe = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"iframe"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionEmbed = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"embed"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionObject = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"object"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionPicture = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"picture"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionSource = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"source"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionTrack = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"track"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionMap = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"map"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionArea = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"area"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionCol = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"col"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionColgroup = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"colgroup"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionCaption = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"caption"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionOptGrouo = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"optgroup"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

export const createMotionFigcaption = component$<Omit<AnimatedMotionProps, "element">>((props) => {
  return (
    <AnimatedMotion element={"figcaption"} {...props}>
      <Slot />
    </AnimatedMotion>
  )
})

