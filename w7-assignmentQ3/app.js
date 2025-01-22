// Step 1: Create a React-like element as an object
function createElement(type, props, ...children) {
    return { type, props: { ...props, children } };
  }
  
  // Step 2: Convert reactElement to actual HTML string
  function renderElement(reactElement) {
    const { type, props } = reactElement;
  
    // Create the element
    const element = document.createElement(type);
  
    // Set properties
    for (const [key, value] of Object.entries(props)) {
      if (key === 'children') {
        value.forEach(child => {
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(renderElement(child));
          }
        });
      } else {
        element.setAttribute(key, value);
      }
    }
  
    return element;
  }
  
  // Step 3: Render the reactElement into the DOM
  function customRender(reactElement, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      const renderedElement = renderElement(reactElement);
      container.appendChild(renderedElement);
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
  
  // Usage Example
  const reactAnchorElement = createElement('a', { href: 'https://www.example.com', target: '_blank' }, 'Visit Example');
  
  customRender(reactAnchorElement, 'root');
  