const NexusVoice = {
    selectedGender: localStorage.getItem("nexus_voice_gender") || "female",
    synth: window.speechSynthesis,

    init() {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.onvoiceschanged = () => this.getVoices();
    },

    getVoices() {
        return this.synth ? this.synth.getVoices() : [];
    },

    setGender(gender) {
        this.selectedGender = gender;
        localStorage.setItem("nexus_voice_gender", gender);
        if (window.showToast) window.showToast(`Voice set to ${gender.toUpperCase()}`);
    },

    speak(text) {
        if (!this.synth) return;
        this.stop();

        const cleanText = text.replace(/[#*_`]/g, '').trim();
        if (!cleanText) return;

        const utter = new SpeechSynthesisUtterance(cleanText);
        const voices = this.getVoices();

        if (this.selectedGender === "male") {
            const male = voices.find(v => 
                v.name.toLowerCase().includes("male") || 
                v.name.toLowerCase().includes("david") || 
                v.name.toLowerCase().includes("george")
            );
            if (male) utter.voice = male;
            utter.pitch = 0.85;
            utter.rate = 0.95;
        } else {
            const female = voices.find(v => 
                v.name.toLowerCase().includes("female") || 
                v.name.toLowerCase().includes("zira") || 
                v.name.toLowerCase().includes("samantha")
            );
            if (female) utter.voice = female;
            utter.pitch = 1.15;
            utter.rate = 1.0;
        }

        this.synth.speak(utter);
    },

    stop() {
        if (this.synth && this.synth.speaking) {
            this.synth.cancel();
        }
    }
};

NexusVoice.init();
window.NexusVoice = NexusVoice;