import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    // 2xl pra mobile e 3xl pro restante das resoluções... ~chakra breakpoints
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
