# os-command-injection - Projekt BAWiM
## Uruchomienie aplikacji
1. Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/en), Pythona i [Burp Suite](https://portswigger.net/burp/releases/professional-community-2023-11-1-4?requestededition=community&requestedplatform=)
2. Sklonuj repozytorium
3. Stwórz Pythonowe virtual environment w folderze projektowym (`python -m venv venv`/`python3 -m venv venv`)
4. Uruchom venv (`.\venv\Scripts\Activate.ps1` na Windowsie lub `source venv/bin/activate` na Linuxie/MacOS) - na Windowsie prawdopodobnie trzeba odpalić najpierw `Set-ExecutionPolicy Unrestricted -Scope Process` jeśli używasz Powershella. Jeżeli i tak nie działa sróbuj odpalić w adminowym terminalu
5. Zainstaluj Pythonowe dependencies (`pip install -r requirements.txt`)
6. (prawdopodobnie) dodaj folder z instalacją Node.js do PATHa (ten w którym go zainstalowałeś, na Windowsie pewnie `C:\Program Files\nodejs`)
7. Wykonaj `npm install`
8. W VS Code może to nie zadziałać, w takim przypadku wejdź w VS Codowe menu z komendami `CTRL+Shift+P` i wpisz `ext install npm script runner`, i wtedy `npm install`
9. (z jakiegoś powodu) wykonaj `npm install -g http-server`
10. Zanim uruchomisz aplikację włącz Burp Suite, przejdź do Proxy > Intercept, kliknij "Open browser" i "Intercept is off"
11. Uruchom serwer z frontendem (`http-server` w `src/frontend`  - na Windowsie użyj Node.js command prompt)
12. Uruchom serwer z backendem (`python app.py`/`python3 app.py` w `src/backend`)
13. Aplikacja powinna pojawić się na http://localhost:8081/ (albo nie - zobacz co mówi http-server po włączeniu)
14. Przy przechwytywaniu przez Burp dodaj kropkę przed dwukropkiem w adresie (http://localhost:.8081/). Burp nie lubi stron hostowanych lokalnie i czasami bez tej kropki nie chce przechwytywać. Jeżeli i tak nie działa, upewnij się że strona w ogóle działa w normalnej
15. przeglądarce, a w tej od Burpa spróbuj użyć innej formy adresu lokalnego:  http://192.168.0.86:8081, http://127.0.0.1:8081, http://172.21.224.1:8081 (z kropkami albo bez)

# WSZYSTKIE INJECTOWANE KOMENDY BĘDĄ WYKONYWANE NA TWOIM KOMPUTERZE, WIĘC NIE WYKONUJ DESTRUKTYWNYCH KOMEND!

## Przykładowe niedestruktywne komendy na Windows:
1. whoami
2. dir
3. timeout 5

## Przykładowe niedestruktywne komendy na Linux:
1. whoami
2. ls
3. sleep 5

## Zadanie 1: Prosty przypadek OS command injection
Znajdź podatność na stronie. Wykorzystaj Burp Suite.
Aplikacja wykonuje skrypt z wykorzystaniem wartości podanych przez użytkownika.
Wykonaj komendę - jej raw output powinien pojawić się w response.

## Zadanie 2: Ślepe szukanie podatności
Znajdź inną podatność na stronie - w tym zadaniu w response nie uzyskasz wyniku komendy, dlatego musisz w inny sposób sprawdzić czy input jest podatny na OS command injection.

## Zadanie 3: Inny sposób na otrzymanie wyniku komendy
Wykorzystaj podatność znalezioną w poprzednim zadaniu. W tym zadaniu będziesz musiał przekazać wynik komendy do pliku, który następnie trzeba "zrequestować" - uzyskać dostęp do interesującej nas zawartości tego pliku poprzez innego requesta.

Informacja i podpowiedź:
Zadanie można wykonać nawet bez znajomości katalogu serwera: Jedyną potrzebną informacją jest ścieżka do folderu "img".
W tym przypadku to: "../src/frontend/img"

