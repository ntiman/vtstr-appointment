# vetster-appointment

The initial idea for this small project was to prepare for the technical interview. I have decided to pick a random use case from vetster.com and implement it using Vue 3, Pinia and Vue Router. 

For this purpose, I have selected 'New appointment' use case - https://vetster.com/en-ca/gs. It is used as a part of the client unboarding process through wich the user needs to select the pet (cat, dog etc.), medical concern (eye infection, nutrition etc.) as well as the current location. After that the user is re-directed to the next part of the process where he can select the medical professional based on rating/experience/appointment price (this was outside the scope of my project).

Before jumping into building the use case, I have attempted to analyze the current implementation and see if there are any potential improvements to be made to it. Bellow, I want to present a list of my discoveries:

### 1. Navigation
On the home page (vetster.com), after clicking 'Book online vet now' the user is redirected to a stepper with three steps - pet selection, medical concern and location. 

After seelcting the pet on the first step, user is directed to the second one. Stepper navigation is then presented at the very bottom of the page, it has the 'Back' and 'Start over' buttons. The stepper navigation only appears on the second step and also the fact that it is not clearly visible to the user due to the font size, lack of color. Due to that I was not able to see it, and in order to make a change to my previous selection on the step one I have used a broser back button, which led to exiting from the stepper back to the home button. Same applies for the third step - if you use in broser navigation, you will be redirected from the thirs step back to the home screen.

There are two ways of addressing this issue:

1) Make stepper navigation more evident by changing it's position on the screen (move it from bottom to top), increasing the button visiblitity as well as making the stepper navigation visible on the step one (not on the step two), so that the user will instatly be aware of the possible navigation options and use it instead of the browser native 'Back' button.

2) Configure nested routing in the way that when the native broser 'Back' button is pressed, navigate to the previous step, instead of navigation to the home page. It could be done with the Vue Router.

Making these two changes will illiminate the frustration of going through the whole process all over again by simply trying to correct the previous selection made in the stepper. 

### 2. Inconsistent styles
Each step has a title: 'Who is the appointment for?', 'What are your concerns?' and 'Where are you lcoated?'. However, throughout the steps, each title has a different styling in terms of color, font size and font weight. It creates inconsistencies. Each step title should look the same so that it is easier and faster for the user to identify what the next step is. 

### 3. Stepper is not reactive to the user's answers
If on the step one user selects "Fish" as the pet, on the second step (where the concerns are lsited) you will still see options like 'Flea and tick' or 'Training and obedience' which are clearly not applciable to the selected animal. Due to that the list of concerns is crowded with unnescesary options. Same applies to the other animal types. The list of concerns should be filtered based on the selected pet.

### 4. Stored user selection


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
