import { BaseBtn, GoogleSignInButton, InvertedButton } from "./button.styles.js";

export const button_types = {
    base: 'button',
    google: "--google-sign-in",
    inverted: "--inverted",
}

const getButton = (buttonType = button_types.base) =>
    ({
        [button_types.base]: BaseBtn,
        [button_types.google]: GoogleSignInButton,
        [button_types.inverted]: InvertedButton,

    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {

    const CustomButton = getButton(buttonType)

    return (
        <CustomButton {...otherProps}>
            { children }
        </CustomButton>
    )
}
export default Button;