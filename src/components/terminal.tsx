import React, { useEffect } from 'react';

const Terminal: React.FC = () => {
  let focusedInput: any = null;
  useEffect(() => { focusedInput.focus(); }, []);
  return (
    <div className="h-full content-start p-5 rounded bg-terminalGray">
      <form className="flex flex-row">
        <span className="text-yellow">$ &nbsp;</span>
        <input
          className="flex-1 outline-none text-white bg-terminalGray"
          type="text"
          spellCheck={false}
          ref={(input) => { focusedInput = input; }}
        />
      </form>
    </div>
  );
};

export default Terminal;
