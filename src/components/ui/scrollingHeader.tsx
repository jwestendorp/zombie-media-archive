import { useEffect, useState } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

const H2 = ({ className, children, ...props }) => {
  const [isTop, setIsTop] = useState(0);
  const ref = React.useRef(null);

  useEffect(() => {
    const onScroll = (e) => {
      const y = ref.current.getBoundingClientRect().top;

      if (y < 25) setIsTop(true);
      else setIsTop(false);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 transition-all",
        isTop && "text-xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export { H2 };
