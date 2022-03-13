import { useState } from "react"
const Note = props => {
    const [randomQuote, setRandomQuote] = useState(Math.floor(Math.random()*props.quotes.length))
    const handleClick = () => setRandomQuote(Math.floor(Math.random()*props.quotes.length))
    return (
    <div id="quote-box">
        <h1 id="text">{props.quotes[randomQuote].quote}</h1>
        <h4 id="author">{props.quotes[randomQuote].author}</h4>
        <button id="new-quote" onClick={handleClick}>Change</button>
        <a id="tweet-quote" href="http://twitter.com/intent/tweet"> Tweet </a>
    </div>
    )
}
export default Note 