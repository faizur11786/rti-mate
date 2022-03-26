import { Personal, RTIQuery } from "@/components/Form"
import { useState } from "react"
import css from "./index.module.scss"


const Apply = () => {

    const [isOpen, setIsOpen] = useState( 1 )

    return (
        <div className="container">
            <div className={css.Page_form}>
                <div className={css.container}>
                    <div className={css.row}>
                        <div className={css.col}>
                            {
                                isOpen === 1 && <Personal setIsOpen={setIsOpen} />
                            }
                            {
                                isOpen === 2 && <RTIQuery setIsOpen={setIsOpen} />
                            }
                        </div>
                        <div className={css.col}>
                            <div className={css.Image}>
                                <img src="/apply-form.png" alt="apply-form" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apply