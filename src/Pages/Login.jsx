import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  export default function Login() {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const toast = useToast();
  
    const handleSubmit = async () => {
      try {
        let res = await axios.post(`https://reqres.in/api/login`, {
          email,
          password,
        });
        console.log(res.data);
  
        return toast({
          title: " Hurray! ",
          description: "Successfully Logged in",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
        return toast({
          title: "Oops",
          description: "Wrong Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <Flex justify={"space-between"}>
                <Text>Not a member?</Text>
                <RouterLink to={"/signup"}>
                  <Button>Sign Up</Button>
                </RouterLink>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    );
  }
  