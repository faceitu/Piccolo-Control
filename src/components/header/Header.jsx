import { Flex, Link, Stack, Text, HStack } from "@chakra-ui/react";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link as Linki } from "react-router-dom";
import { setCurrentUser } from "../../redux/user/userSlice";
import LogSuccessful from "../logsuccessful/LogSuccessful";
import OutSuccessful from "../logOutSuccessful/OutSuccessful";
import { app } from "../../firebaseConfig";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const usersing = app.auth().currentUser;
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <>
      <Flex
        justify="space-between"
        w={"100%"}
        align="center"
        wrap="wrap"
        bg={theme.colors.secondary.dos}
        p={"20px"}
      >
        <HStack>
          {isAuthenticated && <HamburgerMenu />}
          <Text fontSize={"4xl"} color="white">
            Piccolo Polleria
          </Text>
        </HStack>

        <Flex
          justify={"space-between"}
          gap={10}
          align={"center"}
          color={"white"}
        >
          <Stack fontSize={20} _hover={{ cursor: "Pointer" }}>
            {isAuthenticated ? (
              <LogSuccessful user={user} />
            ) : (
              <OutSuccessful />
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
