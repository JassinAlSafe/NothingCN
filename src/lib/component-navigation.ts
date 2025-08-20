export const componentList = [
  {
    href: "/components/accordion",
    title: "Accordion"
  },
  {
    href: "/components/alert",
    title: "Alert"
  },
  {
    href: "/components/badge",
    title: "Badge"
  },
  {
    href: "/components/banner",
    title: "Banner"
  },
  {
    href: "/components/button",
    title: "Button"
  },
  {
    href: "/components/card",
    title: "Card"
  },
  {
    href: "/components/code-block",
    title: "Code Block"
  },
  {
    href: "/components/code-preview",
    title: "Code Preview"
  },
  {
    href: "/components/dialog",
    title: "Dialog"
  },
  {
    href: "/components/discussion-card",
    title: "Discussion Card"
  },
  {
    href: "/components/input",
    title: "Input"
  },
  {
    href: "/components/nothing-calendar",
    title: "Nothing Calendar"
  },
  {
    href: "/components/pixel-forms",
    title: "Pixel Forms"
  },
  {
    href: "/components/pixel-weather-card",
    title: "Pixel Weather Card"
  },
  {
    href: "/components/tabs",
    title: "Tabs"
  }
];

export function getComponentNavigation(currentPath: string) {
  const currentIndex = componentList.findIndex(component => component.href === currentPath);
  
  const previous = currentIndex > 0 ? componentList[currentIndex - 1] : undefined;
  const next = currentIndex < componentList.length - 1 ? componentList[currentIndex + 1] : undefined;
  
  return { previous, next };
}