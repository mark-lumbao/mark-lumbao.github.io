import React, { useEffect, useState, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';
import { fetchEmploymentRequest } from 'store/actions/employment';
import { fetchBioRequest } from 'store/actions/bio';
import { fetchToolsRequest } from 'store/actions/tools';
import Terminal from 'components/shared/terminal';
import { TerminalData } from 'components/shared/terminal/types';
import * as COMMANDS from 'constants/commands';

const mapStateToProps = (state: RootState) => ({
  languages: state.languages,
  tools: state.tools,
  employment: state.employment,
  bio: state.bio,
});

const mapDispatchToProps = {
  fetchLanguagesRequest,
  fetchBioRequest,
  fetchEmploymentRequest,
  fetchToolsRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const Home = (props: PropsFromRedux) => {
  const scrollableContainer = useRef(null);
  const [terminalProp, setTerminalProp] = useState<TerminalData[]>([]);
  useEffect(() => {
    props.fetchLanguagesRequest();
    props.fetchBioRequest();
    props.fetchEmploymentRequest();
    props.fetchToolsRequest();
  }, []); // runs once

  useEffect(() => {
    const {
      languages, bio, employment, tools,
    } = props;
    setTerminalProp([
      {
        command: COMMANDS.SHOW_LANGUAGES,
        result: languages.data.map((item) => item.name),
      },
      {
        command: COMMANDS.SHOW_EMPLOYMENT,
        result: employment.data.map((item) => item.company),
      },
      {
        command: COMMANDS.SHOW_TOOLS,
        result: tools.data.map((item) => item.name),
      },
      {
        command: COMMANDS.SHOW_BIO,
        result: bio.data,
        type: 'object' as const,
      },
    ]);
  }, [props]);

  /**
   * @TODO
   * Revisit terminal and terminal container flexibility styles
   */

  return (
    <main
      ref={scrollableContainer}
      id="terminalContainer"
      className="flex w-full overflow-y-scroll mx-auto bg-terminalBlack flex-1 p-5"
    >
      <Terminal
        className="terminal h-full w-full content-start rounded pb-5"
        data={terminalProp}
        scrollableContainer={scrollableContainer.current}
      />
    </main>
  );
};

export default connector(Home);
