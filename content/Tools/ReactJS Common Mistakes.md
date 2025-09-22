---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2025-09-22, 16:19
Last Date: 2025-09-22T16:25:42+08:00
References:
draft:
description:
---
## React useEffect Dependency Pitfall
---
```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const params = { when: 69 }; // new object each render
  // Fix with `useMemo`
  // const params = useMemo(() => ({ when: 69 }), []);

  useEffect(() => {
    console.log("Effect ran!");
  }, [params]); // runs every render, even if contents are same

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}

```
- In React, `useEffect(..., [deps])` runs when **dependencies change by reference**, not by content
- In JavaScript, writing `{ when: 69 }` creates a **new object every render**, so React thinks it’s different each time → effect re-runs unnecessarily -> causes **extra or infinite re-fetching**
- ✅ Fix: Use `useMemo` (or `useCallback`) when you need a **stable object/function** for dependencies
- ⚠️ Don’t overuse `useMemo` — only apply it when object identity matters (like dependencies, props for memoized children)

>[!tip]
> Objects/arrays/functions recreate each render → `useMemo`/`useCallback` helps keep them stable **only when necessary**.



## References
- [Cloudflare in trouble - YouTube](https://youtu.be/gDVxBOGL99Q?si=_QOftkV16XjGsH4M)