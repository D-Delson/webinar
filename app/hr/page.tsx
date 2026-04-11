import HRAbout from "./components/HRAbout";
import HRWhy from "./components/HRWhy";
import HRPromise from "./components/HRPromise";
import HRNextPlan from "./components/HRNextPlan";
import HROutcome from "./components/HROutcom";
import HROffer from "./components/HROffer";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700", "800"],
});

const HR = () => {
    return (
        <>
            <div className={`${inter.variable}`}>
                <HRAbout />
                <HRWhy />
                <HRPromise />
                <HRNextPlan />
                <HROutcome />
                <HROffer/>
            </div>

        </>
    )
}

export default HR;