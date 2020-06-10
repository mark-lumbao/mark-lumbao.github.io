import React, { useEffect, useState } from 'react';
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

  return (
    <main className="flex items-center container mx-auto flex-1 md:px-2">
      <Terminal className="terminal h-full w-full overflow-y-scroll content-start p-5 rounded bg-terminalBlack" data={terminalProp} />
    </main>
  );
};

export default connector(Home);
