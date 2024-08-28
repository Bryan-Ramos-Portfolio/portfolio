import { annotate } from "rough-notation";
import { RoughAnnotationType } from "rough-notation/lib/model";

export const createAnnotation = (
    ref: any,
    type: RoughAnnotationType,
    padding: number,
    color: string = "rgb(17 24 39)"
  ) => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type,
        color: "rgb(17 24 39)",
        strokeWidth: 1,
        padding,
        iterations: 1,
        multiline: true,
        animationDuration: 1000,
      });
      annotation.show();
    }
  };