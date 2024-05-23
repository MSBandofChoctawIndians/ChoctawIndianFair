# Choctaw Indian Fair

This is the codebase for the Choctaw Indian Fair website.

## Description

The Choctaw Indian Fair is an annual event that takes place on our centuries-old homeland in beautiful Choctaw, Mississippi. This project contains the website for the fair, providing information and updates about the event.

## Project Structure

The project has the following structure:

- `public/`: This directory contains static files like images, fonts, and the `index.html` file.
  - `img/`: This directory contains all of the static image files.
  - `pdf/`: This directory contains all of the PDFs forms.
  - `vid/`: This directory contains all of the static video files used for [BackgroundVid.tsx](src/components/BackgroundVid.tsx).
- `src/`: This directory contains all the source code for the project.
  - `components/`: This directory contains all the React components used in the project.
  - `data/`: This directory contains all of the data used in the project.
  - `routes/`: This directory contains the page components. Each file corresponds to a route in the application.
  - `index.css`: This directory contains all the CSS styling for the components and pages. See also [Tailwind Config](tailwind.config.js) for additional CSS styling classes.
- `package.json`: This file contains the list of project dependencies and scripts.

To update a specific part of the code, navigate to the corresponding file in the project structure. For example, to update the Home page, you would modify the file `src/routes/home.tsx`.

## Installation

To install the project, follow these steps:

1. Clone the repository
2. Run `npm install` to install the dependencies

## Usage

To start the development server, run `npm start`.
