import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Code = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex>
      <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
        <Text fontSize="6xl" fontWeight="semibold">
          Netlyfi
        </Text>
      </Box>
      <Text fontSize="3xl" p="20">
        Netlify lets you link a GitHub, GitLab, Bitbucket, or Azure
        DevOpsvrepository to a site for continuous deployment. (Azure DevOps is
        currently in the beta stage.) Each time you push to your Git
        provider,Netlify runs a build with your tool of choice and deploys the
        result to our powerful CDN. Netlify operates through your GitHub
        repository and runs a build process to pre-render all your pages in
        static HTML. Netlify creates its own repository that pushes to Github
        and its own microservices. It then executes and distributes content
        across a wide CDN to deliver pre-built static websites to visitors.
      </Text>
    </Flex>
  );
};

export default Code;
