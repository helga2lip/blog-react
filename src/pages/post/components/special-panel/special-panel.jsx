import styled from "styled-components";
import { Icon } from "../../../../components";

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon
          id="fa-calendar-o"
          margin="0 10px 0 0"
          onClick={() => { }} />
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        <Icon
          id="fa-trash-o"
          margin="0 10px 0 0"
          onClick={() => { }} /></div>
    </div>
  )
};

export const SpecialPanel = styled(SpecialPanelContainer)`
margin: ${({ margin }) => margin};
font-size: 18px;
display: flex;
justify-content: space-between;

& .buttons {
display: flex;
font-size: 21px;
}

& i {
position: relative;
top: -8px;
}

& .published-at {
display: flex;
font-size: 18px;
}
`;