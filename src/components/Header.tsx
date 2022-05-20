import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
export function Header() {
  return (
    <Flex
      as="header"
      maxW={1480}
      w="100%"
      mx="auto"
      mt="4"
      px="6"
      h="20"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Bruno Filho</Text>
            <Text color="gray.300" fontSize="small">
              bruno@publi.com.br
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Bruno Filho"
            src="https://github.com/brunofilho1.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
