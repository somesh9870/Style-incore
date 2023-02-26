import { useToast } from "@chakra-ui/react";

function ToastEx({ title, message, status }) {
 const toast = useToast();
  return toast({
    title: title,
    description: message,
    status: status,
    duration: 5000,
    isClosable: true,
  });
}

export default ToastEx;
