import { useState } from "react"
import quotes from "./assets/quotes"


function App() {
const [author, setAuthor] = useState(null)
const [text, setText] = useState(null)
const [color, setColor] = useState("")

const refNumber = () => {
  return Math.floor(Math.random() * quotes.length)
}

const refColor = () => {
  let {r, g, b} = color
  r = Math.floor(Math.random() * 128)
  g = Math.floor(Math.random() * 128)
  b = Math.floor(Math.random() * 128)
  return (`rgb(${r}, ${g}, ${b})`)
  
}

const handleNewQuote = () => {
    setAuthor(quotes[refNumber()].author)
    setText(quotes[refNumber()].quote)
    setColor(refColor())
}

if (text) document.body.style.backgroundColor = color

  return (
    
      <div id="quote-box">

          <div id="quote-text">
              <span id="text" style={text ? {color: color} : {color: "black"}} >{text ? text : handleNewQuote()}</span>
          </div>

          <div id="quote-author">
              <span id="author" style={text ? {color: color} : {color: "black"}} >- {author}</span>
          </div>

          <div id="buttons">
              <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i id="x-logo"></i></a>
              <a id="tumblr-quote" href="tumblr.com" style={text ? {backgroundColor: color} : {backgroundColor: "black"}} target="_blank"><i id="tumblr-logo"></i></a>
              <button type="button" id="new-quote" onClick={handleNewQuote} style={text ? {backgroundColor: color} : {backgroundColor: "black"}}>new quote</button>
          </div>

      </div>
    
  )
  
}

export default App
