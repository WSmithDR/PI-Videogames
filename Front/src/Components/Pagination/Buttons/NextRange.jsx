

const NextRange = ({start, buttonsToShow, totalPages}) => {
    const nextRange = () => {
        if (start + buttonsToShow <= totalPages) {
          setStart(start + buttonsToShow);
        } else {
          setStart(totalPages - buttonsToShow + 1);
        }
      };
    return(
        <button
            onClick={nextRange}
            disabled={start + buttonsToShow > totalPages}>Next Range &#187;
        </button>
    )
}

export default NextRange