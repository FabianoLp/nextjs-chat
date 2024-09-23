import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
        Bem Vindo ao ChatBot com NextJs
        </h1>
        <p className="leading-normal text-muted-foreground">
        Este é um modelo de aplicativo de chatbot de IA de código aberto criado com 
        Próximo.js{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>

          .
        </p>
        <p className="leading-normal text-muted-foreground">
          Ele usa {' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            Componetes do Servidor React
          </ExternalLink>{' '}
          para combinar texto com UI generativa como saída do LLM. O estado da IU é sincronizado por meio do SDK para que o modelo esteja ciente de suas interações conforme elas acontecem.
        </p>
      </div>
    </div>
  )
}
