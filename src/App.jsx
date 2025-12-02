import './App.css'
import FAQBlock from './components/FAQ/FAQBlock'
import FeedbackBlock from './components/Feedback/FeedbackBlock'
import FooterBlock from './components/Footer/FooterBlock'
import HeaderBlock from './components/Header/HeaderBlock'
import MainBlock from './components/Main/MainBlock'

function App() {

    return (
        <>
            <HeaderBlock />
            <MainBlock />
            <FAQBlock />
            <FeedbackBlock />
            <FooterBlock/>
        </>
    )
}

export default App
