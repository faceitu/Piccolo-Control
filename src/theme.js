import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },

    colors: {
      primary: {
       main: "#fcfcfc",
       
      },
     secondary: {
        main: "#884299",
        dos: '#884299',
        tres: '#fff0ff',
        cuatro: '#dbb6ee'

      }
   },
   components: {
    Button: {
      variants: {
        "Mybutton": {
          bg: "#884299",
          boxShadow: "0 0 2px 2px #efdfde",
          color: 'white'
        },    
      },
    }}})
  
 export default theme