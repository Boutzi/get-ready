"use client";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Main() {
  return (
    <div className="w-full px-64">
      <h1 className="font-thin font-mono text-3xl text-primary mb-4">{"Tes questions pour l'entreprise"}</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{"Quelle est la date d'embauche ?"}</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{"Quel sera le profil de mon référent dans l'entreprise ?"}</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{"Au niveau du salaire ?"}</AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{"Le lieu (11 Av. du Val de Fontenay, 94120 Fontenay-sous-Bois) ?"}</AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            {"Quels sont les avantages (Tickets restaurants, 13e mois, primes, etc) ?"}
          </AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>{"C'est un poste remote, hybride ou présentiel ?"}</AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>{"Quel service cloud utilisez-vous ?"}</AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>{"Quel est le montant du SMC chez vous ?"}</AccordionTrigger>
          <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
