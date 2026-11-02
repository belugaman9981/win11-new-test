FEATURES = (
    {
        "name": "A fresh Start",
        "position": (21, 13),
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
        "position": (11, 10),
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
        "position": (6, 6),
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
        "position": (15, 4),
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
        "position": (23, 4),
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
        "position": (32, 6),
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
        "position": (36, 10),
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
        "position": (29, 12),
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
        "position": (18, 8),
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

MAP_WIDTH = 43
MAP_HEIGHT = 17
START_POSITION = (21, 13)
TREE_TILES = {
    (4, 4), (8, 3), (10, 5), (12, 7), (4, 9), (7, 11),
    (15, 12), (17, 3), (19, 5), (25, 6), (27, 8), (31, 4),
    (35, 7), (39, 8), (33, 13), (25, 14), (12, 14), (5, 13),
}
ROCK_TILES = {(9, 8), (13, 5), (26, 10), (34, 12), (30, 3)}
SHELL_TILES = {(3, 6), (8, 14), (16, 6), (26, 3), (38, 10)}
CRAB_POSITION = (22, 8)
CHEST_POSITION = (21, 8)
CRAB_DIALOGUE = (
    "Byte the crab says: 'Welcome to the island! I accept shells and compliments.'",
    "Byte the crab says: 'I tried Snap Layouts. Now my sandcastles have nine windows.'",
    "Byte the crab says: 'A shell a day keeps the seagulls... actually, no it doesn't.'",
    "Byte the crab says: 'You look very shell-f confident, explorer!'",
)


def ask_question(feature):
    while True:
        for number, choice in enumerate(feature["choices"], start=1):
            print(f"  {number}. {choice}")
        answer = input("Your answer (1-4): ").strip().lower()
        if answer in ("q", "quit"):
            return None
        if answer in ("1", "2", "3", "4"):
            return int(answer) == feature["answer"]
        print("Please enter 1, 2, 3, or 4.")


def build_island():
    island = []
    center_x = MAP_WIDTH // 2
    center_y = MAP_HEIGHT // 2
    for y in range(MAP_HEIGHT):
        row = []
        for x in range(MAP_WIDTH):
            inside_island = (
                ((x - center_x) / 20) ** 2 + ((y - center_y) / 8) ** 2 <= 1
            )
            row.append("." if inside_island else "~")
        island.append(row)

    hub = (center_x, center_y)
    routes = [(START_POSITION, hub)]
    routes.extend((hub, feature["position"]) for feature in FEATURES)
    for start, destination in routes:
        x, y = start
        target_x, target_y = destination
        while x != target_x:
            island[y][x] = "="
            x += 1 if target_x > x else -1
        while y != target_y:
            island[y][x] = "="
            y += 1 if target_y > y else -1
        island[y][x] = "="

    for x, y in TREE_TILES:
        island[y][x] = "T"
    for x, y in ROCK_TILES:
        island[y][x] = "#"
    for x, y in SHELL_TILES:
        island[y][x] = "$"
    for number, feature in enumerate(FEATURES, start=1):
        x, y = feature["position"]
        island[y][x] = str(number)
    x, y = CRAB_POSITION
    island[y][x] = "B"
    x, y = CHEST_POSITION
    island[y][x] = "C"
    return island


def draw_map(island, player, unlocked, collected_shells, chest_opened):
    print("\n" + "=" * 58)
    print("                    PERK ISLAND")
    print("=" * 58)
    for y, row in enumerate(island):
        visible_row = []
        for x, tile in enumerate(row):
            if (x, y) == player:
                visible_row.append("@")
            elif tile.isdigit() and int(tile) in unlocked:
                visible_row.append("*")
            elif tile == "$" and (x, y) in collected_shells:
                visible_row.append(".")
            elif tile == "C" and chest_opened:
                visible_row.append("c")
            else:
                visible_row.append(tile)
        print("".join(visible_row))
    print(
        "~ water  . grass  = trail  T tree  # rock  $ shell  B Byte  "
        "C chest  1-9 perk  * unlocked  @ you"
    )


def show_feature(feature):
    print(f"\n--- {feature['name']} ---")
    print(feature["description"])
    print(f"Try it: {feature['try_it']}")
    print(feature["question"])


def play_game():
    print("=" * 58)
    print("                 THE WINDOWS 11 PERK QUEST")
    print("=" * 58)
    print(
        "Explore a small island, find its nine perk markers, and answer "
        "questions to unlock what each feature does."
    )
    print(
        "Move with W/A/S/D, interact with E, and quit with Q. Trees, rocks, "
        "and water block your path. Collect shells, chat with Byte the crab, "
        "and open the treasure chest!"
    )
    print(
        "Feature availability can depend on your Windows update, region, "
        "and PC hardware."
    )
    input("\nPress Enter when you're ready to start...")

    island = build_island()
    player_x, player_y = START_POSITION
    unlocked = set()
    collected_shells = set()
    chest_opened = False
    crab_chats = 0

    while True:
        draw_map(
            island,
            (player_x, player_y),
            unlocked,
            collected_shells,
            chest_opened,
        )
        print(f"Perks discovered: {len(unlocked)}/{len(FEATURES)}")
        print(f"Shells collected: {len(collected_shells)}/{len(SHELL_TILES)}")
        command = input("What would you like to do? ").strip().lower()
        if command in ("q", "quit"):
            print("\nThanks for exploring Perk Island!")
            break
        if command in ("w", "a", "s", "d"):
            offsets = {"w": (0, -1), "a": (-1, 0), "s": (0, 1), "d": (1, 0)}
            offset_x, offset_y = offsets[command]
            next_x = player_x + offset_x
            next_y = player_y + offset_y
            if not (0 <= next_x < MAP_WIDTH and 0 <= next_y < MAP_HEIGHT):
                print("That way is blocked.")
                continue
            tile = island[next_y][next_x]
            if tile in ("~", "T", "#"):
                print("That way is blocked.")
            else:
                player_x, player_y = next_x, next_y
                if tile == "$" and (next_x, next_y) not in collected_shells:
                    collected_shells.add((next_x, next_y))
                    print(
                        f"Shiny shell collected! "
                        f"({len(collected_shells)}/{len(SHELL_TILES)})"
                    )
            continue
        if command != "e":
            print("Use W, A, S, D to move, E to interact, or Q to quit.")
            continue

        tile = island[player_y][player_x]
        if tile == "B":
            dialogue = CRAB_DIALOGUE[crab_chats % len(CRAB_DIALOGUE)]
            print(dialogue)
            crab_chats += 1
            continue
        if tile == "C":
            if chest_opened:
                print("The chest is empty, but Byte says you can keep the lid.")
            elif len(collected_shells) < len(SHELL_TILES):
                remaining = len(SHELL_TILES) - len(collected_shells)
                print(
                    f"The chest is locked! Find {remaining} more "
                    f"{'shell' if remaining == 1 else 'shells'} first."
                )
            else:
                chest_opened = True
                print(
                    "The chest pops open! Inside is the legendary "
                    "Golden Mouse Trophy. You are now the Island Champion!"
                )
            continue
        if not tile.isdigit():
            print("Nothing to interact with here. Explore and look for markers!")
            continue

        feature_number = int(tile)
        feature = FEATURES[feature_number - 1]
        if feature_number in unlocked:
            print(f"You already unlocked {feature['name']}. Keep exploring!")
            continue

        show_feature(feature)
        correct = ask_question(feature)
        if correct is None:
            print("\nThanks for exploring Perk Island!")
            break
        if correct:
            unlocked.add(feature_number)
            print("Correct! Perk unlocked.")
            if len(unlocked) == len(FEATURES):
                print("\nYou found and unlocked every perk on the island!")
        else:
            correct_choice = feature["choices"][feature["answer"] - 1]
            print(f"Not quite. The answer is: {correct_choice}")
            print("The marker stays here. You can try again whenever you like.")

    print(f"Perks discovered: {len(unlocked)}/{len(FEATURES)}")
    print(f"Shells collected: {len(collected_shells)}/{len(SHELL_TILES)}")
    if chest_opened:
        print("Island Champion badge earned: Golden Mouse Trophy!")
    print("Keep exploring, and enjoy your Windows upgrade!")


if __name__ == "__main__":
    play_game()
