export function Textos(props) {
    const { Texto, className = "" } = props;
    return (
      <>
        <p className={`${className}`}>
          {Texto}
          </p>
      </>
    );
  }
  