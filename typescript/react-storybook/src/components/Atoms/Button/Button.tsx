import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import './Button.scss';

type ButtonProps = Pick<ChakraButtonProps, 'color' | 'colorScheme' | 'width' | 'height' | 'isDisabled'> & {
  title: string;
  fontSize?: string;
  fontWeight?: number;
  onClick?: () => void;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      color={props.color}
      colorScheme={props.colorScheme}
      w={props.width}
      h={props.height}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      isDisabled={props.isDisabled ?? false}
      onClick={props.onClick}
      className={props.className ?? 'button'}
    >
      {props.title}
    </ChakraButton>
  );
};
