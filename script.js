document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const ls = document.getElementById("loadingScreen");
        if (ls) ls.classList.add("hidden");
    }, 600);

    // MOBILE MENU TOGGLE FIX FOR PHONE VIEW
    const menuBtn = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.classList.toggle("active");
        };
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.onclick = () => mobileMenu.classList.remove("active");
        });
    }

    const unlocked = ProgressManager.getUnlocked();
    const scores = ProgressManager.getProgress();
    let totalScore = 0;
    let completed = 0;

    for (let i = 1; i <= 4; i++) {
        const card = document.querySelector(`.chapter-card[data-chapter="${i}"]`);
        const pFill = document.getElementById(`chapterProgress${i}`);
        const pText = document.getElementById(`chapterProgressText${i}`);
        const modalProg = document.getElementById(`modalProgress${i}`);
        const score = scores[i] || 0;

        totalScore += score;
        if (score >= 100) completed++;

        if (unlocked.includes(i)) {
            if (card) {
                card.classList.remove("chapter-locked");
                card.classList.add("chapter-unlocked");
                const btn = card.querySelector(".chapter-button");
                if (btn) {
                    btn.className = "chapter-button";
                    btn.innerHTML = `ENTER CHAPTER <span>→</span>`;
                    // AUTHENTICATION CHECK BEFORE ENTERING CHAPTER
                    btn.onclick = () => {
                        if (!window.currentUser) {
                            alert("Restricted Access: Please log in or sign up to view the contents inside this chapter.");
                            if (typeof openAuthModal === 'function') {
                                openAuthModal();
                            }
                            return;
                        }
                        window.location.href = `chapter${i}.html`;
                    };
                }
                const status = card.querySelector(".chapter-status");
                if (status) {
                    status.className = "chapter-status unlocked-status";
                    status.innerHTML = `<span class="status-dot"></span> AVAILABLE`;
                }
            }
            if (pFill) pFill.style.width = `${score}%`;
            if (pText) pText.innerText = `${score}%`;
            if (modalProg) modalProg.innerText = `${score}%`;
        } else {
            if (card) {
                const btn = card.querySelector(".chapter-button");
                if (btn) {
                    btn.onclick = () => document.getElementById("lockModal").classList.add("active");
                }
            }
            if (modalProg) modalProg.innerText = `🔒`;
        }
    }

    const avg = Math.round(totalScore / 4);
    const mainBar = document.getElementById("overallProgressBar");
    const mainText = document.getElementById("overallProgressText");
    const countText = document.getElementById("chapterCountText");
    if (mainBar) mainBar.style.width = `${avg}%`;
    if (mainText) mainText.innerText = `${avg}%`;
    if (countText) countText.innerText = `${completed} / 4`;

    const finalBtn = document.getElementById("finalArenaButton");
    if (finalBtn) {
        if (completed === 4) {
            finalBtn.className = "primary-button";
            finalBtn.innerHTML = `ENTER FINAL ARENA ⚡`;
            finalBtn.onclick = () => {
                if (!window.currentUser) {
                    alert("Restricted Access: Please log in or sign up to access the Final Arena.");
                    if (typeof openAuthModal === 'function') {
                        openAuthModal();
                    }
                    return;
                }
                window.location.href = "final.html";
            };
        } else {
            finalBtn.onclick = () => showToast("Complete all 4 chapters to unlock the Endgame Arena!");
        }
    }

    document.querySelectorAll("[data-close-modal]").forEach(b => {
        b.onclick = () => document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    });

    const progBtn = document.getElementById("progressButton");
    if (progBtn) progBtn.onclick = () => document.getElementById("progressModal").classList.add("active");

    const setBtn = document.getElementById("settingsButton");
    if (setBtn) setBtn.onclick = () => document.getElementById("settingsModal").classList.add("active");

    const promptBtn = document.getElementById("promptButton");
    if (promptBtn) promptBtn.onclick = () => document.getElementById("promptModal").classList.add("active");

    const resetBtn = document.getElementById("resetProgressButton");
    if (resetBtn) {
        resetBtn.onclick = () => {
            localStorage.clear();
            window.location.reload();
        };
    }

    const copyBtn = document.getElementById("copyPromptButton");
    if (copyBtn) {
        copyBtn.onclick = () => {
            const code = document.querySelector(".prompt-preview code").innerText;
            navigator.clipboard.writeText(code);
            showToast("Specification prompt copied to clipboard!");
        };
    }

    const enterBtn = document.getElementById("enterNexusButton");
    if (enterBtn) enterBtn.onclick = () => document.getElementById("chapters").scrollIntoView({ behavior: "smooth" });
});