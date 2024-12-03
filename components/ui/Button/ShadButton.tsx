import { Button } from "@/components/ui/button"
import "./button.scss"
import { ShadButtonPropType } from "./button.types"


const ShadButton = ({ buttonText, customStyles, buttonType }:ShadButtonPropType) => {
    return (
        <>
            <Button className={`button__wrapper-${buttonType} ${customStyles}`}>
                {buttonText}
            </Button>
        </>
    )
}

export default ShadButton
