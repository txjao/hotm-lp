"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { env } from "process";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1198889008013817";


  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};