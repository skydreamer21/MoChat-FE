declare module "*.svg?react" {
  import { ComponentType, SVGProps } from "react";
  const content: ComponentType<SVGProps<SVGSVGElement>>;
  export default content;
}
