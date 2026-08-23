/* =========================================================
   DBMS NEXUS — MINIGAME & LAB ENGINE (CHAPTERS 1, 2, 3 & 4)
========================================================= */

const CHAPTER_DATA = {
    1: {
        title: "Database System Fundamentals",
        memoryKeys: [
            { term: "P-L-V (Data Abstraction)", desc: "Physical (Disk bits) → Logical (Records & schemas) → View (Security virtual views)." },
            { term: "DDL vs DML", desc: "DDL defines schema structures in Data Dictionary; DML manipulates records (SELECT/INSERT)." },
            { term: "Query Engine Pipeline", desc: "Parser & Translator → Optimizer → Evaluation Engine → Storage Manager." },
            { term: "Physical Data Independence", desc: "Modifying physical disk layouts without altering the logical schema or applications." },
            { term: "DBA Responsibilities", desc: "Schema definition, security authorization, storage allocation, and routine backups." }
        ],
        game: {
            title: "Database Engine & Routing Protocol",
            badge: "15 ROUTING SCENARIOS",
            questions: [
                { q: "A user submits: <code>SELECT name FROM instructor;</code>. Where does it route first?", options: ["Buffer Manager on Disk", "DML Compiler & Parser", "Data Dictionary File", "OS File Manager"], correct: 1, explain: "DML queries are parsed and translated before execution plans are made." },
                { q: "Where does the DDL interpreter record newly declared table structures and keys?", options: ["Buffer Pool", "Log Records", "Data Dictionary (Metadata)", "Application Object Code"], correct: 2, explain: "The Data Dictionary stores schema metadata, integrity rules, and authorizations." },
                { q: "Which component selects the lowest-cost evaluation plan from among multiple relational algebra paths?", options: ["Transaction Manager", "DML Compiler & Optimizer", "File Manager", "Buffer Manager"], correct: 1, explain: "The query optimizer evaluates alternative plans using statistical data." },
                { q: "When a memory block must be fetched from disk into RAM, which module manages the page cache?", options: ["Buffer Manager", "DDL Interpreter", "Linker", "Naive Interface"], correct: 0, explain: "The Buffer Manager fetches and caches disk blocks into main memory." },
                { q: "A system crash occurs during fund transfer. Which module undoes partial updates to preserve atomicity?", options: ["Authorization Manager", "Transaction Manager", "DML Compiler", "File Manager"], correct: 1, explain: "The Transaction Manager ensures system consistency despite failures." },
                { q: "A bank teller uses a pre-built web interface to deposit money. Which user class are they?", options: ["Sophisticated User", "Database Administrator", "Naive User", "Application Programmer"], correct: 2, explain: "Naive users interact with the system through pre-written application interfaces." },
                { q: "Modifying physical index B+ trees without altering SQL application code is called:", options: ["Logical Independence", "Physical Data Independence", "Atomicity Failure", "View Dependency"], correct: 1, explain: "Physical Data Independence allows changing physical schemas without altering logical schemas." },
                { q: "Which file structure component provides pointers to records holding a specific value for fast retrieval?", options: ["Indices", "Data Dictionary", "Statistical Data", "Buffer Pages"], correct: 0, explain: "Indices provide direct pointers to data items to avoid scanning every record." },
                { q: "Deciding what attributes to store in an employee table during schema design is a:", options: ["Hardware Decision", "Business Decision", "Computer Science Decision", "Network Decision"], correct: 1, explain: "Deciding what attributes to record in the database is a business decision." },
                { q: "Deciding how to distribute attributes among different relation schemas is a:", options: ["Operating System Decision", "Business Decision", "Computer Science Decision", "Storage Decision"], correct: 2, explain: "Deciding relation schema decomposition is a computer science decision." },
                { q: "In a 3-tier database architecture, what does the client machine directly communicate with?", options: ["Database Disk Storage", "Application Server", "Buffer Manager", "Operating System"], correct: 1, explain: "In 3-tier systems, clients talk to an application server running business logic." },
                { q: "Why is SQL generally embedded in host languages like Java, C++, or Python?", options: ["SQL is slow", "SQL is NOT Turing complete and cannot handle UIs or networks", "SQL cannot store numbers", "SQL requires compilers"], correct: 1, explain: "SQL lacks Turing machine equivalence for general I/O, UIs, and network operations." },
                { q: "Which module interacts directly with the operating system's raw file manager?", options: ["DDL Interpreter", "Storage Manager", "Query Parser", "Web Interface"], correct: 1, explain: "The Storage Manager interfaces between stored raw data and application queries." },
                { q: "Who possesses central control over schema definition, access authorization, and routine backups?", options: ["Application Programmer", "Sophisticated Analyst", "Database Administrator (DBA)", "Naive User"], correct: 2, explain: "The DBA is responsible for overall administration, authorization, and maintenance." },
                { q: "What happens when two users withdraw $50 simultaneously from a $100 balance in an uncontrolled file system?", options: ["Automatic queuing", "Data Isolation", "Concurrent Access Anomaly & Inconsistent Balance", "Atomic commit"], correct: 2, explain: "Uncontrolled concurrent access causes lost updates and balance anomalies." }
            ]
        }
    },
    2: {
        title: "Relational Algebra Operator Slicer",
        memoryKeys: [
            { term: "σ (Select)", desc: "Selects ROWS satisfying predicate p: σ dept_name='Physics'(instructor)." },
            { term: "Π (Project)", desc: "Extracts specific COLUMNS, automatically eliminating duplicate rows." },
            { term: "Candidate Key", desc: "A minimal superkey capable of uniquely identifying every tuple." },
            { term: "Cartesian Product (×)", desc: "Combines every tuple of R with every tuple of S (r × s)." },
            { term: "Theta Join (⋈θ)", desc: "Equivalent to selection over Cartesian product: σ_θ(r × s)." }
        ],
        game: {
            title: "Relational Algebra Slicer Lab",
            badge: "15 ALGEBRA SCENARIOS",
            questions: [
                { q: "Extract rows where <code>dept_name = 'Physics'</code> from <code>instructor</code>:", options: ["Π dept_name='Physics'(instructor)", "σ dept_name='Physics'(instructor)", "instructor ⋈ Physics", "ρ dept_name(instructor)"], correct: 1, explain: "Selection (σ) filters rows satisfying a predicate condition." },
                { q: "Isolate only the <code>name</code> and <code>salary</code> columns from <code>instructor</code>:", options: ["σ name, salary(instructor)", "Π name, salary(instructor)", "instructor × name, salary", "ρ name, salary(instructor)"], correct: 1, explain: "Projection (Π) slices columns vertically and drops duplicates." },
                { q: "Relation R has 4 tuples and relation S has 6 tuples. How many tuples are in $R \\times S$?", options: ["10", "24", "2", "16"], correct: 1, explain: "Cartesian product combines every pair: $4 \\times 6 = 24$." },
                { q: "Find names of instructors in Physics: <code>Π name (σ dept_name='Physics'(instructor))</code>. This illustrates:", options: ["Composition of operations", "Full outer join", "Data dictionary update", "Schema independence"], correct: 0, explain: "Relational algebra results are relations and can be composed into expressions." },
                { q: "Which key is a minimal superkey with no redundant attributes?", options: ["Foreign Key", "Candidate Key", "Secondary Key", "Composite Key"], correct: 1, explain: "Candidate keys are minimal superkeys." },
                { q: "What condition must hold for Union ($r \\cup s$) and Set Difference ($r - s$)?", options: ["Same table names", "Same arity and compatible attribute domains", "Must contain no nulls", "Primary keys must match"], correct: 1, explain: "Set operations require union compatibility: same arity and matching domain types." },
                { q: "Theta Join $r \\bowtie_\\theta s$ is mathematically equivalent to:", options: ["$\\Pi_\\theta(r \\cup s)$", "$\\sigma_\\theta(r \\times s)$", "$r - s$", "$\\rho_\\theta(r \\cap s)$"], correct: 1, explain: "Join combines Cartesian product and row selection: $\\sigma_\\theta(r \\times s)$." },
                { q: "Which operator renames the relation or attributes of an expression?", options: ["ρ (Rho)", "σ (Sigma)", "Π (Pi)", "⋈ (Join)"], correct: 0, explain: "ρ (Rho) names intermediate relational algebra results." },
                { q: "Which operator produces tuples present in relation $r$ but NOT in relation $s$?", options: ["$r \\cup s$", "$r \\cap s$", "$r - s$", "$r \\times s$"], correct: 2, explain: "Set difference ($r - s$) removes tuples found in $s$ from $r$." },
                { q: "How are conflicting column names disambiguated in $r \\times s$?", options: ["Prefixed with relation name (e.g., instructor.ID)", "Renamed to NULL", "Automatically dropped", "Converted to integers"], correct: 0, explain: "Attribute names are prefixed with relation names to maintain uniqueness." },
                { q: "Are relational tuples ordered inside a relation?", options: ["Yes, always sorted by primary key", "No, relations are unordered sets of tuples", "Yes, ordered by insertion time", "Only for numerical data"], correct: 1, explain: "Mathematical relations are unordered sets of tuples." },
                { q: "What is the arity of a relation?", options: ["Number of tuples", "Number of attributes (columns)", "Number of candidate keys", "Storage block size"], correct: 1, explain: "Arity refers to the total number of columns/attributes." },
                { q: "What does an atomic domain require?", options: ["Encrypted values", "Values must be indivisible units", "Values must be positive integers", "Values must be unique"], correct: 1, explain: "Domain values must be indivisible atomic units." },
                { q: "Which operation assigns intermediate expressions to temporary relation variables?", options: ["$\leftarrow$ (Assignment)", "$\bowtie$ (Join)", "$\Pi$ (Project)", "$\sigma$ (Select)"], correct: 0, explain: "Assignment ($\leftarrow$) stores intermediate query parts into temporary relation variables." },
                { q: "Find the average salary of instructors grouped by department in relational algebra:", options: ["$_{\\text{dept\\_name}}\\mathcal{G}_{\\text{avg}(\\text{salary})}(\\text{instructor})$", "$\\Pi_{\\text{avg}(\\text{salary})}(\\text{instructor})$", "$\\sigma_{\\text{avg}}(\\text{instructor})$", "$\\text{instructor} \\times \\text{avg}$"], correct: 0, explain: "Aggregate grouping uses $_{\\text{group attributes}}\\mathcal{G}_{\\text{functions}}(\\text{relation})$." }
            ]
        }
    },
    3: {
        title: "SQL Query Commander",
        memoryKeys: [
            { term: "S-F-W-G-H-O Pipeline", desc: "Execution sequence: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY." },
            { term: "HAVING vs WHERE", desc: "WHERE filters rows before grouping; HAVING filters aggregated groups after formation." },
            { term: "3-Valued Logic Equations", desc: "5 + null = null; (unknown OR true) = true; (unknown AND false) = false." },
            { term: "Subquery Connectives", desc: "(= some) ≡ in; (≠ all) ≡ not in; exists r ≡ (r ≠ ∅); unique tests absence of duplicates." },
            { term: "WITH Clause & CASE", desc: "WITH creates modular query-scoped temporary tables; CASE avoids update order anomalies." }
        ],
        game: {
            title: "SQL Query Commander Lab",
            badge: "15 QUERY SCENARIOS",
            questions: [
                { q: "What is the standard execution sequence of an SQL query?", options: ["SELECT → FROM → WHERE → GROUP BY", "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY", "WHERE → SELECT → FROM → ORDER BY", "GROUP BY → HAVING → SELECT → FROM"], correct: 1, explain: "FROM and WHERE execute before grouping and projection." },
                { q: "What is the evaluated output of <code>5 + null</code> in SQL arithmetic?", options: ["5", "0", "null", "Error"], correct: 2, explain: "Any arithmetic expression with null yields null." },
                { q: "Which clause filters aggregated group results AFTER group creation?", options: ["WHERE", "HAVING", "ORDER BY", "CHECK"], correct: 1, explain: "HAVING filters groups created by GROUP BY." },
                { q: "What does the pattern <code>LIKE '%_ _ _%'</code> match?", options: ["Exactly 3 characters", "At least 3 characters", "Ends with 3 spaces", "Starts with 3 digits"], correct: 1, explain: "Three underscores with % matches any string with at least 3 characters." },
                { q: "Which operator checks whether a nested subquery returns at least one tuple ($r \\neq \\emptyset$)?", options: ["UNIQUE", "EXISTS", "ALL", "SOME"], correct: 1, explain: "EXISTS evaluates to true if the subquery result is non-empty." },
                { q: "How do you preserve duplicate rows when executing a UNION query in SQL?", options: ["UNION DISTINCT", "UNION ALL", "UNION DUPLICATES", "UNION RETAIN"], correct: 1, explain: "UNION ALL preserves all duplicate tuples." },
                { q: "What happens if a non-aggregate attribute in SELECT is omitted from GROUP BY?", options: ["SQL ignores it", "SQL throws a syntax error", "It takes the first row value", "It returns NULL"], correct: 1, explain: "Attributes outside aggregates in SELECT must appear in GROUP BY." },
                { q: "What does <code>salary > ALL (subquery)</code> evaluate to?", options: ["Greater than at least one tuple", "Greater than every single tuple in the subquery", "Equal to max salary", "True if subquery is empty"], correct: 1, explain: "> ALL requires the value to exceed every record in the subquery." },
                { q: "Which SQL clause defines temporary relations available only for the current query?", options: ["VIEW", "WITH", "TEMP", "LET"], correct: 1, explain: "The WITH clause creates query-scoped temporary relations." },
                { q: "What does <code>SELECT count(*) FROM course;</code> return?", options: ["Total distinct course IDs", "Total number of tuples in the course table", "Null count", "Sum of credits"], correct: 1, explain: "count(*) counts all rows in the relation." },
                { q: "Which statement modifies existing records conditionally without order dependencies?", options: ["ALTER TABLE", "UPDATE ... SET ... CASE", "INSERT INTO", "DROP TUPLE"], correct: 1, explain: "UPDATE with CASE applies multi-condition modifications cleanly." },
                { q: "How does SQL test if an attribute contains no data?", options: ["= null", "IS NULL", "== NULL", "EMPTY()"], correct: 1, explain: "IS NULL is the standard SQL predicate for null tests." },
                { q: "What does <code>DELETE FROM instructor;</code> do?", options: ["Deletes instructor table schema", "Deletes all tuples from instructor table while retaining schema", "Deletes primary key", "Drops database"], correct: 1, explain: "DELETE removes all rows while keeping table structure." },
                { q: "What is a Scalar Subquery in SQL?", options: ["A query returning multiple tables", "A subquery used where a single atomic value is expected", "A subquery with GROUP BY", "A query with no WHERE clause"], correct: 1, explain: "Scalar subqueries return a single column with a single row value." },
                { q: "What does the 3-valued boolean expression <code>(unknown OR true)</code> evaluate to?", options: ["unknown", "false", "true", "null"], correct: 2, explain: "In 3-valued logic, (unknown OR true) evaluates to true." }
            ]
        }
    },
    4: {
        title: "Database Control Center",
        memoryKeys: [
            { term: "Left Outer Join (⟕)", desc: "Preserves all left tuples; non-matching right columns become NULL." },
            { term: "COMMIT vs ROLLBACK", desc: "COMMIT makes updates permanent; ROLLBACK undoes uncommitted work." },
            { term: "ON DELETE CASCADE", desc: "Automatically deletes child foreign-key rows when parent row is deleted." },
            { term: "BLOB vs CLOB", desc: "BLOB stores binary large objects (images/videos); CLOB stores character large objects." },
            { term: "WITH GRANT OPTION", desc: "Allows a user who is granted a privilege to pass that privilege to other users." }
        ],
        game: {
            title: "Database Control & Security Matrix",
            badge: "15 SECURITY SCENARIOS",
            questions: [
                { q: "What does <code>course NATURAL LEFT OUTER JOIN prereq</code> return for courses with no prereqs?", options: ["The course tuple with prereq attributes filled with NULL", "The tuple is dropped completely", "Database throws a foreign key error", "Sets credits to 0"], correct: 0, explain: "Left Outer Joins preserve all left tuples, filling missing right columns with NULL." },
                { q: "Which statement permanently commits transaction updates to disk storage?", options: ["SAVE TRANSACTION", "COMMIT WORK", "ROLLBACK WORK", "FLUSH BUFFER"], correct: 1, explain: "COMMIT WORK makes all transaction updates permanent." },
                { q: "Which construct creates a user-defined domain with constraints in SQL-92?", options: ["CREATE TYPE", "CREATE DOMAIN", "CREATE CONSTRAINT", "CREATE ASSERTION"], correct: 1, explain: "CREATE DOMAIN defines custom domain types with constraint checks." },
                { q: "What does <code>ON DELETE CASCADE</code> enforce on foreign keys?", options: ["Rejects deletion", "Deletes matching child rows automatically", "Sets foreign key to null", "Aborts transaction"], correct: 1, explain: "Cascading deletions automatically remove referencing child records." },
                { q: "Which data type stores large uninterpreted binary data like photos or videos?", options: ["CLOB", "BLOB", "VARCHAR", "NUMERIC"], correct: 1, explain: "BLOB (Binary Large Object) stores uninterpreted binary data." },
                { q: "Can a candidate key declared using <code>unique</code> contain NULL values in SQL?", options: ["Never", "Yes, candidate keys are permitted to be null", "Only if numeric", "Only in foreign tables"], correct: 1, explain: "Unlike PRIMARY KEY, UNIQUE candidate keys are permitted to contain NULL values." },
                { q: "What is an Assertion in SQL?", options: ["A local check on one column", "A predicate expressing a global condition that the entire database must always satisfy", "A temporary table", "A query optimizer index"], correct: 1, explain: "Assertions enforce global consistency rules across the entire database." },
                { q: "What does the <code>CREATE INDEX</code> command accomplish?", options: ["Creates primary keys", "Builds a fast lookup data structure avoiding full table scans", "Encrypts records", "Deletes views"], correct: 1, explain: "Indices enable efficient tuple retrieval without full table scans." },
                { q: "Which statement grants SELECT privilege on department to user Amit?", options: ["GIVE SELECT TO Amit;", "GRANT SELECT ON department TO Amit;", "SET USER Amit SELECT;", "ALLOW Amit ON department;"], correct: 1, explain: "GRANT <privilege> ON <relation> TO <user> is the standard SQL syntax." },
                { q: "What happens when executing <code>REVOKE select ON department FROM Amit CASCADE;</code>?", options: ["Only Amit loses access", "Amit and all users to whom Amit granted the privilege lose access", "Database shuts down", "All tables are dropped"], correct: 1, explain: "CASCADE revokes permissions from both Amit and dependent grantees." },
                { q: "Which construct allows role inheritance in SQL?", options: ["GRANT role1 TO role2;", "INHERIT role1 FROM role2;", "MERGE ROLES role1, role2;", "LINK ROLE role1 WITH role2;"], correct: 0, explain: "Granting one role to another establishes permission inheritance." },
                { q: "What does the <code>USING (course_id)</code> join clause specify?", options: ["The list of specific common attributes to equate", "A Cartesian product filter", "Index deletion", "View creation"], correct: 0, explain: "USING explicitly names common columns used for the join condition." },
                { q: "Which privilege is required to create a foreign key referencing another table's columns?", options: ["SELECT", "REFERENCES", "INDEX", "ALTERATION"], correct: 1, explain: "The REFERENCES privilege allows creating foreign keys referencing the specified table." },
                { q: "What is returned when a query references a Large Object (LOB)?", options: ["The entire raw file inline", "A locator pointer to the large object", "An integer file size", "A null value"], correct: 1, explain: "Queries returning LOBs return a pointer rather than the entire data payload." },
                { q: "Does a user querying a view need SELECT privileges on the underlying base relations?", options: ["Yes, always", "No, permission on the view is sufficient if the creator has base permissions", "Only if the table has primary keys", "Only DBA has view access"], correct: 1, explain: "A view hides underlying tables; the user only needs privileges on the view itself." }
            ]
        }
    }
};

let currentLabState = {
    chapter: 1,
    index: 0,
    score: 0,
    streak: 0
};

window.initChapter = function(chId) {
    currentLabState.chapter = (typeof chId === 'number' && chId > 0) ? chId : 1;
    const data = CHAPTER_DATA[currentLabState.chapter] || CHAPTER_DATA[1];

    const memContainer = document.getElementById("memoryKeywordsDeck");
    if (memContainer) {
        memContainer.innerHTML = data.memoryKeys.map(k => `
            <div class="memory-card" style="padding: 14px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="color: var(--primary); font-family: var(--font-tech); font-size: 13px;">${k.term}</strong>
                    <button onclick="if(window.NexusVoice) NexusVoice.speak('${k.term}: ${k.desc.replace(/'/g, "\\'")}')" class="secondary-button" style="min-height: 28px; padding: 0 10px; font-size: 9px;">🔊 Listen</button>
                </div>
                <p style="color: var(--muted); font-size: 13px; margin-top: 6px;">${k.desc}</p>
            </div>
        `).join("");
    }

    const area = document.getElementById("chapterGameArea");
    if (area) {
        area.innerHTML = `
            <div style="text-align: center; padding: 30px 20px;">
                <div style="font-size: 40px; margin-bottom: 8px;">🎮</div>
                <h3 style="font-family: var(--font-tech); font-size: 20px; color: var(--primary); margin-bottom: 6px;">
                    ${data.game.title.toUpperCase()}
                </h3>
                <p style="color: var(--muted); font-size: 13.5px; max-width: 550px; margin: 0 auto 18px;">
                    ${data.game.badge}: Solve step-by-step interactive routing scenarios in a focused arena.
                </p>
                <button onclick="launchIsolatedLab(${currentLabState.chapter})" class="primary-button" style="margin: auto;">
                    START MINIGAME ARENA ➔
                </button>
            </div>
        `;
    }
};

window.launchIsolatedLab = function(chId) {
    if (chId) currentLabState.chapter = chId;
    currentLabState.index = 0;
    currentLabState.score = 0;
    currentLabState.streak = 0;
    document.body.style.overflow = "hidden";

    let modal = document.getElementById("isolatedLabModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "isolatedLabModal";
        modal.className = "modal-overlay active";
        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.background = "rgba(2, 4, 12, 0.96)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "99997";
        document.body.appendChild(modal);
    } else {
        modal.className = "modal-overlay active";
        modal.style.display = "flex";
    }

    renderIsolatedLabCard();
};

function renderIsolatedLabCard() {
    const modal = document.getElementById("isolatedLabModal");
    if (!modal) return;

    const data = CHAPTER_DATA[currentLabState.chapter] || CHAPTER_DATA[1];
    const game = data.game;
    const qData = game.questions[currentLabState.index];
    const total = game.questions.length;
    const progressPct = ((currentLabState.index) / total) * 100;

    modal.innerHTML = `
        <div class="isolated-modal-card card-slide-in" id="labModalCard">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid rgba(0, 234, 255, 0.2); padding-bottom: 10px;">
                <div>
                    <span class="topic-pill" style="margin: 0;">${game.badge}</span>
                    <span style="font-family: var(--font-tech); font-size: 11px; color: var(--muted); margin-left: 10px;">SCENARIO ${currentLabState.index + 1} OF ${total}</span>
                </div>
                <div style="font-family: var(--font-tech); font-size: 11px; color: var(--accent);">
                    🔥 STREAK: ${currentLabState.streak} | XP: ${currentLabState.score}
                </div>
            </div>

            <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 18px; overflow: hidden;">
                <div style="width: ${progressPct}%; height: 100%; background: linear-gradient(90deg, var(--secondary), var(--primary)); transition: width 0.4s ease;"></div>
            </div>

            <p style="font-size: 15.5px; font-weight: 600; color: #f4f7ff; margin-bottom: 18px; line-height: 1.6;">
                ${qData.q}
            </p>

            <div style="display: grid; gap: 10px;" id="labOptionsBox">
                ${qData.options.map((opt, i) => `
                    <button onclick="submitLabAnswer(${i}, ${qData.correct}, this, event)" class="secondary-button" style="text-align: left; justify-content: flex-start; width: 100%; font-size: 13px; padding: 13px 16px; border-radius: 10px; border: 1px solid var(--border);">
                        <span style="font-family: var(--font-tech); color: var(--primary); margin-right: 10px;">${String.fromCharCode(65 + i)})</span> ${opt}
                    </button>
                `).join("")}
            </div>
            <div id="labFeedbackBox" style="margin-top: 14px; min-height: 24px; font-size: 13px; font-weight: bold;"></div>
        </div>
    `;
}

window.submitLabAnswer = function(selected, correct, btn, evt) {
    const parent = document.getElementById("labOptionsBox");
    if (parent) parent.querySelectorAll("button").forEach(b => b.disabled = true);
    const fb = document.getElementById("labFeedbackBox");
    const card = document.getElementById("labModalCard");
    const data = CHAPTER_DATA[currentLabState.chapter] || CHAPTER_DATA[1];
    const game = data.game;
    const qData = game.questions[currentLabState.index];

    if (selected === correct) {
        btn.style.borderColor = "var(--success)";
        btn.style.background = "rgba(32, 255, 155, 0.2)";
        if (card) card.classList.add("card-burst-correct");
        currentLabState.score += 20;
        currentLabState.streak += 1;
        fb.innerHTML = `<span style="color: var(--success);">✨ CORRECT! ${qData.explain}</span>`;
        if (window.ProgressManager && typeof ProgressManager.addXP === 'function') ProgressManager.addXP(20);
    } else {
        btn.style.borderColor = "var(--danger)";
        btn.style.background = "rgba(255, 73, 108, 0.2)";
        if (card) card.classList.add("card-burst-wrong");
        currentLabState.streak = 0;
        fb.innerHTML = `<span style="color: var(--danger);">❌ INCORRECT. ${qData.explain}</span>`;
    }

    setTimeout(() => {
        if (card) card.className = "isolated-modal-card card-slide-out";
        setTimeout(() => {
            currentLabState.index++;
            if (currentLabState.index < game.questions.length) {
                renderIsolatedLabCard();
            } else {
                renderLabDone();
            }
        }, 320);
    }, 1100);
};

function closeLabArena() {
    const modal = document.getElementById("isolatedLabModal");
    if (modal) {
        modal.classList.remove("active");
        modal.remove();
    }
    document.body.style.overflow = "auto";
    if (typeof initChapter === "function") {
        initChapter(currentLabState.chapter);
    }
}
window.closeLabArena = closeLabArena;

function renderLabDone() {
    const modal = document.getElementById("isolatedLabModal");
    if (!modal) return;
    const data = CHAPTER_DATA[currentLabState.chapter] || CHAPTER_DATA[1];
    const game = data.game;
    document.body.style.overflow = "auto";

    modal.innerHTML = `
        <div class="isolated-modal-card card-slide-in" style="text-align: center; padding: 35px;">
            <div style="font-size: 45px; margin-bottom: 10px;">🏆</div>
            <h3 style="font-family: var(--font-tech); font-size: 22px; color: var(--primary); margin-bottom: 8px;">
                LAB PROTOCOL COMPLETE!
            </h3>
            <p style="color: #f4f7ff; font-size: 14px; margin-bottom: 18px;">
                You mastered all ${game.questions.length} scenarios! Total Score: <strong style="color: var(--accent);">${currentLabState.score} XP</strong>.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button onclick="launchIsolatedLab(${currentLabState.chapter})" class="secondary-button">↻ REPLAY LAB</button>
                <button onclick="closeLabArena()" class="primary-button">✓ CLOSE</button>
            </div>
        </div>
    `;
}