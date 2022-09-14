import React from "react";
import PropTypes from "prop-types";
import { IconType } from "react-icons/lib";
import { SiC, SiJavascript, SiLua, SiSolidity } from "react-icons/si";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

type ILanguageLogo = {
  language: string;
  badge?: boolean;
  className?: string;
  version?: string;
  useLink?: boolean;
};

type ILanguageItems = {
  [key: string]: {
    icon: IconType | string;
    color: string;
    tooltip?: string;
    link: string;
  };
};

/* It's a type definition for the LanguageItems object. */
const LanguageItems: ILanguageItems = {
  lua: {
    icon: SiLua,
    color: "text-languages-lua",
    tooltip: "Lua Lang",
    link: "https://www.lua.org/",
  },
  c: {
    icon: SiC,
    color: "text-languages-c",
    tooltip: "C Lang",
    link: "https://www.cprogramming.com/",
  },
  javascript: {
    icon: SiJavascript,
    color: "text-languages-javascript",
    tooltip: "JavaScript Lang",
    link: "https://www.javascript.com/",
  },
  vyper: {
    icon: "/tech/technologies/vyper.svg",
    color: "text-languages-javascript",
    tooltip: "Vyper Lang",
    link: "https://vyper.readthedocs.io/en/stable/",
  },
  hardhat: {
    icon: "/tech/technologies/hardhat.svg",
    color: "text-technology-hardhat",
    tooltip: "Hardhat Labs",
    link: "https://hardhat.org",
  },
  chai: {
    icon: "/tech/technologies/chai.svg",
    color: "text-technology-chai",
    tooltip: "BDD/TDD Assertion Library",
    link: "https://www.chaijs.com/",
  },
  waffle: {
    icon: "/tech/technologies/waffle.svg",
    color: "text-technology-chai",
    tooltip: "Waffle Test Technology",
    link: "https://ethereum-waffle.readthedocs.io/",
  },
  solidity: {
    icon: SiSolidity,
    color: "text-language-solidity",
    tooltip: "Solidity Language",
    link: "https://solidity.readthedocs.io/",
  },
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
      className={`${useLink && "flex flex-row mb-1"} ${
        badge ? "badge badge-secondary" : ""
      }`}
    >
      <span data-tip={LanguageItems[language].tooltip} className="tooltip">
        {typeof LanguageItems[language].icon !== "string" ? (
          React.createElement(LanguageItems[language].icon as IconType | any, {
            className: `inline-block ${LanguageItems[language].color} ${className}`,
          })
        ) : (
          <img
            src={LanguageItems[language].icon as string}
            alt={LanguageItems[language].tooltip}
            className={`inline-block w-5 h-5 pointer-events-none  ${className}`}
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
              <GoLinkExternal className="text-base ml-2 inline-block" />
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
