import React from "react";
import { ListItem, UnorderedList, Box, Text, Heading } from "@chakra-ui/react";



const About = () => {
    return (
        <main>
            <Box p={5} backgroundColor="gray.100">
                <Heading as="h1" fontSize="2xl" textAlign="center" color="teal.500">
                    Some information about this project
                </Heading>
                <Text fontSize="lg" mt={5} lineHeight="tall" textAlign="center" fontFamily="'Open Sans', sans-serif">
                    Welcome to our Programming Job Board, where you can find the latest job opportunities for
                    programmers and developers. Our job board is designed to make it easy for you to find the right job for
                    your skills and experience. We offer a wide range of job listings from entry-level to senior positions, and
                    from full-time to freelance. With our job board, you can find the perfect job that matches your requirements
                    and career aspirations.
                </Text>
                <Heading as="h1" mt={7} fontSize="2xl" textAlign="center" color="teal.800">
                    The team behind the job board
                </Heading>
                <Text fontSize="lg" mt={5} lineHeight="tall" textAlign="center" fontFamily="'Open Sans', sans-serif">
                    Our job board is created and maintained by a team of dedicated professionals who are passionate about helping
                    programmers and developers find the right job. Meet the team:
                </Text>
                <UnorderedList>
                    <ListItem >Martin Lopez R., Founder and CEO</ListItem>
                    <Text fontSize="lg" mt={5} lineHeight="tall" textAlign="center" fontFamily="'Open Sans', sans-serif">
                        Martin Lopez R. is a seasoned software developer with over 15 years of experience in the industry. He
                        started this
                        job board to help bridge the gap between job seekers and employers.</Text>
                    <ListItem >Emma Green, CTO</ListItem>
                    <Text fontSize="lg" mt={5} lineHeight="tall" textAlign="center" fontFamily="'Open Sans', sans-serif">
                        Emma is a highly experienced software architect with a background in both front-end and back-end
                        development. She leads the technical team and ensures the job board runs smoothly.</Text>
                    <ListItem >William Martinez, Community Manager</ListItem>
                    <Text fontSize="lg" mt={5} lineHeight="tall" textAlign="center" fontFamily="'Open Sans', sans-serif">
                        William is responsible for managing the community and ensuring that users have a positive
                        experience on
                        the job board. He also manages the social media accounts and other community-related activities.</Text>
                </UnorderedList>
            </Box>
        </main>
    );
};

export default About;