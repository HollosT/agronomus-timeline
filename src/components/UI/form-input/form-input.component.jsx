import './form-input.styles.scss'

const FormInput = ({ label, notvalid, ...otherProps }) => {

  return (
      <div className="group">
      { label &&   
        <label
          className="form-input-label"
        >
          {label}
        </label>}
        <input className={`${
            notvalid === "true" ? "error" : ""
          } form-input`} {...otherProps} />
    </div>
  );
};

export default FormInput;
