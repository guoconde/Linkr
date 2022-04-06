import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const ToggleTextLocation = styled.p`
  color: ${(props) => props.error ? "#dc3545" : "#707070"};
`;

const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  LocationContainer,
  ToggleTextLocation,
  TooltipContainer
}