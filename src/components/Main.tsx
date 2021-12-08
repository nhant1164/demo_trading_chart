import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const Main = () => {
    const { colorMode } = useColorMode();

    return (
        <Box w="1000px" h="500px">
            <AdvancedChart
                widgetProps={{
                    theme: colorMode,
                    symbol: "BINANCE:BTCUSDT",
                    hide_side_toolbar: true,
                    toolbar_bg: "transparent",
                }}
            />
        </Box>
    );
};
export default Main;
