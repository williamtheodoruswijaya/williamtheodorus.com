import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

export default function GithubContribution() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
                className="text-green-secondary"
            >
                <GitHubCalendar
                    colorScheme="dark"
                    username="williamtheodoruswijaya"
                    theme={{
                        dark: ["#2a4868", "#5b98dc", "#3bb4ff", "#3bfff8", "#66EAFFFF"],
                    }}
                    blockSize={9}
                    fontSize={10}
                />
            </motion.div>
        </>
    )
}