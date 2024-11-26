'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ClipboardCopy, ExternalLink } from 'lucide-react'

export default function Hero() {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) =>{ 
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          setshorturl("")
          seturl("")
          console.log(result)
          alert(result.message)
      })
        .catch((error) => console.error(error));
  }


  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
      .then(() => {
        alert('Copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to NextLink
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Shorten your URLs quickly and easily with NextLink. Enter your long URL and custom short URL below.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Input
              type="url"
              placeholder="Enter your long URL"
              value={url}
              onChange={e => { seturl(e.target.value) }} 
            />
            <Input
              type="text"
              placeholder="Enter your custom short URL"
              value={shorturl}
              onChange={e => { setshorturl(e.target.value) }} 
            />
            <Button className="w-full" onClick={generate}>
              Generate Short URL
            </Button>
          </div>
          {generated && (
            <div className="w-full max-w-sm p-4 border rounded-lg bg-background">
              <p className="font-medium text-primary mb-2">Your generated URL:</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="relative flex-grow">
                  <Input value={generated} readOnly className="pr-10" />
                  <Button 
                    size="icon" 
                    onClick={copyToClipboard} 
                    title="Copy to clipboard"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent text-black
                     hover:bg-transparent"
                  >
                    <ClipboardCopy className  ="h-4 w-4" onClick={copyToClipboard} />
                  </Button>
                </div>
                <Button size="icon" onClick={() => window.open(generated, '_blank')} title="Open in new tab">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

