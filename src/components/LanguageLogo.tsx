import React from "react";
import PropTypes from "prop-types";
import { IconType } from "react-icons/lib";
import { SiC, SiJavascript, SiLua, SiPhp, SiReact, SiSolidity, SiTypescript } from "react-icons/si";
import { VscRegex } from "react-icons/vsc";
import {TbBrandNextjs} from 'react-icons/tb';
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { FaCcStripe } from "react-icons/fa";
import tailwind from './../../tailwind.config'

type ILanguageItems = {
  [key: string]: {
    icon: IconType | string;
    color: string;
    tooltip?: string;
    link: string;
  };
};

/* It's a type definition for the LanguageItems object. */

const brands: ILanguageItems = {
  stripe: {
    icon: FaCcStripe,
    color: "technology-stripe",
    tooltip: "Stripe Payments SaaS",
    link: "https://stripe.com/",
  },
  hardhat: {
    icon: "/tech/technologies/hardhat.svg",
    color: "technology-hardhat",
    tooltip: "Hardhat Labs",
    link: "https://hardhat.org",
  },
}

const LanguageItems: ILanguageItems = {
  ...brands,
  lua: {
    icon: SiLua,
    color: "languages-lua",
    tooltip: "Lua Lang",
    link: "https://www.lua.org/",
  },
  c: {
    icon: SiC,
    color: "languages-c",
    tooltip: "C Lang",
    link: "https://www.cprogramming.com/",
  },
  javascript: {
    icon: SiJavascript,
    color: "languages-javascript",
    tooltip: "JavaScript Lang",
    link: "https://www.javascript.com/",
  },
  vyper: {
    icon: "/tech/technologies/vyper.svg",
    color: "languages-vyper",
    tooltip: "Vyper Lang",
    link: "https://vyper.readthedocs.io/en/stable/",
  },
  solidity: {
    icon: SiSolidity,
    color: "languages-solidity",
    tooltip: "Solidity Language",
    link: "https://solidity.readthedocs.io/",
  },
  php: {
    icon: SiPhp,
    color: "languages-php",
    tooltip: "PHP Language",
    link: "https://www.php.net/",
  },
  typescript: {
    icon: SiTypescript,
    color: "languages-typescript",
    tooltip: "Typescript Language",
    link: "https://typescriptlang.org/",
  },
  regex: {
    icon: VscRegex,
    color: "languages-regex",
    tooltip: "Regular Expressions",
    link: "https://en.wikipedia.org/wiki/Regular_expression",
  },

  chai: {
    icon: "/tech/technologies/chai.svg",
    color: "technology-chai",
    tooltip: "BDD/TDD Assertion Library",
    link: "https://www.chaijs.com/",
  },
  waffle: {
    icon: "/tech/technologies/waffle.svg",
    color: "technology-chai",
    tooltip: "Waffle Test Technology",
    link: "https://ethereum-waffle.readthedocs.io/",
  },
  reactjs: {
    icon: SiReact,
    color: "technology-reactjs",
    tooltip: "ReactJS Library",
    link: "https://reactjs.org/",
  },
  nextjs: {
    icon: TbBrandNextjs,
    color: "technology-nextjs",
    tooltip: "Nextjs Framework",
    link: "https://nextjs.org/",
  }

};

/**
 * It takes in a language prop and returns a GenerateLogo component
 * with the language prop passed in
 * @param {ILanguageLogo}  - ILanguageLogo - This is the interface
 * that we created earlier.
 * @returns A component that is generated based on the language prop.
 */
const LanguageLogo = ({
  language,
  badge = false,
  className,
  useLink = false,
  version,
  ...props
}: ILanguageLogo) => {

  return (
    <span
      className={`${useLink ? "flex flex-row mb-1" : ''} ${
        badge ? "badge badge-secondary" : ""
      }`}
    >
      <span data-tip={LanguageItems[language].tooltip} className="tooltip">
        {typeof LanguageItems[language].icon !== "string" ? (
          React.createElement(LanguageItems[language].icon as IconType | any, {
            className: `inline-block ${className ? className : ''}`,
            style: {
              fill: tailwind.theme.extend.colors.technologies[language],
              color: tailwind.theme.extend.colors.technologies[language]
            }
          })
        ) : (
          <img
            src={LanguageItems[language].icon as string}
            alt={LanguageItems[language].tooltip}
            className={`inline-block w-5 h-5 pointer-events-none  ${className ? className : ''}`}
          />
        )}
      </span>
      {useLink && (
        <Link passHref href={LanguageItems[language].link}>
          <a target="_blank">
            <p className="hover:border-b-2 hover:text-gray-500 ml-2 first-letter:uppercase lowecase">
              {language}
              {version !== undefined && (
                <span className="ml-2 text-base">{`[v${version}]`}</span>
              )}
              <GoLinkExternal className="base ml-2 inline-block" />
            </p>
          </a>
        </Link>
      )}
    </span>
  );
};

LanguageLogo.propTypes = {
  language: PropTypes.oneOf(Object.keys(LanguageItems)),
};

export default LanguageLogo;
