'use client'
const helpElement: JSX.Element = (
    <div className="">
      {" "}
      <p className="text-forth">This is the webDesktop limited bash, available commands:</p>
      <div className="flex gap-11">
        <ul>
          <li className="text-yellow">ls</li>
          <li className="text-yellow">help</li>
          <li className="text-yellow">clear</li>
          <li className="text-yellow">about.txt</li>
          <li className="text-yellow">contact.mail</li>
          <li className="text-yellow">cv.txt</li>
          <li className="text-yellow">portfolio.bat</li>
          <li className="text-yellow">snake.ap</li>
          <li className="text-yellow">virus.exe</li>
          <li className="text-yellow">virus.exe</li>
        </ul>
        <ul>
        <li className="text-forth">List all available files and applications</li>
        <li className="text-forth">Display this help message</li>
        <li className="text-forth">Clear the terminal screen</li>
        <li className="text-forth">Open the About page</li>
        <li className="text-forth">Open the Contact page</li>
        <li className="text-forth">Open the CV page</li>
        <li className="text-forth">Open the Portfolio application</li>
        <li className="text-forth">Start the Snake game</li>
        <li className="text-forth">Dangerous app...</li>
        </ul>
      </div>
    </div>
  );
export default helpElement