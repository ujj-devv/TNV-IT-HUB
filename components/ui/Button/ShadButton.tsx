import { Button } from "@/components/ui/button"
import "./button.scss"
import { ShadButtonPropType } from "./button.types"


const ShadButton = ({ buttonText }:ShadButtonPropType) => {
    return (
        <>
            <Button>
                {buttonText}
            </Button>
        </>
    )
}

export default ShadButton
