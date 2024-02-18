/** @type { import('@storybook/react').Preview } */
import { ChakraProvider } from '@chakra-ui/react';

export const decorators = [
  (Story) => {
    return (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    );
  },
];


const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
