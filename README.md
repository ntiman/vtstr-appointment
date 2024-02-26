# vetster-appointment

InitiallytThe idea for this small project was to prepare for the technical interview. I have decided to pick a random use case from vetster.com and implement it using Vue 3. 

For this purpose, I have selected 'New appointment' use case - https://vetster.com/en-ca/gs. It is used as a part of the client unboarding process through wich the user needs to select the pet (cat, dog etc.), medical concern (eye infection, nutrition etc.) as well as the current location. After that the user is re-directed to the next part of the process where he can select the medical professional based on rating/experience/appointment price (this was outside the scope of my project).

Before jumping into building the use case, I have attempted to analyze the current implementation and see if there are any potential improvements to be made to it. Bellow, I want to present a list of my discoveries:

### 1. Navigation
### 3. Inconsistent styles
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
