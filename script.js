
/* == OBSERVERS == */
const observeINVISIBLE = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.invisible').forEach(element => observeINVISIBLE.observe(element));

const observeSLIDE = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideEnd');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slideStart').forEach(element => observeSLIDE.observe(element));

/* == FOLLOW ME EYES == */
const eyes = document.querySelectorAll(".eye");
const heads = document.querySelectorAll(".owl_head");
const LtuftANIMATE = document.querySelectorAll(".owl_tuftL");
const RtuftANIMATE = document.querySelectorAll(".owl_tuftR");
const headANIMATE = document.querySelectorAll(".owl_head");
const tailANIMATE = document.querySelectorAll(".owl_tail");
let followingCursor = true;

document.addEventListener("mousemove", followMeEyes);

heads.forEach(head => {
    head.addEventListener("mouseover", stopFollowing);
});

heads.forEach(head => {
    head.addEventListener("mouseout", startFollowing);
});

function followMeEyes(event) {
    if (!followingCursor) return;

    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
    });
}

function stopFollowing() {
    followingCursor = false;
    blink()
}

function startFollowing() {
    followingCursor = true;
    eyes.forEach(eye => {
        eye.style.transform = "rotate(0deg)";
    });
    unblink()
}

function blink(event) {
    eyes.forEach(eye => {
        eye.classList.add("hidePupil");
        eye.style.backgroundColor = "var(--owl-darker-color)";
    });
    LtuftANIMATE.forEach(tuft => {
        tuft.classList.remove("leftTuftDEFAULT");
        tuft.classList.add("leftTuftPET");
    })
    RtuftANIMATE.forEach(tuft => {
        tuft.classList.remove("rightTuftDEFAULT");
        tuft.classList.add("rightTuftPET");
    })
    headANIMATE.forEach(head => {
        head.classList.remove("headDEFAULT");
        head.classList.add("headPET");
    })
    tailANIMATE.forEach(tail => {
        tail.classList.remove("tailDEFAULT");
        tail.classList.add("tailPET");
    })
};

function unblink(event) {
    eyes.forEach(eye => {
        eye.classList.remove("hidePupil");
        eye.style.backgroundColor = "var(--owl-eye-color)";
    });
    LtuftANIMATE.forEach(tuft => {
        tuft.classList.remove("leftTuftPET");
        tuft.classList.add("leftTuftDEFAULT");
    })
    RtuftANIMATE.forEach(tuft => {
        tuft.classList.remove("rightTuftPET");
        tuft.classList.add("rightTuftDEFAULT");
    })
    headANIMATE.forEach(head => {
        head.classList.remove("headPET");
        head.classList.add("headDEFAULT");
    })
    tailANIMATE.forEach(tail => {
        tail.classList.remove("tailPET");
        tail.classList.add("tailDEFAULT");
    })
};




/* ==================== WEB PORTFOLIO ==================== */

const webProject = document.querySelector(".PORTFOLIO");

webProject.addEventListener("mouseenter", () => {
    if (!document.querySelector("#webProject")) {
        const a = document.createElement("a");
        a.href = "./webPortfolio.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/webProjectIMG.jpg";
        img.id = "webProject";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        webProject.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

webProject.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#webProject");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ==================================================== */

/* ==================== TO-DO LIST ==================== */

const toDoList = document.querySelector(".TO-DO");

toDoList.addEventListener("mouseenter", () => {
    if (!document.querySelector("#toDoList")) {
        const a = document.createElement("a");
        a.href = "./toDo.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/toDoListIMG.jpg";
        img.id = "toDoList";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        toDoList.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

toDoList.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#toDoList");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ============================================================ */

/* ==================== SOLAR SYSTEM MODEL ==================== */

const solarSystemModel = document.querySelector(".SOLAR");

solarSystemModel.addEventListener("mouseenter", () => {
    if (!document.querySelector("#solarSystemModel")) {
                const a = document.createElement("a");
        a.href = "./solarSystemModel.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/solarSystemModelIMG.jpg";
        img.id = "solarSystemModel";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        solarSystemModel.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

solarSystemModel.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#solarSystemModel");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ====================================================== */

/* ==================== OWL DATABASE ==================== */

const owlDatabase = document.querySelector(".DATABASE");

owlDatabase.addEventListener("mouseenter", () => {
    if (!document.querySelector("#owlDatabase")) {
                const a = document.createElement("a");
        a.href = "./owlDatabase.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/owlDatabaseIMG.jpg";
        img.id = "owlDatabase";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        owlDatabase.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

owlDatabase.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#owlDatabase");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ============================================================ */

/* ==================== PALINDROME CHECKER ==================== */

const palindromeChecker = document.querySelector(".PALINDROME");

palindromeChecker.addEventListener("mouseenter", () => {
    if (!document.querySelector("#palindromeChecker")) {
                const a = document.createElement("a");
        a.href = "./python.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/palindromeCheckerIMG.jpg";
        img.id = "palindromeChecker";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        palindromeChecker.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

palindromeChecker.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#palindromeChecker");
    if (imgElement) {
        imgElement.remove();
    }
});

/* =============================================================== */

/* ==================== ROCK, PAPER, SCISSORS ==================== */

const RPS = document.querySelector(".RPS");

RPS.addEventListener("mouseenter", () => {
    if (!document.querySelector("#RPS")) {
                const a = document.createElement("a");
        a.href = "./python.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/RPSIMG.jpg";
        img.id = "RPS";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        RPS.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

RPS.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#RPS");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ========================================================= */

/* ==================== HIGHER OR LOWER ==================== */

const HoL = document.querySelector(".HOL");

HoL.addEventListener("mouseenter", () => {
    if (!document.querySelector("#HoL")) {
                const a = document.createElement("a");
        a.href = "./python.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/HoLIMG.jpg";
        img.id = "HoL";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        HoL.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

HoL.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#HoL");
    if (imgElement) {
        imgElement.remove();
    }
});

/* ============================================== */

/* ==================== QUIZ ==================== */

const quiz = document.querySelector(".QUIZ");

quiz.addEventListener("mouseenter", () => {
    if (!document.querySelector("#quiz")) {
                const a = document.createElement("a");
        a.href = "./quiz.html"
        a.target = "_blank"
        const img = document.createElement("img");
        img.src = "webProjectIMGs/quizIMG.jpg";
        img.id = "quiz";
        img.style.borderRadius = "25px";
        img.style.border = "3px solid var(--accent-color)"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.zIndex = "-3"
        quiz.appendChild(a)
        a.appendChild(img);
    } else {
        console.log("The element exists. Proceeding with further logic.");
    }
});

quiz.addEventListener("mouseleave", () => {
    const imgElement = document.querySelector("#quiz");
    if (imgElement) {
        imgElement.remove();
    }
});
