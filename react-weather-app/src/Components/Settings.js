import { useContext, useState } from "react"
import ThemeContext from "../context/theme.context"
import "../styles/components/Settings.scss"

function Settings() {
    const [openSettings, setOpenSettings] = useState(false);
    const {dark, setDark, saveThemeToLocalStorage} = useContext(ThemeContext)

    const toggleTheme = () => {
        setDark((prevDark) => !prevDark)
        saveThemeToLocalStorage(!dark);
    }

    return (
        <div className="Settings">
             <div className="theme-toggler">
                <div className="theme-buttons" onClick={toggleTheme}>
                    <div className={`light-theme-btn ${dark ? "": "active"}`}>
                        <i className="bi bi-sun"></i>
                    </div>
                    <div className={`dark-theme-btn ${dark ? "active": ""}`}>
                        <i className="bi bi-moon"></i>
                    </div>
                </div>
             </div>
             <div className="settings-btn" onClick={setOpenSettings}>
                <i className="bi bi-gear"></i>
             </div>
             <div className={`settings-menu ${openSettings ? "open": ""}`}>
                <div className="measurement-systems">
                    <h4>Measurement Systems:</h4>
                </div>
             </div>
        </div>
    )
}

export default Settings