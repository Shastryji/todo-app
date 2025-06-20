# Todo Board

A minimal Todo board built with React and Vite.

## How to Run Locally

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the app in your browser (http://localhost:5173)

## Approach 

- Functional components only, no class components.
- State is managed in the `App` component and passed down as props.
- API logic is separated in `src/api.js` and `src/api/todoService.js` for clarity.
- Minimal, clean UI using Tailwind CSS for styling.
- Drag and drop is implemented using native HTML5 drag events for simplicity.

## Optimizations

- Lifting state up: All todo state is managed in the top-level `App` component.
- Presentational and container separation: UI components (Board, Lane, TodoItem) are stateless and receive data via props.
- API calls are abstracted into service files for reusability and separation of concerns.
- Minimal re-renders by using React's key prop and functional updates.

## Trade-offs & Improvements

- No authentication or user management.
- Error handling is basic; could be improved.
- Drag and drop is basic; could be enhanced with better UX/UI.
- No persistent storage; all data is fetched from DummyJSON API.
- Could add more fields (tags, priorities) and filtering maybe.

## Known Limitations & Enhancements

- The app relies on a public API, so data is not persistent per user.
- No mobile-specific optimizations.
- If given more time: add authentication, better error handling, tests, and more features.