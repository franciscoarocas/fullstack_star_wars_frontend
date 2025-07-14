
import Header from "../components/header/header";

import Prompt from "../components/prompt/prompt";

const PromptPage = () => {
  /*
    The PromptPage component renders a prompt interface.
    It uses the Prompt component to display the AI prompt functionality.
  */

  return (
    <div>
      <Header pageTitle="IA Prompt"/>
      <Prompt />
    </div>
  )
};

export default PromptPage;