import { ReactNode } from "react";
import LanguageLogo from "./LanguageLogo";
import { Pre, Link, Image, Divider } from "./mdx-plugins";
import Tooltip from "./Tooltip";
import { H1, H2, H3, H4 } from "./mdx-plugins/Heading";

export default {
  Image: (props: MDXImage) => <Image {...props} />,
  pre: (props: MDXPre) => <Pre {...props} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: MDXHeading) => <H1 {...props} />,
  h2: (props: MDXHeading) => <H2 {...props} />,
  h3: (props: MDXHeading) => <H3 {...props} />,
  h4: (props: MDXHeading) => <H4 {...props} />,
  p: (props: any) => <p className="my-6 text-[18px] font-regular" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-8" {...props} />,
  li: (props: any) => <li className="text-lg ml-5 list-[square]" {...props} />,
  LanguageLogo: (props: ILanguageLogo) => <LanguageLogo {...props} />,
  Tooltip: (props: MDXTooltip) => <Tooltip {...props} />,
  Divider: (props: MDXDivider) => <Divider {...props} />,
}
