import { Slot, component$ } from "@builder.io/qwik";

export interface GetElementProps {
  element: keyof HTMLElementTagNameMap | "svg"
  ref: any
  props: any
}

export const GetElement = component$<GetElementProps>(({ element, ref, props }) => {
  switch (element) {
    case "div":
      return <div ref={ref} {...props}><Slot /></div>;
    case "span":
      return <span ref={ref} {...props}><Slot /></span>;
    case "a":
      return <a ref={ref} {...props}><Slot /></a>;
    case "h1":
      return <h1 ref={ref} {...props}><Slot /></h1>;
    case "p":
      return <p ref={ref} {...props}><Slot /></p>;
    case "button":
      return <button ref={ref} {...props}><Slot /></button>;
    case "input":
      return <input ref={ref} {...props} />;
    case "img":
      return <img ref={ref} {...props} />;
    case "ul":
      return <ul ref={ref} {...props}><Slot /></ul>;
    case "li":
      return <li ref={ref} {...props}><Slot /></li>;
    case "label":
      return <label ref={ref} {...props}><Slot /></label>;
    case "textarea":
      return <textarea ref={ref} {...props} />;
    case "table":
      return <table ref={ref} {...props}><Slot /></table>;
    case "tr":
      return <tr ref={ref} {...props}><Slot /></tr>;
    case "td":
      return <td ref={ref} {...props}><Slot /></td>;
    case "form":
      return <form ref={ref} {...props}><Slot /></form>;
    case "select":
      return <select ref={ref} {...props}><Slot /></select>;
    case "option":
      return <option ref={ref} {...props}><Slot /></option>;
    case "fieldset":
      return <fieldset ref={ref} {...props}><Slot /></fieldset>;
    case "legend":
      return <legend ref={ref} {...props}><Slot /></legend>;
    case "strong":
      return <strong ref={ref} {...props}><Slot /></strong>;
    case "em":
      return <em ref={ref} {...props}><Slot /></em>;
    case "blockquote":
      return <blockquote ref={ref} {...props}><Slot /></blockquote>;
    case "cite":
      return <cite ref={ref} {...props}><Slot /></cite>;
    case "code":
      return <code ref={ref} {...props}><Slot /></code>;
    case "pre":
      return <pre ref={ref} {...props}><Slot /></pre>;
    case "sub":
      return <sub ref={ref} {...props}><Slot /></sub>;
    case "sup":
      return <sup ref={ref} {...props}><Slot /></sup>;
    case "nav":
      return <nav ref={ref} {...props}><Slot /></nav>;
    case "header":
      return <header ref={ref} {...props}><Slot /></header>;
    case "footer":
      return <footer ref={ref} {...props}><Slot /></footer>;
    case "section":
      return <section ref={ref} {...props}><Slot /></section>;
    case "article":
      return <article ref={ref} {...props}><Slot /></article>;
    case "video":
      return <video ref={ref} {...props}><Slot /></video>;
    case "audio":
      return <audio ref={ref} {...props}><Slot /></audio>;
    case "canvas":
      return <canvas ref={ref} {...props}><Slot /></canvas>;
    case "progress":
      return <progress ref={ref} {...props}><Slot /></progress>;
    case "meter":
      return <meter ref={ref} {...props}><Slot /></meter>;
    case "iframe":
      return <iframe ref={ref} {...props}><Slot /></iframe>;
    case "embed":
      return <embed ref={ref} {...props}><Slot /></embed>;
    case "object":
      return <object ref={ref} {...props}><Slot /></object>;
    case "picture":
      return <picture ref={ref} {...props}><Slot /></picture>;
    case "source":
      return <source ref={ref} {...props}><Slot /></source>;
    case "track":
      return <track ref={ref} {...props}><Slot /></track>;
    case "map":
      return <map ref={ref} {...props}><Slot /></map>;
    case "area":
      return <area ref={ref} {...props}><Slot /></area>;
    case "th":
      return <th ref={ref} {...props}><Slot /></th>;
    case "thead":
      return <thead ref={ref} {...props}><Slot /></thead>;
    case "tbody":
      return <tbody ref={ref} {...props}><Slot /></tbody>;
    case "tfoot":
      return <tfoot ref={ref} {...props}><Slot /></tfoot>;
    case "col":
      return <col ref={ref} {...props}><Slot /></col>;
    case "colgroup":
      return <colgroup ref={ref} {...props}><Slot /></colgroup>;
    case "caption":
      return <caption ref={ref} {...props}><Slot /></caption>;
    case "optgroup":
      return <optgroup ref={ref} {...props}><Slot /></optgroup>;
    case "details":
      return <details ref={ref} {...props}><Slot /></details>;
    case "summary":
      return <summary ref={ref} {...props}><Slot /></summary>;
    case "menu":
      return <menu ref={ref} {...props}><Slot /></menu>;
    case "svg":
      return <svg ref={ref} {...props}><Slot /></svg>;
    default:
      return (
        <div>
          <h1>Unknown element: {element}</h1>
          <Slot />
        </div>
      );
  }
})
