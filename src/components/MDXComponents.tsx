import Link from "next/link";

const CustomH1 = ({ id, ...rest }: any) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h2 className="text-2xl font-bold" {...rest}>
          <a className="anchor">
          </a>
          {rest.children}
        </h2>
      </Link>
    );
  }
  return <h2 {...rest} />;
};

export default {
  h2: (props: any) => <CustomH1 {...props} />,
  p: (props: any) => <p className="my-6 text-[18px] font-regular" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-8" {...props} />,
}
