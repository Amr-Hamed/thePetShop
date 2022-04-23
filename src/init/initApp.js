import initTheme from "./initTheme";

const initApp = async () => {
    await Promise.all({
        initTheme
    })
}

export default initApp