/**
 * Centralized Configuration for Birthday Template
 * Customize everything here without touching components or routing code.
 */
export const birthdayData = {
    // SEO & Document head metadata
    meta: {
        homeTitle: "Happy Birthday! ✨",
        homeDesc: "A dreamy birthday celebration template.",
        journeyTitle: "Our Journey — Timeline",
        journeyDesc: "A dreamy cinematic walk through our memories together.",
        galleryTitle: "Memories Gallery",
        galleryDesc: "A beautiful collection of our favorite moments.",
        finaleTitle: "A Special Wish for You",
        finaleDesc: "A beautiful ending to our story.",
    },

    // Home Page / Hero Section Settings
    hero: {
        subHeader: "✦ HAPPY BIRTHDAY ✦",
        puffyTitle: "BESTIE",
        targetName: "INSERT NAME HERE",
        introParas: [
            "Meet the most amazing person on earth... 💫",
            "The one who brings infinite laughter and happy vibes wherever they go.",
            "They are pure sunshine, spreading light all day, every day.",
            "This is a tiny space dedicated to celebrating their beautiful presence...",
            "Today is their special day, so let's check what wonders await ahead! 🎁"
        ],
        ctaText: "START JOURNEY",
    },

    // Journey Timeline Section Settings
    journey: {
        chapter: "CHAPTER ONE",
        title: "OUR STORY BEGINS",
        storyBlocks: [
            {
                image: "", // Leave blank to show beautiful auto-placeholder card. Add URL / import to customize
                imageAlt: "First Meeting Spot",
                side: "left" as const,
                tilt: -4,
                lines: [
                    "This is where your story begins... ✨",
                    "Write about your favorite memories, the inside jokes,",
                    "or the first place you two met and started talking.",
                    "Was it in a library, a coffee shop, or a random class? 📚",
                    "Share the funny moments, the long hours spent doing nothing,",
                    "and how a simple conversation quickly turned into",
                    "an unforgettable bond that you cherish today ✦",
                ],
            },
            {
                image: "", // Leave blank to show beautiful auto-placeholder card.
                imageAlt: "Unforgettable Adventures",
                side: "right" as const,
                tilt: 5,
                lines: [
                    "Here you can write about your adventures... 🚗",
                    "Tell a story about that one crazy road trip,",
                    "those late-night chats, or the funny nicknames you gave each other.",
                    "Through all the ups and downs, the high points and low points,",
                    "you've shared endless laughter, secrets, and late night walks.",
                    "Write a heartfelt thank-you note or a sweet line,",
                    "showing how grateful you are to have them in your life 💖",
                ],
            },
        ],
    },

    // Gallery Section Settings
    gallery: {
        headerTitle: "BEAUTIFUL MEMORY",
        youtubeMusicId: "g1uEqR5eFMo", // You tube Video ID for background music loop
        // Add images configurations here. Under template, we show customizable placeholders
        images: [
            { alt: "Memory Slide 1", tilt: -4, delay: 0.1 },
            { alt: "Memory Slide 2", tilt: 2, delay: 0.2 },
            { alt: "Memory Slide 3", tilt: -2, delay: 0.3 },
            { alt: "Memory Slide 4", tilt: 4, delay: 0.4 },
            { alt: "Memory Slide 5", tilt: -3, delay: 0.5 },
            { alt: "Memory Slide 6", tilt: 3, delay: 0.6 },
        ],
    },

    // Finale Section Settings
    finale: {
        headerTitle: "Happy Birthday!",
        letterParagraphs: [
            "Keep shining, keep smiling, and keep being the amazing person you are!",
            "Here is a little poem or custom thought you can share with them..."
        ],
        poem: [
            "Here's to the laughs we shared,",
            "Here's to the times you cared,",
            "May all your dreams come true,",
            "Happy Special Birthday to you!"
        ],
        wishes: [
            "I hope this year brings you infinite success, peace,",
            "and all the happiness you truly deserve.",
            "Always stay as cool and awesome as you are today ✨"
        ],
        creatorName: "YOUR NAME HERE",
        footerText: "made with ❤️ for a wonderful friend",
    },
};
export type BirthdayData = typeof birthdayData;
