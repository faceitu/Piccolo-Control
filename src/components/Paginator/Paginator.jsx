import useEffect from "react";
import { Text, Button, Select, HStack } from "@chakra-ui/react";

const Paginator = (props) => {
  const handleChange = (event) => {
    props.showPerpage(Number(event.target.value));
  };

  return (
    <HStack
      width="70%"
      alignItems={"center"}
      justifyContent={'center'}
      flexDirection={"colum"}
    >
      <HStack justifyContent={"center"} alignItems={"center"} width={"70%"}>
        

      <HStack
        width={"80%"}
        flexDirection={"colum"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Select
          onChange={handleChange}
          placeholder="Select option"
          width={"160px"}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </Select>
      </HStack>
        <HStack width={"80%"} alignItems={"center"}>
          <Text as="b" fontSize={14}>
            Showing {props.currentPage} to 10 of {props.totalItems} Results
          </Text>
        </HStack>
        <HStack width={"30%"} flexDirection={"row"} >
          <Button colorScheme="blue" onClick={props.backPage} height={'24px'}>
            Prev
          </Button>
          <Button colorScheme="blue" onClick={props.nextPage} height={'24px'}>
            Next
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Paginator;
