import styles from "./styles.module.css";

export default function UserDetail({name , value}){
    return (
        <div className={styles.detailWrapper}>
             <div className={styles.name}>
                <i>{name}</i>
                </div>
             <div className = {styles.value}>
                {value}
            </div>
        </div>
    );
}