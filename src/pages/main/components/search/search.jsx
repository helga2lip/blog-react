import styled from "styled-components";
import { Icon, Input } from "../../../../components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input value={searchPhrase} placeholder="Поиск по заголовкам..." onChange={onChange} />
      <Icon inactive={true} id="fa-search" />
    </div>
  )
}

export const Search = styled(SearchContainer)`
  margin: 40px auto;
  display: flex;
  position: relative;
  width: 340px;
  height: 40px;

  & > input {
    padding: 10px 40px 10px 10px;
  }

  & > div {
    position: absolute;
    top: 2px;
    right: 5px;
  }
`;