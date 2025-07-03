# TenTwenty Assignment

The assignement consists of images and texts too be rendered followed by animation.Best practices to be followed to account for initial load time and smooth operation and navigation throughout the project.

#Implementation

- Project build from scratch configuring webpack,babel,tailwind
- Setting up the project structure
- Optimization methods - lazy loading, fallback , useMemo, React.memo, image optimization, image loader for non hero images, react intersection observer
- Structured the components in a way that it renders as little as possible, to not be put load on the DOM
- Utilised react hooks as and when required
- Took care of the naming convention for constants, variables, boolean and functions
- Animations implemented as per the references
- Modularised tailwind classes and components
- Image optimization performed by converting to .webp files
- Data to be used by the project separately stored for it to be imported in required components
- Styling involved tailwind css incorporation and CSS3
- Semantic tags for better readability

#Details

- App -> describes the entire layout of the project
- AppBar -> Displays the navigation Bar
- ImageFade -> comprises the hero Images that is visible on load, the texts and encompasses the ProgressiveSquare component, and the cycle count that is displaying the index of the image being displayed (https://vimeo.com/806304396/9613ac1aba)
- ProgressiveSquare -> has the preview images along with the square loader
- DynamicProgressCycle -> is the actual loader that can be resused anywhere
- About -> the text section which needs to be animated according to https://www.kca-int.com/
  -ImageSlider -> The carousel that needs to be dragged to change position (https://vimeo.com/806273148/35db756bf7)

#Challenges Faced

- Tailwind utility classes such as h-4 w-4 not functional, so implemented h-[16px] w-[16px]
- Importing components with exact file directory along with extension
