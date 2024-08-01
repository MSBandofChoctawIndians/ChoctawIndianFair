# Choctaw Indian Fair Website

An event website built with [Github Pages](https://pages.github.com) and [Bootstrap 5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

See it live in action at <https://www.choctawindianfair.com/>

## Home Page

Home page shows background video on desktop and tablets, but shows a static image on phones and devices without mouse pointers. Countdown timer is generated from `_includes/countdown-timer.html` with a message, end date, and border color css class.

## Events Page

Events page uses a for loop and pulls information from YAML files in the `_data/schedule/` folder.
Event tabs will have an `active` css class for three scenarios:
1. Current date is before or matches first day of fair schedule (current day <= first day of fair)
2. Current date matches one of the days of fair schedule (current day = any day of fair)
3. Current date is after or matches last day of fair schedule (current day >= last day of fair)
These equations will allow for the active tab shown to be the most relevant.

Events are generated using a for loop and pulls information from YAML files in the `_data/schedule/` + day# + events.yml.

All event cards link to their coresponding pages (ie. culture, stickball, pageant, competitions). But the card footers link to `Visitor Info/` to see the fair map.

## Stickball Page

Countdown timer is generated from `_includes/countdown-timer.html` with a message, end date, and border color css class.

Score cards are generated in html and css. The only image present is the WSS logo. Each division runs a for loop to generate score cards. Information for these score cards are pulled from '_data/games/' + division. Card colors are defined in 'assets/main.scss' where each team has a CSS class (ie. card-unified). Each score card also links to a modal that is generated after the for loop. Each modal is created in '_includes/modal/' + division + game##.html. Each of these includes runs a for loop to pull roster information on each teach from '_data.rosters/' + division + team + players.yml. Coaches for each team are also pulled from coaches.yml in the same folder.

## Competitions Page

Competitions page uses a for loop and pulls information from YAML files in the `_data/comp/` folder. `firstAction` and `secondAction` are used to generate the buttons for each card.

## Footer

Footer is generated from `_includes/footer.html` and runs a for loop that is generated from `_data/sponsors/cards.yml`. Level defined in YAML file is used for the CSS class for background color (ie. card-platinum) and the text below each image (ie. PLATINUM SPONSOR).
