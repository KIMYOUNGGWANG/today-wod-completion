import React, {createContext, useState} from 'react';
import {Log} from '../types/LogType';

const LogContext = createContext({});

export const LogContextProvicer = ({children}: {children: React.ReactNode}) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const onCreate = ({title, body, date}: Log) => {};
  return <LogContext.Provider value={{}}>{children}</LogContext.Provider>;
};
export default LogContext;
