import browserslist from "browserslist";
import type { TransformOptions } from "lightningcss";
import * as css from "lightningcss";
import { type Plugin } from "vite";

const fileRegex = /\.(css)$/;

type ViteTransformOptions = Omit<TransformOptions, "filename" | "code"> & {
  browserslist?: string | readonly string[];
};

function lightningcss(opts?: ViteTransformOptions): Plugin[] {
  const defaultOptions: ViteTransformOptions = {
    minify: true,
    sourceMap: true,
  };
  const { browserslist: browserslistOpts, ...lightningOpts } = opts ?? {};
  const targets = css.browserslistToTargets(browserslist(browserslistOpts));
  return [
    {
      name: "vite-plugin-lightningcss",
      transform(src, id) {
        if (fileRegex.test(id)) {
          const { code, map } = css.transform({
            filename: id,
            code: Buffer.from(src),
            ...defaultOptions,
            targets,
            ...lightningOpts,
          });
          return {
            code: code.toString(),
            map: map ? map.toString() : undefined,
          };
        }
      },
    },
  ];
}

export default lightningcss;
