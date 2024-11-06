### **Titolo: Registrazione**

- **Summary**: Consente a un utente anonimo di registrarsi sulla piattaforma creando un nuovo account.

- **Description**:

  - **Step 1**. L’utente inserisce nome utente, password ed email. \[exception 1]

  - **Step 2**. Il sistema verifica la disponibilità dell'email.

  - **Step 3**. L’utente riceve una conferma della registrazione via email.

- **Exceptions**:

  - **\[exception 1]**: Se l’email è già in uso, viene mostrato un messaggio di errore. 

- **Extensions**:

  - **\[extension 1]**: L’utente può completare la registrazione tramite conferma email per l’attivazione dell’account.

***


### **Titolo: Login**

- **Summary**: Permette a un utente registrato di accedere alla piattaforma.

- **Description**:

  - **Step 1**. L'utente inserisce nome utente e password. \[exception 1]

  - **Step 2**. Il sistema verifica le credenziali.

  - **Step 3**. In caso di successo, l’utente viene autenticato.

- **Exceptions**:

  - **\[exception 1]**: Se le credenziali sono errate, viene visualizzato un messaggio di errore.

- **Extensions**:

  - **\[extension 1]**: L’utente può richiedere il recupero password.

***


### **Titolo: Creazione evento**

- **Summary**: Permette all’organizzatore di creare un nuovo evento sulla piattaforma.

- **Description**:

  - **Step 1**. L’organizzatore inserisce i dettagli dell’evento: nome, luogo, data e categoria. \[exception 1]

  - **Step 2**. Il sistema salva l’evento e lo rende visibile agli utenti.

- **Exceptions**:

  - **\[exception 1]**: Se mancano campi obbligatori, il sistema notifica l’errore.

- **Extensions**:

  - **\[extension 1]**: L’organizzatore può aggiungere immagini e descrizioni dettagliate.

***


### **Titolo: Eliminazione evento**

- **Summary**: Permette all’organizzatore di cancellare un evento creato in precedenza.

- **Description**:

  - **Step 1**. L’organizzatore seleziona l’evento da eliminare.

  - **Step 2**. Il sistema cancella l'evento e notifica gli utenti iscritti..

- **Extensions**:

  - **\[extension 1]**: Notifica agli utenti iscritti della cancellazione.

***


### **Titolo: Iscrizione evento**

- **Summary**: Permette a un utente di iscriversi a un evento disponibile.

- **Description**:

  - **Step 1**. L'utente seleziona l’evento e conferma la partecipazione.

  - **Step 2**. Il sistema salva l’iscrizione e invia una notifica.

- **Extensions**:

  - **\[extension 1]**: L’utente può aggiungere l’evento al proprio calendario (Non so se fare un calendario dove si puo’ vedere tutti gli eventi).

***


### **Titolo: Disiscrizione evento**

- **Summary**: Permette a un utente di annullare la propria iscrizione a un evento.

- **Description**:

  - **Step 1**. L'utente seleziona l’evento e richiede la disiscrizione. \[exception 1]

  - **Step 2**. Il sistema conferma la disiscrizione e notifica l’organizzatore (Non so se tenere questa parte).

- **Exceptions**:

  - **\[exception 1]**: Se il termine per disiscriversi è superato, l’utente non può procedere. (Non so se c’e’ una deadline per disiscrizione)

- **Extensions**:

  - **\[extension 1]**: Notifica di disiscrizione all’organizzatore (Non so se serve notificare se uno esce, penso di no ma nel dubbio lo tengo).

***


### **Titolo: Sponsorizzazione evento**

- **Summary**: Consente all’organizzatore di aumentare la visibilità di un evento.

- **Description**:

  - **Step 1**. L’organizzatore seleziona l’opzione per sponsorizzare l’evento. \[exception 1]

  - **Step 2**. Il sistema aggiorna la visibilità dell’evento.

- **Exceptions**:

  - **\[exception 1]**: Se il budget è insufficiente, la sponsorizzazione fallisce. (Forse sono i punti)

***


### **Titolo: Ricerca eventi**

- **Summary**: Permette agli utenti di cercare eventi in base a criteri specifici.

- **Description**:

  - **Step 1**. L’utente inserisce i criteri di ricerca (categoria, luogo, data).

  - **Step 2**. Il sistema mostra gli eventi corrispondenti.

- **Exceptions**:

  - **\[exception 1]**: Se non ci sono eventi che soddisfano i criteri, viene visualizzato un messaggio.

- **Extensions**:

  - **\[extension 1]**: L’utente può aggiungere nei filtri la categoria

  - **\[extension 2]**: L’utente puo’ aggiungere nei filtri il luogo

  - **\[extension 3]**: L’utente puo’ aggiungere nei filtri la data

***


### **Titolo: Chat con partecipanti**

- **Summary**: Permette agli iscritti a un evento di comunicare tra loro.

- **Description**:

  - **Step 1**. L’utente apre la chat dell’evento.

  - **Step 2**. L’utente invia e riceve messaggi.

- **Extensions**:

**\[extension 1]**: Notifiche per messaggi non letti. (Non so se da fare)
