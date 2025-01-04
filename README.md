# React Memory Leak Bug

This repository demonstrates a common React bug: a memory leak caused by a missing cleanup function in the `useEffect` hook. The `MyComponent` component adds a window resize event listener but never removes it, leading to a memory leak as the component is remounted or unmounted repeatedly.