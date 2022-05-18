# DEPT Frontend Code Challenge - Rafael Cruz Fuentes

## Libraries

### Node v16.14.1
...or none of this can even happen....

### Yarn v1.22.18
Personal preference.

### Babel v7.17.10
Just a great compiler. 

### React v18.1.0
Reasons to choose React:
- Easy to use
- Great community and support
- Amazing abstraction with Functional Components
- One-way data binding and callbacks keep things simple and clean
- Is the one I a most experienced with

### Webpack v5.72.1 and a few loaders
Reason to choose Webpack:
- Great community and support
- Well stablished
- Highly configurable
- Plenty of plugins

### Typescript v4.6.4 and some types
Builds better/more reliable software, it is quite hard to get used to it (speaking for myself), and I am finally getting comfortable with it.

### TailwindCSS v3.0.24
Tailwind is just great. This project has 0 lines of custom CSS.

### Other
- React Hook Forms: Not actually needed here since I am not manipulating data at the from. Just something I use constantly.
- ESLint: Just my favorite linter, find and fix errors.
- Prettier: Prefered code formatter, integrated with VSCode.
- React Hot Loader: Real time React Component editing and preview, being replaced by React Fast Refresh soon.
- YUP: Schema validation

### Important notes
- I stuck to the units and sizes provided by Tailwind (ex; Figma font size 28px ->  tailwind's "text-3xl"  = 1.875rem = 30px).
- I also stuck to Tailwind's break points (640, 768, 1024, ...). But focused on 640 to 1024 (min width tested is 360px).
- Name convetions could be a bit inconsistent.
- I have loaded the mock json files directly into react, normally I would create a service to handle API requests (fetch/async) and retrieve raw and filtered fata to the components. 
- My customs types are bit dumb, but you get the gist, right?
- Kept the image assets in the `dist` folder to simulate a dynamic src load.
- Links and buttons won't work. Form validation 'sorta' does.
- Saw no need to add/do Routing.
- Didn't work on the filters, decided to focus on other concepts.
- Added assets in Figma as SVG directly into React.
- Yarn throws some warnings, nothing too important.

## Running the project
1. Run `Yarn` to install dependencies.
2. Run `Yarn run start` for development environment at localhost:3000.
3. `Yarn run lint` to run `ESLint`.
4. `Yarn run format` to format with `Prettier`. 
