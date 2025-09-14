declare module "motion/react" {
  /* Minimal ambient declarations to satisfy TS in this repo.
     These are intentionally permissive (any) to avoid breaking changes
     while keeping runtime behavior intact. Replace with precise types
     if you later swap to `framer-motion` or add proper type support. */

  export const motion: any;
  export const AnimatePresence: any;
  export function animate(...args: any[]): any;
  export function useMotionValue<T = any>(initial?: T): any;
  export function motionValue<T = any>(initial?: T): any;
  export function useSpring<T = any>(value: T, opts?: any): any;
  export type SpringOptions = any;
  export type Transition = any;
  export type TargetAndTransition = any;
  export type UseInViewOptions = any;
  export type Variants = any;
  export type Variant = any;
  export type HTMLMotionProps<T = any> = any;
  export function useInView(...args: any[]): any;
  export function useTransform(...args: any[]): any;
  export function useMotionValueEvent(...args: any[]): any;
  export const MotionConfig: any;
  export default motion;
}
