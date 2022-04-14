# Mobile Menu
This is a lightweight and customizable mobile menu for the web.

## Table of Contents
- [Deployed links](#globe_with_meridians-deployed-links)
- [Usage](#grey_exclamation-usage)
- [Features](#sparkles-features)
- [Installation](#wrench-installation)
- [Technology stack](#blue_book-technology-stack)
- [License](#scroll-license)

## :globe_with_meridians: Deployed links
The application is hosted at the following address:

- https://martenmatrix.github.io/mobile-menu/

## :grey_exclamation: Usage
1. Click the `+` to open and close the menu. Click an icon to select a menu item.
2. If you want to customize the menu to your needs, you'll just have to change some data in the `index.html` file.
	- If you want to change the image of a menu item, change the corresponding `src` attribute to the path of your new image.
	- If you want to change the default selected menu item on page load, replace all `main` class names with `not-main` class names. Then, on the element, which should be selected by default, replace the class name vice versa.
	- Assign the link, which your user should be re-directed to after pressing the corresponding menu item, to the `data-redirect` attribute.

> :warning: Currently the anchors are DIVS, this is bad for screen-readers. I plan on changing them to anchor tags.

If something does not work as expected, or you have a suggestion, please [create an issue](https://github.com/martenmatrix/mobile-menu/issues/new).

## :sparkles: Features
- mobile menu
- is able to collapse to prevent wasting space on the screen
- can re-direct to 4 different links

##  :wrench: Installation

If you want to run the application on your local pc or just want to contribute, do the following steps:
1. Clone the repository.
`git clone https://github.com/martenmatrix/mobile-menu`
2. Open up `index.html` or use an application like [Liver Server for VSC](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for your IDE to load the page.

## :blue_book: Technology Stack
This application is written in vanilla JavaScript.

## :scroll: License
[MIT](https://github.com/martenmatrix/mobile-menu/blob/main/LICENSE)
