import { Flex, Link, Stack, Text } from "@chakra-ui/react";
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

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const usersing = app.auth().currentUser;

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
        <Text fontSize={"2xl"} color="white" marginLeft={"20px"}>
          Piccolo
        </Text>
        <Flex
          justify={"space-between"}
          gap={10}
          align={"center"}
          color={"white"}
        >
          <Stack fontSize={20} _hover={{ cursor: "Pointer" }}>
            {user ? <LogSuccessful user={user} /> : <OutSuccessful />}
          </Stack>

          <Stack>{user && <HamburgerMenu />}</Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
