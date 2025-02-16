import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Option, Select } from "./styled";
import { Wrapper } from "./styled";

export const StatusDropdown = ({dropdownId}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSelectedValue = searchParams.get("status") || "";

  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    setSearchParams({ status: value });
  };

  useEffect(() => {
    if (initialSelectedValue) {
      setSelectedValue(initialSelectedValue);
    }
  }, [initialSelectedValue]);

  return (
    <Wrapper>
      <Select id={dropdownId} value={selectedValue} onChange={handleChange}>
        <Option value="">Select value</Option>
        <Option value="alive">Alive</Option>
        <Option value="dead">Dead</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
    </Wrapper>
  );
};
