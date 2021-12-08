import dynamic from "next/dynamic";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

const Main = dynamic(() => import("../components/Main"), { ssr: false });
const Index = () => (
    <Container height="100vh">
        <Hero />
        <Main></Main>

        <DarkModeSwitch />
        <Footer></Footer>
    </Container>
);

export default Index;
