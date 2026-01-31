import { useEffect, useState } from "react"
import MacWindow from "./MacWindow"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Notes = () => {

    const [markdown, setMarkdown] = useState<string | null>(null)

    useEffect(()=>{
        fetch("/note.txt")
        .then((res)=> res.text())
        .then((text)=> setMarkdown(text))
    },[])
  return (
    <MacWindow>
        <div className="h-full overflow-auto">
            {markdown ? (
                <SyntaxHighlighter 
                    language="typescript" 
                    style={atomOneDark}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        backgroundColor: 'transparent',
                        fontSize: '0.75rem',
                        lineHeight: '1.5'
                    }}
                    wrapLongLines={true}
                >
                    {markdown}
                </SyntaxHighlighter>
            ) : (
                <p className="text-gray-400 p-4">Loading...</p>
            )}
        </div>
    </MacWindow>
  )
}

export default Notes