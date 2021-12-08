import { Box } from "@chakra-ui/react";
import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const Main = () => (
    <Box w="1000px" h="500px">
        <AdvancedChart
            widgetProps={{
                theme: "light",
                symbol: "BINANCE:BTCUSDT",
                hide_side_toolbar: true,
                toolbar_bg: "white",
            }}
        />
    </Box>
);

export default Main;
