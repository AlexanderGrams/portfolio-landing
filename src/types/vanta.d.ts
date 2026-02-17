declare module "vanta/dist/vanta.birds.min" {
  type VantaEffect = { destroy?: () => void };

  type VantaOptions = {
    el: HTMLElement;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    [key: string]: unknown;
  };

  const birds: (options: VantaOptions) => VantaEffect;
  export default birds;
}
