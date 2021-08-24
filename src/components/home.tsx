import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';
import { fetchEmploymentRequest } from 'store/actions/employment';
import { fetchBioRequest } from 'store/actions/bio';
import { fetchToolsRequest } from 'store/actions/tools';
import { fetchProjectsRequest } from 'store/actions/projects';
import Terminal from 'components/shared/terminal';
import { TerminalData } from 'components/shared/terminal/types';
import * as COMMANDS from 'constants/commands';

const Home = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state: RootState) => state);
  const [terminalProp, setTerminalProp] = useState<TerminalData[]>([]);

  useEffect(() => {
    dispatch(fetchLanguagesRequest());
    dispatch(fetchBioRequest());
    dispatch(fetchEmploymentRequest());
    dispatch(fetchToolsRequest());
    dispatch(fetchProjectsRequest());
  }, []);

  useEffect(() => {
    const {
      languages, bio, employment, tools, projects,
    } = contentState;

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
  }, [contentState]);

  return (
    <div id="terminalContainer" className="container main">
      <Terminal data={terminalProp} />
    </div>
  );
};

export default Home;
