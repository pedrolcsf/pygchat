'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react';
import { ScrollArea } from "./scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat'
    })

    return (
        <Card className="w-[440px] bg-slate-800 text-slate-50 border-slate-700 grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>PYGChat</CardTitle>
          <CardDescription className="text-slate-400">Seu assistente virtual sempre pronto para ajudar.</CardDescription>
        </CardHeader>
        <CardContent className="">
            <ScrollArea className="h-[640px] w-full pr-4">
            {messages.map(message => {
                return (
                    <div key={message.id} className="flex gap-3 text-slate-300 text-sm mb-4">
                        {message.role === 'user' ? (
                        <Avatar>
                            <AvatarFallback>PF</AvatarFallback>
                            <AvatarImage src="https://github.com/pedrolcsf.png" />
                        </Avatar>
                        ): (
                        <Avatar>
                            <AvatarFallback>PW</AvatarFallback>
                            <AvatarImage src="https://github.com/pygware.png" />
                          </Avatar>
                        )}
    
        
                    <p className="leading-relaxed">
                      <span className="block font-bold text-slate-50">{message.role == 'user' ? 'Pedro Ferreira' : 'PygChat'}</span>
                      {message.content}
                    </p>
                  </div>
                )
            })}
            </ScrollArea>
        </CardContent>
        <CardFooter>
        <form  className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <Input value={input}  onChange={handleInputChange} placeholder="Como posso te ajudar?" />
          <Button className="bg-slate-500 text-slate-100" type="submit" placeholder="Como posso te ajudar?">
            Enviar
          </Button>
        </form>
        </CardFooter>
      </Card>
    )
}