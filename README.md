# Marko Valuh - Portfolio Website

## About this application

This application my personal portfolio.

## Steps to reproduce to start the application

- In the console or the integrated terminal within the directory of the project run the following command:

  ```
  npm start
  ```

  This will start the development server.
  **The build version of the website is up on Github Pages**

## Website showcase

- Upon opening the website, use either your _mousewheel_ or _arrow keys_ to explore the website
- Each page has something to show, play around :)
- The _Projects page_ is a showcase of the things I have created over my career. Each of the projects is clicable. On the right side of the screen, you can preview the project on one of three devices added

## Tech decisions

- [ReactJS](https://reactjs.org/)
- [SASS](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
- [ReactRouter](https://reactrouter.com/)
- [FramerMotion](https://www.framer.com/motion/)
- [MaterialUi](https://mui.com/)

## Project Structure

- The core of the project is located in **App.js**, which includes the core structure, routing and animation pressence (a requirement for _Framer Motion_);
- All the components are in the **components** folder:
  1. **About.js** - This is a descriptive component.
  2. **Contact.js** - Last page of the webiste, contains all social links, and uses styles from _MUI_ for more styalized tooltips
  3. **Cursor.js** - Custom cursor component. (_Still in development_)
  4. **Home.js** - This is a descriptive component. This is the first thing you see when you enter the website
  5. **Navigation.js** - This component shows the page that you are currently on and acts as a navigation. (_Still in development_)
  6. **Projects.js** - Projects page component, contains the necessary logic for switching between projects and devices. Contains:
  - **SoloProject.js** - Acts as a display for the selected project. Contains all the devices as individual smaller components.
  7. **Skills.js** - This is a descriptive component.
- The **imageHolder** holds all the relative paths to the images located in the _images_ folder
- There are 4 custom Hooks created as a necessity for the project:
  1. **useEventListener** - Allows us to use the native event listener functionality
  2. **useLoop** - Designed with intentions to minimize code repentence, mainly used to make more copies of the same component with less code.
  3. **useTraverse** - This hook allows us to use our mouse or keyboard to scroll through the website. Enables switching betwen React Router routes without the need of an implemented clickable navigation
  4. **useWindowDimensions** - Used for website responsiveness.

## Points for improvements

- Creating a more managable, global state, with either useReducer or Redux
- Implementing the custom cursor feature with less impact on the performance of the website.
- Implementing a clicable navigation
- Creating animated popups to help the user navigate through the site easier
- Separating component into more individual pieces
