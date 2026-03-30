function FormularioInput({ label, ...rest }) {
    return (
        <div className="mb-3">
            <label

                className="form-label">{label}</label>
            <input
                className="form-control"
                {...rest}
            />

        </div>)
}
export default FormularioInput