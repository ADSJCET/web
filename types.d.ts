type FC<T={}> = React.FunctionComponent<T & {
    className?:string
    children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement> & import("framer-motion").HTMLMotionProps<"div">>

type CursorFrameProps = {onMouseEnter,onMouseLeave}

type HTMLTextTags = `h${1 | 2 | 3 | 4 | 5 | 6}` | "p"