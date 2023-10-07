type FC<T={}> = React.FunctionComponent<T & {
    className?:string
    children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement> & import("framer-motion").HTMLMotionProps<"div">>