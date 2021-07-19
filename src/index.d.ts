// index.d.ts
import "react";

declare module 'react' {
  export interface HTMLAttributes<T> {
    animating?: any;
  }
}