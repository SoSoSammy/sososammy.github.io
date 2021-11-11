# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./desktop-order-summary-component.PNG)
![](./mobile-order-summary-component.PNG)

### Built with

- Flexbox
- Mobile-first workflow

### What I learned

By doing this project I learned that there is a lot to CSS that I don't know. I learned that I need much more practice with creating unique layouts with CSS, and that Frontend Mentor is a great resource to help me become familiar with creating things I have never attempted before.

One of my proudest moments when creating this project was when I finally figured out the background. I wanted to make sure the background covered the entire screen when you would resize it, so I used background-size: cover;. However, this made it so that the background was scaled up a lot, and was not what I wanted. I decided to try background-size: contain; and voil-à! It worked. I am also proud of the media query I used for the background image.

```css
body {
  background-color: var(--paleblue);
  background-image: url(./images/pattern-background-mobile.svg);
  background-repeat: no-repeat;
  background-size: contain;
}

@media screen and (min-width: 992px) {
  body {
    background-image: url(./images/pattern-background-desktop.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
```

### Continued development

I will continue working on expanding my knowledge of CSS with future projects. I will work on learning Flexbox and CSS Grid. I will also work on using effective and descriptive html elements, and assigning classes that are descriptive yet simple.

### Useful resources

- [Order Summary Component - Frontend Mentor Challenge by tsbsankara](https://www.youtube.com/watch?v=uaM5F8O_VI8&t=596s) - This video by tsbsankara helped me to complete this project. I was stumped and needed to see how others completed the order summary component project.

## Author

- Frontend Mentor - [@SoSoSammy](https://www.frontendmentor.io/profile/SoSoSammy)

## Acknowledgments

Like I said above, tsbsankara on YouTube helped me with this project. His video, Order Summary Component - Frontend Mentor Challenge helped me to learn how to use Flexbox to create this project. I followed along for the most part when doing this project, but added a few small changes to my own code, such as how I put in the background image, the font weights, and the Proceed to Payment and Cancel Order buttons.


