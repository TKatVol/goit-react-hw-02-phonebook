import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
    <div className={s.filter}>
        <p className={s.title}>Find contacts by name</p>
        <input type="text"
          name='name'
          value={value}
          autoComplete='off'
          onChange={onChange}
          className={s.input}></input>
    </div>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;