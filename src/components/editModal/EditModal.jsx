import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const EditModal = (props) => { 
  console.log(props.data)
  const [open, setOpen] = useState(props.isOpen)
  
  const onClose = ()=> {
    props.isClose()
  }

  useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen]);

    return (
      <>
      {console.log('hola',open)}
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder = {props.data.NombrePrducto} ></Input>
            <Input placeholder= {props.data.CantidadProducto}></Input>
            <Input placeholder = {props.data.PrecioProducto} ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Save
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
}

export default EditModal

