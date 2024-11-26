'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ClipboardCopy } from 'lucide-react'

export default function Hero() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')

  const generateShortUrl = () => {
    // This is a mock function. In a real application, you'd call your backend API here.
    const mockShortUrl = 'https://nxtlnk.com/' + Math.random().toString(36).substr(2, 6)
    setGeneratedUrl(mockShortUrl)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl)
      .then(() => {
        alert('Copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
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
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter your custom short URL"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
            />
            <Button className="w-full" onClick={generateShortUrl}>
              Generate Short URL
            </Button>
          </div>
          {generatedUrl && (
            <div className="w-full max-w-sm p-4 border rounded-lg bg-background">
              <p className="font-medium text-primary mb-2">Your generated URL:</p>
              <div className="flex items-center space-x-2">
                <Input value={generatedUrl} readOnly />
                <Button size="icon" onClick={copyToClipboard}>
                  <ClipboardCopy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

