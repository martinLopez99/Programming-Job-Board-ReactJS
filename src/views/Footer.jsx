import { Box, Text } from "@chakra-ui/react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <Box as="footer" className={styles.footer}>
            <Text>Copyright &copy; {new Date().getFullYear()} All rights reserved</Text>
        </Box>
    );
}

export default Footer;
