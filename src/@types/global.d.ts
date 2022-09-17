type MDXImage = {
  alt?: string
  src: string
  width: number
  height: number
  priority: boolean
}

type MDXPre = ReactNode & {
  className: string,
}

type MDXHeading = ReactNode & {
  id: string
  useAnchor?: boolean
  size: string
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7"
}

type MDXTooltip = ReactNode & {
  message: string
}

type MDXDivider = ReactNode & {
  title: string
}

type ILanguageLogo = {
  language: string;
  badge?: boolean;
  className?: string;
  version?: string;
  useLink?: boolean;
};
