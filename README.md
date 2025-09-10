# Random Emoji Generator

## About The Project

A simple and fun web application that displays a random emoji with the click of a button. This project is a great example of how to use HTML, CSS, and JavaScript to create an interactive web application that fetches data from an external API.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

-   A modern web browser such as Google Chrome, Firefox, or Safari.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Navigate to the project directory
    ```sh
    cd "emoji generator"
    ```
3.  Open `index.html` in your browser.

## How to Use

-   Simply click the "Generate Emoji" button to see a new random emoji.

## Features

-   **Dynamic Emoji Generation:** Fetches a comprehensive list of emojis from the [Emoji API](https://emoji-api.com/).
-   **Random Display:** Displays a random emoji from the fetched list each time the button is clicked.
-   **User-Friendly Interface:** A clean, modern, and responsive design that is easy to use.
-   **Hover and Active Effects:** The "Generate Emoji" button has interactive hover and active effects for a better user experience.

## File Structure

```
.
├── index.html
├── script.js
└── style.css
```

-   `index.html`: The main HTML file that provides the structure of the web page.
-   `style.css`: The CSS file that contains the styles for the web page.
-   `script.js`: The JavaScript file that contains the logic for fetching and displaying the emojis.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## API Used

This project uses the [Emoji API](https://emoji-api.com/) to fetch the emojis. You can get your own free API key from their website.

## Customization

### Changing the API Key

1.  Open the `script.js` file.
2.  Find the following line of code:
    ```javascript
    let API = `https://emoji-api.com/emojis?access_key=c1097cb33d2a3e358346f3475597c7bb01b6e7d7`
    ```
3.  Replace the `access_key` with your own API key.

### Changing the Styles

1.  Open the `style.css` file.
2.  You can change the color scheme by modifying the CSS variables in the `:root` selector.
    ```css
    :root {
        --background-color: #1a1a1a;
        --surface-color: #2c2c2c;
        --primary-color: #8a2be2;
        --text-color: #ffffff;
        --font-family: 'Inter', sans-serif;
    }
    ```