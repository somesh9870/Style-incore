import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import axios from "axios";
  import ToastEx from "../Components/ToastEx";
  
  // let initVal = {
  //   email: "",
  //   password: "",
  // };
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("pistol");
    const toast = useToast();
  
    //   const handleInput = (e) => {
    //     const { name, value } = e.target;
  
    //     setFormState({ ...formState, [name]: value });
    //   };
  
    const handleSubmit = async () => {
      // e.preventDefault();
      // setUserInfo({ ...formState, userInfo });
      try {
        let res = await axios.post(`https://reqres.in/api/register`, {
          email,
          password,
        });
        console.log(res.data);
  
        // return (toast = (
        //   <ToastEx
        //     title={"Account Created"}
        //     message={"We've created your account for you."}
        //     status={"success"}
        //   />
        // ));
  
        return toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
        return toast({
          title: "Account not created",
          description: "Wrong Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        // return (
        //   <ToastEx
        //     title={"Failed"}
        //     message={"Wrong username or password"}
        //     status={"error"}
        //   />
        // );
      }
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <RouterLink to={"/login"} color={"blue.400"}>
                    Login
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  