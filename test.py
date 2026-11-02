import webbrowser
from pathlib import Path


def main():
    game_url = Path(__file__).with_name("game.html").resolve().as_uri()
    if not webbrowser.open_new(game_url):
        raise RuntimeError("Could not open the game in your web browser.")
    print("Perk Island opened in your web browser.")


if __name__ == "__main__":
    main()
