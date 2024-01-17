/// <reference types="vite/client" />

declare module '*.sass' {
  const classes: { [key: string]: string }
  export default classes
}
