import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tootip: {
      enabled: false,
    },
    xasis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-05-25T11:15:56.000Z",
        "2022-05-26T11:15:56.000Z",
        "2022-05-27T22:25:56.000Z",
        "2022-05-28T13:04:56.000Z",
        "2022-05-29T11:15:56.000Z",
        "2022-05-30T01:15:56.000Z",
        "2022-05-31T11:15:56.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series = [{ name: "series1", data: [101, 120, 10, 208, 154, 204] }];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart
              type="area"
              width="100%"
              height="160"
              options={options}
              series={series}
            />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              type="area"
              width="100%"
              height="160"
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
