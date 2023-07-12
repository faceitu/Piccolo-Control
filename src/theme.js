import {extendTheme} from "@chakra-ui/react";
import '@fontsource/roboto'

const theme = extendTheme({
  fonts: {
    heading: `'roboto'`,
    body: `'roboto'`,
  },

    colors: {
      primary: {
       main: "#fcfcfc",
       
      },
     secondary: {
        main: "#014ba0",
        dos: '#014ba0',
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