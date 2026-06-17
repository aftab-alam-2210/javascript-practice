# Toast Notification Practice

A simple toast notification system built using JavaScript, HTML, and Tailwind CSS.

## Features

- Dynamic toast notifications using JavaScript
- Custom position support
  - Top Right
  - Top Left
  - Bottom Right
  - Bottom Left
- Auto dismiss after a specified duration
- Multiple toast messages support
- Uses Tailwind CSS for styling

## Configuration

```javascript
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    duration: 3,
});
```

## Example

```javascript
toaster("Download Done!");

setTimeout(() => {
    toaster("Your request has been accepted");
}, 3000);
```

## Technologies Used

- HTML
- JavaScript
- Tailwind CSS

## Learning Purpose

This project was created to practice:

- DOM Manipulation
- Higher Order Functions
- Closures
- Dynamic Element Creation
- setTimeout()
- JavaScript Event Flow
