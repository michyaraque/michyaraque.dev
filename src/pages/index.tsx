import { useRouter } from 'next/router';

import { Metadata, Wrapper } from 'components/common/Layout';

const Index = () => {
  const router = useRouter();

  return (
    <Wrapper
      meta={
        <Metadata
          title="Michael Araque"
          description=""
        />
      }
    >
      <h1 className="text-2xl font-bold">
        Inicio de mi blog
      </h1>
      
    </Wrapper>
  );
};

export default Index;
