import './App.css'
import CreditCardInput from './Components/CreditCardInput';

const App: React.FC = () => {

    return (
        <div className="container">
            <h1>Platba</h1>
            <div className="header-wrapper">
                <h2>Zadejte číslo kreditní karty</h2>
            </div>
            <CreditCardInput/>
        </div>
    )
}

export default App
