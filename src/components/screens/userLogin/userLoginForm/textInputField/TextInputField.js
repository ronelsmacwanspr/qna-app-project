import styles from './styles.module.css';

const TextInputField = ({_key , label , placeholder , type='input' , handleChange}) => {


    return (
        <div className={styles.wrapper}>
        <label className={styles.label}
        for={_key}> {label}
        </label>

        <input className={styles.input}
        id = {_key}
        type = {type} placeholder = {placeholder}
        onChange = {(event) => handleChange(_key , event)}
        />
        
        </div>
    )
}

export {TextInputField};