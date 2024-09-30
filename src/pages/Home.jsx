
import webdwarf from '../assets/img/angry-web-dwarf.png'
import github from '../assets/img/github/github-mark-white.svg'

export const Home = () => {
    return (
        <>
            <h1>React + Vite Boilerplate</h1>
            <h2><img src={github} alt="Github" style={{width: '18px'}} /> <a href="https://github.com/peter-olesen" target="_blank">Peter Olesen </a></h2>
            
            <img src={webdwarf} alt="" />
        </>
    )
}