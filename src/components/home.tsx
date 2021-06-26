import { useEffect, useState, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';
import { fetchEmploymentRequest } from 'store/actions/employment';
import { fetchBioRequest } from 'store/actions/bio';
import { fetchToolsRequest } from 'store/actions/tools';
import { fetchProjectsRequest } from 'store/actions/projects';
import Terminal from 'components/shared/terminal';
import { TerminalData } from 'components/shared/terminal/types';
import * as COMMANDS from 'constants/commands';

const mapStateToProps = (state: RootState) => ({
  languages: state.languages,
  tools: state.tools,
  employment: state.employment,
  bio: state.bio,
  projects: state.projects,
});

const mapDispatchToProps = {
  fetchLanguagesRequest,
  fetchBioRequest,
  fetchEmploymentRequest,
  fetchToolsRequest,
  fetchProjectsRequest,
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
    props.fetchProjectsRequest();
  }, []); // runs once

  useEffect(() => {
    const {
      languages, bio, employment, tools, projects,
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
        command: COMMANDS.SHOW_PROJECTS,
        result: projects.data.map((item) => ({ name: item.name, link: item.link })),
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
      className="container flex flex-1 p-5 mx-auto my-5 overflow-y-scroll rounded sm:rounded-none bg-terminalBlack md:m-0"
    >
      <Terminal
        className="content-start w-full h-full pb-5 terminal"
        data={terminalProp}
        scrollableContainer={scrollableContainer.current}
      />
    </main>
  );
};

export default connector(Home);
