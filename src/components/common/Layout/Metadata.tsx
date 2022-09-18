import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from 'constant/AppConfig';
import { cleanText } from 'utils';

type IMetadataProps = {
  title?: string;
  description: string;
  canonical?: string;
  titleTemplate?: string;
  image?: string
};

const Metadata = (props: IMetadataProps) => {
  const router = useRouter();

  const { title, description, canonical, image, ...metadataRest } = props;

  const handleOGImage = (): string => {

    if (title) {
      return `${process.env.NEXT_PUBLIC_OPENGRAHP_DOMAIN}${cleanText(title)}.png`;
    }

    if(image) {
      return image;
    }

    return '';
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        {...metadataRest}
        title={title}
        description={description}
        canonical={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`}
        openGraph={{
          images: [
            {
              url: handleOGImage(),
              alt: title,
            },
          ],
          title: title,
          description: description,
          url: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export default Metadata;
