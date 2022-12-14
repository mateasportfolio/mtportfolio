import { Box, Flex, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";

const Code = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex maxW="1200px">
      <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            Netlify
          </Text>
        </VStack>
        <Text fontSize="xl">
          Netlify lets you link a GitHub, GitLab, Bitbucket, or Azure
          DevOpsvrepository to a site for continuous deployment. (Azure DevOps
          is currently in the beta stage.) Each time you push to your Git
          provider,Netlify runs a build with your tool of choice and deploys the
          result to our powerful CDN. Netlify operates through your GitHub
          repository and runs a build process to pre-render all your pages in
          static HTML. Netlify creates its own repository that pushes to Github
          and its own microservices. It then executes and distributes content
          across a wide CDN to deliver pre-built static websites to visitors.
        </Text>
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            Github
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="xl">
            GitHub is an online software development platform used for storing,
            tracking, and collaborating on software projects. It enables
            developers to upload their own code files and to collaborate with
            fellow developers on open-source projects. GitHub also serves as a
            social networking site in which developers can openly network,
            collaborate, and pitch their work. GitHub is a code hosting platform
            for version control and collaboration. It lets you and others work
            together on projects from anywhere.
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            Portfolio
          </Text>
          <Text fontSize="xl">
            The Connection : to run my Portfolio ,it needs to have a Host (
            Github) and Netlify runs a build Process to pre-render the pages in
            static Html.
          </Text>
        </VStack>

        <Box border-radius="80%" w="400px" h="400px" backgroung="pink" />
      </Box>
    </Flex>
  );
};

export default Code;
