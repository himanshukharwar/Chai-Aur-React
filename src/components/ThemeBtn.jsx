import useTheme from "../contexts/theme";
import styles from "./ThemeBtn.module.css"



export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme(); 
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        darkModeStatus ? darkTheme() : lightTheme();
    }

    return (
        <label className={styles.switch}> 
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <span className={styles.slider}></span>
        </label>
    );
}

