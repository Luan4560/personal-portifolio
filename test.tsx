import { useState } from "react";
import { CSSProperties } from "styled-components";

interface ImageStyle {
  thumbnail: CSSProperties;
  fullSize: CSSProperties;
}

interface ImageOnLoadType {
  handleImageOnLoad: () => void;
  css: ImageStyle;
}

function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const css: ImageStyle = {
    thumbnail: {
      visibility: isLoaded ? "hidden" : "visible",
      filter: "blur(8px)",
      transition: "visibility 0ms ease-out 500ms",
    },
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 500ms ease-in 0ms",
    },
  };

  return { handleImageOnLoad, css };
}

export default useImageOnLoad;
