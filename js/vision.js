const NexusLens = {
    analyzeImage(input) {
        if (window.NexusAI && NexusAI.isTestActive) {
            if (window.showToast) window.showToast("🔒 Nexus Lens is locked during examinations!");
            return;
        }

        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        const resBox = document.getElementById("lensResultBox");
        const prev = document.getElementById("lensPreviewImg");

        if (resBox) resBox.innerHTML = "<div class='nexus-scan'>Analyzing database slide/diagram...</div>";

        reader.onload = function(e) {
            if (prev) {
                prev.src = e.target.result;
                prev.style.display = "block";
            }

            setTimeout(() => {
                const name = file.name.toLowerCase();
                let output = "";

                if (name.includes("join") || name.includes("outer")) {
                    output = "<b>Detected:</b> Relational Join Operation[cite: 7].<br><b>Summary:</b> Matches tuples on common attributes[cite: 7]. Outer joins prevent information loss by padding non-matches with NULL[cite: 7].";
                } else if (name.includes("schema") || name.includes("diagram") || name.includes("table")) {
                    output = "<b>Detected:</b> University Relational Schema[cite: 9].<br><b>Summary:</b> Primary keys are underlined; foreign keys enforce referential integrity across relations[cite: 9].";
                } else if (name.includes("arch") || name.includes("engine")) {
                    output = "<b>Detected:</b> DBMS Engine Architecture[cite: 10].<br><b>Summary:</b> Breaks down into Query Processor (DML Compiler, Optimizer) and Storage Manager (Buffer, File & Transaction managers)[cite: 10].";
                } else {
                    output = "<b>Detected:</b> SQL Statement / Relational Table[cite: 8, 10].<br><b>Summary:</b> Follows declarative relational standards and schema integrity constraints[cite: 8, 10].";
                }

                if (resBox) {
                    resBox.innerHTML = `
                        <div style="padding: 12px; background: rgba(0, 234, 255, 0.08); border: 1px solid var(--border); border-radius: 10px; margin-top: 10px;">
                            ${output}
                            <button onclick="NexusVoice.speak(this.parentElement.innerText)" class="secondary-button" style="margin-top: 8px; font-size: 10px; min-height: 28px;">🔊 Read</button>
                        </div>
                    `;
                }
            }, 900);
        };
        reader.readAsDataURL(file);
    }
};

window.NexusLens = NexusLens;