const TEXT_ELEMENT = "TEXT";

export const React = {
  render,
  createElement,
}

function performElement (element) {
  const dom = (element.type === TEXT_ELEMENT)
    ? document.createTextNode("")
    : document.createElement(element.type)

  Object.getOwnPropertyNames(element.props)
    .filter(prop => prop !== "children")
    .forEach(prop => dom[prop] = element.props[prop])

  return dom
}

function render(element, container) {
  const dom = performElement(element)

  element.props.children.forEach(child =>
    render(child, dom)
  )
  
  return (container)
    ? container.appendChild(dom)
    : dom
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => (child instanceof Object)
        ? child 
        : createElement(TEXT_ELEMENT, { nodeValue: child })
      )
    },
  }
}