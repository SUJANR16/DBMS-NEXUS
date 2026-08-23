const NexusAI = {
    isTestActive: false,

    setTestMode(active) {
        this.isTestActive = active;
        const panel = document.getElementById("aiTutorPanel");
        if (panel) {
            panel.style.display = active ? "none" : "block";
        }
    },

    ask(query, chapterContext = 1) {
        if (this.isTestActive) {
            return "🔒 AI ASSISTANCE RESTRICTED: Active test in progress. Use your fundamental knowledge!";
        }

        const q = query.toLowerCase();

        if (q.includes("plv") || q.includes("abstraction")) {
            return "P-L-V Abstraction[cite: 10]:\n1. Physical Level: How records/bytes are stored on disk[cite: 10].\n2. Logical Level: What data & relationships exist[cite: 10].\n3. View Level: Security-tailored virtual tables[cite: 10].";
        }
        if (q.includes("ddl") || q.includes("dml")) {
            return "DDL defines schema structures (CREATE, ALTER) in the Data Dictionary[cite: 10]. DML manipulates records (SELECT, INSERT, UPDATE, DELETE)[cite: 10].";
        }
        if (q.includes("key") || q.includes("superkey") || q.includes("candidate")) {
            return "Superkey: Uniquely identifies rows[cite: 9].\nCandidate Key: Minimal superkey[cite: 9].\nPrimary Key: Selected candidate key[cite: 9].";
        }
        if (q.includes("algebra") || q.includes("sigma") || q.includes("pi")) {
            return "Relational Algebra[cite: 9]:\n• σ (Sigma): Row selection by condition[cite: 9].\n• Π (Pi): Column projection without duplicates[cite: 9].\n• ×: Cartesian product[cite: 9].\n• ⋈: Natural / Theta join[cite: 9].";
        }
        if (q.includes("null") || q.includes("5 + null")) {
            return "In SQL arithmetic, 5 + null = null[cite: 8]. Comparisons return 'unknown'[cite: 8]. Check nulls with 'IS NULL'[cite: 8].";
        }
        if (q.includes("having") || q.includes("where")) {
            return "WHERE filters rows before grouping[cite: 8]. HAVING filters aggregated groups after GROUP BY[cite: 8].";
        }
        if (q.includes("outer join") || q.includes("left outer")) {
            return "Natural Left Outer Join (⟕) keeps all left-table rows; missing right attributes are padded with NULL[cite: 7].";
        }
        if (q.includes("grant") || q.includes("revoke")) {
            return "GRANT gives access privileges to users/roles[cite: 7]. REVOKE takes them away[cite: 7].";
        }

        return `Analyzing: "${query}". Refer to the memory anchors and lecture notes for Module ${chapterContext}[cite: 7, 8, 9, 10]!`;
    }
};

window.NexusAI = NexusAI;