# React state Lab

In this lab, you'll create functional components that store state.

## Getting started

To get started, clone this repository into the CS50 IDE:

```bash
git clone https://github.com/upperlinecode/react-state-lab
```

> Note: if you have other React projects in CS50, you may run out of allocated memory. If that happens, we recommend deleting the `node_modules/` folder of other projects to free up some space.

Then switch into the project directory, and install the node modules:

```bash
# switch into the project directory
cd react-state-lab

# install the node modules
npm install
```

Once the installation is complete, you can start the development server using:

```bash
npm start
```

## To Do's

Overall, we will be converting the code in `App.js` into functional components that store state.

0. Inspect the code in `App.js` and `Components/TextInput.js`. Notice that the `<TextInput />` component has already been completed in `App.js` and will be a pattern to follow for other functional components with state.

1. Create a new component called `<DateInput />` that displays the date `input` selection in the `span` with the name `dateOutput`. You will need to:
	1. add an inline event to listen for when a change is made to the date `input`.
	2. create a property in the state object to store the value of the date.
	3. display the value of the state in the span.

> Don't forget to make the function name match the component name, to export the function from the component file, and to import the function into `App.js`.

2. Create a new component called `<NumberInput />` that displays the number `input` selection in the `span` with the name `numberOutput`.

3. Create a new component called `<ButtonInput />` that switches state between `true` and `false` when the button is pressed. Display the state in the `span` with the name `buttonOutput`.

> Consider using a ternary operator (or an `if` statement) to display the value of the state. You will not be able to display the state directly.

4. Create a new component called `<RadioInput />` that displays which radio button is selected in the `span` with the name `radioOutput`.

5. Create a new component called `<ColorInput />` that displays the selected color in the `span` with the name `colorOutput`. Then create and use an inline style to format the `BackgroundColor` of the `div` with the class `card-image` with the color selected by the input.

6. Create a new component called `<CheckboxInput />` that displays how many checkboxes are checked in the `span` with the name `checkboxOutput`.

7. Create a new component called `<RangeInput />` that displays the value of the input in the `span` with the name `rangeOutput`. Then style the `div` with the class `card-image` as black (0), white (100), or gradations of gray (between 0 and 100).

> Recall that color can be formatted using `rgb()` notation which takes three values between 0 and 255: `rgb(0, 0, 0)` is black, `rgb(255, 255, 255)` is white, and grays are in between with the same value for the three parameters, e.g. `rgb(120, 120, 120)` is medium-dark gray.

8. Create a new component called `<SelectInput />` that displays the value of the selection in the `span` with the name `selectOutput`. Then style the `BackgroundImage` of the `div` with the class `card-image` with a picture of the animal that was selected.

9. Create a new component called `<UrlInput />` that displays the value of the input in the `span` with the name `urlOutput`. Ensure that the URL in the output is clickable and sends a user to a new website.

10. Build a passcode lock component that only unlocks (or displays a "Success!" message to a user) when they input the correct value in each of four numerical `input` fields. For example, if the secret passcode is `1783`, the first box must contain a `1`, the second a `7`, the third an `8`, and the fourth a `3`, otherwise the user gets a "Failure to unlock" message.

