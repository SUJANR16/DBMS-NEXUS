# DBMS NEXUS — Futuristic Interactive Database Learning Platform

**Created & Designed by:** SUJAN R  
**Register No:** URK24CS1187  
**Course:** Database Management Systems (DBMS)  

---

## 🚀 Overview
**DBMS NEXUS** is a web-based educational platform designed to make Database Management System principles engaging, scannable, and interactive. It replaces static notes with dynamic animations, memory anchor decks, interactive query routers, optical slide recognition (*Nexus Lens*), and anti-cheat battle quizzes.

---

## 📚 Curriculum & Module Structure

| Chapter | Syllabus Topics Covered | Interactive Feature |
| :--- | :--- | :--- |
| **01. Fundamentals** | Purpose of DBMS, File system drawbacks, 3-level abstraction (Physical, Logical, View), DDL vs DML, Engine internals (Query Processor, Storage Manager), 2/3-Tier architectures, DBA roles[cite: 4, 10]. | **Query Pipeline Router Mini-Game**[cite: 4, 10] |
| **02. Relational Model & Algebra** | Relational schemas, tuples, atomic domains, Superkeys, Candidate keys, Primary keys, Foreign keys, and 6 pure relational operators ($\sigma, \Pi, \cup, -, \times, \rho$) plus Theta Joins ($\bowtie_\theta$)[cite: 3, 9]. | **Relational Operator Slicer Mini-Game**[cite: 3, 9] |
| **03. SQL Language** | SQL DDL types, `CREATE`/`ALTER`/`DROP`, `SELECT-FROM-WHERE`, `LIKE` string matching, 3-valued null logic, `GROUP BY`, `HAVING`, Aggregates (`AVG`, `COUNT`, `SUM`), Subqueries (`IN`, `EXISTS`, `SOME`, `ALL`), `CASE` updates[cite: 2, 8]. | **SQL Clause Commander Challenge**[cite: 2, 8] |
| **04. Control Center** | Natural Joins, Outer Joins (Left, Right, Full with `ON`/`USING`), Virtual vs Materialized Views, ACID Transactions (`COMMIT`/`ROLLBACK`), Referential Integrity Cascades, `GRANT`/`REVOKE` authorization, Roles[cite: 1, 7]. | **Join Matrix Analyzer Challenge**[cite: 1, 7] |
| **Endgame Arena** | Composite final challenge testing complete syllabus mastery[cite: 7, 8, 9, 10]. | **Grand Database Arena Exam**[cite: 7, 8, 9, 10] |

---

## 🛠️ Key System Features

1. **Progressive Unlock Engine (`js/progress.js`):**
   * Chapters 2 through 4 and the Final Arena remain locked until the student masters earlier modules[cite: 7, 8, 9, 10].
   * Progress and XP are stored locally in `localStorage`.

2. **Nexus Lens — Optical Explainer (`js/vision.js`):**
   * Students can upload screenshots of lecture slides or relational diagrams[cite: 7, 9, 10].
   * The optical module scans the image and outputs an explanation of the underlying concept.

3. **Multi-Gender Voice Engine (`js/voice.js`):**
   * Integrates the Web Speech API to read aloud concepts and memory cards.
   * Switchable between Male and Female pitch profiles.

4. **Anti-Cheat Exam Protocol (`js/ai.js` & `js/quiz.js`):**
   * When an examination arena begins, AI assistance and Nexus Lens are disabled to assess student recall[cite: 7, 8, 9, 10].

5. **Memory Anchor Cards:**
   * High-yield mnemonics per module (e.g., **P-L-V** for abstraction levels[cite: 4, 10], **S-F-W-G-H-O** for SQL clause order[cite: 2, 8]).

---

## 💻 Tech Stack
* **Markup:** HTML5 (Semantic & Accessible)
* **Styling:** CSS3 Custom Properties, Glassmorphism, Dark Neon Cyberpunk Aesthetics
* **Logic:** Vanilla JavaScript (ES6+ Modules, Web Speech API, Canvas 2D Mesh)