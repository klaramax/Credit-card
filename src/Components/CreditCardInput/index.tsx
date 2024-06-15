import React, {ChangeEvent, useEffect, useRef} from 'react';
import './style.css';


const CreditCardInputField: React.FC = () => {
    // Vytvoření pole pro uchování referencí na všechny čtyři inputy
    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const inputRef3 = useRef<HTMLInputElement | null>(null);
    const inputRef4 = useRef<HTMLInputElement | null>(null);

    // Stav pro uchování čtyř částí čísla kreditní karty
    const [cardNumbers, setCardNumbers] = React.useState<string[]>(['', '', '', '']);

    // Funkce, která se volá pokaždé, když se změní hodnota v některém z inputů
    const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newNumbers = [...cardNumbers]; // Kopie aktuálního stavu
        const newValue = event.target.value; // Nová hodnota z inputu

        if (newValue.match(/^[0-9]{0,4}$/)) { // Povolí pouze čísla, maximálně 4
            newNumbers[index] = newValue; // Nastaví novou hodnotu pro příslušný index
            setCardNumbers(newNumbers); // Aktualizuje stav

            // Posune focus na další input, pokud je pole vyplněno čtyřmi čísly
            if (newValue.length === 4) {
                switch (index) {
                    case 0:
                        inputRef2.current?.focus();
                        break;
                    case 1:
                        inputRef3.current?.focus();
                        break;
                    case 2:
                        inputRef4.current?.focus();
                        break;
                }
            }
        }
    };

    // Po načtení stránky nastaví focus na první input
    useEffect(() => {
        inputRef1.current?.focus();
    }, []);

    return (
        <div>
            {cardNumbers.map((number, index) => (
                <input className="cc-input"
                       key={index}
                       ref={index === 0 ? inputRef1 : index === 1 ? inputRef2 : index === 2 ? inputRef3 : inputRef4}
                       value={number}
                       onChange={handleInputChange(index)}
                       placeholder={'0000'}
                />
            ))}
        </div>
    );
};

export default CreditCardInputField;
