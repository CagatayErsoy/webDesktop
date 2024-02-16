'use client'
const helpElement: JSX.Element = (
    <div className="">
      {" "}
      <p className="text-forth">This is the webDesktop limited bash, available commands:</p>
      <div className="flex gap-11">
        <ul>
          <li className="text-def_yellow">ls</li>
          <li className="text-def_yellow">help</li>
          <li className="text-def_yellow">clear</li>
          <li className="text-def_yellow">restart</li>
          <li className="text-def_yellow">about.txt</li>
          <li className="text-def_yellow">contact.mail</li>
          <li className="text-def_yellow">cv.txt</li>
          <li className="text-def_yellow">portfolio.bat</li>
          <li className="text-def_yellow">snake.app</li>
          <li className="text-def_yellow">virus.exe</li>
          <li className="text-def_yellow">openai.ask:</li>
         
        </ul>
        <ul>
        <li className="text-forth">List all available files and applications</li>
        <li className="text-forth">Display this help message</li>
        <li className="text-forth">Clear the terminal screen</li>
        <li className="text-forth">Restart the webDesktop OS</li>
        <li className="text-forth">Open the About page</li>
        <li className="text-forth">Open the Contact page</li>
        <li className="text-forth">Open the CV page</li>
        <li className="text-forth">Open the Portfolio application</li>
        <li className="text-forth">Start the Snake game</li>
        <li className="text-forth">Dangerous app...</li>
        <li className="text-forth">Ask questions to chatgpt</li>

        </ul>
      </div>
    </div>
  );
export default helpElement