/* =========================================================
   DBMS NEXUS — AUTHENTICATION & CLOUD PROGRESS TRACKER
========================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAy-3Xd5qTwtZKupFjjkzrquzWb3bMXqk",
  authDomain: "dbms-nexus.firebaseapp.com",
  projectId: "dbms-nexus",
  storageBucket: "dbms-nexus.firebasestorage.app",
  messagingSenderId: "305987976340",
  appId: "1:305987976340:web:d69d12dd17499bb0d18881",
  measurementId: "G-XQGCZ1WVEY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ➔ EXPOSE DB GLOBALLY FOR LIVE ANNOUNCEMENTS & ADMIN SYNC
window.db = db;

window.currentUser = null;

onAuthStateChanged(auth, async (user) => {
    const authBtn = document.getElementById("navAuthBtn");
    const userDisplay = document.getElementById("navUserDisplay");

    if (user) {
        window.currentUser = user;
        if (authBtn) authBtn.innerText = "LOGOUT";
        if (userDisplay) {
            userDisplay.innerText = user.email.split("@")[0].toUpperCase();
            userDisplay.style.display = "inline-block";
        }
        await loadCloudUserData(user.uid);
    } else {
        window.currentUser = null;
        if (authBtn) authBtn.innerText = "LOGIN / SIGNUP";
        if (userDisplay) userDisplay.style.display = "none";
    }
});

window.handleSignup = async function(email, password, fullName) {
    try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "students", cred.user.uid);
        
        await setDoc(userRef, {
            uid: cred.user.uid,
            email: email,
            name: fullName || email.split("@")[0],
            totalXP: 0,
            completedChapters: [],
            currentChapter: 1,
            scores: { 1: 0, 2: 0, 3: 0, 4: 0 },
            createdAt: serverTimestamp(),
            lastActive: serverTimestamp()
        });

        alert("Account initialized successfully!");
        closeAuthModal();
    } catch (err) {
        alert("Registration Error: " + err.message);
    }
};

window.handleLogin = async function(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Authentication verified!");
        closeAuthModal();
    } catch (err) {
        alert("Login Error: " + err.message);
    }
};

window.handleLogout = async function() {
    await signOut(auth);
    localStorage.removeItem("dbms_nexus_user");
    alert("Logged out successfully.");
};

async function loadCloudUserData(uid) {
    try {
        const userRef = doc(db, "students", uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
            const data = snap.data();
            localStorage.setItem("dbms_nexus_user", JSON.stringify(data));
            if (window.ProgressManager && typeof ProgressManager.syncCloud === 'function') {
                ProgressManager.syncCloud(data);
            }
        }
    } catch (e) {
        console.error("Cloud fetch failed:", e);
    }
}

window.saveProgressToCloud = async function(chapterId, score, xpGained) {
    if (!window.currentUser) return;
    try {
        const userRef = doc(db, "students", window.currentUser.uid);
        await updateDoc(userRef, {
            [`scores.${chapterId}`]: score,
            totalXP: (window.ProgressManager ? ProgressManager.getXP() : 0) + xpGained,
            lastActive: serverTimestamp()
        });
    } catch (err) {
        console.error("Progress upload error:", err);
    }
};

window.openAuthModal = function() {
    if (window.currentUser) {
        handleLogout();
        return;
    }
    const modal = document.getElementById("authModal");
    if (modal) modal.classList.add("active");
};

window.closeAuthManager = function() {
    // keeping helper safe
};

window.closeAuthModal = function() {
    const modal = document.getElementById("authModal");
    if (modal) modal.classList.remove("active");
};