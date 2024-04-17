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

    const aboutCommand = () => {
        var terminalParentDiv = document.getElementById("terminal-shell-class");

        var parentDiv = document.createElement("div");
        parentDiv.style.marginTop = "17px";

        var pointOne = document.createElement("div");
        pointOne.style.marginTop = "7px";
        pointOne.innerHTML = "* Tech enthusiast from India, currently working in the USA";

        var pointTwo = document.createElement("div");
        pointTwo.style.marginTop = "7px";
        pointTwo.innerHTML = "* Competitive Programmer and a percussionist (Drums, Cajon)";

        var pointThree = document.createElement("div");
        pointThree.style.marginTop = "7px";
        pointThree.innerHTML = "* 2000+ LeetCode contest rating";

        var pointFour = document.createElement("div");
        pointFour.style.marginTop = "7px";
        pointFour.innerHTML = `* Bachelor's degree in Information and Communication Technology with minors in Computational Science `;
        var pointFourSpan = document.createElement("span");
        pointFourSpan.style.color = "#66C2CD";
        pointFourSpan.innerHTML = "DA-IICT";
        pointFour.appendChild(pointFourSpan);
        pointFour.innerHTML += " (India)";

        var pointFive = document.createElement("div");
        pointFive.style.marginTop = "7px";
        pointFive.innerHTML = `* Master's degree in Computer Science from the `;
        var pointFiveSpan = document.createElement("span");
        pointFiveSpan.style.color = "#66C2CD";
        pointFiveSpan.innerHTML = "University of California, Irvine";
        pointFive.appendChild(pointFiveSpan);
        pointFive.innerHTML += " (USA)";

        var pointSix = document.createElement("div");
        pointSix.style.marginTop = "7px";
        pointSix.innerHTML = "* Web/Compute Stack: C/C++, Java, Python, HTML, CSS, JavaScript, Typescript, React.js, Next.js, Node.js, Express, SQL, MongoDB, GraphQL, HTML, CSS, TailwindCSS, Git";

        var pointSeven = document.createElement("div");
        pointSeven.style.marginTop = "7px";
        pointSeven.style.marginBottom = "17px";
        pointSeven.innerHTML = `* Cloud Stack `;
        var pointSevenSpan = document.createElement("span");
        pointSevenSpan.style.color = "#66C2CD";
        pointSevenSpan.innerHTML = "AWS Certified Cloud Practitioner";
        pointSeven.appendChild(pointSevenSpan);
        pointSeven.innerHTML += ", Azure, GCP";

        parentDiv.appendChild(pointOne);
        parentDiv.appendChild(pointTwo);
        parentDiv.appendChild(pointThree);
        parentDiv.appendChild(pointFour);
        parentDiv.appendChild(pointFive);
        parentDiv.appendChild(pointSix);
        parentDiv.appendChild(pointSeven);

        terminalParentDiv.appendChild(parentDiv);
    };

    const educationCommand = () => {
        var terminalParentDiv = document.getElementById("terminal-shell-class");

        var parentDiv = document.createElement("div");
        parentDiv.style.marginTop = "17px";

        var pointOne = document.createElement("div");
        pointOne.style.marginTop = "7px";
        pointOne.innerHTML = `* Bachelor's degree in Information and Communication Technology with minors in Computational Science `;
        var pointOneSpan = document.createElement("span");
        pointOneSpan.style.color = "#66C2CD";
        pointOneSpan.innerHTML = "DA-IICT";
        pointOne.appendChild(pointOneSpan);
        pointOne.innerHTML += " (India)";

        var pointTwo = document.createElement("div");
        pointTwo.style.marginTop = "7px";
        pointTwo.innerHTML = `* Master's degree in Computer Science from the `;
        var pointTwoSpan = document.createElement("span");
        pointTwoSpan.style.color = "#66C2CD";
        pointTwoSpan.innerHTML = "University of California, Irvine";
        pointTwo.appendChild(pointTwoSpan);
        pointTwo.innerHTML += " (USA)";

        var pointThree = document.createElement("div");
        pointThree.style.marginTop = "7px";
        pointThree.style.marginBottom = "17px";
        pointThree.innerHTML = "* Relevant Coursework: Advanced Programming, Machine Learning, Operating Systems, Algorithms, Parallel Computing, Computer Networks, Database Management, Data Structures, Object-Oriented Programming, High Performance Computing";

        parentDiv.appendChild(pointOne);
        parentDiv.appendChild(pointTwo);
        parentDiv.appendChild(pointThree);

        terminalParentDiv.appendChild(parentDiv);
    }

    const experienceCommand = () => {
        var terminalParentDiv = document.getElementById("terminal-shell-class");

        var parentDiv = document.createElement("div");
        parentDiv.style.marginTop = "17px";

        var pointOne = document.createElement("div");
        pointOne.style.marginTop = "7px";
        pointOne.innerHTML = `* `;
        var pointOneSpan = document.createElement("span");
        pointOneSpan.style.color = "#66C2CD";
        pointOneSpan.innerHTML = "QBurst (Remote, USA)";
        pointOne.appendChild(pointOneSpan);
        pointOne.innerHTML += " - Software Engineer Intern";

        var pointTwo = document.createElement("div");
        pointTwo.style.marginTop = "7px";
        pointTwo.innerHTML = `* `;
        var pointTwoSpan = document.createElement("span");
        pointTwoSpan.style.color = "#66C2CD";
        pointTwoSpan.innerHTML = "Synaptics Incorporated (Irvine, USA)";
        pointTwo.appendChild(pointTwoSpan);
        pointTwo.innerHTML += " - Software Engineer Intern";

        var pointThree = document.createElement("div");
        pointThree.style.marginTop = "7px";
        pointThree.innerHTML = `* `;
        var pointThreeSpan = document.createElement("span");
        pointThreeSpan.style.color = "#66C2CD";
        pointThreeSpan.innerHTML = "HuddleUp (New York, USA)";
        pointThree.appendChild(pointThreeSpan);
        pointThree.innerHTML += " - Software Engineer Intern";

        var pointFour = document.createElement("div");
        pointFour.style.marginTop = "7px";
        pointFour.innerHTML = `* `;
        var pointFourSpan = document.createElement("span");
        pointFourSpan.style.color = "#66C2CD";
        pointFourSpan.innerHTML = "DA-IICT Research Lab (Gandhinagar, India)";
        pointFour.appendChild(pointFourSpan);
        pointFour.innerHTML += " - Computational Finance Researcher";

        var pointFive = document.createElement("div");
        pointFive.style.marginTop = "7px";
        pointFive.innerHTML = `* `;
        var pointFiveSpan = document.createElement("span");
        pointFiveSpan.style.color = "#66C2CD";
        pointFiveSpan.innerHTML = "Institute for Plasma Research (Ahmedabad, India)";
        pointFive.appendChild(pointFiveSpan);
        pointFive.innerHTML += " - High Performance and Parallel Computing Researcher";

        var pointSix = document.createElement("div");
        pointSix.style.marginTop = "7px";
        pointSix.style.marginBottom = "17px";
        pointSix.innerHTML = `* `;
        var pointSixSpan = document.createElement("span");
        pointSixSpan.style.color = "#66C2CD";
        pointSixSpan.innerHTML = "Indian Institute of Technology (IIT) – Bombay (Mumbai, India)";
        pointSix.appendChild(pointSixSpan);
        pointSix.innerHTML += " - Software Engineer Intern";

        parentDiv.appendChild(pointOne);
        parentDiv.appendChild(pointTwo);
        parentDiv.appendChild(pointThree);
        parentDiv.appendChild(pointFour);
        parentDiv.appendChild(pointFive);
        parentDiv.appendChild(pointSix);

        terminalParentDiv.appendChild(parentDiv);
    }

    // @ about div
    // --------------------------------------------------------------------------------------------------
    // <div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>QBurst (Remote, USA)</span> - Software Engineer Intern
    //     </div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>Synaptics Incorporated (Irvine, USA)</span> - Audio Software Engineer Intern
    //     </div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>HuddleUp (New York, USA)</span> - Software Engineer Intern
    //     </div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>DA-IICT Research Lab (Gandhinagar, India)</span> - Computational Finance Researcher

    //     </div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>Institute for Plasma Research (Ahmedabad, India)</span> - High Performance and Parallel Computing Researcher

    //     </div>
    //     <div style={{ marginTop: "7px" }}>
    //         * <span style={{ color: "#66C2CD" }}>Indian Institute of Technology (IIT) – Bombay (Mumbai, India)</span> - Software Engineer Intern
    //     </div>
    // </div>


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

                    case "about":
                        removeCursor(prevSpanDiv);
                        aboutCommand();
                        break;

                    case "education":
                        removeCursor(prevSpanDiv);
                        educationCommand();
                        break;

                    case "experience":
                        removeCursor(prevSpanDiv);
                        experienceCommand();
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
                <div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>QBurst (Remote, USA)</span> - Software Engineer Intern
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>Synaptics Incorporated (Irvine, USA)</span> - Audio Software Engineer Intern
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>HuddleUp (New York, USA)</span> - Software Engineer Intern
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>DA-IICT Research Lab (Gandhinagar, India)</span> - Computational Finance Researcher

                    </div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>Institute for Plasma Research (Ahmedabad, India)</span> - High Performance and Parallel Computing Researcher

                    </div>
                    <div style={{ marginTop: "7px" }}>
                        * <span style={{ color: "#66C2CD" }}>Indian Institute of Technology (IIT) – Bombay (Mumbai, India)</span> - Software Engineer Intern
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
