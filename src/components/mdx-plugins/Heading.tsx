import Link from 'next/link';
import React from 'react';
import { removeAccent } from 'utils';

/**
 * A React component that renders a heading.
 * @param {MDXHeading} props - MDXHeading - This is the interface that we created earlier.
 * @returns A React component
 */
const HeadingMaster = (props: MDXHeading) => {
  const { id, useAnchor = true, headingType, size, ...rest } = props;

  if (id && useAnchor) {
    let validId = removeAccent(id);
    return (
      <Link href={`#${validId}`}>
        <a>
          {React.createElement(
            headingType,
            {
              className: `${size} font-bold text-zinc-700 dark:text-zinc-200 my-4`,
              id: validId
            },
            React.createElement(
              "span",
              { className: "anchor" }
            ),
            props.children
          )}
        </a>
      </Link>
    );
  }
  return <>
    {React.createElement(headingType, { ...rest })}
  </>;
}

export const H1 = ({ id, children }: MDXHeading) => {
  return <HeadingMaster id={id} headingType="h1" size="text-4xl" >{children}</HeadingMaster>
};

export const H2 = ({ id, children }: MDXHeading) => {
  return <HeadingMaster id={id} headingType="h2" size="text-2xl" >{children}</HeadingMaster>
};

export const H3 = ({ id, children }: MDXHeading) => {
  return <HeadingMaster id={id} headingType="h3" size="text-xl" >{children}</HeadingMaster>
};

export const H4 = ({ id, children }: MDXHeading) => {
  return <HeadingMaster id={id} headingType="h4" size="text-lg" >{children}</HeadingMaster>
};
