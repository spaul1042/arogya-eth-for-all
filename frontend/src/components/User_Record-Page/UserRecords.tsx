import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  useColorModeValue as mode,
  VStack,
  Center,
  HStack,
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  extendTheme,
  Divider,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

import Head from "next/head";
import { useState } from "react";

function UserRecords() {
    const { isOpen, onOpen, onClose } = useDisclosure()
   

    const OverlayOne = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropBlur='5px'
        />
      )

    const [overlay, setOverlay] = useState(<OverlayOne />);
    
    const [Name, SetName] = useState("Nithin Varma")
    const [Age, SetAge] = useState("20");
    const [Blood, SetBlood] = useState("A+");
    const [Allergies, SetAllergies] = useState("NIL");
    const [Medications, SetMedications] = useState("NIL");
    const [About, SetAbout] = useState("Nithin Varma ");

    return (

        <>
        <Box h="100vh" p={12} marginTop={'40'} >
            {/* <Center> */}
            <Card bgColor={'teal'} color={'white'} w={'1000px'} letterSpacing={'normal'} marginBottom={'24'}>
                <Stack
                    spacing={{base:'', md:'200'}}
                    marginInline={'auto'}
                    py={12}
                    align='center'
                    direction={{ base: 'column', md: 'row' }}
              
                >
                    <VStack>
                        <CardHeader>
                            <Heading textAlign={'start'}>{Name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack
                                spacing={8}
                                align='start'
                                w={{ base: '100%', md: '50%' }}
                                // py={{ base: 20, md: 0 }}
                            >
                                <Text as='b'>Age: {Age}</Text>
                                <Text as='b'>Blood_Group: {Blood}</Text>
                                <Text as='b'>Allergies: {Allergies}</Text>
                                <Text as='b'>Medications: {Medications}</Text>
                                <Text as='b'>About: {About}</Text>
                            </VStack>

                        </CardBody>
                        <CardFooter>
                            {/* <Button colorScheme="blue">Sign up</Button> */}
                        </CardFooter>
                    </VStack>
                    <Card bgColor={'#EBECF0'} color={'black'} padding={30}>
                        <CardHeader>
                            <Text as='h1' textAlign={'start'}>Latest Document</Text><br/>
                            <Heading as='h1' textAlign={'start'}>{Name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align={'start'} spacing={8}>
                                <Text as='b'>Issued By: </Text>
                                <Text as='b'>Hospital Reference: </Text>
                                <Text as='b'>Tags: </Text>
                                <Text as='b'>Date of Issue: </Text>
                            </VStack>

                        </CardBody>
                        <Center>
                            <CardFooter>
                                <Button colorScheme='teal' variant='solid'>Open File</Button>
                            </CardFooter>
                        </Center>
                        </Card>
                        </Stack>
                        <Center>
                        <Button 
                        size='md'
                        // border='2px'
                        boxShadow={'dark-lg'}
                        borderColor='black'
                        marginBottom={'15'}
                        colorScheme={'whatsapp'}  onClick={() => { setOverlay(<OverlayOne />)
                        onOpen()
                    }}>Upload New Document Here</Button></Center>
                    <Modal isCentered isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalContent>
                            <ModalHeader>Upload Document Here</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {/* <Text>Custom backdrop filters!</Text> */}
                                <Input
                                type ='file'
                                />
                                </ModalBody>
                                <ModalFooter>
                                    <HStack spacing={'6'}>
                                    <Button onClick={onClose}>Close</Button>
                                    <Button>Submit</Button>
                                    </HStack>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
        </Card>
          
           
        <Heading as='u'>Previous Documents:</Heading><br/>
        <Card  color={'white'} w={'1000px'} marginTop={'10'}>
                <Stack
                    spacing={'15'}
                    marginInline={'auto'}
                    py={12}
                    align='center'
                    // h='100vh'
                    // minW={'90%'}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <HStack spacing={1}  direction={{ base: 'column', md: 'row' }}>
                    <Card bgColor={'#EBECF0'} color={'black'} padding={30}>
                        <CardHeader>
                            <Heading textAlign={'start'}>{Name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align={'start'} spacing={8}>
                                <Text as='b'>Issued By: </Text>
                                <Text as='b'>Hospital Reference: </Text>
                                <Text as='b'>Tags: </Text>
                                <Text as='b'>Date of Issue: </Text>
                            </VStack>

                        </CardBody>
                        <Center>
                            <CardFooter>
                                <Button colorScheme='teal' variant='solid'>Open File</Button>
                            </CardFooter>
                        </Center>
                    </Card>
                    <Image 
                    src={'./assets/images/chain-link-icon.svg'}
                    h={'120px'}
                    // w={'full'}
                    />

                    </HStack>
                   
                    
                    <Card bgColor={'#EBECF0'} color={'black'} padding={30}>
                        <CardHeader>
                            <Heading textAlign={'start'}>{Name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack align={'start'} spacing={8}>
                                <Text as='b'>Issued By: </Text>
                                <Text as='b'>Hospital Reference: </Text>
                                <Text as='b'>Tags: </Text>
                                <Text as='b'>Date of Issue: </Text>
                            </VStack>

                        </CardBody>
                        <Center>
                            <CardFooter>
                                <Button colorScheme='teal' variant='solid'>Open File</Button>
                            </CardFooter>
                        </Center>
                    </Card>
                </Stack>
            </Card>
        </Box>  
        </>
        
    )

}

export default UserRecords;