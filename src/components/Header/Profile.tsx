import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
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
  );
}
