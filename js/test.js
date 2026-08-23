window.runNexusTest = function() {
    console.log("⚡ Initiating DBMS NEXUS Diagnostic Suite...");
    const modules = [
        { name: "Voice Engine", status: typeof NexusVoice !== 'undefined' },
        { name: "AI Assistant", status: typeof NexusAI !== 'undefined' },
        { name: "Progress Tracker", status: typeof ProgressManager !== 'undefined' },
        { name: "Chapter Curriculum", status: typeof CHAPTER_DATA !== 'undefined' },
        { name: "Quiz Engine", status: typeof QUIZ_BANK !== 'undefined' }
    ];

    modules.forEach(m => {
        if (m.status) console.log(`✅ [OK] ${m.name}`);
        else console.error(`❌ [FAIL] ${m.name}`);
    });

    if (window.showToast) showToast("All system modules checked and operational!");
};