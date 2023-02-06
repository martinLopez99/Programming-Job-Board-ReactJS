import { Box, Heading, Link, Flex } from "@chakra-ui/react";

function Header() {
    return (
        <Box as="header" p={5} bg="gray.700" color="white">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h1" size="lg">Programming Job Board</Heading>
                <nav>
                    <Flex as="ul">
                        <Flex as="li" mr={4}>
                            <Link href="/">Home</Link>
                        </Flex>
                        <Flex as="li" mr={4}>
                            <Link href="/postJob">Post a Job</Link>
                        </Flex>
                        <Flex as="li">
                            <Link href="/about">About</Link>
                        </Flex>
                    </Flex>
                </nav>
            </Flex>
        </Box>
    );
}

export default Header;
