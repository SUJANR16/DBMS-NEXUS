const ProgressManager = {
    getUnlocked() {
        return JSON.parse(localStorage.getItem("nexus_unlocked")) || [1];
    },

    getProgress() {
        return JSON.parse(localStorage.getItem("nexus_progress")) || { 1: 0, 2: 0, 3: 0, 4: 0 };
    },

    getXP() {
        return parseInt(localStorage.getItem("nexus_xp")) || 0;
    },

    addXP(pts) {
        const total = this.getXP() + pts;
        localStorage.setItem("nexus_xp", total);
        this.popupXP(`+${pts} XP`);
        return total;
    },

    setChapterScore(chId, score) {
        const prog = this.getProgress();
        if ((prog[chId] || 0) < score) {
            prog[chId] = score;
            localStorage.setItem("nexus_progress", JSON.stringify(prog));
        }

        if (score >= 100) {
            this.unlockChapter(chId + 1);
        }
    },

    unlockChapter(nextId) {
        if (nextId > 4) return;
        const unlocked = this.getUnlocked();
        if (!unlocked.includes(nextId)) {
            unlocked.push(nextId);
            localStorage.setItem("nexus_unlocked", JSON.stringify(unlocked));
            this.playUnlockAnimation(nextId);
        }
    },

    playUnlockAnimation(chId) {
        const modal = document.getElementById("unlockModal");
        if (!modal) return;
        modal.classList.add("active");
        const title = document.getElementById("unlockTitle");
        const fill = document.getElementById("unlockProgress");
        if (title) title.innerText = `DECRYPTING CHAPTER 0${chId}...`;

        let w = 0;
        const intv = setInterval(() => {
            w += 20;
            if (fill) fill.style.width = `${w}%`;
            if (w >= 100) {
                clearInterval(intv);
                modal.classList.add("unlocked");
                if (title) title.innerText = `CHAPTER 0${chId} UNLOCKED!`;
                setTimeout(() => {
                    modal.classList.remove("active");
                    if (window.showToast) showToast(`Chapter 0${chId} is now unlocked!`);
                    window.location.reload();
                }, 900);
            }
        }, 80);
    },

    popupXP(text) {
        const el = document.createElement("div");
        el.className = "xp-popup";
        el.innerText = text;
        el.style.left = `${window.innerWidth / 2 - 40}px`;
        el.style.top = `${window.innerHeight / 2}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1200);
    }
};

window.ProgressManager = ProgressManager;
window.showToast = function(msg) {
    const toast = document.getElementById("toast");
    const txt = document.getElementById("toastMessage");
    if (toast && txt) {
        txt.innerText = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
    }
};