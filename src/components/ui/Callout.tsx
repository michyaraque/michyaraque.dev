import { ReactNode } from 'react';
import { HiExclamationTriangle, HiInformationCircle, HiXCircle, HiLightBulb } from 'react-icons/hi2';

interface CalloutProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
}

const Callout = ({ children, type = 'info', title }: CalloutProps) => {
  const styles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-500',
      text: 'text-blue-800 dark:text-blue-200',
      icon: <HiInformationCircle className="w-5 h-5 text-blue-500" />,
      label: 'INFO'
    },
    warning: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-500',
      text: 'text-amber-800 dark:text-amber-200',
      icon: <HiExclamationTriangle className="w-5 h-5 text-amber-500" />,
      label: 'WARNING'
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-950/30',
      border: 'border-red-500',
      text: 'text-red-800 dark:text-red-200',
      icon: <HiXCircle className="w-5 h-5 text-red-500" />,
      label: 'ERROR'
    },
    success: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-500',
      text: 'text-emerald-800 dark:text-emerald-200',
      icon: <HiLightBulb className="w-5 h-5 text-emerald-500" />,
      label: 'SUCCESS'
    }
  };

  const current = styles[type];

  return (
    <div className={`my-8 border-2 ${current.border} ${current.bg} p-4 relative font-mono overflow-hidden`}>
      {/* Brutalist diagonal pattern on corner could be cool but let's keep it clean */}
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0">{current.icon}</div>
        <div className="flex flex-col gap-1 w-full">
          {(title || current.label) && (
            <span className={`text-[10px] font-black uppercase tracking-widest ${current.text}`}>
              {title || current.label}
            </span>
          )}
          <div className={`text-sm leading-relaxed ${current.text} brightness-110`}>
            {children}
          </div>
        </div>
      </div>

      {/* Brutalist decorative element */}
      <div className={`absolute top-0 right-0 w-8 h-8 opacity-10 flex items-center justify-center`}>
         <div className={`w-1 h-12 rotate-45 ${current.border} border`}></div>
      </div>
    </div>
  );
};

export default Callout;
