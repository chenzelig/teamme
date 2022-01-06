import './ApplyButton.css';

interface Props {
  url: string;
}

const ApplyButton = (props: Props) => {
  const onClick = () => {
    window.open(props.url, '_blank');
  }

  return (
    <button className="apply-button center-apply-button" onClick={onClick}>
        <span className="apply-button-title">APPLY</span>
    </button>
  )
}

export default ApplyButton