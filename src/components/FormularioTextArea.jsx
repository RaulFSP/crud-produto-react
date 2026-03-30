function FormularioTextArea({ label, ...rest }) {
    return (
        <div className="mb-3">
            <label

                className="form-label">{label}</label>
            <textarea
                className="form-control"
                {...rest}
            />

        </div>)
}
export default FormularioTextArea