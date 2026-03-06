import { Wrapper, Metadata } from 'components/common/Layout'
import LanguageLogo from 'components/LanguageLogo';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { BsArrowUpRight } from 'react-icons/bs';

const workProjects = [
  {
    title: "$FXD Token Smart Contract",
    description: "Protocolo de gobernanza descentralizada basado en Smart Contracts. Implementa mecanismos de Timelock y seguridad Multi-signature para la gestión de tesorería y parámetros del ecosistema.",
    image: "fxd_token.webp",
    link: "https://github.com/Foxtrot-Command/fxd-contract",
    technologies: ["solidity", "typescript", "chai", "waffle"]
  },
  {
    title: "Vesting Platform",
    description: "Ecosistema de distribución de activos programable. Permite a los inversores gestionar desbloqueos de tokens calculados en tiempo real on-chain, optimizando la transparencia y la integridad de la emisión.",
    image: "ico_platform.webp",
    link: "https://github.com/Foxtrot-Command/private-web",
    technologies: ["nextjs", "reactjs", "typescript"]
  },
];

const sideProjects = [
  {
    title: "AvatarLabs",
    description: "Plataforma SaaS para la gestión de perfiles digitales dinámicos. Arquitectura de alto rendimiento con integración de bases de datos relacionales y capas de caché distribuida.",
    image: "avatarlabs.webp",
    link: "https://avatarlabs.app",
    technologies: ["reactjs", "typescript", "postgresql", "redis"]
  },
  {
    title: "CGrabber",
    description: "Motor de automatización para marketing de afiliados en Telegram. Algoritmos de rastreo y filtrado inteligente con integración de pasarelas de pago y análisis de conversión.",
    image: "cgrabber.webp",
    link: "https://cgrabber.com",
    technologies: ["php", "stripe", "regex"]
  },
  {
    title: "Smart Contract Boilerplate",
    description: "Framework de despliegue rápido para entornos Web3. Arquitectura optimizada con suites de testeo integradas para acelerar el ciclo de vida del desarrollo de contratos inteligentes.",
    image: "smart_contract_boilerplate.webp",
    link: "https://github.com/michyaraque/smart-contract-boilerplate",
    technologies: ["typescript", "solidity", "hardhat", "chai", "waffle"]
  },
  {
    title: "Simple Telegram Bot",
    description: "Entorno de desarrollo fluido para micro-servicios en Telegram. Arquitectura orientada a objetos basada en el patrón 'Fluent Interface' para un desarrollo ágil y escalable.",
    image: "simple_telegram_bot.webp",
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
  index: number
}

const ProjectCard = <T,>({
  image,
  title,
  description,
  technologies,
  link,
  index
}: TProjectCard<T>) => {
  return (
    <div className="group relative fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
      {/* Hard Shadow */}
      <div className="absolute inset-0 bg-brand-primary translate-y-3 translate-x-3 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <article className="h-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 flex flex-col transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden">
        <div className="h-48 w-full relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b-2 border-zinc-200 dark:border-zinc-800">
          <div
            className='w-full h-full bg-center bg-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out'
            style={{ backgroundImage: `url('${`/images/projects/${image}`}')` }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
             {technologies.map((language: T, i: number) => (
                <div key={i} className="bg-white/90 dark:bg-zinc-900/90 p-1.5 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                   <LanguageLogo language={language as unknown as string} className="w-4 h-4" />
                </div>
              ))}
          </div>
        </div>

        <div className="p-8 flex flex-col grow gap-4">
          <div className="flex flex-col gap-1">
             <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest">Build // {String(index+1).padStart(2, '0')}</span>
             <h3 className="font-display text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white group-hover:text-brand-primary transition-colors">
               {title}
             </h3>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              aria-label={`Examine output for ${title} (opens in new tab)`}
              className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-all focus:ring-2 focus:ring-brand-primary outline-hidden"
            >
              Examine Output <BsArrowUpRight aria-hidden="true" />
            </Link>

            <div className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
               {link.includes('github') ? <FaGithub size={20} /> : <TbWorld size={20} />}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

const Projects = () => {
  return (
    <Wrapper
      prose={false}
      meta={
        <Metadata
          title="Proyectos"
          description="Explora mis despliegues, contratos inteligentes y herramientas open-source."
        />
      }
    >
      <div className="py-12 flex flex-col gap-24">
        {/* Header */}
        <section className="flex flex-col gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-xs font-bold">sys.deployment // Overview</p>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
            Projects<span className="text-brand-primary underline decoration-8">.</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg font-mono uppercase tracking-tight">
            Curated list of production environments, decentralized applications, and experimental nodes.
          </p>
        </section>

        {/* Professional Work */}
        <section className="flex flex-col gap-12">
           <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
                Industrial Output
              </h2>
              <div className="h-[2px] w-full bg-zinc-100 dark:bg-zinc-900 mt-4 relative">
                 <div className="absolute left-0 top-0 h-full w-24 bg-brand-primary"></div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {workProjects.map((item, index: number) => (
              <ProjectCard
                key={index}
                index={index}
                image={item.image}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                link={item.link}
              />
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section className="flex flex-col gap-12">
           <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
                Fragmental Research
              </h2>
              <div className="h-[2px] w-full bg-zinc-100 dark:bg-zinc-900 mt-4 relative">
                 <div className="absolute left-0 top-0 h-full w-24 bg-zinc-400 dark:bg-zinc-600"></div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sideProjects.map((item, index: number) => (
              <ProjectCard
                key={index}
                index={index + workProjects.length}
                image={item.image}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                link={item.link}
              />
            ))}
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default Projects
