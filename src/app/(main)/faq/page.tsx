import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the shipping options?",
    answer: "We offer several shipping options: Standard (5-7 business days), Expedited (2-3 business days), and Next-Day shipping. All orders over $50 qualify for free standard shipping."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all items in their original condition. To initiate a return, please visit your order history page or contact our support team."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number on the carrier's website to track your package."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States. We are working on expanding our shipping capabilities to more countries in the near future."
  },
  {
    question: "How do I use a discount code?",
    answer: "You can apply your discount code during the checkout process. There will be a field to enter your code on the payment page."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Have questions? We have answers.
        </p>
      </header>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
