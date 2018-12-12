# droplr-react-ui

A responsive UI library for React web applications.

## Library

### Components

To use components you can import them like this (e.g. Button component):

```
import { Button } from 'droplr-react-ui';
```

| Name         | Props                           | Props notes |
|:-------------|:--------------------------------|:------------|
| Button       | **children** - String           | The text that will appear as a button's content. |
|              | **type** - String *required*    | The button's type. Accepts `primary` and `secondary`. |
|              | **Icon** - React Component      | A React Component that will render a SVG icon. |
|              | **onClick** - Function          | The button's callback. A function that will be executed after a click event. |
|              | **className** - String          | The button's additional class name. |
|              | **disabled** - Boolean          | If `true`, the button will appear in the disabled mode and will be unable to be clicked. `false` by default. |
|              | **loading** - Boolean           | If `true`, the button will appear in the loading mode and will be unable to be clicked. `false` by default. |
|              | **maxWidth** - Boolean          | If `true`, the button's width will increase to the 100% of it's container's width. `false` by default. |
|              | **dropdown** - Boolean          | If `true`, the button will appear with the dropdown icon on the right side. `false` by default. |
|--------------|---------------------------------|-------------|
| DropdownItem | **title** - String *required*   | |
|              | **TitleIcon** - React Component | |
|              | **description** - | |
|              | **Icon** - | |
|              | **className** - | |
|              | **active** - | |
|              | **onClick** - | |
|              | **href** - | |
|              | **target** - | |
|              | **showItemStatus** - | |
|              | **disabled** - | |

### Icons

To use icons you can import them like this (e.g. DownloadIcon):

```
import { DownloadIcon } from 'droplr-react-ui/icons';
```

## Storybook

The storybook contains all of the components in different states and all of the icons.
It helps you to understand how they work and how to use them.

To use our Storybook you can run it with this command:

```
npm run storybook
```
