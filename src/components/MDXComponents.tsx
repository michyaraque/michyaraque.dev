import LanguageLogo from "./LanguageLogo";
import { Pre, Link, Image, Divider } from "./mdx-plugins";
import Tooltip from "./Tooltip";
import { H1, H2, H3, H4 } from "./mdx-plugins/Heading";

export default {
  Image: (props: any) => <Image {...props} />,
  pre: (props: any) => <Pre {...props} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  p: (props: any) => <p className="my-6 text-[18px] font-regular" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-8" {...props} />,
  li: (props: any) => <li className="text-lg ml-5 list-[square]" {...props} />,
  LanguageLogo: (props: any) => <LanguageLogo {...props} />,
  Tooltip: (props: any) => <Tooltip {...props} />,
  Divider: (props: any) => <Divider {...props} />,
}
