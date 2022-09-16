/** @type {import('next-seo').Array<DefaultSeoProps>} */
const defaultSEOConfig = {
  title: "Michyaraque 💡",
  titleTemplate: "%s - Michael Araque",
  defaultTitle: "Entusiasta blockchain, backend dev con un poco de frontend 👷‍♀️",
  description: "Crea, construye y disfruta, recuerda que lo díficil solo cuesta un poco más",
  canonical: "https://michyaraque.dev",
  openGraph: {
    url: "https://michyaraque.dev",
    title: "Michael Araque's Blog",
    description: "Crea, construye y disfruta, recuerda que lo díficil solo cuesta un poco más",
    images: [
      {
        url: "https://michyaraque.dev/images/banner.png",
        alt: "Michael Araque Blog",
      },
    ],
    site_name: "michyaraque.dev",
  },
  twitter: {
    handle: "@michyaraque",
    site: "@michyaraque",
    cardType: "summary_large_image",
  }
};

export default defaultSEOConfig;
