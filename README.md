# Animation library for Qwik ⚡️
---
## Introduction

Qwidditch motion aims to be to Qwik, what framer motion is to react.

Currently far from feature parity and very much still under construction, this means potentially many bugs and is not ready for production.
The API may change over time, but for the sake of simplicity aims for as natural a feel as framer motion, but may over time deviate from their appraoch.

You can try out Qwidditch motion by:

```
npm i @qwidditch/motion
```

## What it's capable of currently (version 0.1.0)

Using a similar API to framer motion, you can apply animations like so:

```
<motion.div
    animate={{ x: 100, rotate: 45 }}
    options={{
        duration: 0.5,
        easing: 'ease-in-out',
        repeat: Infinity,
        direction: 'alternate',
    }}
>
    Hello world
</motion.div>
```


## Where Qwidditch motion is headed

In its current form you can apply an animation that will run, but not much more than that. In upcoming releases you should be able to declare an initial state, that will tell Qwidditch motion how an element will "enter" whereafter the normal animation will play.
After that, an exit state will be implemented, so you can remove the elements from the dom in a more nice way than them just dissappearing.


> Note: Keep in mind I am one guy working on this, I'm new to both Qwik and making NPM packages so my solutions might be both naive and noobish, but hopfully working.

## Acknowledgements
It's worth keeping in mind that in this endeavor that this project is quite literally standing on the shoulder of giants. Just like framer motion, it uses [Motion One](https://motion.dev/) under the hood and thus without it this project would not exist. Likewise without the beautiful implementation of Framer Motion, I wouldn't have thought to make this at all.
Not having an animation library was one of the biggest deterrents for me to make the switch, so I'm making this to help myself and others who might be in a similar position.

### Shoutouts
I'd like to shoutout @thameus from the Builder.io discord server for letting me know that [Motion One](https://motion.dev/) even was a thing.
I'd also like to make a MEGA shoutout to @absolutejam for making a very beatiful demonstration on how motion one could be implemented in a Qwik project and most importantly how to avoid grabbing elements with a queryselector. You can find the demonstration [here](https://stackblitz.com/edit/github-ksmwra-2nfrgz?file=src%2Froutes%2Findex.tsx). Many times I've looked at this for inspiration.

Lastly thanks to anyone else who have participated in my thread about animations in Qwik in the Builder.io discord server.