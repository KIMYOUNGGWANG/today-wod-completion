import {format} from 'date-fns';
import React, {createContext, useRef, useState} from 'react';
import {Log} from '../types/LogType';

const LogContext = createContext({});

export const LogContextProvicer = ({children}: {children: React.ReactNode}) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const id = useRef(0);
  const onCreate = ({title, body, wodType, wodLevel, date}: Log) => {
    setLogs(prev => {
      const newLog = {title, body, date, wodType, wodLevel, id: id.current++};
      return [...prev, newLog];
    });
  };
  const onModify = modified => {
    const nextLog = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLog);
  };

  return (
    <LogContext.Provider
      value={{logs, onCreate, selectedDate, setSelectedDate, onModify}}>
      {children}
    </LogContext.Provider>
  );
};
export default LogContext;
