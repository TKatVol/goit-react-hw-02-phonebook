import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
    margin: 0;
    padding: 10px;
    background-color: #f5edf3;
`;

const StyledItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledContact = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000033;
`;

const StyledButton = styled.button`
    padding: 8px;
    font-weight: 600;
    background-color: #2d92e0;
    border: none;
    cursor: pointer;
`;

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <>
            <StyledList>
                {contacts.map(({id, name, number}) => {
                    return (
                        <StyledItem key={id}>
                            <StyledContact>{name}: {number}</StyledContact>
                            <StyledButton type="button" onClick={()=>onDeleteContact(id)}>Delete</StyledButton>
                        </StyledItem>
                )})}
            </StyledList>
        </>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func,
};