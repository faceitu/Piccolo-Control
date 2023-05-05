import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
      primary: {
       main: "#fcfcfc",
       
      },
     secondary: {
        main: "#f8835a",
        dos: '#f8956e',
        tres: '#f8a782',
        cuatro: '#f9ba97'



      }

   },
   components: {
    Button: {
      variants: {
        "Mybutton": {
          bg: "#f5781b",
          boxShadow: "0 0 2px 2px #efdfde",
          color: 'white'
        },    
      },
    }}})
  
 export default theme