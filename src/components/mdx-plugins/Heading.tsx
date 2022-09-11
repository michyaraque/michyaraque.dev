import Link from 'next/link';
import React from 'react';
import { removeAccent } from 'utils';

type IHeading = {
  id: string,
  useAnchor?: boolean,
  size: string,
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7",
  children: React.ReactNode
}

/**
 * A React component that renders a heading.
 * @param {IHeading} props - IHeading - This is the interface that we created earlier.
 * @returns A React component
 */
const HeadingMaster = (props: IHeading) => {
  const { id, useAnchor = true, headingType, size, children, ...rest } = props;

  if (id && useAnchor) {
    let validId = removeAccent(id);
    return (
      <Link href={`#${validId}`}>
        <a>
          {React.createElement(
            headingType,
            {
              className: `${size} font-bold text-slate-700 my-4`
            },
            React.createElement(
              "span",
              { className: "anchor" }
            ),
            children
          )}
        </a>
      </Link>
    );
  }
  return <>
    {React.createElement(headingType, {...rest})}
  </>;
}

export const H1 = ({ id, children }: IHeading) => {
  return <HeadingMaster id={id} children={children} headingType="h1" size="text-4xl" />
};

export const H2 = ({ id, children }: IHeading) => {
  return <HeadingMaster id={id} children={children} headingType="h2" size="text-2xl" />
};

export const H3 = ({ id, children }: IHeading) => {
  return <HeadingMaster id={id} children={children} headingType="h3" size="text-xl" />
};

export const H4 = ({ id, children }: IHeading) => {
  return <HeadingMaster id={id} children={children} headingType="h4" size="text-lg" />
};
