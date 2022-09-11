import React from 'react'
import PropTypes from 'prop-types';
import { IconType } from 'react-icons/lib'
import { SiC, SiJavascript, SiLua } from 'react-icons/si'

type ILanguageLogo = {
  language: string,
  badge?: boolean
}

type ILanguageItems = {
  [key: string]: {
    icon: IconType | string,
    color: string,
    tooltip?: string
  }
}

/* It's a type definition for the LanguageItems object. */
const LanguageItems: ILanguageItems = {
  lua: {
    icon: SiLua,
    color: "text-languages-lua",
    tooltip: "Lua Lang"
  },
  c: {
    icon: SiC,
    color: "text-languages-c",
    tooltip: "C Lang"
  },
  javascript: {
    icon: SiJavascript,
    color: "text-languages-javascript",
    tooltip: "JavaScript Lang"
  },
  vyper: {
    icon: "/tech/technologies/vyper.svg",
    color: "text-languages-javascript",
    tooltip: "Vyper Lang"
  },
}

/**
 * `GenerateLogo` is a function that takes in a language and
 * returns a div with a tooltip and an icon
 * @param {ILanguageLogo}  - ILanguageLogo - This is the interface
 * that we created earlier.
 * @returns A div with a tooltip and an icon
 */
const GenerateLogo = ({ language, badge = false, ...props }: ILanguageLogo) => {
  return (
    <span className={`tooltip ${badge ? "badge badge-secondary" : ""}`} data-tip={LanguageItems[language].tooltip}>

      {typeof (LanguageItems[language].icon) !== "string"
        ?
        React.createElement(LanguageItems[language].icon as IconType | any, {
          className: `inline-block ${LanguageItems[language].color}`
        })
        :
        <img src={LanguageItems[language].icon as string} alt={LanguageItems[language].tooltip} className="inline-block w-5 h-5 pointer-events-none" />
      }
    </span>
  )
}

/**
 * It takes in a language prop and returns a GenerateLogo component
 * with the language prop passed in
 * @param {ILanguageLogo}  - ILanguageLogo - This is the interface
 * that we created earlier.
 * @returns A component that is generated based on the language prop.
 */
const LanguageLogo = ({ language, ...props }: ILanguageLogo) => {
  return (
    <GenerateLogo language={language} />
  )
}

LanguageLogo.propTypes = {
  language: PropTypes.oneOf(['lua', 'c', 'javascript'])
};

export default LanguageLogo
