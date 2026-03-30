function ButtonOutline({ type, children, outlineType }) {

    return (
        <button
            type={type}
            className={`btn btn-outline-${outlineType}`}>
            {children}
        </button>)

}
export default ButtonOutline