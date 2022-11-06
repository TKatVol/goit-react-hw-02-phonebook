import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 600;
`;

const StyledInput = styled.input`
    margin-bottom: 20px;
`;

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
                <StyledInput type="text" name="filter" value={value} onChange={onChange} />
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};