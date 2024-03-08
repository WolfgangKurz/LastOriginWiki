import { FunctionalComponent } from "preact";
import style from "./style.module.scss";

interface BoxProps {
    class?: string;
    className?: string;
    title?: string;
}

export const Box: FunctionalComponent<BoxProps> = (props) => {
    return <div class={ [style.Box, props.class, props.className].filter(r => r).join(" ") }>
        { props.title && <div class={ style.Title }>
            { props.title }
        </div> }

        { props.children }
    </div>;
};
