import React, { useEffect, useState } from "react";
import "../Styles/Terminal.css";
import File from "../assets/file.png";

function Terminal() {
  const [input, setInput] = useState("");
  const focusInput = () => {
    var el = document.getElementById("span-class");
    el.focus();
    if (el.length > 0) el.setSelectionRange(el.length, el.length);
  };

  useEffect(() => {
    focusInput();
  }, []);

  const removeCursor = (prevSpanDiv) => {
    var prevCursorDiv = document.getElementById("cursor-command-line");
    prevSpanDiv.removeAttribute("id");
    prevSpanDiv.setAttribute("contenteditable", "false");
    prevCursorDiv.remove();
  };

  const clearCommand = () => {
    var parentTerminalDiv = document.getElementById("terminal-shell-class");
    parentTerminalDiv.innerHTML = "";
  };

  const helpCommand = () => {
    var terminalParentDiv = document.getElementById("terminal-shell-class");

    var parentDiv = document.createElement("div");
    parentDiv.classList.add("help-command-class");

    var aboutDiv = document.createElement("div");
    aboutDiv.classList.add("single-command");
    var aboutDivText = document.createElement("div");
    aboutDivText.classList.add("single-command-text");
    aboutDivText.innerText = "about";
    var aboutDivUsage = document.createElement("div");
    aboutDivUsage.classList.add("single-command-desc");
    aboutDivUsage.innerText = "About Me!";
    aboutDiv.appendChild(aboutDivText);
    aboutDiv.appendChild(aboutDivUsage);

    var edDiv = document.createElement("div");
    edDiv.classList.add("single-command");
    var edDivText = document.createElement("div");
    edDivText.classList.add("single-command-text");
    edDivText.innerText = "education";
    var edDivUsage = document.createElement("div");
    edDivUsage.classList.add("single-command-desc");
    edDivUsage.innerText = "My formal education till date";
    edDiv.appendChild(edDivText);
    edDiv.appendChild(edDivUsage);

    var exDiv = document.createElement("div");
    exDiv.classList.add("single-command");
    var exDivText = document.createElement("div");
    exDivText.classList.add("single-command-text");
    exDivText.innerText = "experience";
    var exDivUsage = document.createElement("div");
    exDivUsage.classList.add("single-command-desc");
    exDivUsage.innerText = "Work experience (India, USA)";
    exDiv.appendChild(exDivText);
    exDiv.appendChild(exDivUsage);

    var pubDiv = document.createElement("div");
    pubDiv.classList.add("single-command");
    var pubDivText = document.createElement("div");
    pubDivText.classList.add("single-command-text");
    pubDivText.innerText = "publications";
    var pubDivUsage = document.createElement("div");
    pubDivUsage.classList.add("single-command-desc");
    pubDivUsage.innerText = "Authored publications";
    pubDiv.appendChild(pubDivText);
    pubDiv.appendChild(pubDivUsage);

    var projectDiv = document.createElement("div");
    projectDiv.classList.add("single-command");
    var projectDivText = document.createElement("div");
    projectDivText.classList.add("single-command-text");
    projectDivText.innerText = "projects";
    var projectDivUsage = document.createElement("div");
    projectDivUsage.classList.add("single-command-desc");
    projectDivUsage.innerText = "Take a look at some of my projects";
    projectDiv.appendChild(projectDivText);
    projectDiv.appendChild(projectDivUsage);

    var teachingDiv = document.createElement("div");
    teachingDiv.classList.add("single-command");
    var teachingDivText = document.createElement("div");
    teachingDivText.classList.add("single-command-text");
    teachingDivText.innerText = "teaching";
    var teachingDivUsage = document.createElement("div");
    teachingDivUsage.classList.add("single-command-desc");
    teachingDivUsage.innerText = "My teaching experience (DA-IICT, UCI)";
    teachingDiv.appendChild(teachingDivText);
    teachingDiv.appendChild(teachingDivUsage);

    var clearDiv = document.createElement("div");
    clearDiv.classList.add("single-command");
    var clearDivText = document.createElement("div");
    clearDivText.classList.add("single-command-text");
    clearDivText.innerText = "clear";
    var clearDivUsage = document.createElement("div");
    clearDivUsage.classList.add("single-command-desc");
    clearDivUsage.innerText = "Clear terminal :/";
    clearDiv.appendChild(clearDivText);
    clearDiv.appendChild(clearDivUsage);

    var finalHelpDiv = document.createElement("div");
    finalHelpDiv.classList.add("single-command-usage");
    var finalHelpDivText = document.createElement("div");
    finalHelpDivText.classList.add("single-command-text");
    finalHelpDivText.innerHTML =
      "Type one of the commands listed above. For eg.";
    var finalHelpSpan = document.createElement("span");
    finalHelpSpan.innerHTML = "&nbsp;publications";
    finalHelpSpan.style.color = "#66C2CD";
    finalHelpDivText.appendChild(finalHelpSpan);
    finalHelpDiv.appendChild(finalHelpDivText);

    parentDiv.appendChild(aboutDiv);
    parentDiv.appendChild(edDiv);
    parentDiv.appendChild(exDiv);
    parentDiv.appendChild(pubDiv);
    parentDiv.appendChild(projectDiv);
    parentDiv.appendChild(teachingDiv);
    parentDiv.appendChild(clearDiv);
    parentDiv.appendChild(finalHelpDiv);

    terminalParentDiv.appendChild(parentDiv);
  };

  const invalidCommand = () => {
    var terminalParentDiv = document.getElementById("terminal-shell-class");

    var invalidCmdDiv = document.createElement("div");
    var invalidCmdSpan = document.createElement("span");
    invalidCmdSpan.style.color = "#66C2CD";
    invalidCmdSpan.innerHTML = "help";
    invalidCmdDiv.innerHTML = "zsh: command not found. Type&nbsp;";
    invalidCmdDiv.appendChild(invalidCmdSpan);
    invalidCmdDiv.innerHTML += "&nbsp;to list all commands";

    terminalParentDiv.appendChild(invalidCmdDiv);
  };

  // @ about div
  // --------------------------------------------------------------------------------------------------
  // <div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Tech enthusiast from India, currently working in the USA
  //   </div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Competitive Programmer and a percussionist (Drums, Cajon)
  //   </div>
  //   <div style={{ marginTop: "7px" }}>* 2000+ LeetCode contest rating</div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Bachelor's degree in Information and Communication Technology with
  //     minors in Computationl Science{" "}
  //     <span style={{ color: "#66C2CD" }}>DA-IICT</span> (India)
  //   </div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Master's degree in Computer Science from the{" "}
  //     <span style={{ color: "#66C2CD" }}>University of California, Irvine</span>{" "}
  //     (USA)
  //   </div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Web/Compute Stack: C/C++, Java, Python, HTML, CSS, JavaScript,
  //     Typescript, React.js, Next.js, Node.js, Express, SQL, MongoDB, GraphQL,
  //     HTML, CSS, TailwindCSS, Git
  //   </div>
  //   <div style={{ marginTop: "7px" }}>
  //     * Cloud Stack:{" "}
  //     <span style={{ color: "#66C2CD" }}>AWS Certified Cloud Practitioner</span>
  //     , Azure, GCP
  //   </div>
  // </div>

  const aboutCommand = () => {
    var terminalParentDiv = document.getElementById("terminal-shell-class");
  };

  const handleEnter = (event) => {
    if (event.keyCode == 13 || event.which == 13) {
      if (document.getElementById("input-command") != "undefined") {
        document
          .getElementById("span-class")
          .setAttribute("contenteditable", "false");
        var prevSpanDiv = document.getElementById("span-class");
        prevSpanDiv.innerText = prevSpanDiv.innerText.trim();

        switch (prevSpanDiv.innerText) {
          case "":
            removeCursor(prevSpanDiv);
            break;

          case "clear":
            clearCommand();
            break;

          case "help":
            removeCursor(prevSpanDiv);
            helpCommand();
            break;

          default:
            removeCursor(prevSpanDiv);
            invalidCommand();
        }
      }
      var inputDiv = document.createElement("div");
      inputDiv.classList.add("input-command");
      var prefixCmdDiv = document.createElement("div");
      prefixCmdDiv.classList.add("prefix-command-line");
      prefixCmdDiv.innerHTML = "dhruvil@Dhruvils-Mac ~ % ";
      var spanDiv = document.createElement("span");
      spanDiv.addEventListener("keyup", handleEnter);
      spanDiv.setAttribute("contenteditable", "true");
      spanDiv.setAttribute("id", "span-class");
      spanDiv.classList.add("span-class");
      spanDiv.id = "span-class";
      var parentDiv = document.getElementById("terminal-shell-class");
      var cusrorDiv = document.createElement("div");
      cusrorDiv.classList.add("cursor-command-line");
      cusrorDiv.addEventListener("click", focusInput);
      cusrorDiv.setAttribute("id", "cursor-command-line");
      inputDiv.appendChild(prefixCmdDiv);
      inputDiv.appendChild(spanDiv);
      inputDiv.appendChild(cusrorDiv);
      parentDiv.appendChild(inputDiv);
      focusInput();
    }
  };

  return (
    <div className="terminal-base-class" onClick={focusInput}>
      <div className="terminal-header-class">
        <div className="terminal-icons">
          <div className="red-icon" />
          <div className="yellow-icon" />
          <div className="green-icon" />
        </div>
        <div className="terminal-title">
          <img
            src={File}
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              marginRight: "8px",
            }}
          />
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "15px" }}
          >
            dhruvil — - zsh
          </div>
        </div>
      </div>
      <div className="terminal-shell-class" id="terminal-shell-class">
        <div>Welcome</div>
        <div>Starting the server ...</div>
        <div style={{ color: "#66C2CD" }}>
          # Type 'help' to list all commands
        </div>
        <div className="input-command" id="input-command">
          <div className="prefix-command-line" style={{ marginRight: "5px" }}>
            dhruvil@Dhruvils-Mac ~ %{" "}
          </div>
          <span
            onKeyUp={handleEnter}
            contenteditable="true"
            className="span-class"
            id="span-class"
          ></span>
          <div
            onClick={focusInput}
            id="cursor-command-line"
            className="cursor-command-line"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
