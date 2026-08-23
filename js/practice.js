/* =========================================================
   DBMS NEXUS — ISOLATED PRACTICE QUIZ ENGINE (ALL TOPICS)
========================================================= */

const PRACTICE_BANK = {
    1: [
        { topic: "Purpose of DBMS", q: "In early file-processing systems, why does updating an address in one file leave records inconsistent across departments?", options: ["File table locks records", "Data redundancy causes duplicate, uncoordinated copies across files", "Physical data independence deletes files", "File size limit exceeded"], correct: 1, explain: "Data redundancy across separate files causes inconsistent states during updates." },
        { topic: "Levels of Abstraction", q: "A developer builds an application displaying instructor names and departments while hiding salary. Which level of abstraction is this?", options: ["Physical Level", "Logical Level", "View Level", "Internal Storage Level"], correct: 2, explain: "The View Level provides security-tailored virtual schemas hiding sensitive columns like salary." },
        { topic: "Instances & Schemas", q: "Which of the following is analogous to the declaration of a variable's type in programming?", options: ["Logical Schema", "Database Instance", "Buffer Pool", "Operating System Thread"], correct: 0, explain: "The Logical Schema defines overall database structure, analogous to type definitions in code." },
        { topic: "Physical Data Independence", q: "Upgrading hard drives to SSDs and restructuring disk indices without modifying SQL queries demonstrates:", options: ["Logical Data Independence", "Physical Data Independence", "View Abstraction Failure", "Turing Completeness"], correct: 1, explain: "Physical Data Independence allows modifying physical disk layouts without altering the logical schema." },
        { topic: "Storage Manager Internals", q: "Which sub-module of the Storage Manager ensures that database updates survive system crashes and maintain consistency?", options: ["Buffer Manager", "File Manager", "Transaction Manager", "DDL Interpreter"], correct: 2, explain: "The Transaction Manager guarantees consistency and ACID durability during power failures or crashes." },
        { topic: "Query Processing", q: "Why does the Query Optimizer generate multiple relational algebra execution plans before evaluating a query?", options: ["To choose the lowest-cost evaluation plan based on data statistics", "To verify user passwords", "To write definitions to the Data Dictionary", "To delete redundant tuples"], correct: 0, explain: "The DML Compiler/Optimizer selects the lowest-cost execution plan based on statistical catalog data." },
        { topic: "Architectures & DBA", q: "Which architecture separates client forms, business application logic on a middle server, and raw data storage?", options: ["Two-Tier Architecture", "Three-Tier Architecture", "Centralized Shared-Memory", "Single-User Desktop"], correct: 1, explain: "Three-Tier architectures position an Application Server between client UIs and database systems." }
    ],
    2: [
        { topic: "Relational Structure", q: "Why are tuples in a relational table considered mathematically unordered?", options: ["Because relations are defined as sets of tuples where physical ordering is irrelevant", "Because disks cannot store sorted records", "Because primary keys forbid sorting", "Because foreign keys randomize rows"], correct: 0, explain: "Relations are mathematical sets; order of tuples has no semantic meaning." },
        { topic: "Atomic Domains", q: "What does the atomic domain rule forbid in relational database tables?", options: ["Non-composite, single-valued entries", "Composite or multi-valued attributes (like set of phone numbers inside a single cell)", "Character strings", "Floating point numbers"], correct: 1, explain: "Domain values must be indivisible units (first normal form requirement)." },
        { topic: "Keys Hierarchy", q: "If attribute set {ID, name} uniquely identifies instructors, but {ID} alone is also sufficient, what is {ID}?", options: ["Superkey only", "Candidate Key (Minimal Superkey)", "Foreign Key", "View Relation"], correct: 1, explain: "A Candidate Key is a minimal superkey containing no redundant attributes." },
        { topic: "Select Operation", q: "What is the result of applying $\\sigma_{\\text{dept\\_name}=\\text{'Physics'}}(\\text{instructor})$ on the university database?", options: ["Only columns ID and name", "All instructor tuples where department is Physics (Einstein and Gold)", "An empty relation", "A Cartesian product of all departments"], correct: 1, explain: "Select filters rows meeting the predicate while keeping all schema attributes." },
        { topic: "Project Operation", q: "When evaluating $\\Pi_{\\text{dept\\_name}}(\\text{instructor})$, why does the output have fewer rows than the original table?", options: ["Null rows are deleted", "Duplicate department names are removed because relations are sets", "An error occurred during projection", "Only the first 5 rows are fetched"], correct: 1, explain: "Projection eliminates duplicate rows to maintain set semantics." },
        { topic: "Cartesian Product", q: "If relation $R$ has schema $(A, B)$ and $S$ has schema $(B, C)$, what are the attribute names in $R \\times S$?", options: ["(A, B, C)", "(R.A, R.B, S.B, S.C)", "(A, C)", "(R.A, S.C)"], correct: 1, explain: "Conflicting attributes are prefixed by relation name to prevent ambiguity." },
        { topic: "Join Operation", q: "What is the relationship between Theta Join and Cartesian Product?", options: ["$r \\bowtie_\\theta s = \\sigma_\\theta(r \\times s)$", "$r \\bowtie_\\theta s = \\Pi_\\theta(r \\times s)$", "$r \\bowtie_\\theta s = r \\cup s$", "$r \\bowtie_\\theta s = r - s$"], correct: 0, explain: "Theta join is defined as row selection over Cartesian product." },
        { topic: "Set Operations", q: "What is required of relations R and S before taking their Union ($R \\cup S$)?", options: ["Same primary key names", "Same arity and compatible attribute domains", "Identical number of tuples", "No NULL values in either table"], correct: 1, explain: "Set operations require union-compatible relations with identical column counts and matching domains." },
        { topic: "Aggregate Functions", q: "Which aggregate expression counts the number of courses offered in the 2018 section schedule?", options: ["$\\mathcal{G}_{\\text{count}(\\text{course\\_id})}(\\sigma_{\\text{year}=2018}(\\text{section}))$", "$\\Pi_{\\text{count}}(\\text{section})$", "$\\sigma_{\\text{count}=2018}(\\text{section})$", "$\\rho_{\\text{count}}(\\text{section})$"], correct: 0, explain: "Aggregates execute after selecting the year 2018 rows." },
        { topic: "Equivalent Queries", q: "Why is $\\sigma_{\\text{dept}=\\text{'Physics'}}(\\text{instructor} \\bowtie \\text{teaches}) \\equiv (\\sigma_{\\text{dept}=\\text{'Physics'}}(\\text{instructor})) \\bowtie \\text{teaches}$?", options: ["Because pushing selections down reduces intermediate join size while yielding the same result", "Because join cannot process conditions", "Because relational algebra is non-deterministic", "Because instructor has fewer columns"], correct: 0, explain: "Selection pushdown reduces intermediate relation sizes without altering final output." }
    ],
    3: [
        { topic: "SQL DDL & Integrity", q: "Which DDL clause ensures that an instructor's salary cannot be negative or zero?", options: ["PRIMARY KEY", "CHECK (salary > 0)", "UNIQUE (salary)", "FOREIGN KEY"], correct: 1, explain: "The CHECK constraint validates predicate conditions on attribute values." },
        { topic: "NULL Logic", q: "What does the SQL predicate condition <code>WHERE salary < null</code> evaluate to?", options: ["true", "false", "unknown", "null"], correct: 2, explain: "Comparisons with null yield the 3-valued Boolean value 'unknown'." },
        { topic: "HAVING vs WHERE", q: "Why must <code>avg(salary) > 50000</code> be placed in the HAVING clause instead of WHERE?", options: ["WHERE executes before rows are grouped; HAVING filters aggregated group results", "HAVING is faster than WHERE", "WHERE cannot evaluate numbers", "HAVING converts nulls to zero"], correct: 0, explain: "WHERE filters raw rows; HAVING filters aggregated groups." },
        { topic: "Subqueries & Empty Sets", q: "Which subquery operator evaluates to TRUE if and only if the subquery returns zero tuples ($r = \\emptyset$)?", options: ["EXISTS", "NOT EXISTS", "UNIQUE", "> ALL"], correct: 1, explain: "NOT EXISTS evaluates to true when the subquery returns an empty relation ($r = \\emptyset$)." },
        { topic: "Set Operations", q: "What is the difference between UNION and UNION ALL in SQL?", options: ["UNION sorts descending; UNION ALL sorts ascending", "UNION removes duplicates automatically; UNION ALL retains all duplicates", "UNION requires integers only", "UNION ALL only works on single tables"], correct: 1, explain: "UNION performs duplicate elimination, whereas UNION ALL retains all tuples." },
        { topic: "Pattern Matching", q: "Which pattern matches any instructor name containing 'an' as a substring?", options: ["LIKE 'an%'", "LIKE '%an%'", "LIKE '_an_'", "LIKE 'an_'"], correct: 1, explain: "% matches any sequence of characters before and after 'an'." },
        { topic: "WITH Clause", q: "What is the primary benefit of using a WITH clause in complex queries?", options: ["It encrypts the tables", "It defines temporary relations for readability and reuse within the query", "It commits the transaction permanently to disk", "It bypasses security permissions"], correct: 1, explain: "WITH creates modular query-scoped temporary relations." },
        { topic: "Scalar Subqueries", q: "Where can a Scalar Subquery be legally placed in an SQL statement?", options: ["Only in the FROM clause", "Anywhere a single literal value or expression is permitted (SELECT, WHERE, HAVING)", "Only after GROUP BY", "Only in CREATE TABLE"], correct: 1, explain: "Scalar subqueries generate a single value and can appear in expressions." },
        { topic: "Case Updates", q: "Why is CASE preferred over multiple separate UPDATE statements for salary adjustments?", options: ["Separate updates might evaluate updated values twice, causing erroneous double increases", "CASE drops null values", "Separate updates lock the database permanently", "CASE is required for primary keys"], correct: 0, explain: "Sequential updates can erroneously re-apply conditions to newly updated tuples." },
        { topic: "Aggregate Null Handling", q: "How does <code>sum(salary)</code> handle rows where salary is NULL?", options: ["Returns NULL immediately", "Ignores NULL values and computes the sum of existing values", "Converts NULL to 0", "Throws a runtime exception"], correct: 1, explain: "All SQL aggregate functions ignore nulls except count(*)." }
    ],
    4: [
        { topic: "Outer Joins", q: "In a FULL OUTER JOIN between course and prereq, which tuples appear in the final result?", options: ["Only matching tuples", "All tuples from both tables, padding missing attributes from either side with NULL", "Only left tuples with prerequisites", "Only right tuples without prerequisites"], correct: 1, explain: "Full Outer Join preserves all tuples from both relations, filling unmatched attributes with NULL." },
        { topic: "ACID Transactions", q: "If an active transaction executes 5 update queries and then calls <code>ROLLBACK WORK</code>, what happens?", options: ["The updates remain on disk", "All 5 updates are undone as if the transaction never executed", "Only the last update is undone", "The database tables are dropped"], correct: 1, explain: "ROLLBACK undoes all uncommitted transaction statements to preserve atomicity." },
        { topic: "Authorization Security", q: "Which SQL privilege allows a user to define foreign keys that reference attributes of another table?", options: ["SELECT privilege", "REFERENCES privilege", "INDEX privilege", "ALTERATION privilege"], correct: 1, explain: "The REFERENCES privilege is required to create foreign key constraints referencing another relation." },
        { topic: "Views Security", q: "If user A creates a view and grants SELECT to user B, does user B need permissions on the underlying base tables?", options: ["Yes, always", "No, the view acts as a security barrier and user B only requires view privileges", "Only if the base table is empty", "Only if granted by DBA"], correct: 1, explain: "Views encapsulate permissions; grantees do not need direct access to base tables." },
        { topic: "Cascading Revocation", q: "What does the <code>RESTRICT</code> option do when revoking a privilege?", options: ["Revokes from all dependent users", "Prevents revocation and throws an error if any cascade would otherwise occur", "Drops the database table", "Converts users into roles"], correct: 1, explain: "RESTRICT fails the revoke command if dependent grantees exist." },
        { topic: "LOB Types", q: "Why do SQL queries on Large Objects (BLOB/CLOB) return locators rather than entire binary files inline?", options: ["To prevent memory overflow and allow efficient streaming by application pointers", "Because LOBs cannot store text", "Because SQL restricts file size to 10 bytes", "To encrypt the payload"], correct: 0, explain: "LOB pointers prevent memory exhaustion by streaming large files on demand." },
        { topic: "User-Defined Domains", q: "What is the primary difference between a Domain and a User-Defined Type?", options: ["Domains cannot be named", "Domains can have integrity constraints (such as NOT NULL and CHECK) specified directly on them", "Types can only be integers", "Domains cannot be used in tables"], correct: 1, explain: "Domains allow attaching predicates, checks, and NOT NULL rules directly to a type alias." },
        { topic: "Materialized Views", q: "What maintenance cost is associated with Materialized Views?", options: ["They must be refreshed when base relations update", "They delete base tables", "They cannot have indices", "They consume no disk space"], correct: 0, explain: "Materialized views must be kept up to date whenever underlying base tables change." },
        { topic: "Unique Constraints", q: "Can an attribute defined with <code>UNIQUE</code> contain a NULL value?", options: ["Never", "Yes, candidate keys defined with UNIQUE are permitted to be null", "Only if declared PRIMARY KEY", "Only in outer joins"], correct: 1, explain: "In SQL, UNIQUE attributes permit NULL values unless explicitly declared NOT NULL." },
        { topic: "Assertions", q: "Which statement creates a database-wide assertion constraint in SQL?", options: ["<code>CREATE CONSTRAINT name CHECK (P);</code>", "<code>CREATE ASSERTION name CHECK (P);</code>", "<code>ALTER TABLE ADD ASSERTION name;</code>", "<code>CHECK GLOBAL (P);</code>"], correct: 1, explain: "CREATE ASSERTION enforces database-wide invariant predicates." }
    ]
};

let practiceState = {
    chapter: 1,
    index: 0,
    score: 0
};

window.initPracticeQuiz = function(chId) {
    practiceState.chapter = (typeof chId === 'number' && chId > 0) ? chId : 1;
    const container = document.getElementById("practiceQuizArea");
    if (!container) return;

    const list = PRACTICE_BANK[practiceState.chapter] || PRACTICE_BANK[1];

    container.innerHTML = `
        <div style="text-align: center; padding: 30px 20px;">
            <div style="font-size: 40px; margin-bottom: 8px;">📝</div>
            <h3 style="font-family: var(--font-tech); font-size: 20px; color: var(--warning); margin-bottom: 6px;">
                CHAPTER 0${practiceState.chapter} TOPIC PRACTICE
            </h3>
            <p style="color: var(--muted); font-size: 13.5px; max-width: 550px; margin: 0 auto 18px;">
                Self-check covering ${list.length} essential lecture topics. Opens in a focused window to test your retention.
            </p>
            <button onclick="launchIsolatedPractice(${practiceState.chapter})" class="secondary-button" style="margin: auto; border-color: var(--warning); color: var(--warning);">
                START PRACTICE SESSION ➔
            </button>
        </div>
    `;
};

window.launchIsolatedPractice = function(chId) {
    if (chId) practiceState.chapter = chId;
    practiceState.index = 0;
    practiceState.score = 0;
    document.body.style.overflow = "hidden";

    let modal = document.getElementById("isolatedPracticeModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "isolatedPracticeModal";
        modal.className = "modal-overlay active";
        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.background = "rgba(2, 4, 12, 0.96)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "99998";
        document.body.appendChild(modal);
    } else {
        modal.className = "modal-overlay active";
        modal.style.display = "flex";
    }

    renderIsolatedPracticeCard();
};

function renderIsolatedPracticeCard() {
    const modal = document.getElementById("isolatedPracticeModal");
    if (!modal) return;

    const list = PRACTICE_BANK[practiceState.chapter] || PRACTICE_BANK[1];
    const item = list[practiceState.index];
    const total = list.length;
    const pct = ((practiceState.index) / total) * 100;

    modal.innerHTML = `
        <div class="isolated-modal-card card-slide-in" id="practiceModalCard">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 200, 87, 0.2); padding-bottom: 10px;">
                <span style="font-family: var(--font-tech); font-size: 10px; color: var(--warning); letter-spacing: 1.5px;">
                    TOPIC: ${item.topic.toUpperCase()}
                </span>
                <span style="font-family: var(--font-tech); font-size: 11px; color: var(--muted);">
                    QUESTION ${practiceState.index + 1} OF ${total}
                </span>
            </div>

            <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 18px; overflow: hidden;">
                <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, var(--warning), var(--success)); transition: width 0.35s ease;"></div>
            </div>

            <p style="font-size: 15.5px; font-weight: 600; color: #f4f7ff; margin-bottom: 18px; line-height: 1.6;">
                ${item.q}
            </p>

            <div style="display: grid; gap: 10px;" id="practiceBtnBox">
                ${item.options.map((opt, i) => `
                    <button onclick="handlePracticeAnswer(${i}, ${item.correct}, this, event)" class="secondary-button" style="text-align: left; justify-content: flex-start; width: 100%; font-size: 13px; padding: 13px 16px; border-radius: 10px;">
                        <span style="font-family: var(--font-tech); color: var(--warning); margin-right: 10px;">${String.fromCharCode(65 + i)})</span> ${opt}
                    </button>
                `).join("")}
            </div>
            <div id="practiceFeedback" style="margin-top: 14px; min-height: 22px; font-size: 13px; font-weight: bold;"></div>
        </div>
    `;
}

window.handlePracticeAnswer = function(selected, correct, btn, evt) {
    const parent = document.getElementById("practiceBtnBox");
    if (parent) parent.querySelectorAll("button").forEach(b => b.disabled = true);
    const fb = document.getElementById("practiceFeedback");
    const card = document.getElementById("practiceModalCard");
    const list = PRACTICE_BANK[practiceState.chapter] || PRACTICE_BANK[1];
    const item = list[practiceState.index];

    if (selected === correct) {
        btn.style.borderColor = "var(--success)";
        btn.style.background = "rgba(32, 255, 155, 0.2)";
        if (card) card.classList.add("card-burst-correct");
        practiceState.score++;
        fb.innerHTML = `<span style="color: var(--success);">✨ PERFECT! ${item.explain}</span>`;
        if (window.ProgressManager && typeof ProgressManager.addXP === 'function') ProgressManager.addXP(25);
    } else {
        btn.style.borderColor = "var(--danger)";
        btn.style.background = "rgba(255, 73, 108, 0.2)";
        if (card) card.classList.add("card-burst-wrong");
        fb.innerHTML = `<span style="color: var(--danger);">✗ INCORRECT. ${item.explain}</span>`;
    }

    setTimeout(() => {
        if (card) card.className = "isolated-modal-card card-slide-out";
        setTimeout(() => {
            practiceState.index++;
            if (practiceState.index < list.length) {
                renderIsolatedPracticeCard();
            } else {
                renderPracticeDone();
            }
        }, 320);
    }, 1100);
};

function closePracticeArena() {
    const modal = document.getElementById("isolatedPracticeModal");
    if (modal) {
        modal.classList.remove("active");
        modal.remove();
    }
    document.body.style.overflow = "auto";
    if (typeof initPracticeQuiz === "function") {
        initPracticeQuiz(practiceState.chapter);
    }
}
window.closePracticeArena = closePracticeArena;

function renderPracticeDone() {
    const modal = document.getElementById("isolatedPracticeModal");
    if (!modal) return;
    const list = PRACTICE_BANK[practiceState.chapter] || PRACTICE_BANK[1];
    document.body.style.overflow = "auto";

    modal.innerHTML = `
        <div class="isolated-modal-card card-slide-in" style="text-align: center; padding: 35px;">
            <div style="font-size: 42px; margin-bottom: 10px;">🎯</div>
            <h3 style="font-family: var(--font-tech); font-size: 22px; color: var(--warning); margin-bottom: 8px;">
                PRACTICE COMPLETE!
            </h3>
            <p style="color: #f4f7ff; font-size: 14px; margin-bottom: 18px;">
                You completed all ${list.length} topics! Score: <strong>${practiceState.score} / ${list.length}</strong>.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button onclick="launchIsolatedPractice(${practiceState.chapter})" class="secondary-button">↻ RE-PRACTICE</button>
                <button onclick="closePracticeArena()" class="primary-button">✓ CLOSE</button>
            </div>
        </div>
    `;
}