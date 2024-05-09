(async () => {
if(String(window.fetch.call).includes("native")){var rf = window.fetch.call;window.fetch.call = function(){if(arguments[1].includes("s.blooket.com/rc")){console.log("You tried to get caught cheating!");return;}else{return rf.apply(this,arguments);}}}else{console.log("already run");}
      if (console.log("%c Blooket Cheats %c\n\tBy DannyDan0167 on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c\tMobilegui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c\tStar the github repo!%c  https://github.com/DannyDan0167/Blooket-Cheats", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
        for (var e = document.createElement("iframe"), t = (document.body.appendChild(e), window.clearId = window.setInterval(() => {}, 0)); t--;) e.contentWindow.clearInterval.call(window, t);
        e.remove()
    } {
        var e, t = document.createElement("iframe"),
            t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), window.confirm = t.contentWindow.confirm.bind(window), t.remove(), (e, t = {}) => Object.entries(t).forEach(([t, a]) => e.style[t] = a));
        (e = document.createElement("style")).innerHTML = "details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }";
        let a = document.createElement("div");
        [...document.querySelectorAll("#JODMOBILE")].forEach(e => e.remove()), a.id = "JODMOBILE", a.appendChild(e), t(a, {
            width: "400px",
            background: "hsl(0, 0%, 10%)",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
            borderRadius: "10px",
            position: "absolute",
            textAlign: "center",
            fontFamily: "Nunito",
            color: "white",
            overflow: "hidden",
            top: "50px",
            left: "50px"
        });
        var o, r, i = 0,
            s = 0,
            e = (a.onpointerdown = (e = window.event) => {
                e.preventDefault(), i = e.clientX, s = e.clientY, document.onpointerup = () => {
                    document.onpointerup = null, document.onpointermove = null
                }, document.onpointermove = e => {
                    (e = e || window.event).preventDefault(), o = i - e.clientX, r = s - e.clientY, i = e.clientX, s = e.clientY, a.style.top = a.offsetTop - r + "px", a.style.left = a.offsetLeft - o + "px"
                }
            }, document.createElement("div")),
            n = (a.appendChild(e), t(e, {
                width: "100%",
                height: "35px",
                paddingTop: "2px",
                fontSize: "1.5rem",
                textAlign: "center"
            }), e.innerHTML = 'Blooket Cheats <span style="font-size: 0.75rem">v12.18.22</span>', document.createElement("button")),
            n = (e.appendChild(n), t(n, {
                background: "red",
                height: "45px",
                width: "45px",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "1.5rem",
                borderRadius: "10px",
                fontFamily: "Nunito",
                fontWeight: "bolder",
                paddingTop: "10px",
                paddingRight: "15px"
            }), n.innerText = "X", n.onclick = () => {
                $(), a.remove(), removeEventListener("keypress", _)
            }, document.createElement("button"));
        e.appendChild(n), t(n, {
            background: "#444444",
            height: "45px",
            width: "45px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "-10px",
            left: "-10px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            fontFamily: "Nunito",
            fontWeight: "bolder",
            paddingTop: "10px",
            paddingLeft: "15px"
        }), n.innerText = "-", n.onclick = () => l.hidden = !l.hidden;
        let l = document.createElement("div"),
            c = (e = document.createElement("div"), l.appendChild(e), a.appendChild(l), e.innerHTML = `<span id="curPageEl">${v(!0)?"Current gamemode: "+v(!0):"No game detected"}</span><br><span>(Press E to hide)</span><br>`, e.style.display = "block", e.style.margin = "10px", document.body.append(a), t = document.createElement("div"), l.appendChild(t), t.style.fontSize = "0.9rem", t.style.paddingBottom = "5px", {
                global: [{
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: (t.innerHTML = '<span><a target="blank" href="https://discord.gg/jHjGrrdXP6">Discord</a><br/><a target="blank" href="https://github.com/DannyDan0167/Blooket-Cheats/">GitHub - DannyDan0167</a></span>', !1),
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                state: {
                                    question: e,
                                    stage: t,
                                    feedback: a
                                },
                                props: {
                                    client: {
                                        question: o
                                    }
                                }
                            } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            try {
                                "typing" != e.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || o).answers.map((t, a) => (e || o).correctAnswers.includes(t) ? a : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                            } catch {}
                        }, 50))
                    }
                }, {
                    name: "Highlight Answers (Toggle)",
                    description: "Toggles highlight answers on",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: {
                                    state: e,
                                    props: t
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                                (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                            })
                        }, 50))
                    }
                }, {
                    name: "Subtle Highlight Answers (Toggle)",
                    description: "Toggles subtle highlight answers on",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: {
                                    state: e,
                                    props: t
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                                (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                            })
                        }, 50))
                    }
                }, {
              name: "Freeze Leaderboard", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Freezes the leaderboard on the host's screen",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        if (this.enabled) {
            this.enabled = false;
            clearInterval(this.data);
            this.data = null;
        } else {
            this.enabled = true;
            let freezeGame = () => {
                var stateNode = Object.values((function react(r = document.querySelector("#app")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner.stateNode;
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/tat/Freeze`,
                    val: "Frozen"
                });
            };
            this.data = setInterval(freezeGame, 50);
        }
    }
},{ 
                    name: "Percent Auto Answer",
                    description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null;
                        else {
                            this.enabled = !0;
                            let e = parseFloat(prompt("What grade do you want to get from this set? (0-100)"));
                            for (;
                                "number" != typeof e || isNaN(e);) e = parseFloat(prompt("What grade do you want to get from this set? (0-100)\nInvalid Number"));
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            this.data = setInterval(e => {
                                try {
                                    let a = t.state.question || t.props.client.question;
                                    if ("feedback" == t.state.stage || t.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                    if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                        let o = 0,
                                            r = 0;
                                        for (let i in t.corrects) o += t.corrects[i];
                                        for (let s in t.incorrects) r += t.incorrects[s];
                                        r += o;
                                        let n = 0 == r || Math.abs(o / (r + 1) - e) >= Math.abs((o + 1) / (r + 1) - e);
                                        if ("typing" != t.state.question.qType) {
                                            let l = document.querySelectorAll("[class*='answerContainer']");
                                            for (let c = 0; c < l.length; c++) {
                                                let d = a.correctAnswers.includes(a.answers[c]);
                                                if (n && d || !n && !d) return l[c]?.click?.()
                                            }
                                            l[0].click()
                                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(n ? a.answers[0] : Math.random().toString(36).substring(2))
                                    }
                                } catch {}
                            }, 100, (e ?? 100) / 100)
                        }
                    }
                }, {
                    name: "Auto Answer",
                    description: "Click the correct answer for you",
                    run: function() {
                        let {
                            state: {
                                question: e,
                                stage: t,
                                feedback: a
                            },
                            props: {
                                client: {
                                    question: o
                                }
                            }
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        try {
                            "typing" != e.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || o).answers.map((t, a) => (e || o).correctAnswers.includes(t) ? a : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                        } catch {}
                    }
                }, {
                    name: "Highlight Answers",
                    description: "Colors answers to be red or green highlighting the correct ones",
                    run: function() {
                        let {
                            stateNode: {
                                state: e,
                                props: t
                            }
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                            (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                        })
                    }
                }, {
                    name: "Subtle Highlight Answers",
                    description: "Removes the shadow from correct answers",
                    run: function() {
                        let {
                            stateNode: {
                                state: e,
                                props: t
                            }
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                            (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                        })
                    }
                }, {
                    name: "Spam Buy Blooks",
                    description: "Opens a box an amount of times",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let prices = Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                            b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                            return a;
                        }, {});
                        let box = prompt("Which box do you want to open? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                        const cost = prices[box];
                        if (!cost) return alert("I couldn't find that box!");
        
                        let amount = Math.min(Math.floor(stateNode.state.tokens / cost), parseInt(`0${prompt("How many boxes do you want to open?")}`));
                        if (amount == 0) return alert("You do not have enough tokens!");
        
                        let alertBlooks = confirm("Would you like to show blooks as unlocking?");
                        let blooks = {};
                        let now = Date.now();
        
                        for (let i = 0; i < amount; i++) {
                            await stateNode.buyPack(true, box);
        
                            blooks[stateNode.state.unlockedBlook] ||= 0;
                            blooks[stateNode.state.unlockedBlook]++;
        
                            let before = Date.now();
        
                            now += Date.now() - before;
        
                            stateNode.setState({ canOpen: true, currentPack: "", opening: alertBlooks, doneOpening: alertBlooks, openPack: alertBlooks });
                            clearTimeout(stateNode.canOpenTimeout);
                        }
                        await new Promise(r => setTimeout(r));
                        alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                    }
                },
                {
                    name: "Remove Name Limit",
                    description: "Sets the name limit to 120, which is the actual max name length limit",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]').maxLength = 120, alert("Removed name length limit")
                    }
                }, {
                    name: "Remove Random Name",
                    description: "Allows you to put a custom name",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            isRandom: !1,
                            client: {
                                name: ""
                            }
                        }), document.querySelector('[class*="nameInput"]')?.focus?.()
                    }
                }, {
                    name: "Sell Duplicate Blooks",
                    description: "Sell all duplicate blooks leaving you with 1 each",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        if (/dashboard.*\/blooks/.test(window.location.href)) {
                            if (confirm(`Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)`)) {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                let now = Date.now(), results = "";
                                for (const blook in stateNode.state.blookData) if (stateNode.state.blookData[blook] > 1) {
                                    stateNode.setState({ blook, numToSell: stateNode.state.blookData[blook] - 1 });
                                    if (["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                    results += `    ${blook} ${stateNode.state.blookData[blook] - 1}\n`;
                                    await stateNode.sellBlook({ preventDefault: () => { } }, true);
                                }
                                alert(`(${Date.now() - now}ms) Results:\n${results.trim()}`);
                            }
                        } else alert("This can only be ran in the Blooks page.");
                    }
                },
                {
                      name: "Lobbychat",
    description: "A 'chat' with commands to execute",
    run: (function() {
        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner
        }
        var j = 0;
        var rx = false;
        var hi = false;
        document.addEventListener("keydown", function(e) {
            if (e.key === "`") {
                hi = !hi;
                c.style.display = hi ? "block" : "none";
            }
        });

        function parseCmd(t) {
            if (t.charAt(0) === "/") {
                var c = t.split(" ");
                var cm = c[0].replace("/", "");
                c.splice(0, 1);
                return {
                    cmd: cm,
                    args: c
                };
            } else {
                return false;
            }
        }

        function setstate(args) {
            var t = {};
            args.forEach(e => {
                var p = e.split(":");
                if (!Number.isNaN(parseInt(p[1]))) {
                    if (parseInt(p[1]).toString() === p[1]) {
                        p[1] = parseInt(p[1]);
                    }
                }
                t[p[0]] = p[1];
            });
            reactHandler().stateNode.setState(t);
            a("Set Successful!");
        }

        function setv(args) {
            reactHandler().stateNode.props.liveGameController.setVal({
                path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                val: args.slice(1, args.length).join(" ")
            });
        }

        function tsvlog() {
            window.logsv = !window.logsv;
            a("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
        }

        function dumpstate() {
            Object.keys(reactHandler().stateNode.state).map(e => {
                var obj = reactHandler().stateNode.state[e];
                if (obj != null) {
                    if (Array.from(obj) && typeof obj === "object") {
                        obj = "[Array]";
                    }
                    a(e + ":" + obj);
                } else {
                    return "N/A";
                }
            }).join(";");
        }

        function setBlook(b) {
            var blooks = webpackJsonp.push([
                [], {
                    ['1234']: (_, a, b) => {
                        a.webpack = b
                    }
                },
                [
                    ['1234']
                ]
            ]).webpack("MDrD").a;
            b = Object.keys(blooks).find(e => b.toLocaleLowerCase() === e.toLocaleLowerCase());
            if (blooks[b]) {
                a("Setting blook to " + b + "!");
                reactHandler().stateNode.props.liveGameController.setVal({
                    id: reactHandler().stateNode.props.client.hostId,
                    path: "c/" + reactHandler().stateNode.props.client.name,
                    val: {
                        b: b
                    }
                });
                reactHandler().stateNode.props.client.blook = b;
            } else {
                a("No blook with that name was found!");
            }
        }

        function unlockBlook(b) {
            var blooks = webpackJsonp.push([
                [], {
                    ['1234']: (_, a, b) => {
                        a.webpack = b
                    }
                },
                [
                    ['1234']
                ]
            ]).webpack("MDrD").a;
            b = Object.keys(blooks).find(e => b.toLocaleLowerCase() === e.toLocaleLowerCase());
            if (blooks[b]) {
                reactHandler().stateNode.state.unlocks.push(b);
                reactHandler().stateNode.forceUpdate();
            } else {
                a("No blook with that name was found!");
            }
        }

        function list() {
            reactHandler().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                a("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","));
            });
        }

        function flist(p) {
            reactHandler().stateNode.props.liveGameController.getDatabaseVal("c/" + p).then(e => {
                if (e != null) {
                    a("Dump: " + JSON.stringify(e));
                } else {
                    a("Player not found!");
                }
            });
        }

        function sendMessage(e) {
            var t = parseCmd(e);
            if (t) {
                switch (t.cmd) {
                    case "cb":
                        setBlook(t.args.join(" "));
                        break;
                    case "clear":
                        b.innerHTML = "";
                        break;
                    case "dumpstate":
                        dumpstate();
                        break;
                    case "list":
                        list();
                        break;
                    case "tlog":
                        tsvlog();
                        break;
                    case "setval":
                        setv(t.args);
                        break;
                    case "setstate":
                        setstate(t.args);
                        break;
                    case "ahelp":
                        a("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state),setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                        break;
                    case "help":
                        a("Available Commands: help(gives help),ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                        break;
                    case "dump":
                        flist(t.args.join(" "));
                        break;
                    case "unlock":
                        unlockBlook(t.args.join(" "));
                        break;
                    case "code":
                        a("Game Code: " + reactHandler().stateNode.props.client.hostId);
                        break;
                    default:
                        a("Unrecognized chat command!");
                        break;
                }
            } else {
                reactHandler().stateNode.props.liveGameController.setVal({
                    id: reactHandler().stateNode.props.client.hostId,
                    path: "c/" + reactHandler().stateNode.props.client.name + "/msg",
                    val: {
                        i: j,
                        msg: e
                    }
                }), j++;
            }
        }
        const c = document.createElement("div");
        c.className = "chat-box", document.body.appendChild(c);
        const h = document.createElement("div");
        h.className = "chat-header", h.textContent = "Chat", c.appendChild(h);
        const b = document.createElement("div");
        b.className = "chat-body", c.appendChild(b);
        const i = document.createElement("input");

        function a(e) {
            const t = document.createElement("div");
            t.textContent = e, b.appendChild(t)
        }
        i.type = "text", i.className = "chat-input", i.placeholder = "Type a message...", c.appendChild(i), c.style.position = "fixed", c.style.bottom = "20px", c.style.right = "20px", c.style.width = "300px", c.style.backgroundColor = "#fff", c.style.border = "1px solid #ccc", c.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)", h.addEventListener("click", (() => {
            b.classList.toggle("open")
        })), i.addEventListener("keydown", (function(e) {
            13 === e.keyCode && (sendMessage(e.srcElement.value), e.srcElement.value = "")
        }));
        var da = reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

        function handleChat(e, t) {
            if (t != null) {
                if (e.includes("/msg")) {
                    t?.msg && (console.log(t.msg), a(e.split("/")[2] + ": " + t.msg))
                }
            }
        }
        reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
            console.log(e, t, a, n), handleChat(e, t), da(e, t, a, n)
        };
        window.logsv = false;

        function onsv(e) {
            if (window.logsv) {
                a("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ((typeof e.val === 'object') ? JSON.stringify(e.val) : e.val));
            }
        }
        var orgsv = reactHandler().stateNode.props.liveGameController.setVal;
        reactHandler().stateNode.props.liveGameController.setVal = function() {
            onsv.apply(this, arguments);
            orgsv.apply(this, arguments);
        };
        reactHandler().stateNode.props.liveGameController._liveApp.database().ref(`${reactHandler().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {});
        a("Lobbychat successfully loaded!");

        function app() {
            c.style.wordWrap = "break-word";
        }
        app();
    })
},{
    name: "Pin Guesser", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Brute forces combinations for existing pins",
    run: function() {
        var guess = 0;
        var sleep = 0;
        var display = document.querySelector("div[class*='titleText']");

        function reactHandler() {
            return Object.values((function react(r = document.querySelector("body>div")) {
                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
            })())[1].children[0]._owner.stateNode;
        };

        function generateRandomId() {
            return Math.floor(Math.random() * 9000000) + 1000000;
        }

        function checkGameExists() {
            const randomId = generateRandomId();
            fetch(`https://fb.blooket.com/c/firebase/id?id=${randomId}`, {
                    method: 'GET',
                    credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success === true) {
                        console.log("Game found:", randomId);
                        display.innerHTML = "Game Found!";
                        reactHandler().setState({
                            client: {
                                hostId: randomId.toString()
                            }
                        });
                    } else {
                        console.log("No game found for:", randomId);
                        reactHandler().setState({
                            client: {
                                hostId: randomId.toString()
                            }
                        });
                        guess++;
                        display.innerHTML = "Guesses: " + guess;
                        sleep++;
                        if (sleep > 15) {
                            setTimeout(checkGameExists, 1000);
                            sleep = 0;
                        } else {
                            checkGameExists();
                        }
                    }
                })
                .catch(error => {
                    alert("Error:" + error);
                });
        }

        // Call checkGameExists to start the process
        checkGameExists();
    }
                }, {
                      name: "Crash Game", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Crashes the host's game",
    run: (function() {
        var stateNode = Object.values((function react(r = document.querySelector("#app")) {
            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
        })())[1].children[0]._owner.stateNode;
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/b/toString`,
            val: "Crashed"
        });
    })
},{
        name: "Chat", // By Ego menu https://github.com/yeahbread/Ego-Menu-Bookmarklets
    description: "Opens a chatroom",
    run: function() {
        var iframeUrl = 'https://organizations.minnit.chat/420306182754595/c/Lobby?embed&nickname=';
        var windowFeatures = 'width=500,height=500,resizable=yes,scrollbars=yes,status=yes';
        window.open(iframeUrl, '_blank', windowFeatures);
    }
},{
                    name: "Every Answer Correct",
                    description: "Sets every answer to be correct",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.freeQuestions = e.freeQuestions?.map?.(e => ({
                            ...e,
                            correctAnswers: e.answers
                        })), e.questions = e.questions?.map?.(e => ({
                            ...e,
                            correctAnswers: e.answers
                        })), e.props.client.questions = e.props.client.questions.map(e => ({
                            ...e,
                            correctAnswers: e.answers
                        }))
                    }
                }, {
    name: "Flood Game",
    description: "Floods a game with a number of fake accounts",
    run: async function() {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();

        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
        }

        var config = { randomNames: false };
        var firebase = reactHandler().props.liveGameController._liveApp.firebase;

        async function connect(gid, name) {
            const body = await fetch("https://fb.blooket.com/c/firebase/join", {
                body: JSON.stringify({ id: gid, name: name }),
                credentials: "include",
                method: "PUT"
            }).then(e => e.json());

            if (body.success) {
                const liveApp = firebase.initializeApp({
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z",
                    databaseURL: body.fbShardURL
                });
                await liveApp.auth().signInWithCustomToken(body.fbToken);
                const db = liveApp.database();
                await db.ref(`${gid}/c/${name}`).set({ b: "Rainbow Astronaut", bg: "fire" });
                console.log("Bot joined!");
            } else {
                alert("Connect error: " + body.msg);
            }
        }

        async function hack() {
            if (!reactHandler().props.liveGameController._liveApp) {
                alert("You must be in a game for the flooder to work!");
                return;
            }
            var gameid = reactHandler().props.liveGameController._liveGameCode;
            var bn = parseInt(prompt("Enter number of bots to flood with:"));
            if (!bn) {
                alert("You must use a valid number!");
                return;
            }
            if (!config.randomNames) {
                var botname = prompt("Enter name of bots:");
            }
            var name;
            for (var i = 0; i < bn; i++) {
                if (config.randomNames) {
                    name = genRandom(15);
                } else {
                    name = botname + Math.floor(Math.random() * 4000);
                }
                await connect(gameid, name);
            }
        }

        function genRandom(amt) {
            var rs = "";
            for (var i = 0; i < amt; i++) {
                rs += String.fromCharCode(65 + Math.floor(Math.random() * 25));
            }
            return rs;
        }

        hack();
    }
},{
                    name: "Get Daily Rewards",
                    description: "Gets max daily tokens and xp",
                    run: async function() {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (!location.href.includes("play.blooket.com"))(alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                        else {
                            const {
                                t
                            } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({
                                    gameMode: "Factory",
                                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                                }),
                                credentials: "include",
                                method: "POST"
                            }).then(x => x.json());
                            await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({
                                    t
                                }),
                                credentials: "include",
                                method: "POST"
                            });
                            await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, {
                                credentials: "include"
                            });
                            const {
                                name,
                                blook: {
                                    name: blookUsed
                                }
                            } = Object.values((function react(r = document.querySelector("body>div")) {
                                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                            })())[1].children[0]._owner.stateNode.props.user.data;
                            await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({
                                    blookUsed,
                                    t,
                                    name,
                                    cash: Math.floor(Math.random() * 90000000) + 10000000,
                                    correctAnswers: Math.floor(Math.random() * 500) + 500,
                                    upgrades: Math.floor(Math.random() * 300) + 300,
                                    mode: "Time-Solo",
                                    nameUsed: "You",
                                    place: 1,
                                    playersDefeated: 0,
                                }),
                                credentials: "include",
                                method: "PUT"
                            });
                            fetch("https://play.blooket.com/api/users/add-rewards", {
                                    body: JSON.stringify({
                                        t,
                                        name,
                                        addedTokens: 500,
                                        addedXp: 300
                                    }),
                                    credentials: "include",
                                    method: "PUT"
                                }).then(x => x.json())
                                .then(({
                                    dailyReward
                                }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                .catch(() => alert('There was an error when adding rewards.'));
                        }
                    }

                }, {
    name: "Use any Blook",
    description: "Allows you to play as any blook",
    run: (function() {
        (() => {
            let blooks = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];
            let blookData = {};
            blooks.forEach(e => {
                blookData[e] = 1;
            });

            const reactComponent = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;

            reactComponent.setState({
                blookData: blookData,
                unlocks: blooks
            });

            function react() {
                return reactComponent;
            }

            var reactState = react().state;
            if (reactState.user) {
                reactState.user.unlocks = blookData;
                react().setState(reactState);
            }
        })();
    })
},{
        name: "Use any Banner",
    description: "Unlocked all banners",
    run: (function() {
        var iframe = document.createElement("iframe");
        document.head.appendChild(iframe);
        window.alert = iframe.contentWindow.alert.bind(window);
        window.prompt = iframe.contentWindow.prompt.bind(window);
        iframe.remove();

        function reactHandler() {
            return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
        }

        reactHandler().stateNode.props.liveGameController.setVal({
            path: "c/" + reactHandler().stateNode.props.client.name + "/bg",
            val: prompt("Enter banner id here:")
        });
    })
},{
  name: "Bypass Filter",
description: "Bypasses the name filter",
run: function() {
    var text = window.prompt("Enter some text:");
    function bypassFilter(str){var s=str.split("");var t = "";for(var i = 0;i<s.length;i++){t+="\u00AD"+s[i];}return t;}
    function bypass(inputText) {
        var reversedText = bypassFilter(inputText);
        let iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        window.alert = iframe.contentWindow.alert.bind(iframe.contentWindow);
        var textArea = document.createElement('textarea');
        textArea.value = reversedText;
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        alert("Bypassed text copied to clipboard!");
        iframe.remove();
        document.body.removeChild(textArea);
    }

    bypass(text);
}
},{
                    name: "Host Any Gamemode",
                    description: "Change the selected gamemode on the host settings page",
                    run: function(e) {
                        let t = document.createElement("iframe");
                        if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" == location.pathname) {
                            let a = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"],
                                o = prompt(`Which gamemode do you want to switch to? (Case sensitive) ${a.slice(0,a.length-1).join(", ")} or ${a[a.length-1]}`);
                            if (a.includes(o)) {
                                let {
                                    stateNode: r
                                } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }())[1].children[0]._owner;
                                r.setState({
                                    settings: {
                                        type: o
                                    }
                                })
                            } else alert("Gamemode not found, make sure you spelled and capitalized it right.")
                        } else alert("Run this script on the host settings page")
                    }
                }],
                voyage: [{
                    name: "Max Levels",
                    description: "Maxes out all islands and your boat",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.setState({
                            islandLevels: Array(e.state.islandLevels.length).fill(5)
                        }, e.updateBoatLevel)
                    }
                }, {
                    name: "Set Doubloons",
                    description: "Sets Doubloons",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = parseInt(prompt("How many doubloons do you want?")) || 0,
                            {
                                stateNode: a
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        a.setState({
                            doubloons: t
                        }), a.props.liveGameController.setVal({
                            path: `c/${a.props.client.name}/d`,
                            val: t
                        })
                    }
                }, {
                    name: "Start Heist",
                    description: "Starts a heist on someone",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        t.props.liveGameController.getDatabaseVal("c", function(e) {
                            let a = Object.entries(e || {}).reduce((e, [a, o]) => (a != t.props.client.name && e.push({
                                name: a,
                                blook: o.b,
                                doubloons: o.d || 0
                            }), e), []);
                            if (0 === a.length) return t.questionsToAnswer = 1, void t.randomQ();
                            let {
                                name: o,
                                blook: r,
                                doubloons: i
                            } = a.find(e => e.name == prompt("Who would you like to heist? (Defaults to top player if no one found)")) || a.sort((e, t) => t.doubloons - e.doubloons)[0];
                            t.setState({
                                stage: "heist",
                                heistInfo: {
                                    name: o,
                                    blook: r
                                },
                                prizeAmount: Math.max(1e3, i)
                            })
                        })
                    }
                }, {
                    name: "Swap Doubloons",
                    description: "Swaps Doubloons with someone",
                    run: async function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, a = Object.entries(await new Promise(e => t.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != t.props.client.name), o = a.find(e => e[0] == prompt("Who would you like to swap with? (Defaults to top player if no one found)")) || a[0];
                        t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}`,
                            val: {
                                b: t.props.client.blook,
                                d: o[1].d,
                                tat: `${o[0]}:${o[1].d-t.state.doubloons}`
                            }
                        }), t.setState({
                            doubloons: o[1].d
                        })
                    }
                }, {
                    name: "Take Doubloons",
                    description: "Takes Doubloons from someone",
                    run: async function(e) {
                        let t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                        let {
                            stateNode: a
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name), r = o.find(e => e[0] == prompt("Who would you like to take from? (Defaults to top player if no one found)")) || o[0];
                        a.setState({
                            doubloons: a.state.doubloons + r[1].d
                        }), a.props.liveGameController.setVal({
                            path: `c/${a.props.client.name}`,
                            val: {
                                b: a.props.client.blook,
                                d: r[1].d,
                                tat: `${r[0]}:${r[1].d}`
                            }
                        })
                    }
                }],
        brawl: [{
            name: "Double Enemy XP",
            description: "Doubles enemy XP drop value",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.val *= 2
                    }, t.children.entries.forEach(e => e.val *= 2)
                }
            }
        }, {
            name: "Half Enemy Speed",
            description: "Makes enemies move 2x slower",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.speed *= .5
                    }, t.children.entries.forEach(e => e.speed *= .5)
                }
            }
        }, {
            name: "Instant Kill",
            description: "Sets all enemies health to 1",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                        a.apply(this, arguments), this.hp = 1
                    }, t.children.entries.forEach(e => e.hp = 1)
                }
            }
        }, {
            name: "Invincibility",
            description: "Makes you invincible",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) e.collideCallback = () => {}
            }
        }, {
            name: "Magnet",
            description: "Pulls all xp towards you",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                    active: !0
                }, {
                    active: !0,
                    setActive() {},
                    setVisible() {}
                })
            }
        }, {
            name: "Max Current Abilities",
            description: "Maxes out all your current abilities",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                for (var [t, a] of Object.entries(e.state.abilities))
                    for (let o = 0; o < 10 - a; o++) e.game.current.scene.scenes[0].game.events.emit("level up", t, e.state.abilities[t]++);
                e.setState({
                    level: e.game.current.scene.scenes[0].level = [1, 3, 5, 10, 15, 25, 35].sort((t, a) => Math.abs(t - e.state.level) - Math.abs(a - e.state.level))[0] - 1
                })
            }
        }, {
            name: "Next Level",
            description: "Skips to the next level",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    {
                        object1: t,
                        object2: a
                    } = e.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
                a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
            }
        }, {
            name: "Remove Obstacles",
            description: "Removes all rocks and obstacles",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => {
                    try {
                        e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                    } catch {}
                })
            }
        }, {
            name: "Kill Enemies",
            description: "Kills all current enemies",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
            }
        }, {
            name: "Reset Health",
            description: "Resets health and gives invincibility for 3 seconds",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].game.events._events.respawn.fn()
            }
   }, {
    name: "Set XP",
description: "Sets amount of XP",
run: function() {
    var xp = parseFloat(window.prompt("Enter the amount of XP:"));
    var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
    t.setState({
        xp: xp,
        totalXp: xp
    });
    t.xp = xp;
    t.totalXp = xp;
    t.props?.liveGameController.setVal({
        path: "c/".concat(t.props.client.name),
        val: {
            b: t.props.client.blook,
            xp: xp
        }
    });
}
},{
  name: "Set Level",
description: "Sets your level",
run: function() {
    var level = parseInt(window.prompt("Enter your level:"));
    var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
    t.setState({
        level: level
    });
}
                }],
                cafe: [{
                    name: "Max Items",
                    description: "Maxes out items in the shop (Only usable in the shop)",
                    run: function() {
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname) alert("This can only be run in the shop");
                        else {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            t.setState({
                                items: Object.fromEntries(Object.entries(t.state.items).map(e => [e[0], 5]))
                            })
                        }
                    }
                }, {
                    name: "Remove Customers",
                    description: "Skips the current customers (Not usable in the shop)",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.state.customers.forEach((t, a) => Object.keys(t).length && e.removeCustomer(a, !0))
                    }
                }, {
                    name: "Reset Abilities",
                    description: "Resets used abilities in shop (Only usable in the shop)",
                    run: function() {
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname) alert("This can only be run in the shop");
                        else {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            t.setState({
                                abilities: Object.fromEntries(Object.entries(t.state.abilities).map(e => [e[0], 5]))
                            })
                        }
                    }
                }, {
                    name: "Set Cash",
                    description: "Sets cafe cash",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = Number(parseInt(prompt("How much cash would you like?"))),
                            {
                                stateNode: a
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        a.setState({
                            cafeCash: t
                        }), a.props.liveGameController.setVal({
                            path: `c/${a.props.client.name}`,
                            val: {
                                b: a.props.client.blook,
                                ca: t
                            }
                        })
                    }
                }, {
                    name: "Stock Food",
                    description: "Stocks all food to 99 (Not usable in the shop)",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                            foods: e.state.foods.map(e => ({
                                ...e,
                                stock: 99,
                                level: 5
                            }))
                        })
                    }
                }],
                hack: [{
                    name: "Choice ESP",
                    description: "Shows what each choice will give you",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: e
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner, {
                                text: t
                            } = e.state.choices[0], a = document.querySelector("[class^=styles__feedbackContainer___]");
                            if (a.children.length <= 4) {
                                let o = document.createElement("div");
                                o.style.color = "white", o.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", o.style.fontSize = "2em", o.style.display = "flex", o.style.justifyContent = "center", o.style.marginTop = "675px", o.innerText = t, a.append(o)
                            }
                        }, 50))
                    }
                }, {
    name: "Password ESP",
    description: "Highlights the wrong passwords",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        try {
            let passwordESP = this;
            if (passwordESP.enabled) {
                passwordESP.enabled = false;
                clearInterval(passwordESP.data);
                passwordESP.data = null;
            } else {
                passwordESP.enabled = true;
                passwordESP.data = setInterval(() => {
                    let { state: e } = Object.values(function e(t = document.querySelector("#app > div > div")) {
                        return Object.values(t)[1]?.children?.[1]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[1]._owner.stateNode;
                    if ("hack" === e.stage) {
                        Array.from(document.querySelectorAll('[role="button"]._button_mrhfb_157')).forEach(button => {
                            if (button.textContent.trim() !== e.correctPassword.trim()) {
                                button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                button.style.textShadow = "0 0 1px #f33";
                            } else {
                                button.style.outlineColor = "";
                                button.style.backgroundColor = "";
                                button.style.textShadow = "";
                            }
                        });
                    }
                }, 50);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
                }, {
                    name: "Always Triple",
                    description: "Always get triple crypto",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            choices: [{
                                type: "mult",
                                val: 3,
                                rate: .075,
                                blook: "Brainy Bot",
                                text: "Triple Crypto"
                            }]
                        }), 50))
                    }
                }, {
                    name: "Always Hack",
                    description: "Always get hack",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            choices: [{
                                type: "hack",
                                val: 3,
                                rate: .075,
                                blook: "Mega Bot",
                                text: "HACK"
                            }]
                        }), 50))
                    }
                }, {
                  name: "Crash Password", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
    description: "Crashes other players when they attempt to hack you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        var stateNode = Object.values((function react(r = document.querySelector("#app")) {
                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner.stateNode;
        if (this.enabled) {
            this.enabled = false;
            clearInterval(this.data);
            this.data = null;
            stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/p`,
                    val: stateNode.state?.password
                });
        } else {
            this.enabled = true;
            let crashPass = () => {
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/p/toString`,
                    val: "crash"
                });
            };
            this.data = setInterval(crashPass, 25);
        }
    }
},{
    name: "Auto Guess",
    description: "Automatically performs the hack for you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        try {
            let autoHack = this;
            if (autoHack.enabled) {
                autoHack.enabled = false;
                clearInterval(autoHack.data);
                autoHack.data = null;
            } else {
                autoHack.enabled = true;
                autoHack.data = setInterval(() => {
                    let autoPassword = true; // Always true

                    let reactHandler = () => Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;

                    if (getSite() === 'hack' && autoPassword) {
                        let { stage, correctPassword } = reactHandler().stateNode.state;
                        if (stage === 'hack') {
                            Array.from(document.querySelectorAll('div')).filter(x => x.innerHTML === correctPassword)[0].click();
                        }
                    }

                    function getSite() {
                        switch (window.location.pathname.split('/')[2]) {
                            case 'hack': return 'hack';
                            default: return false;
                        }
                    }
                }, 50);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
                }, {
                    name: "Remove Hack",
                    description: "",
                    run: function() {
                        Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner.stateNode.setState({
                            hack: ""
                        })
                    }
                }, {
                    name: "Set Crypto",
                    description: "Sets crypto",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much crypto would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            crypto: e,
                            crypto2: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                p: t.state.password,
                                cr: e
                            }
                        })
                    }
                }, {
                    name: "Set Password",
                    description: "Sets hacking password",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), prompt("What do you want to set your password to?")),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            password: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                p: e,
                                cr: t.state.crypto
                            }
                        })
                    }
                }, {
                  name: "Set Screen Text", // By Cryptodude3 https://github.com/cryptodude3  Check out his YT https://www.youtube.com/@crypto.7562
description: "Makes the whole screen filled with text",
run: function() {
    var text = window.prompt("Enter the text you want to display:");
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    
    var stateNode = Object.values((function react(r = document.querySelector("#app")) {
        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
    })())[1].children[0]._owner.stateNode;
    
    var textArray = [];
    for (let i = 0; i < 999; i++) {
        textArray.push(text);
    }
    
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}/cr`,
        val: `9999999999999999999999999999999999999999999999${textArray.join(" ")}`
    });
}
},{
                    name: "Steal Player's Crypto",
                    description: "Steals all of someone's crypto",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = prompt("Who's crypto would you like to steal?"),
                            a = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        a.props.liveGameController.getDatabaseVal("c", e => {
                            var o, r;
                            e && Object.keys(e).map(e => e.toLowerCase()).includes(t.toLowerCase()) && ([o, {
                                cr: r
                            }] = Object.entries(e).find(([e]) => e.toLowerCase() == t.toLowerCase()), console.log(!!e, e, o, r, a.state), a.setState({
                                crypto: a.state.crypto + r,
                                crypto2: a.state.crypto + r
                            }), a.props.liveGameController.setVal({
                                path: "c/".concat(a.props.client.name),
                                val: {
                                    b: a.props.client.blook,
                                    p: a.state.password,
                                    cr: a.state.crypto + r,
                                    tat: o + ":" + r
                                }
                            }), console.log("done"))
                        })
                    }
                }],
                defense: [{
                    name: "Earthquake",
                    description: "Shuffles around towers",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                            t = (e.setState({
                                eventName: "Earthquake",
                                event: {
                                    short: "e",
                                    color: "#805500",
                                    icon: "fas fa-mountain",
                                    desc: "All of your towers get mixed up",
                                    rate: .02
                                },
                                buyTowerName: "",
                                buyTower: {}
                            }, () => e.eventTimeout = setTimeout(() => e.setState({
                                event: {},
                                eventName: ""
                            }), 6e3)), e.tiles.forEach(e => e.forEach((t, a) => 3 === t && (e[a] = 0))), e.tiles.flatMap((e, t) => e.map((e, a) => 0 === e && {
                                x: a,
                                y: t
                            })).filter(Boolean).sort(() => .5 - Math.random()));
                        e.towers.forEach(a => {
                            var {
                                x: o,
                                y: r
                            } = t.shift();
                            a.move(o, r, e.tileSize), e.tiles[r][o] = 3
                        })
                    }
                }, {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.towers.forEach(e => {
                            e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
                        })
                    }
                }, {
                    name: "Remove Ducks",
                    description: "Removes ducks",
                    run: function() {
                        let {
                            ducks: e,
                            tiles: t
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.forEach(e => {
                            t[e.y][e.x] = 0
                        }), e.length = 0
                    }
                }, {
                    name: "Remove Enemies",
                    description: "Removes all the enemies",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.enemies = e.futureEnemies = []
                    }
                }, {
                    name: "Remove Obstacles",
                    description: "Lets you place towers anywhere",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.tiles = e.tiles.map(e => e.fill(0))
                    }
                }, {
                    name: "Set Damage",
                    description: "Sets damage",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.dmg = Number(parseInt(prompt("How much dmg would you like?")))
                    }
                }, {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            round: Number(parseInt(prompt("What round do you want to set to?")))
                        })
                    }
                }, {
                    name: "Set Tokens",
                    description: "Sets the amount of tokens you have",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            tokens: Number(parseInt(prompt("How many tokens would you like?")))
                        })
                    }
                }],
                defense2: [{
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
                            if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                                for (let t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                        })
                    }
                }, {
                    name: "Kill Enemies",
                    description: "Kills all the enemies",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.state.game.scene.enemyQueue.length = 0, e.state.game.scene.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                    }
                }, {
                    name: "Set Coins",
                    description: "Sets coins",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            coins: Number(parseInt(prompt("How many tokens would you like?")))
                        })
                    }
                }, {
                    name: "Set Health",
                    description: "Sets the amount of health you have",
                    run: function(e) {
                        var t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            health: Number(parseInt(prompt("How much health do you want?")))
                        })
                    }
                }, {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function(e) {
                        var t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            round: Number(parseInt(prompt("What round do you want to set to?")))
                        })
                    }
                }],
                dinos: [{
                    name: "Auto Choose",
                    description: "Automatically choose the best fossil when excavating",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    rand(e, t) {
                        const s = [];
                        while (s.length < t) {
                            const i = Math.random();
                            let r = 0, g = null;
                            for (let o = 0; o < e.length; o++) {
                                r += e[o].rate;
                                if (r >= i) {
                                    g = e[o];
                                    break;
                                }
                            }
                            g && !s.includes(g) && s.push(g)
                        }
                        return s;
                    },
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            const getFossils = () => this.rand([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                            this.data = setInterval(() => {
                                try {
                                    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                    if (stateNode.state.stage === "excavate") {
                                        stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                        let max = 0, index = -1;
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const { type, val } = stateNode.state.choices[i];
                                            const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                            if (value <= max && type != "mult") continue;
                                            max = value, index = i + 1;
                                        }
                                        document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                    }
                                } catch { }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Rock ESP",
                    description: "Shows what is under the rocks",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                        const getExpAscii = (num) => {
                            let res = "";
                            while (num > 0) {
                                res = exps[num % 10] + res;;
                                num = ~~(num / 10);
                            }
                            return res;
                        };
        
                        const shortNum = (value) => {
                            let newValue = value.toString();
                            if (value >= 1000) {
                                const suffixes = ["", "K", "M", "B", "T"];
                                const suffixNum = ~~((digits(value) - 1) / 3);
                                if (suffixNum < suffixes.length) {
                                    let shortValue = "";
                                    for (let precision = 3; precision >= 1; precision--) {
                                        shortValue = parseFloat((suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(precision)).toString();
                                        const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
                                        if (dotLessShortValue.length <= 3) break;
                                    }
                                    if (Number(shortValue) % 1 !== 0) shortValue = Number(shortValue).toFixed(1);
                                    newValue = shortValue + suffixes[suffixNum];
                                } else {
                                    let num = value;
                                    let exp = 0;
                                    while (num >= 100) {
                                        num = Math.floor(num / 10);
                                        exp += 1;
                                    }
                                    newValue = `${num / 10} × 10${getExpAscii(exp + 1)}`;
                                }
                            }
                            return newValue;
                        };
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                    choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                }, () => {
                                    rocks.forEach((element, index) => {
                                        const rock = stateNode.state.choices[index];
                                        if (element.querySelector('div')) element.querySelector('div').remove();
                                        const choice = document.createElement("div");
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Macondo";
                                        choice.style.fontSize = "1em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(25px)";
                                        choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                        element.append(choice);
                                    });
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Set Fossils",
                    description: "Sets the amount of fossils you have",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many fossils would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            fossils: e
                        }), t.props.liveGameController.setVal({
                            path: "c/" + t.props.client.name,
                            val: {
                                b: t.props.client.blook,
                                f: e,
                                ic: t.state.isCheating
                            }
                        })
                    }
                }, {
                    name: "Set Multiplier",
                    description: "Sets fossil multiplier",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("What do you want your multiplier to be?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            fossilMult: e
                        })
                    }
                }, {
                    name: "Stop Cheating",
                    description: "Undoes cheating so that you can't be caught",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.setState({
                            isCheating: !1
                        }), e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/ic`,
                            val: !1
                        })
                    }
                }],
                doom: [{
                    name: "Fill Deck",
                    description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/map") {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|");
                            stateNode.props.tower.cards = 'Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰'.split("|").map(x => {
                                const [blook, c] = x.split(",");
                                return { strength: 20, charisma: 20, wisdom: 20, class: c, blook };
                            });
                            try { stateNode.props.addTowerNode(); } catch { }
                            stateNode.setState({ showDeck: false });
                        } else alert("You need to be on the map to run this cheat!");
                    }
                },
                {
                    name: "Max Cards",
                    description: "Maxes out all the cards in your deck",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).props.tower.cards.forEach(e => {
                            e.strength = 20, e.charisma = 20, e.wisdom = 20
                        }) : alert("You need to be on the map to run this cheat!")
                    }
                }, {
                    name: "Max Health",
                    description: "Fills the player's health",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            myHealth: 100
                        }) : alert("You need to be in battle to run this cheat!")
                    }
                }, {
                    name: "Max Card Stats",
                    description: "Maxes out player's current card (Only works on attribute select page)",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                        "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                            myCard: {
                                ...e.state.myCard,
                                strength: 20,
                                charisma: 20,
                                wisdom: 20
                            }
                        })
                    }
                }, {
                    name: "Min Enemy Stats",
                    description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                        "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                            enemyCard: {
                                ...e.state.enemyCard,
                                strength: 0,
                                charisma: 0,
                                wisdom: 0
                            }
                        })
                    }
                }, {
                    name: "Set Coins",
                    description: "Try's to set amount of tower coins you have",
                    run: function() {
                        var e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.prompt.bind(window), e.remove(), "/tower/battle" == window.location.pathname) {
                            var e = parseInt("0" + alert("How many coins would you like?")),
                                t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            try {
                                t.props.setTowerCoins(e)
                            } catch {}
                        } else alert("You need to be in battle to run this cheat!")
                    }
                }],
                factory: [{
                    name: "Choose Blook",
                    description: "Gives you a blook",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        const blooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }];
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        const blook = blooks.find(function ({ name }) { return name.toLowerCase() == this }, prompt("Enter blook name:").toLowerCase());
                        if (blook) {
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.chooseBlook(blook);
                        }
                        else alert("That is not a valid blook!");
                    }
                },
                {
                    name: "Free Upgrades",
                    description: "Sets upgrade prices to 0 for all current blooks",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState(e => ({
                            ...e,
                            blooks: e.blooks.map(e => ({
                                ...e,
                                price: [0, 0, 0, 0]
                            }))
                        }))
                    }
                }, {
                    name: "Max Blooks",
                    description: "Maxes out all your blooks' levels",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
                    }
                }, {
                    name: "Remove Glitches",
                    description: "Removes all enemy glitches",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.setState({
                            bits: 0,
                            ads: [],
                            hazards: [],
                            color: "",
                            lol: !1,
                            joke: !1,
                            slow: !1,
                            dance: !1,
                            glitch: "",
                            glitcherName: "",
                            glitcherBlook: ""
                        }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
                    }
                }, {
                    name: "Send Glitch",
                    description: "Sends a glitch to everyone else playing",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = {
                                lb: "Lunch Break",
                                as: "Ad Spam",
                                e37: "Error 37",
                                nt: "Night Time",
                                lo: "#LOL",
                                j: "Jokester",
                                sm: "Slow Mo",
                                dp: "Dance Party",
                                v: "Vortex",
                                r: "Reverse",
                                f: "Flip",
                                m: "Micro"
                            },
                            a = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/tat`,
                            val: a
                        }), alert(`Sent a ${t[a]} glitch`)
                    }
                }, {
                    name: "Set All MegaBot",
                    description: "Sets all your blooks to maxed out Mega Bots",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            blooks: Array(10).fill({
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "\uD83E\uDD16",
                                rarity: "Legendary",
                                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                time: [5, 5, 3, 3, 3],
                                price: [7e6, 12e7, 19e8, 35e9],
                                active: !1,
                                level: 4,
                                bonus: 5.5
                            })
                        })
                    }
                }, {
                    name: "Set Cash",
                    description: "Sets amount of cash you have",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much cash would you like?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            cash: e
                        })
                    }
                }],
                fishing: [{
                    name: "Frenzy",
                    description: "Sets everyone to frenzy mode",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.props.liveGameController.setVal({
                            path: "c/" + e.props.client.name,
                            val: {
                                b: e.props.client.blook,
                                w: e.state.weight,
                                f: "Frenzy",
                                s: !0
                            }
                        })
                    }
                }, {
                    name: "Remove Distractions",
                    description: "Removes distractions",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                                party: ""
                            })
                        }, 50))
                    }
                }, {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: "c/" + e.props.client.name,
                            val: {
                                b: e.props.client.blook,
                                w: e.state.weight,
                                f: t,
                                s: !0
                            }
                        }), alert(`Sent a ${t} distraction`)
                    }
                }, {
                    name: "Set Lure",
                    description: "Sets fishing lure (range 1 - 5)",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0)
                        })
                    }
                }, {
                      name: "Set Next Fish",
    description: "Sets the next fish to catch",
    run: function() {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        window.prompt = iframe.contentWindow.prompt.bind(window);
        window.alert = iframe.contentWindow.alert.bind(window);
        iframe.remove();

        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
        }

        var stuff = {
            "Old Boot": {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            Waffle: {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            "Two of Spades": {
                rarity: "Trash",
                minWeight: 1,
                maxWeight: 10,
                tiers: ["F", "D", "C"]
            },
            Jellyfish: {
                rarity: "Easy One",
                minWeight: 10,
                maxWeight: 25,
                tiers: ["D", "C", "B"]
            },
            Clownfish: {
                rarity: "Easy One",
                minWeight: 20,
                maxWeight: 45,
                tiers: ["D", "C", "B"]
            },
            Goldfish: {
                rarity: "Easy One",
                minWeight: 30,
                maxWeight: 65,
                tiers: ["D", "C", "B"]
            },
            Frog: {
                rarity: "Easy One",
                minWeight: 50,
                maxWeight: 100,
                tiers: ["D", "C", "B"]
            },
            "Blizzard Clownfish": {
                rarity: "Great Catch",
                minWeight: 75,
                maxWeight: 125,
                tiers: ["D", "C", "B"]
            },
            Turtle: {
                rarity: "Great Catch",
                minWeight: 100,
                maxWeight: 150,
                tiers: ["D", "C", "B", "A"]
            },
            Cat: {
                rarity: "Great Catch",
                minWeight: 100,
                maxWeight: 200,
                tiers: ["D", "C", "B", "A"]
            },
            "Lovely Frog": {
                rarity: "Great Catch",
                minWeight: 150,
                maxWeight: 350,
                tiers: ["D", "C", "B", "A"]
            },
            "Lucky Frog": {
                rarity: "Great Catch",
                minWeight: 200,
                maxWeight: 400,
                tiers: ["D", "C", "B", "A"]
            },
            "Poison Dart Frog": {
                rarity: "Great Catch",
                minWeight: 250,
                maxWeight: 750,
                tiers: ["D", "C", "B", "A"]
            },
            Seal: {
                rarity: "Rare Find",
                minWeight: 500,
                maxWeight: 1e3,
                tiers: ["D", "C", "B", "A"]
            },
            Walrus: {
                rarity: "Rare Find",
                minWeight: 700,
                maxWeight: 2200,
                tiers: ["D", "C", "B", "A"]
            },
            Fairy: {
                rarity: "Rare Find",
                minWeight: 1500,
                maxWeight: 2500,
                tiers: ["D", "C", "B", "A"]
            },
            Crab: {
                rarity: "Rare Find",
                minWeight: 1e3,
                maxWeight: 3e3,
                tiers: ["D", "C", "B", "A"]
            },
            "Lemon Crab": {
                rarity: "Rare Find",
                minWeight: 2e3,
                maxWeight: 5e3,
                tiers: ["C", "B", "A"]
            },
            Pufferfish: {
                rarity: "Rare Find",
                minWeight: 2e3,
                maxWeight: 4e3,
                tiers: ["D", "C", "B", "A"]
            },
            Blobfish: {
                rarity: "Rare Find",
                minWeight: 3e3,
                maxWeight: 5e3,
                tiers: ["D", "C", "B", "A"]
            },
            "Rainbow Jellyfish": {
                rarity: "Epic Grab",
                minWeight: 7e3,
                maxWeight: 1e4,
                tiers: ["C", "B", "A"]
            },
            Octopus: {
                rarity: "Epic Grab",
                minWeight: 1e4,
                maxWeight: 15e3,
                tiers: ["C", "B", "A"]
            },
            "Pirate Pufferfish": {
                rarity: "Epic Grab",
                minWeight: 12e3,
                maxWeight: 2e4,
                tiers: ["C", "B", "A"]
            },
            "Donut Blobfish": {
                rarity: "Epic Grab",
                minWeight: 13e3,
                maxWeight: 25e3,
                tiers: ["C", "B", "A"]
            },
            "Crimson Octopus": {
                rarity: "Epic Grab",
                minWeight: 15e3,
                maxWeight: 3e4,
                tiers: ["B", "A"]
            },
            Narwhal: {
                rarity: "Catch of the Day",
                minWeight: 25e3,
                maxWeight: 5e4,
                tiers: ["B", "A", "S"]
            },
            "Baby Shark": {
                rarity: "Catch of the Day",
                minWeight: 5e4,
                maxWeight: 1e5,
                tiers: ["B", "A", "S"]
            },
            Megalodon: {
                rarity: "Catch of the Day",
                minWeight: 25e4,
                maxWeight: 5e5,
                tiers: ["B", "A", "S"]
            },
            Alien: {
                rarity: "Angler's Legend",
                minWeight: 5e5,
                maxWeight: 7e5,
                tiers: ["A", "S"]
            },
            "Rainbow Narwhal": {
                rarity: "Angler's Legend",
                minWeight: 75e4,
                maxWeight: 1e6,
                tiers: ["A", "S", "S+"]
            },
            UFO: {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Santa Claus": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Swamp Monster": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Red Astronaut": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Spooky Pumpkin": {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            Dragon: {
                rarity: "Angler's Legend",
                minWeight: 1e6,
                maxWeight: 2e6,
                tiers: ["A", "S", "S+"]
            },
            "Tim the Alien": {
                rarity: "Angler's Legend",
                minWeight: 15e5,
                maxWeight: 25e5,
                tiers: ["A", "S", "S+"]
            }
        };

        var specialFish = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];

        function getFish(fish) {
            function rand(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            return {
                name: fish,
                rarity: stuff[fish].rarity,
                weight: rand(stuff[fish].minWeight, stuff[fish].maxWeight),
                tier: stuff[fish].tiers[Math.floor(Math.random() * stuff[fish].tiers.length)],
                isSpecial: specialFish.includes(fish) && Math.floor(Math.random() * 100) < 8
            };
        }

        if (!window.functionSet) {
            var origAns = reactHandler().stateNode.answerNext;
            reactHandler().stateNode.answerNext = function() {
                if (reactHandler().stateNode.state.hackFish) {
                    reactHandler().stateNode.setState({
                        stage: "caught",
                        isCast: false,
                        fish: getFish(reactHandler().stateNode.state.hackFish),
                        claimReady: false
                    });
                    setTimeout(function() {
                        reactHandler().stateNode.setState({
                            claimReady: true
                        })
                    }, 1600);
                    reactHandler().stateNode.state.hackFish = null;
                } else {
                    origAns.apply(this, arguments);
                }
            }
        }
        window.functionSet = true;

        function setHackFish(val) {
            if (Object.keys(stuff).includes(val)) {
                reactHandler().stateNode.state.hackFish = val;
            } else {
                alert("That fish does not exist!");
                return;
            }
        }
        setHackFish(prompt("What fish would you like to catch next (case sensitive)?"));
    }
},{
                    name: "Set Weight",
                    description: "Sets weight",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much weight would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            weight: e,
                            weight2: e
                        }), t.props.liveGameController.setVal({
                            path: "c/" + t.props.client.name,
                            val: {
                                b: t.props.client.blook,
                                w: e,
                                f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                            }
                        })
                    }
                }],
                flappy: [{
                    name: "Toggle Ghost",
                    description: "Lets you go through the pipes",
                    type: "toggle",
                    enabled: !1,
                    run: function() {
                        this.enabled = !this.enabled, Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(e => e.gameObject.frame.texture.key.startsWith("blook") && (e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1)))
                    }
                }, {
                    name: "Set Score",
                    description: "Sets flappy blook score",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({
                            score: parseFloat("0" + prompt("What do you want to set your score to?"))
                        })
                    }
                }],
                gold: [{
                    name: "Always Triple",
                    description: "Always get triple gold",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e._choosePrize ||= e.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                            e.choosePrize = function(t) {
                                e.state.choices[t] = {
                                    type: "multiply",
                                    val: 3,
                                    text: "Triple Gold!",
                                    blook: "Unicorn"
                                }, e._choosePrize(t)
                            }
                        }, 50))
                    }
                }, {
                    name: "Auto Choose",
                    description: "Automatically picks the option that would give you the most gold",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async () => {
                            try {
                                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                                if ("prize" === e.state.stage) {
                                    var t = Object.entries(await new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(e))) || []).filter(t => t[0] != e.props.client.name).sort((e, t) => t[1].g - e[1].g)[0]?.[1]?.g || 0;
                                    let a = 0;
                                    index = -1;
                                    for (let o = 0; o < e.state.choices.length; o++) {
                                        var {
                                            type: r,
                                            val: i
                                        } = e.state.choices[o];
                                        let s = e.state.gold;
                                        switch (r) {
                                            case "gold":
                                                s = e.state.gold + i || e.state.gold;
                                                break;
                                            case "multiply":
                                            case "divide":
                                                s = Math.round(e.state.gold * i) || e.state.gold;
                                                break;
                                            case "swap":
                                                s = t || e.state.gold;
                                            case "take":
                                                s = e.state.gold + t * i || e.state.gold
                                        }(s || 0) <= a || (a = s, index = o + 1)
                                    }
                                    document.querySelector(`div[class^='styles__choice${index}']`).click()
                                }
                            } catch {}
                        }, 50))
                    }
                }, {
    name: "Chest ESP",
    description: "Shows what each chest will give you",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let chestESP = this;

        if (chestESP.enabled) {
            clearInterval(chestESP.data);
            chestESP.data = null;
            chestESP.enabled = false;
        } else {
            chestESP.enabled = true;
            chestESP.data = setInterval(() => {
                let curPage = getSite();
                if (curPage === 'gold' && chestESP.enabled) {
                    try {
                        if (reactHandler().stateNode.state.stage === 'prize') {
                            let { choices } = reactHandler().stateNode.state;
                            let div = document.querySelector("div[class*='regularBody']").children[1];
                            if (div) {
                                if (!document.querySelectorAll(".chest-esp").length) {
                                    choices.forEach((box, i) => {
                                        textElement = document.createElement('p');
                                        textElement.className = "chest-esp";
                                        textElement.innerText = box.text;
                                        textElement.style = `text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px;`;
                                        try { div.children[i].appendChild(textElement); } catch (e) { console.log(e); }
                                    });
                                } else {
                                    choices.forEach((box, i) => {
                                        if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) {
                                            div.children[i].children[1].innerText = box.text;
                                        }
                                    });
                                }
                            }
                        }
                    } catch (e) { console.log(e); }
                }
            }, 50); // Adjust the interval as needed
        }

        function getSite(capitalize) {
            switch (window.location.pathname.split('/')[2]) {
                case 'gold': return capitalize ? 'Gold Quest' : 'gold';
                default: return false;
            }
        }

        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        }
    }
},{
      name: "Remove Lose 25%-50%",
    description: "Blocks buttons with text 'Lose 25%' and 'Lose 50%'",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let antiLose = this;
        let chestESP = this;

        if (antiLose.enabled || chestESP.enabled) {
            clearInterval(antiLose.data);
            clearInterval(chestESP.data);
            antiLose.data = null;
            chestESP.data = null;
            antiLose.enabled = false;
            chestESP.enabled = false;
        } else {
            antiLose.enabled = true;
            chestESP.enabled = true;
            antiLose.data = setInterval(() => {
                let buttons = document.querySelectorAll('div[role="button"]');
                buttons.forEach(button => {
                    if (button.innerText === "Lose 25%" || button.innerText === "Lose 50%") {
                        button.style.display = "none";
                    }
                });
            }, 50);
            chestESP.data = setInterval(() => {
                let curPage = getSite();
                if (curPage === 'gold' && chestESP.enabled) {
                    try {
                        if (reactHandler().stateNode.state.stage === 'prize') {
                            let { choices } = reactHandler().stateNode.state;
                            let div = document.querySelector("div[class*='regularBody']").children[1];
                            if (div) {
                                if (!document.querySelectorAll(".chest-esp").length) {
                                    choices.forEach((box, i) => {
                                        textElement = document.createElement('p');
                                        textElement.className = "chest-esp";
                                        textElement.innerText = box.text;
                                        textElement.style = `text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;`;
                                        try { div.children[i].appendChild(textElement); } catch (e) { console.log(e); }
                                    });
                                } else {
                                    choices.forEach((box, i) => {
                                        if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) {
                                            div.children[i].children[1].innerText = box.text;
                                        }
                                    });
                                }
                            }
                        }
                    } catch (e) { console.log(e); }
                }
            }, 50); // Adjust the interval as needed
        }

        function getSite(capitalize) {
            switch (window.location.pathname.split('/')[2]) {
                case 'gold': return capitalize ? 'Gold Quest' : 'gold';
                default: return false;
            }
        }

        function reactHandler() {
            return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        }
    }
                }, {
                    name: "Reset Players Gold",
                    description: "Sets a player's gold to 0",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = prompt("Who's gold would you like to reset?"),
                            {
                                stateNode: {
                                    props: a,
                                    state: o
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", e => {
                            e && Object.keys(e).map(e => e.toLowerCase()).includes(t.toLowerCase()) && a.liveGameController.setVal({
                                path: "c/".concat(a.client.name),
                                val: {
                                    b: a.client.blook,
                                    g: o.gold,
                                    tat: `${t}:swap:0`
                                }
                            })
                        })
                    }
                }, {
                    name: "Set Gold",
                    description: "Sets amount of gold",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much gold would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            gold: e,
                            gold2: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                g: e
                            }
                        })
                    }
                }, {
                    name: "Swap Gold",
                    description: "Swaps gold with someone",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.props.liveGameController.getDatabaseVal("c", t => {
                            e.setState({
                                players: t ? Object.entries(t).map(([e, {
                                    b: t,
                                    g: a
                                }]) => ({
                                    name: e,
                                    blook: t,
                                    gold: a || 0
                                })).filter(t => t.name != e.props.client.name).sort(({
                                    gold: e
                                }, {
                                    gold: t
                                }) => t - e) : [],
                                ready: !0,
                                phaseTwo: !0,
                                stage: "prize",
                                choiceObj: {
                                    type: "swap"
                                }
                            })
                        })
                    }
                }, {
                    name: "Reset All Players' Gold",
                    description: "Set's everyone else's gold to 0",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
                        let {
                            props: t,
                            state: a
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode, o = 0;
                        t.liveGameController.getDatabaseVal("c", async e => {
                            if (e)
                                for (let r of Object.keys(e)) t.liveGameController.setVal({
                                    path: "c/".concat(t.client.name),
                                    val: {
                                        b: t.client.blook,
                                        g: a.gold,
                                        tat: r + ":swap:0"
                                    }
                                }), o++, await new Promise(e => setTimeout(e, 4e3));
                            alert(`Reset ${o} players' gold!`)
                        })
                    }
                }],
                kingdom: [{
    name: "Choice ESP", // Made by minesraft2 Remade by DannyDan0167 https://github.com/DannyDan0167
    description: "Shows you what will happen if you say Yes or No",
    type: "toggle",
    enabled: false,
    data: null,
    run: function() {
        let choiceEspElements = {};
        let choiceEsp = this;

        function handleChoiceEsp() {
            if (choiceEsp.enabled) {
               
                choiceEsp.data = setInterval(() => {
                    try {
                        let elements = {
                            materials: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('tree'))),
                            people: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('users') && e.parentElement.className.includes('statContainer'))),
                            happiness: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('grin'))),
                            gold: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('coins')))
                        };

                        let data = reactHandler()?.stateNode?.state?.guest;

                        if (!data) {
                            return;
                        }

                        Object.entries(data.yes).forEach(x => {
                            if (x[0] === 'msg') return;
                            if (!choiceEspElements[`yes-${x[0]}`]) {
                                let element = document.createElement('div');
                                element.className = 'choice-esp';
                                element.style = `
                                    font-size: 24px;
                                    color: rgb(75, 194, 46);
                                    font-weight: bolder;
                                `;
                                elements[x[0]]?.appendChild(element);
                                choiceEspElements[`yes-${x[0]}`] = element;
                            }
                            choiceEspElements[`yes-${x[0]}`].innerText = String(x[1]);
                        });

                        Object.entries(data.no).forEach(x => {
                            if (x[0] === 'msg') return;
                            if (!choiceEspElements[`no-${x[0]}`]) {
                                let element = document.createElement('div');
                                element.className = 'choice-esp';
                                element.style = `
                                    font-size: 24px;
                                    color: darkred;
                                    font-weight: bolder;
                                `;
                                elements[x[0]]?.appendChild(element);
                                choiceEspElements[`no-${x[0]}`] = element;
                            }
                            choiceEspElements[`no-${x[0]}`].innerText = String(x[1]);
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }, 50); 
            } else {

                clearInterval(choiceEsp.data);
                choiceEsp.data = null;

                Object.values(choiceEspElements).forEach(element => {
                    element.parentNode.removeChild(element);
                });
                choiceEspElements = {};
            }
        }


        handleChoiceEsp();

 
        choiceEsp.run = function() {
            choiceEsp.enabled = !choiceEsp.enabled;
            handleChoiceEsp();
        };

        function reactHandler() {
            try {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            } catch (e) {
                console.error(e);
                return null;
            }
        }
    }
                }, {
                    name: "Disable Tax Toucan",
                    description: "Tax evasion",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
                    }
                }, {
                    name: "Max Stats",
                    description: "Sets all resources to the max",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            materials: 100,
                            people: 100,
                            happiness: 100,
                            gold: 100
                        })
                    }
                }, {
                    name: "Set Guests",
                    description: "Sets the amount of guests you've seen",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many guests do you want?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            guestScore: e
                        })
                    }
                }, {
                    name: "Skip Guest",
                    description: "Skips the current guest",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.nextGuest()
                    }
                }],
                racing: [{
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.setState({
                            progress: e.state.goalAmount
                        }, () => {
                            let {
                                question: t
                            } = e.state;
                            try {
                                [...document.querySelectorAll('[class*="answerContainer"]')][t.answers.map((e, a) => t.correctAnswers.includes(e) ? a : null).filter(e => null != e)[0]]?.click?.()
                            } catch {}
                        })
                    }
                }],
                royale: [{
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                        }, 50))
                    }
                }, {
                    name: "Auto Answer",
                    description: "Chooses the correct answer for you",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                    }
                }],
                rush: [{
                    name: "Set Blooks",
                    description: "Sets amount of blooks you or your team has",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many blooks do you want?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            numBlooks: e
                        }), t.isTeam ? t.props.liveGameController.setVal({
                            path: `a/${t.props.client.name}/bs`,
                            val: e
                        }) : t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}/bs`,
                            val: numDefense
                        })
                    }
                }, {
                    name: "Set Defense",
                    description: "Sets amount of defense you or your team has (Max 4)",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))), 4)),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            numDefense: e
                        }), t.isTeam ? t.props.liveGameController.setVal({
                            path: `a/${t.props.client.name}/d`,
                            val: e
                        }) : t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}/d`,
                            val: e
                        })
                    }
                }],
                workshop: [{
                    name: "Remove Distractions",
                    description: "Removes all enemy distractions",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            fog: !1,
                            dusk: !1,
                            wind: !1,
                            plow: !1,
                            blizzard: !1,
                            force: !1,
                            canada: !1,
                            trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                        })
                    }
                }, {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone else playing",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = {
                                c: "Oh Canada",
                                b: "Blizzard",
                                f: "Fog Spell",
                                d: "Dark & Dusk",
                                w: "Howling Wind",
                                g: "Gift Time!",
                                t: "TREES",
                                s: "Snow Plow",
                                fr: "Use The Force"
                            },
                            a = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/tat`,
                            val: a
                        }), alert(`Sent a ${t[a]} distraction`)
                    }
                }, {
                    name: "Set Toys",
                    description: "Sets amount of toys",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), parseInt(prompt("How many toys would you like?"))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            toys: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                t: e
                            }
                        })
                    }
                }, {
                    name: "Set Toys Per Question",
                    description: "Sets amount of toys per question",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            toysPerQ: parseInt(prompt("How many toys per question would you like?"))
                        })
                    }
                }, {
                    name: "Swap Toys",
                    description: "Swaps toys with someone",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.props.liveGameController.getDatabaseVal("c", t => {
                            e.setState({
                                choosingPlayer: !1,
                                players: t ? Object.entries(t).map(([e, {
                                    b: t,
                                    t: a
                                }]) => ({
                                    name: e,
                                    blook: t,
                                    toys: a || 0
                                })).filter(t => t.name != e.props.client.name).sort(({
                                    toys: e
                                }, {
                                    toys: t
                                }) => t - e) : [],
                                phaseTwo: !0,
                                stage: "prize",
                                choiceObj: {
                                    type: "swap"
                                }
                            }, () => setTimeout(() => e.setState({
                                choosingPlayer: !0
                            }), 300))
                        })
                    }
                }]
            });
        var d = document.createElement("details");
        for (let p of (d.innerHTML = '<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>', c.global)) {
            let u = y(p.name);
            u.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", u.onclick = () => {
                try {
                    p.run()
                } finally {
                    u.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                }
            }, d.appendChild(u)
        }
        d.open = !1, d.style.paddingBottom = "10px", e.appendChild(d);
        let m = document.createElement("div");
        e.appendChild(m), console.log(c);
        let h = e => {
            if (e && c[e])
                for (let t of c[e]) {
                    let a = y(t.name);
                    a.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", a.onclick = () => {
                        try {
                            t.run()
                        } finally {
                            a.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                        }
                    }, m.appendChild(a), m.appendChild(document.createElement("br"))
                }
        };
        setTimeout(() => h(v()), 50);
        var $ = function(e) {
            let t = window.location.pathname,
                a = setInterval(() => {
                    window.location.pathname != t && e(t = window.location.pathname)
                }, 50);
            return () => clearInterval(a)
        }(e => {
            var t = v();
            curPageEl.innerText = v(!0) ? "Current gamemode: " + v(!0) : "No game detected", m.innerHTML = "", h(t)
        });

        function y(e) {
            var t = document.createElement("button");
            return t.classList.add("cheat"), t.innerText = e, t
        }

        function v(e) {
            switch (window.location.pathname) {
                case "/play/racing":
                    return e ? "Racing" : "racing";
                case "/play/pirate":
                    return e ? "Pirate's Voyage" : "voyage";
                case "/play/factory":
                    return e ? "Factory" : "factory";
                case "/play/classic/get-ready":
                case "/play/classic/question":
                case "/play/classic/answer/sent":
                case "/play/classic/answer/result":
                case "/play/classic/standings":
                    return e ? "Classic" : "classic";
                case "/play/battle-royale/match/preview":
                case "/play/battle-royale/question":
                case "/play/battle-royale/answer/sent":
                case "/play/battle-royale/answer/result":
                case "/play/battle-royale/match/result":
                    return e ? "Battle Royale" : "royale";
                case "/play/toy":
                    return e ? "Santa's Workshop" : "workshop";
                case "/play/gold":
                    return e ? "Gold Quest" : "gold";
                case "/play/brawl":
                    return e ? "Monster Brawl" : "brawl";
                case "/play/hack":
                    return e ? "Crypto Hack" : "hack";
                case "/play/fishing":
                    return e ? "Fishing Frenzy" : "fishing";
                case "/play/rush":
                    return e ? "Blook Rush" : "rush";
                case "/play/dino":
                    return e ? "Deceptive Dinos" : "dino";
                case "/tower/map":
                case "/tower/battle":
                case "/tower/rest":
                case "/tower/risk":
                case "/tower/shop":
                case "/tower/victory":
                    return e ? "Tower of Doom" : "doom";
                case "/cafe":
                case "/cafe/shop":
                    return e ? "Cafe" : "cafe";
                case "/defense":
                    return e ? "Tower Defense" : "defense";
                case "/play/defense2":
                    return e ? "Tower Defense 2" : "defense2";
                case "/kingdom":
                    return e ? "Crazy Kingdom" : "kingdom";
                default:
                    return !1
            }
        }

        function _(e) {
            "KeyE" == e.code && (a.hidden = !a.hidden)
        }
        addEventListener("keypress", _)
    }
})();










