import React from "react";

const StyleContext = React.createContext();

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;

//// Possible solution to starting it on darkmode
// import React, {createContext, useState} from "react";

// // Create a context
// const StyleContext = createContext();

// // Create a provider component
// export const StyleProvider = ({children}) => {
//   // Set dark mode as default
//   const [isDark, setIsDark] = useState(true); // Default set to true (dark mode)

//   const toggleTheme = () => {
//     setIsDark(!isDark); // This function will toggle the theme
//   };

//   return (
//     <StyleContext.Provider value={{isDark, toggleTheme}}>
//       {children}
//     </StyleContext.Provider>
//   );
// };

// export default StyleContext;
