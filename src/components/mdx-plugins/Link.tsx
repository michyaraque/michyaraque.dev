const Link = (props: any) => {
  const {children, href, ...rest} = props;
  return (
    <a target="_blank" href={href} className="underline text-blue-600 hover:text-blue-800 visited:text-blue-400">
      {children}
    </a>
  )
}

export default Link;
