import { useTranslation } from 'react-i18next'
import { languages } from '../Config'

const localizeString = (string) => {
    const { t } = useTranslation()
    return t(string)
}

const languageSwitcher = () => {
    const { i18n } = useTranslation()

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === languages.EN ? languages.AR : languages.EN);
    }
    return switchLanguage
}


export {
    localizeString,
    languageSwitcher
}