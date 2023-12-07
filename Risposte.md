# Tecnologie-01.2.1
07/12/2023
Risposte alle domande dell'esercizio:
1) CORS servono per impedire alle pagine Web di effettuare richieste a un dominio diverso da quello che ha servito la pagina Web originale. Questa misura di sicurezza aiuta a prevenire vari tipi di attacchi, come la cross-site request forgery.
2) Questo codice manda una richiesta HTTP GET a una API endpoint sul server indicato nel link. Il methodo subscribe gestisce i dati provenienti dal server.
La gunzione callback nel subscribe viene eseguita quando il server risponde, i dati vengono rappresentati dalla variabile data. Il codice assume che il formato dei dati e JSON, il valore di results viene estratto e assegnato ala proprieta this.results. Il methodo subscribe permette al programma di funzionare aspettando la risposta dal server.
