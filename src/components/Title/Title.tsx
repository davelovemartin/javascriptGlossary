import Style from "./Title.module.css";

type TitleProps = {
    title: string;
}

export function Title(props:TitleProps) {
    return (
        <h1 className={Style.title}>{props.title}</h1>
    )
}