import React from "react";
import { Text, Button, Select, HStack } from "@chakra-ui/react";
import { AddIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { getPagination } from "../../firebaseConfig";

const Paginator = (props) => {
  const handleChange = (event) => {
    props.showPerpage(Number(event.target.value));
  };

  return (
    <HStack
      width="90%"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"colum"}
    >
      <HStack justifyContent={"flex-start"} alignItems={"center"} width={"70%"}>
        <Select
          onChange={handleChange}
          placeholder="Select option"
          width={"200px"}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </Select>
      </HStack>

      <HStack
        width={"80%"}
        flexDirection={"colum"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HStack width={"80%"} alignItems={"center"}>
          <Text as="b" fontSize={20}>
            Showing {props.currentPage} to 10 of {props.totalItems} Results
          </Text>
        </HStack>
        <HStack width={"20%"} flexDirection={"row"}>
          <Button colorScheme="blue" onClick={props.backPage}>
            Prev
          </Button>
          <Button colorScheme="blue" onClick={props.nextPage}>
            Next
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Paginator;
