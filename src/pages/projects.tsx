import { Wrapper, Metadata } from 'components/common/Layout'
import LanguageLogo from 'components/LanguageLogo';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const workProjects = [
  {
    title: "$FXD Token Smart Contract",
    description: "Token diseñado para ser usado como moneda de governanza junto a un Timelock y control de ciertas propiedades bajo un sistema multisig",
    image: "fxd_token.jpg",
    link: "https://github.com/Foxtrot-Command/fxd-contract",
    technologies: ["solidity", "typescript", "chai", "waffle"]
  },
  {
    title: "Vesting Platform",
    description: "Plataforma diseñada para interactuar con smart contracts, el usuario es capaz de invertir de forma totalmente automática y también de recoger su recompensa que se calcula a través de un Smart Contract segundo por segundo",
    image: "ico_platform.jpg",
    link: "https://private1.foxtrotcommand.com",
    technologies: ["nextjs", "reactjs", "typescript"]
  },
];

const sideProjects = [
  {
    title: "CGrabber",
    description: "Bot creado para Telegram con funcionalidades y herramientas enfocadas al marketing de afiliados",
    image: "cgrabber.jpg",
    link: "https://chollx.es",
    technologies: ["php", "stripe", "regex"]
  },
  {
    title: "Smart Contract Boilerplate",
    description: "Boilerplate creado para iniciar a programar de forma rápida y efectiva",
    image: "smart_contract_boilerplate.jpg",
    link: "https://github.com/michyaraque/smart-contract-boilerplate",
    technologies: ["typescript", "solidity", "hardhat", "chai", "waffle"]
  },
  {
    title: "Simple Telegram Bot",
    description: "Librería desarrollada y diseñada para ser usada por otros desarrolladores de bots de telegram. La librería fue creada bajo el principio de `Chained Class`",
    image: "simple_telegram_bot.jpg",
    link: "https://github.com/michyaraque/SimpleTelegramBotV2",
    technologies: ["php"]
  }
];
type TProjectCard<T> = {
  image: string
  title: string
  description: string
  link: string
  technologies: Array<T>
}

const ProjectStats = <T,>({ technologies }: Pick<TProjectCard<T>, 'technologies'>) => {
  return (
    <div className="flex flex-row gap-2 m-auto content-end">
      <span className="my-auto text-center text-lg">Tecnologías usadas: </span>
      <div className="flex flex-row justify-end gap-2">

        {technologies.map((language: T, index: number) => (
          <LanguageLogo key={index} language={language as unknown as string} className="!w-7 !h-7" />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = <T,>({
  image,
  title,
  description,
  technologies,
  link
}: TProjectCard<T>) => {
  return (
    <>
      <article className="w-100 h-auto pb-7 bg-zinc-100 dark:bg-zinc-700 rounded-lg flex flex-col group">
        <div className="p-4 relative h-48 w-full rounded-lg">
          <div className='w-full h-full rounded-lg bg-center bg-[size:100%] group-hover:bg-[size:120%] transition-all ease-in-out duration-200' style={{
            backgroundImage: `url('${`/images/projects/${image}`}')`
            }}/>
        </div>

        <div className="flex flex-col gap-4 mx-4 flex-grow">
          <div className="flex flex-row gap-2 justify-between">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">{title}</span>
            <span className="my-auto hover:opacity-90">
              <Link href={link}>
                <a target="_blank" rel="noreel">
                  {link.includes('github') ? <FaGithub size={26} /> : <TbWorld size={26} />}
                </a>
              </Link>
            </span>
          </div>
          <span className="font-light text-md">{description}</span>

          <div className="mt-auto">
            <ProjectStats technologies={technologies} />
          </div>

        </div>
      </article>
    </>
  )
}

const projects = () => {
  return (
    <Wrapper
      meta={
        <Metadata
          title="Proyectos"
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold dark:text-zinc-300 text-zinc-700">
            Trabajos
          </h1>

          <section className="mt-6 grid grid-cols md:grid-cols-2 gap-6">
            {workProjects.map((item, index: number) => (
              <ProjectCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                link={item.link}
              />
            ))}
          </section>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-bold dark:text-zinc-300 text-zinc-700">
            Proyectos/Hobbie
          </h1>

          <section className="mt-6 grid grid-cols md:grid-cols-2 gap-6">
            {sideProjects.map((item, index: number) => (
              <ProjectCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                link={item.link}
              />
            ))}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

export default projects
