FEATURES = (
    {
        "name": "A fresh Start",
        "description": (
            "Windows 11 gives Start and the taskbar a redesigned, centered "
            "look, with a simpler pinned-apps and recommendations layout."
        ),
        "try_it": "Open Start or visit Settings > Personalization > Taskbar.",
        "question": "Which change is part of the Windows 11 redesign?",
        "choices": (
            "A centered taskbar and redesigned Start menu",
            "The return of desktop gadgets from Windows Vista",
            "A requirement to use Live Tiles",
            "Removing the desktop",
        ),
        "answer": 1,
    },
    {
        "name": "Snap Layouts",
        "description": (
            "Snap Layouts make it easier to arrange several apps side by side "
            "using ready-made window arrangements."
        ),
        "try_it": "Hover over a window's maximize button, or press Windows+Z.",
        "question": "What does Snap Layouts help you do?",
        "choices": (
            "Change your wallpaper automatically",
            "Arrange open windows into layouts",
            "Install apps without the Store",
            "Record your screen",
        ),
        "answer": 2,
    },
    {
        "name": "Widgets",
        "description": (
            "The Widgets board brings glanceable information, such as weather "
            "and news, together in one personalized panel."
        ),
        "try_it": "Open Widgets from the taskbar or press Windows+W.",
        "question": "Where can you find the Windows 11 Widgets board?",
        "choices": (
            "Inside the Recycle Bin",
            "In the BIOS setup screen",
            "On the Widgets board",
            "Only in File Explorer",
        ),
        "answer": 3,
    },
    {
        "name": "File Explorer tabs",
        "description": (
            "File Explorer tabs let you keep multiple folders in one window "
            "instead of opening a separate window for every folder."
        ),
        "try_it": "Open File Explorer and select the + button to add a tab.",
        "question": "What do File Explorer tabs let you do?",
        "choices": (
            "Browse multiple folders in one window",
            "Turn folders into live websites",
            "Replace the taskbar",
            "Run Android apps",
        ),
        "answer": 1,
    },
    {
        "name": "Focus sessions",
        "description": (
            "Focus sessions in the Clock app give you a timed work session "
            "and can help reduce distractions."
        ),
        "try_it": "Search for Clock, then open Focus sessions.",
        "question": "Which Windows 11 app includes Focus sessions?",
        "choices": ("Paint", "Clock", "Camera", "Calculator"),
        "answer": 2,
    },
    {
        "name": "Voice Access",
        "description": (
            "Voice Access lets you control your PC and dictate text with "
            "spoken commands. Language availability varies."
        ),
        "try_it": "Look under Settings > Accessibility > Speech.",
        "question": "What is Voice Access designed to do?",
        "choices": (
            "Control the PC and dictate using voice",
            "Turn every app into a game",
            "Translate files automatically",
            "Make your PC louder",
        ),
        "answer": 1,
    },
    {
        "name": "Dynamic Lighting",
        "description": (
            "For compatible accessories, Dynamic Lighting lets you manage "
            "RGB lighting from Windows settings."
        ),
        "try_it": "Check Settings > Personalization > Dynamic Lighting.",
        "question": "What can Dynamic Lighting manage on compatible devices?",
        "choices": (
            "The brightness of every monitor in the world",
            "RGB lighting on supported accessories",
            "Your internet provider",
            "The color of printed documents",
        ),
        "answer": 2,
    },
    {
        "name": "Windows Studio Effects",
        "description": (
            "On supported hardware, Studio Effects can enhance video calls "
            "with effects such as background blur or automatic framing."
        ),
        "try_it": "On supported PCs, look in Settings > Bluetooth & devices > Cameras.",
        "question": "What might Studio Effects improve on supported PCs?",
        "choices": (
            "Video-call camera effects",
            "The speed of every website",
            "Printed photo quality",
            "The number of USB ports",
        ),
        "answer": 1,
    },
    {
        "name": "Auto HDR",
        "description": (
            "On a supported HDR display, Auto HDR can add HDR color and "
            "brightness to some older games that were made for SDR."
        ),
        "try_it": "Check Settings > System > Display > HDR.",
        "question": "What does Auto HDR do for some supported games?",
        "choices": (
            "Adds HDR visuals when you have a supported HDR display",
            "Makes every game run without a graphics card",
            "Streams games without an internet connection",
            "Automatically installs paid games",
        ),
        "answer": 1,
    },
)


def ask_question(feature):
    while True:
        for number, choice in enumerate(feature["choices"], start=1):
            print(f"  {number}. {choice}")
        answer = input("Your answer (1-4, or Q to quit): ").strip().lower()
        if answer in ("q", "quit"):
            return None
        if answer in ("1", "2", "3", "4"):
            return int(answer) == feature["answer"]
        print("Please enter 1, 2, 3, 4, or Q.")


def play_game():
    print("=" * 54)
    print("          THE WINDOWS 11 PERK QUEST")
    print("=" * 54)
    print(
        "Travel through nine stops to discover standout Windows 11 "
        "features that Windows 10 did not include in this form."
    )
    print(
        "Answer each question to earn a point. Press Q any time you want "
        "to end your tour."
    )
    print(
        "Feature availability can depend on your Windows update, region, "
        "and PC hardware."
    )
    input("\nPress Enter when you're ready to start...")

    score = 0
    for stop, feature in enumerate(FEATURES, start=1):
        print(f"\n--- STOP {stop} OF {len(FEATURES)}: {feature['name']} ---")
        print(feature["description"])
        print(f"Try it: {feature['try_it']}")
        print(feature["question"])

        correct = ask_question(feature)
        if correct is None:
            print("\nTour ended early. Thanks for exploring!")
            break
        if correct:
            score += 1
            print("Correct! Perk unlocked.")
        else:
            correct_choice = feature["choices"][feature["answer"] - 1]
            print(f"Not quite. The answer is: {correct_choice}")

        if stop < len(FEATURES):
            input("Press Enter for the next stop...")
    else:
        print("\nYou completed the Windows 11 Perk Quest!")

    print(f"Your score: {score}/{len(FEATURES)}")
    print("Keep exploring, and enjoy your Windows upgrade!")


if __name__ == "__main__":
    play_game()
