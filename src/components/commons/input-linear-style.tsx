type PropsInputForm = {
  label: string;
  id: string;
  type?: string;
  maxWidth?: number;
};

function InputLinearStyle(props: PropsInputForm) {
  return (
    <div className="input__linear-style" style={{ maxWidth: props.maxWidth }}>
      <input type={props.type ?? 'text'} id={props.id} required className="input__linear-style__input" />
      <label className="input__linear-style__label">{props.label}</label>
      <div className="input__linear-style__underline"></div>
    </div>
  );
}

export { InputLinearStyle };
